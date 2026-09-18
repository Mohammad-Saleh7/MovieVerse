import Image from "next/image";
import { getTvShowDetails } from "@/lib/tmdb";

export default async function TvShowDetailsPage({ params }) {
  const { id } = await params;

  const show = await getTvShowDetails(id);

  const poster = show.poster_path
    ? `https://image.tmdb.org/t/p/w500${show.poster_path}`
    : "/images/poster-placeholder.png";

  return (
    <main className="py-10">
      <section className="overflow-hidden rounded-2xl border bg-card">
        <div className="grid gap-8 p-6 md:grid-cols-[280px_1fr] md:p-8">
          {/* Poster */}
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

          {/* Show Info */}
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {show.name}
            </h1>

            {show.tagline && (
              <p className="mt-2 text-lg italic text-muted-foreground">
                {show.tagline}
              </p>
            )}

            {/* Meta */}
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

            {/* Genres */}
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

            {/* Overview */}
            <div className="mt-6">
              <h2 className="mb-2 text-xl font-semibold">Overview</h2>

              <p className="max-w-3xl leading-7 text-muted-foreground">
                {show.overview || "No overview available."}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
