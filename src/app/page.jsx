import Hero from "./components/Hero";
import MovieCard from "./components/MovieCard";

const movies = [
  {
    title: "Spider-Man",
    year: "2021",
    rating: "8.8",
    poster: "/movie.jpg",
  },
  {
    title: "The Dark Knight",
    year: "2008",
    rating: "9.0",
    poster: "/movie.jpg",
  },
  {
    title: "Inception",
    year: "2010",
    rating: "8.8",
    poster: "/movie.jpg",
  },
  {
    title: "Interstellar",
    year: "2014",
    rating: "8.7",
    poster: "/movie.jpg",
  },
];

export default function Home() {
  return (
    <main className="py-10">
      <Hero />
      <section>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Trending Movies</h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {movies.map((movie) => (
            <MovieCard key={movie.title} {...movie} />
          ))}
        </div>
      </section>
    </main>
  );
}
