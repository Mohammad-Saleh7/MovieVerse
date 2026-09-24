import TvShowFilters from "./components/TvShowFilters";
import TvShowGrid from "./components/TvShowGrid";
import Pagination from "../../components/navigation/Pagination";

import { getLocale, getTranslations } from "next-intl/server";

import { getPopularTvShows, getTopRatedTvShows } from "@/lib/tmdb";

const metadataByLocale = {
  en: {
    popular: "TV Shows",
    topRated: "Top Rated TV Shows",
  },
  fa: {
    popular: "سریال‌ها",
    topRated: "سریال‌های برتر",
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

export default async function TvShowsPage({ searchParams }) {
  const t = await getTranslations("tvShows");
  const locale = await getLocale();

  const params = await searchParams;
  const category = params?.category || "popular";
  const page = Number(params?.page) || 1;

  let data;

  switch (category) {
    case "top-rated":
      data = await getTopRatedTvShows(page, locale);
      break;

    default:
      data = await getPopularTvShows(page, locale);
  }

  const shows = data.results || [];

  return (
    <main className="py-10">
      <section>
        <h1 className="mb-6 text-3xl font-bold">{t("title")}</h1>

        <TvShowFilters />

        {shows.length === 0 ? (
          <p className="text-muted-foreground">{t("noShows")}</p>
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
