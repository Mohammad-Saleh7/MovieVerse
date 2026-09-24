import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";

import {
  getTvShowDetails,
  getTvShowRecommendations,
  getTvShowVideos,
  getTvShowCredits,
} from "@/lib/tmdb";

import MediaCard from "@/components/media/MediaCard";
import TrailerModal from "@/components/media/TrailerModal";
import CastList from "@/components/media/CastList";
import TvShowMetadata from "../components/TvShowMetadata";
import FavoriteButton from "@/components/media/FavoriteButton";
import WatchlistButton from "@/components/media/WatchlistButton";
import HistoryTracker from "@/components/media/HistoryTracker";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p";
const FALLBACK_POSTER = "/images/poster-placeholder.png";

const metadataByLocale = {
  en: {
    fallbackDescription: "TV show details, cast, trailer and similar TV shows",
  },
  fa: {
    fallbackDescription: "اطلاعات سریال، بازیگران، تریلر و سریال‌های مشابه",
  },
};

export async function generateMetadata({ params }) {
  const locale = await getLocale();
  const { id } = await params;

  const show = await getTvShowDetails(id, locale);

  if (!show) {
    return {
      title: "TV Show",
    };
  }

  const metadata = metadataByLocale[locale] || metadataByLocale.en;

  const title = show.name || "TV Show";
  const description = show.overview || metadata.fallbackDescription;

  return {
    title: {
      absolute: title,
    },
    description,
    openGraph: {
      title,
      description,
      images: show.poster_path
        ? [`${IMAGE_BASE_URL}/w500${show.poster_path}`]
        : [],
      type: "video.tv_show",
    },
  };
}

export default async function TvShowDetailsPage({ params }) {
  const locale = await getLocale();
  const t = await getTranslations("tvShowDetails");

  const { id } = await params;

  const [show, recommendations, videos, credits] = await Promise.all([
    getTvShowDetails(id, locale),
    getTvShowRecommendations(id, locale),
    getTvShowVideos(id, locale),
    getTvShowCredits(id, locale),
  ]);

  const poster = show.poster_path
    ? `${IMAGE_BASE_URL}/w500${show.poster_path}`
    : FALLBACK_POSTER;

  const backdrop = show.backdrop_path
    ? `${IMAGE_BASE_URL}/original${show.backdrop_path}`
    : null;

  const trailer = videos.results?.find(
    (video) =>
      video.site === "YouTube" && video.type === "Trailer" && video.official,
  );

  const recommendedShows = recommendations.results?.slice(0, 4) || [];

  return (
    <main className="py-6 sm:py-10">
      <HistoryTracker movie={show} />

      {backdrop && (
        <section className="relative mb-6 overflow-hidden rounded-2xl bg-black sm:mb-8">
          <div className="relative min-h-[300px] w-full sm:min-h-[420px] lg:min-h-[500px]">
            <Image
              src={backdrop}
              alt=""
              aria-hidden="true"
              fill
              sizes="100vw"
              quality={40}
              className="scale-110 object-cover object-center opacity-50 blur-2xl"
              priority
            />

            <Image
              src={backdrop}
              alt={`${show.name} backdrop`}
              fill
              sizes="100vw"
              quality={80}
              className="object-contain object-center"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />

            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/70 via-black/30 to-transparent sm:h-28 sm:from-black/50" />

            <div className="absolute inset-0 flex items-end">
              <div className="w-full min-w-0 p-4 sm:p-8 lg:p-10">
                <h1 className="max-w-full break-words text-2xl font-bold leading-tight tracking-tight text-white sm:max-w-4xl sm:text-4xl lg:text-5xl xl:text-6xl">
                  {show.name}
                </h1>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="overflow-hidden rounded-2xl border bg-card">
        <div className="grid gap-6 p-4 sm:gap-8 sm:p-6 md:grid-cols-[280px_1fr] md:p-8">
          <div className="relative mx-auto aspect-[2/3] w-full max-w-[220px] overflow-hidden rounded-xl bg-muted sm:max-w-[280px]">
            <Image
              src={poster}
              alt={t("posterAlt", { title: show.name })}
              fill
              sizes="(max-width: 768px) 220px, 280px"
              className="object-cover"
              priority
            />
          </div>

          <div className="min-w-0 flex flex-col">
            <h1 className="break-words text-2xl font-bold leading-tight tracking-tight sm:text-4xl">
              {show.name}
            </h1>

            {show.tagline && (
              <p className="mt-2 break-words text-base italic leading-6 text-muted-foreground sm:text-lg">
                {show.tagline}
              </p>
            )}

            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground sm:mt-5 sm:gap-x-5">
              <span>{show.first_air_date?.slice(0, 4) || "—"}</span>

              <span>⭐ {show.vote_average?.toFixed(1) || "N/A"}</span>

              <span>
                {show.number_of_seasons
                  ? `${show.number_of_seasons} ${t("seasons")}`
                  : t("seasonsNA")}
              </span>

              <span>
                {show.number_of_episodes
                  ? `${show.number_of_episodes} ${t("episodes")}`
                  : t("episodesNA")}
              </span>
            </div>

            {show.genres?.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
                {show.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="max-w-full break-words rounded-full border px-3 py-1 text-xs sm:text-sm"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-5 sm:mt-6">
              <h2 className="mb-2 text-lg font-semibold sm:text-xl">
                {t("overview")}
              </h2>

              <p className="max-w-3xl break-words text-sm leading-7 text-muted-foreground sm:text-base">
                {show.overview || t("noOverview")}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
              <FavoriteButton movie={show} />
              <WatchlistButton movie={show} />
            </div>

            {trailer && (
              <div className="mt-5 sm:mt-6">
                <TrailerModal trailerKey={trailer.key} title={show.name} />
              </div>
            )}
          </div>
        </div>
      </section>

      <CastList cast={credits.cast} />

      <TvShowMetadata show={show} />

      {recommendedShows.length > 0 && (
        <section className="mt-10 sm:mt-12">
          <h2 className="mb-5 text-xl font-bold sm:mb-6 sm:text-2xl">
            {t("moreLikeThis")}
          </h2>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {recommendedShows.map((show) => (
              <MediaCard
                key={show.id}
                id={show.id}
                title={show.name}
                year={show.first_air_date?.slice(0, 4)}
                rating={show.vote_average}
                poster={
                  show.poster_path
                    ? `${IMAGE_BASE_URL}/w500${show.poster_path}`
                    : undefined
                }
                overview={show.overview}
                type="tv"
              />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
