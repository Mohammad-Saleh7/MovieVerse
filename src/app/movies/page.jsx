import MovieCard from "../components/MovieCard";
import { getPopularMovies } from "@/lib/tmdb";

export default async function MoviesPage() {
  const data = await getPopularMovies();

  return (
    <main className="py-10">
      <section>
        <h1 className="mb-6 text-3xl font-bold">Movies</h1>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {data.results.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              year={movie.release_date?.slice(0, 4)}
              rating={movie.vote_average.toFixed(1)}
              poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
