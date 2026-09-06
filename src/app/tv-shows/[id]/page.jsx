import Image from "next/image";
import { getTvShowDetails } from "@/lib/tmdb";

export default async function TvShowDetailsPage({ params }) {
  const { id } = await params;

  const show = await getTvShowDetails(id);

  return (
    <main className="py-10">
      <div className="grid gap-8 md:grid-cols-[280px_1fr]">
        <div className="relative h-[400px] overflow-hidden rounded-xl">
          <Image
            src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
            alt={show.name}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h1 className="mb-4 text-4xl font-bold">{show.name}</h1>

          <div className="mb-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span>{show.first_air_date?.slice(0, 4)}</span>
            <span>⭐ {show.vote_average.toFixed(1)}</span>
            <span>{show.number_of_seasons} Seasons</span>
            <span>{show.number_of_episodes} Episodes</span>
          </div>

          <div className="mb-6 flex flex-wrap gap-2">
            {show.genres?.map((genre) => (
              <span
                key={genre.id}
                className="rounded-full border px-3 py-1 text-sm"
              >
                {genre.name}
              </span>
            ))}
          </div>

          <p className="max-w-2xl leading-7 text-muted-foreground">
            {show.overview}
          </p>
        </div>
      </div>
    </main>
  );
}
