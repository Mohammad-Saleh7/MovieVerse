import MovieFilters from "./components/MovieFilters";
import MovieGrid from "./components/MovieGrid";
import Pagination from "../../components/Pagination";

import {
  getPopularMovies,
  getTopRatedMovies,
  getNowPlayingMovies,
  getUpcomingMovies,
} from "@/lib/tmdb";

export default async function MoviesPage({ searchParams }) {
  const params = await searchParams;
  const category = params?.category || "popular";
  const page = Number(params?.page) || 1;

  let data;

  switch (category) {
    case "top-rated":
      data = await getTopRatedMovies(page);
      break;

    case "now-playing":
      data = await getNowPlayingMovies(page);
      break;

    case "upcoming":
      data = await getUpcomingMovies(page);
      break;

    default:
      data = await getPopularMovies(page);
  }

  const movies = data.results || [];

  return (
    <main className="py-10">
      <section>
        <h1 className="mb-6 text-3xl font-bold">Movies</h1>

        <MovieFilters />

        {movies.length === 0 ? (
          <p className="text-muted-foreground">No movies found.</p>
        ) : (
          <MovieGrid movies={movies} />
        )}
        <Pagination
          currentPage={page}
          totalPages={data.total_pages}
          category={category}
          basePath="/movies"
        />
      </section>
    </main>
  );
}
