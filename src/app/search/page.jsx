import MovieCard from "@/components/MovieCard";
import { searchMovies } from "@/lib/tmdb";
import Pagination from "./components/Pagination";

export default async function SearchPage({ searchParams }) {
  const params = await searchParams;
  const query = params?.q?.trim() || "";
  const page = Number(params?.page) || 1;

  const data = query ? await searchMovies(query, page) : { results: [] };

  return (
    <main className="py-10">
      <section>
        <h1 className="mb-6 text-3xl font-bold">Search Results</h1>

        {!query && (
          <p className="text-muted-foreground">Enter a movie name to search.</p>
        )}

        {query && data.results.length === 0 && (
          <div className="flex min-h-[40vh] flex-col items-center justify-center text-center">
            <h2 className="text-2xl font-bold">No movies found</h2>

            <p className="mt-2 max-w-md text-muted-foreground">
              We couldn't find any movies matching "{query}". Try searching with
              a different title.
            </p>
          </div>
        )}

        {data.results.length > 0 && (
          <>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {data.results.map((movie) => (
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

            <Pagination
              query={query}
              currentPage={data.page}
              totalPages={data.total_pages}
            />
          </>
        )}
      </section>
    </main>
  );
}
