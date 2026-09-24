import Hero from "./components/Hero";
import MediaCard from "../components/media/MediaCard";

import {
  getFeaturedMovie,
  getPopularMovies,
  getTrendingMovies,
  getPopularTvShows,
} from "@/lib/tmdb";

import Link from "next/link";
import { getLocale, getTranslations } from "next-intl/server";

export default async function HomePage() {
  const locale = await getLocale();
  const t = await getTranslations("home");

  const [featuredMovie, trendingMovies, popularMovies, popularTvShows] =
    await Promise.all([
      getFeaturedMovie(locale),
      getTrendingMovies(locale),
      getPopularMovies(1, locale),
      getPopularTvShows(1, locale),
    ]);

  return (
    <main className="py-8">
      <Hero movie={featuredMovie} />

      {/* Trending Movies */}
      <section className="mt-12">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">{t("trendingMovies")}</h2>

          <Link
            href="/trending"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            {t("viewAll")} →
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {trendingMovies.results?.slice(0, 4).map((movie) => (
            <MediaCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              year={movie.release_date?.slice(0, 4)}
              rating={movie.vote_average}
              poster={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : undefined
              }
              overview={movie.overview}
            />
          ))}
        </div>
      </section>

      {/* Popular Movies */}
      <section className="mt-12">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">{t("popularMovies")}</h2>

          <Link
            href="/movies"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            {t("viewAll")} →
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {popularMovies.results?.slice(0, 4).map((movie) => (
            <MediaCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              year={movie.release_date?.slice(0, 4)}
              rating={movie.vote_average}
              poster={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : undefined
              }
              overview={movie.overview}
            />
          ))}
        </div>
      </section>

      {/* Popular TV Shows */}
      <section className="mt-12">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">{t("popularTvShows")}</h2>

          <Link
            href="/tv-shows"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            {t("viewAll")} →
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {popularTvShows.results?.slice(0, 4).map((show) => (
            <MediaCard
              key={show.id}
              id={show.id}
              title={show.name}
              year={show.first_air_date?.slice(0, 4)}
              rating={show.vote_average}
              poster={
                show.poster_path
                  ? `https://image.tmdb.org/t/p/w500${show.poster_path}`
                  : undefined
              }
              overview={show.overview}
              type="tv"
            />
          ))}
        </div>
      </section>
    </main>
  );
}
