import MovieCard from "../components/MovieCard";

const trendingMovies = [
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
  {
    title: "Avengers",
    year: "2012",
    rating: "8.0",
    poster: "/movie.jpg",
  },
  {
    title: "Iron Man",
    year: "2008",
    rating: "7.9",
    poster: "/movie.jpg",
  },
];

export default function TrendingPage() {
  return (
    <main className="py-10">
      <section>
        <h1 className="mb-6 text-3xl font-bold">Trending</h1>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {trendingMovies.map((movie) => (
            <MovieCard key={movie.title} {...movie} />
          ))}
        </div>
      </section>
    </main>
  );
}
