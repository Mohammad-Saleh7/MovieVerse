import TvShowGrid from "./components/TvShowGrid";
import TvShowFilters from "./components/TvShowFilters";

import { getPopularTvShows, getTopRatedTvShows } from "@/lib/tmdb";
import Pagination from "@/components/Pagination";

export default async function TvShowsPage({ searchParams }) {
  const params = await searchParams;
  const category = params?.category || "popular";
  const page = Number(params?.page) || 1;

  let data;

  switch (category) {
    case "top-rated":
      data = await getTopRatedTvShows(page);
      break;

    default:
      data = await getPopularTvShows(page);
  }

  const shows = data.results || [];

  return (
    <main className="py-10">
      <section>
        <h1 className="mb-6 text-3xl font-bold">TV Shows</h1>

        <TvShowFilters />

        {shows.length === 0 ? (
          <p className="text-muted-foreground">No TV shows found.</p>
        ) : (
          <TvShowGrid shows={shows} />
        )}
        <Pagination
          currentPage={page}
          totalPages={data.total_pages}
          category={category}
          basePath="/tv-shows"
        />
      </section>
    </main>
  );
}
