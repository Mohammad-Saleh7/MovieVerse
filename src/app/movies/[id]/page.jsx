import Image from "next/image";
import { getMovieDetails } from "@/lib/tmdb";

export default async function MovieDetailsPage({ params }) {
  const { id } = await params;

  const movie = await getMovieDetails(id);

  return (
    <main className="py-10">
      <div className="grid gap-8 md:grid-cols-[280px_1fr]">
        <div className="relative h-[400px] overflow-hidden rounded-xl">
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h1 className="mb-4 text-4xl font-bold">{movie.title}</h1>

          <div className="mb-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span>{movie.release_date?.slice(0, 4)}</span>
            <span>⭐ {movie.vote_average.toFixed(1)}</span>
            <span>{movie.runtime} min</span>
          </div>

          <div className="mb-6 flex flex-wrap gap-2">
            {movie.genres?.map((genre) => (
              <span
                key={genre.id}
                className="rounded-full border px-3 py-1 text-sm"
              >
                {genre.name}
              </span>
            ))}
          </div>

          <p className="max-w-2xl leading-7 text-muted-foreground">
            {movie.overview}
          </p>
        </div>
      </div>
    </main>
  );
}
