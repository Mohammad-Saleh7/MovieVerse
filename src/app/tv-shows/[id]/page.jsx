import Image from "next/image";
import {
  getTvShowDetails,
  getTvShowRecommendations,
  getTvShowVideos,
  getTvShowCredits,
} from "@/lib/tmdb";
import MediaCard from "@/components/MediaCard";
import TrailerModal from "@/components/TrailerModal";
import CastList from "@/components/CastList";
import TvShowMetadata from "../components/TvShowMetadata";
import FavoriteButton from "@/components/FavoriteButton";
import WatchlistButton from "@/components/WatchlistButton";
import HistoryTracker from "@/components/HistoryTracker";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p";
const FALLBACK_POSTER = "/images/poster-placeholder.png";

export default async function TvShowDetailsPage({ params }) {
  const { id } = await params;

  const [show, recommendations, videos, credits] = await Promise.all([
    getTvShowDetails(id),
    getTvShowRecommendations(id),
    getTvShowVideos(id),
    getTvShowCredits(id),
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
            {/* Background */}
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

            {/* Main backdrop */}
            <Image
              src={backdrop}
              alt={`${show.name} backdrop`}
              fill
              sizes="100vw"
              quality={80}
              className="object-contain object-center"
              priority
            />

            {/* Bottom overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />

            {/* Top black shadow */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/70 via-black/30 to-transparent sm:h-28 sm:from-black/50" />

            {/* Title */}
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
          {/* Poster */}
          <div className="relative mx-auto aspect-[2/3] w-full max-w-[220px] overflow-hidden rounded-xl bg-muted sm:max-w-[280px]">
            <Image
              src={poster}
              alt={`پوستر ${show.name}`}
              fill
              sizes="(max-width: 768px) 220px, 280px"
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="min-w-0 flex flex-col">
            <h1 className="break-words text-2xl font-bold leading-tight tracking-tight sm:text-4xl">
              {show.name}
            </h1>

            {show.tagline && (
              <p className="mt-2 break-words text-base italic leading-6 text-muted-foreground sm:text-lg">
                {show.tagline}
              </p>
            )}

            {/* Info */}
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground sm:mt-5 sm:gap-x-5">
              <span>{show.first_air_date?.slice(0, 4) || "—"}</span>

              <span>⭐ {show.vote_average?.toFixed(1) || "N/A"}</span>

              <span>
                {show.number_of_seasons
                  ? `${show.number_of_seasons} Seasons`
                  : "Seasons N/A"}
              </span>

              <span>
                {show.number_of_episodes
                  ? `${show.number_of_episodes} Episodes`
                  : "Episodes N/A"}
              </span>
            </div>

            {/* Genres */}
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

            {/* Overview */}
            <div className="mt-5 sm:mt-6">
              <h2 className="mb-2 text-lg font-semibold sm:text-xl">
                Overview
              </h2>

              <p className="max-w-3xl break-words text-sm leading-7 text-muted-foreground sm:text-base">
                {show.overview || "No overview available."}
              </p>
            </div>

            {/* Actions */}
            <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
              <FavoriteButton movie={show} />
              <WatchlistButton movie={show} />
            </div>

            {/* Trailer */}
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
            More Like This
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
