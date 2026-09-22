import Image from "next/image";
import {
  getMovieDetails,
  getMovieRecommendations,
  getMovieVideos,
  getMovieCredits,
} from "@/lib/tmdb";
import FavoriteButton from "../../../components/FavoriteButton";
import WatchlistButton from "../../../components/WatchlistButton";
import HistoryTracker from "@/components/HistoryTracker";
import TrailerModal from "../../../components/TrailerModal";
import CastList from "../../../components/CastList";
import MovieMetadata from "../components/MovieMetadata";
import MediaCard from "@/components/MediaCard";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p";
const FALLBACK_POSTER = "/images/poster-placeholder.png";

export default async function MovieDetailsPage({ params }) {
  const { id } = await params;

  const [movie, recommendations, videos, credits] = await Promise.all([
    getMovieDetails(id),
    getMovieRecommendations(id),
    getMovieVideos(id),
    getMovieCredits(id),
  ]);

  const poster = movie.poster_path
    ? `${IMAGE_BASE_URL}/w500${movie.poster_path}`
    : FALLBACK_POSTER;

  const backdrop = movie.backdrop_path
    ? `${IMAGE_BASE_URL}/original${movie.backdrop_path}`
    : null;

  const trailer = videos.results?.find(
    (video) =>
      video.site === "YouTube" && video.type === "Trailer" && video.official,
  );

  const recommendedMovies = recommendations.results?.slice(0, 4) || [];

  return (
    <main className="py-6 sm:py-10">
      <HistoryTracker movie={movie} />

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
              alt={`${movie.title} backdrop`}
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
                  {movie.title}
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
              alt={`پوستر ${movie.title}`}
              fill
              sizes="(max-width: 768px) 220px, 280px"
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="min-w-0 flex flex-col">
            <h1 className="break-words text-2xl font-bold leading-tight tracking-tight sm:text-4xl">
              {movie.title}
            </h1>

            {movie.tagline && (
              <p className="mt-2 break-words text-base italic leading-6 text-muted-foreground sm:text-lg">
                {movie.tagline}
              </p>
            )}

            {/* Info */}
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground sm:mt-5 sm:gap-x-5">
              <span>{movie.release_date?.slice(0, 4) || "—"}</span>

              <span>⭐ {movie.vote_average?.toFixed(1) || "N/A"}</span>

              <span>
                {movie.runtime ? `${movie.runtime} min` : "Runtime N/A"}
              </span>
            </div>

            {/* Genres */}
            {movie.genres?.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
                {movie.genres.map((genre) => (
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
                {movie.overview || "No overview available."}
              </p>
            </div>

            {/* Actions */}
            <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
              <FavoriteButton movie={movie} />
              <WatchlistButton movie={movie} />
            </div>

            {/* Trailer */}
            {trailer && (
              <div className="mt-5 sm:mt-6">
                <TrailerModal trailerKey={trailer.key} title={movie.title} />
              </div>
            )}
          </div>
        </div>
      </section>

      <MovieMetadata movie={movie} />

      <CastList cast={credits.cast} />

      {recommendedMovies.length > 0 && (
        <section className="mt-10 sm:mt-12">
          <h2 className="mb-5 text-xl font-bold sm:mb-6 sm:text-2xl">
            More Like This
          </h2>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {recommendedMovies.map((movie) => (
              <MediaCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                year={movie.release_date?.slice(0, 4)}
                rating={movie.vote_average}
                poster={
                  movie.poster_path
                    ? `${IMAGE_BASE_URL}/w500${movie.poster_path}`
                    : undefined
                }
                overview={movie.overview}
              />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
