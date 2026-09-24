import MovieFilters from "./components/MovieFilters";
import MovieGrid from "./components/MovieGrid";
import Pagination from "../../components/navigation/Pagination";

import { getLocale, getTranslations } from "next-intl/server";

import {
  getPopularMovies,
  getTopRatedMovies,
  getNowPlayingMovies,
  getUpcomingMovies,
} from "@/lib/tmdb";

const metadataByLocale = {
  en: {
    popular: "Movies",
    topRated: "Top Rated Movies",
    nowPlaying: "Now Playing Movies",
    upcoming: "Upcoming Movies",
  },
  fa: {
    popular: "فیلم‌ها",
    topRated: "فیلم‌های برتر",
    nowPlaying: "فیلم‌های در حال اکران",
    upcoming: "فیلم‌های آینده",
  },
};

export async function generateMetadata({ searchParams }) {
  const locale = await getLocale();
  const params = await searchParams;

  const category = params?.category || "popular";

  const titles = metadataByLocale[locale] || metadataByLocale.en;
  const title = titles[category] || titles.popular;

  return {
    title: {
      absolute: title,
    },
  };
}

export default async function MoviesPage({ searchParams }) {
  const t = await getTranslations("movies");
  const locale = await getLocale();

  const params = await searchParams;
  const category = params?.category || "popular";
  const page = Number(params?.page) || 1;

  let data;

  switch (category) {
    case "top-rated":
      data = await getTopRatedMovies(page, locale);
      break;

    case "now-playing":
      data = await getNowPlayingMovies(page, locale);
      break;

    case "upcoming":
      data = await getUpcomingMovies(page, locale);
      break;

    default:
      data = await getPopularMovies(page, locale);
  }

  const movies = data.results || [];

  return (
    <main className="py-10">
      <section>
        <h1 className="mb-6 text-3xl font-bold">{t("title")}</h1>

        <MovieFilters />

        {movies.length === 0 ? (
          <p className="text-muted-foreground">{t("noMovies")}</p>
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
