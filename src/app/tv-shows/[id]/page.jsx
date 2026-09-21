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
    <main className="py-10">
      <HistoryTracker movie={show} />
      {backdrop && (
        <section className="relative mb-8 h-[280px] overflow-hidden rounded-2xl sm:h-[360px] lg:h-[450px]">
          <Image
            src={backdrop}
            alt={`${show.name} backdrop`}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />

          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
            <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              {show.name}
            </h1>
          </div>
        </section>
      )}

      <section className="overflow-hidden rounded-2xl border bg-card">
        <div className="grid gap-8 p-6 md:grid-cols-[280px_1fr] md:p-8">
          <div className="relative mx-auto aspect-[2/3] w-full max-w-[280px] overflow-hidden rounded-xl bg-muted">
            <Image
              src={poster}
              alt={`پوستر ${show.name}`}
              fill
              sizes="(max-width: 768px) 280px, 280px"
              className="object-cover"
              priority
            />
          </div>

          <div className="flex flex-col">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {show.name}
            </h1>

            {show.tagline && (
              <p className="mt-2 text-lg italic text-muted-foreground">
                {show.tagline}
              </p>
            )}

            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
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

            {show.genres?.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {show.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="rounded-full border px-3 py-1 text-sm"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-6">
              <h2 className="mb-2 text-xl font-semibold">Overview</h2>

              <p className="max-w-3xl leading-7 text-muted-foreground">
                {show.overview || "No overview available."}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <FavoriteButton movie={show} />
              <WatchlistButton movie={show} />
            </div>

            {trailer && (
              <div className="mt-6">
                <TrailerModal trailerKey={trailer.key} title={show.name} />
              </div>
            )}
          </div>
        </div>
      </section>

      <CastList cast={credits.cast} />

      <TvShowMetadata show={show} />

      {recommendedShows.length > 0 && (
        <section className="mt-12">
          <h2 className="mb-6 text-2xl font-bold">More Like This</h2>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
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
