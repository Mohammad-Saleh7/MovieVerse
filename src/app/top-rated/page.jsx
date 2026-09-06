import MovieCard from "../components/MovieCard";

const topRatedMovies = [
  {
    title: "The Shawshank Redemption",
    year: "1994",
    rating: "9.3",
    poster: "/movie.jpg",
  },
  {
    title: "The Godfather",
    year: "1972",
    rating: "9.2",
    poster: "/movie.jpg",
  },
  {
    title: "The Dark Knight",
    year: "2008",
    rating: "9.0",
    poster: "/movie.jpg",
  },
  {
    title: "The Godfather Part II",
    year: "1974",
    rating: "9.0",
    poster: "/movie.jpg",
  },
  {
    title: "12 Angry Men",
    year: "1957",
    rating: "9.0",
    poster: "/movie.jpg",
  },
  {
    title: "Schindler's List",
    year: "1993",
    rating: "9.0",
    poster: "/movie.jpg",
  },
];

export default function TopRatedPage() {
  return (
    <main className="py-10">
      <section>
        <h1 className="mb-6 text-3xl font-bold">Top Rated</h1>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {topRatedMovies.map((movie) => (
            <MovieCard key={movie.title} {...movie} />
          ))}
        </div>
      </section>
    </main>
  );
}
