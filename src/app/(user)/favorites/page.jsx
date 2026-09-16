import MovieCard from "@/components/MovieCard";

const favorites = [
  {
    id: 580489,
    title: "Spider-Man",
    year: "2021",
    rating: "8.8",
    poster: "/movie.jpg",
  },
  {
    id: 238,
    title: "The Godfather",
    year: "1972",
    rating: "9.2",
    poster: "/movie.jpg",
  },
  {
    id: 27205,
    title: "Inception",
    year: "2010",
    rating: "8.8",
    poster: "/movie.jpg",
  },
];

export default function FavoritesPage() {
  return (
    <main className="py-10">
      <section>
        <h1 className="mb-6 text-3xl font-bold">My Favorites</h1>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>
      </section>
    </main>
  );
}
