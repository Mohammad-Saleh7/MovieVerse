import MovieCard from "@/app/components/MovieCard";

const watchList = [
  {
    id: 27205,
    title: "Inception",
    year: "2010",
    rating: "8.8",
    poster: "/movie.jpg",
  },
  {
    id: 157336,
    title: "Interstellar",
    year: "2014",
    rating: "8.7",
    poster: "/movie.jpg",
  },
  {
    id: 155,
    title: "The Dark Knight",
    year: "2008",
    rating: "9.0",
    poster: "/movie.jpg",
  },
];

export default function WatchListPage() {
  return (
    <main className="py-10">
      <section>
        <h1 className="mb-6 text-3xl font-bold">My Watchlist</h1>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {watchList.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>
      </section>
    </main>
  );
}
