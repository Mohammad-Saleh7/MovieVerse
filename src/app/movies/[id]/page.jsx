import Image from "next/image";
import {
  getMovieDetails,
  getMovieRecommendations,
  getMovieVideos,
  getMovieCredits,
} from "@/lib/tmdb";
import FavoriteButton from "../../../components/FavoriteButton";
import WatchlistButton from "../../../components/WatchlistButton";
import HistoryTracker from "../components/HistoryTracker";
import TrailerModal from "../../../components/TrailerModal";
import CastList from "../../../components/CastList";
import MovieMetadata from "../components/MovieMetadata";
import MovieCard from "@/components/MovieCard";

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
    <main className="py-10">
      <HistoryTracker movie={movie} />

      {backdrop && (
        <section className="relative mb-8 h-[280px] overflow-hidden rounded-2xl sm:h-[360px] lg:h-[450px]">
          <Image
            src={backdrop}
            alt={`${movie.title} backdrop`}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />

          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
            <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              {movie.title}
            </h1>
          </div>
        </section>
      )}

      <section className="overflow-hidden rounded-2xl border bg-card">
        <div className="grid gap-8 p-6 md:grid-cols-[280px_1fr] md:p-8">
          <div className="relative mx-auto aspect-[2/3] w-full max-w-[280px] overflow-hidden rounded-xl bg-muted">
            <Image
              src={poster}
              alt={`پوستر ${movie.title}`}
              fill
              sizes="(max-width: 768px) 280px, 280px"
              className="object-cover"
              priority
            />
          </div>

          <div className="flex flex-col">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {movie.title}
            </h1>

            {movie.tagline && (
              <p className="mt-2 text-lg italic text-muted-foreground">
                {movie.tagline}
              </p>
            )}

            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <span>{movie.release_date?.slice(0, 4) || "—"}</span>

              <span>⭐ {movie.vote_average?.toFixed(1) || "N/A"}</span>

              <span>
                {movie.runtime ? `${movie.runtime} min` : "Runtime N/A"}
              </span>
            </div>

            {movie.genres?.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {movie.genres.map((genre) => (
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
                {movie.overview || "No overview available."}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <FavoriteButton movie={movie} />
              <WatchlistButton movie={movie} />
            </div>

            {trailer && (
              <div className="mt-6">
                <TrailerModal trailerKey={trailer.key} title={movie.title} />
              </div>
            )}
          </div>
        </div>
      </section>

      <MovieMetadata movie={movie} />

      <CastList cast={credits.cast} />

      {recommendedMovies.length > 0 && (
        <section className="mt-12">
          <h2 className="mb-6 text-2xl font-bold">More Like This</h2>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {recommendedMovies.map((movie) => (
              <MovieCard
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
