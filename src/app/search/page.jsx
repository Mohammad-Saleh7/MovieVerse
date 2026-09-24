import MediaCard from "@/components/media/MediaCard";
import { searchMovies, searchTvShows } from "@/lib/tmdb";
import Pagination from "./components/Pagination";
import { getLocale, getTranslations } from "next-intl/server";

export default async function SearchPage({ searchParams }) {
  const t = await getTranslations("search");
  const locale = await getLocale();

  const params = await searchParams;
  const query = params?.q?.trim() || "";
  const page = Number(params?.page) || 1;

  if (!query) {
    return (
      <main className="py-10">
        <section>
          <h1 className="mb-6 text-3xl font-bold">{t("resultsTitle")}</h1>

          <p className="text-muted-foreground">{t("enterMovie")}</p>
        </section>
      </main>
    );
  }

  const [moviesData, tvData] = await Promise.all([
    searchMovies(query, page, locale),
    searchTvShows(query, page, locale),
  ]);

  const movies = (moviesData.results || []).map((movie) => ({
    ...movie,
    mediaType: "movie",
  }));

  const shows = (tvData.results || []).map((show) => ({
    ...show,
    mediaType: "tv",
  }));

  const results = [...movies, ...shows];

  return (
    <main className="py-10">
      <section>
        <h1 className="mb-6 text-3xl font-bold">{t("resultsTitle")}</h1>

        {results.length === 0 && (
          <div className="flex min-h-[40vh] flex-col items-center justify-center text-center">
            <h2 className="text-2xl font-bold">{t("noMoviesFound")}</h2>

            <p className="mt-2 max-w-md text-muted-foreground">
              {t("noMoviesMatching", { query })}
            </p>
          </div>
        )}

        {results.length > 0 && (
          <>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {results.map((item) => {
                const isTvShow = item.mediaType === "tv";

                return (
                  <MediaCard
                    key={`${item.mediaType}-${item.id}`}
                    id={item.id}
                    title={isTvShow ? item.name : item.title}
                    year={
                      isTvShow
                        ? item.first_air_date?.slice(0, 4)
                        : item.release_date?.slice(0, 4)
                    }
                    rating={item.vote_average}
                    poster={
                      item.poster_path
                        ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                        : undefined
                    }
                    overview={item.overview}
                    type={isTvShow ? "tv" : "movie"}
                  />
                );
              })}
            </div>

            <Pagination
              query={query}
              currentPage={page}
              totalPages={Math.max(
                moviesData.total_pages || 1,
                tvData.total_pages || 1,
              )}
            />
          </>
        )}
      </section>
    </main>
  );
}
