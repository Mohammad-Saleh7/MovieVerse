import MovieCard from "../components/MovieCard";
import { getPopularTvShows } from "@/lib/tmdb";

export default async function TvShowsPage() {
  const data = await getPopularTvShows();

  return (
    <main className="py-10">
      <section>
        <h1 className="mb-6 text-3xl font-bold">TV Shows</h1>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {data.results.map((show) => (
            <MovieCard
              key={show.id}
              id={show.id}
              type="tv"
              title={show.name}
              year={show.first_air_date?.slice(0, 4)}
              rating={show.vote_average.toFixed(1)}
              poster={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
