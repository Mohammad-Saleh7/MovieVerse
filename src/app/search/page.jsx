import MovieCard from "../components/MovieCard";
import { searchMovies } from "@/lib/tmdb";

export default async function SearchPage({ searchParams }) {
  const params = await searchParams;
  const query = params?.q || "";

  const data = query ? await searchMovies(query) : { results: [] };

  return (
    <main className="py-10">
      <section>
        <h1 className="mb-6 text-3xl font-bold">Search Results</h1>

        {!query && (
          <p className="text-muted-foreground">Enter a movie name to search.</p>
        )}

        {query && data.results.length === 0 && (
          <p className="text-muted-foreground">
            No movies found for "{query}".
          </p>
        )}

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
