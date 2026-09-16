import MovieCard from "@/components/MovieCard";

const history = [
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
  {
    id: 24428,
    title: "Avengers",
    year: "2012",
    rating: "8.0",
    poster: "/movie.jpg",
  },
];

export default function HistoryPage() {
  return (
    <main className="py-10">
      <section>
        <h1 className="mb-6 text-3xl font-bold">Watch History</h1>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {history.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>
      </section>
    </main>
  );
}
