import MovieCard from "../../components/MovieCard";
import { searchMovies } from "@/lib/tmdb";

export default async function SearchPage({ searchParams }) {
  const params = await searchParams;
  const query = params?.q || "";

  const data = query ? await searchMovies(query) : { results: [] };

  return (
    <main className="py-10">
      <section>
        <h1 className="mb-6 text-3xl font-bold">Search Results</h1>

        {query && data.results.length === 0 && (
          <div className="flex min-h-[40vh] flex-col items-center justify-center text-center">
            <h2 className="text-2xl font-bold">No movies found</h2>

            <p className="mt-2 max-w-md text-muted-foreground">
              We couldn't find any movies matching "{query}". Try searching with
              a different title.
            </p>
          </div>
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
