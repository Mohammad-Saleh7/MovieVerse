import Image from "next/image";
import { getMovieDetails } from "@/lib/tmdb";
import FavoriteButton from "../components/FavoriteButton";
import WatchlistButton from "../components/WatchlistButton";
import HistoryTracker from "../components/HistoryTracker";

export default async function MovieDetailsPage({ params }) {
  const { id } = await params;
  const movie = await getMovieDetails(id);

  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "/images/poster-placeholder.png";

  return (
    <main className="py-10">
      <HistoryTracker movie={movie} />

      <section className="overflow-hidden rounded-2xl border bg-card">
        <div className="grid gap-8 p-6 md:grid-cols-[280px_1fr] md:p-8">
          {/* Poster */}
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

          {/* Movie Info */}
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

            {/* Genres */}
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

            {/* Overview */}
            <div className="mt-6">
              <h2 className="mb-2 text-xl font-semibold">Overview</h2>

              <p className="max-w-3xl leading-7 text-muted-foreground">
                {movie.overview || "No overview available."}
              </p>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap gap-3">
              <FavoriteButton movie={movie} />
              <WatchlistButton movie={movie} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
