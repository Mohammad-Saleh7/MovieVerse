import Hero from "./components/Hero";
import MovieCard from "@/components/MovieCard";
import { getFeaturedMovie, getPopularMovies } from "@/lib/tmdb";

export default async function HomePage() {
  const [featuredMovie, popularMovies] = await Promise.all([
    getFeaturedMovie(),
    getPopularMovies(),
  ]);

  return (
    <main className="py-8">
      <Hero movie={featuredMovie} />

      <section className="mt-12">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Popular Movies</h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {popularMovies.results.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              year={movie.release_date?.slice(0, 4)}
              rating={movie.vote_average}
              poster={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : undefined
              }
              overview={movie.overview}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
