import MovieCard from "../components/MovieCard";

const tvShows = [
  {
    title: "Breaking Bad",
    year: "2008",
    rating: "9.5",
    poster: "/movie.jpg",
  },
  {
    title: "Stranger Things",
    year: "2016",
    rating: "8.7",
    poster: "/movie.jpg",
  },
  {
    title: "The Boys",
    year: "2019",
    rating: "8.6",
    poster: "/movie.jpg",
  },
  {
    title: "Game of Thrones",
    year: "2011",
    rating: "9.2",
    poster: "/movie.jpg",
  },
  {
    title: "Dark",
    year: "2017",
    rating: "8.7",
    poster: "/movie.jpg",
  },
  {
    title: "The Last of Us",
    year: "2023",
    rating: "8.7",
    poster: "/movie.jpg",
  },
];

export default function TvShowsPage() {
  return (
    <main className="py-10">
      <section>
        <h1 className="mb-6 text-3xl font-bold">TV Shows</h1>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {tvShows.map((show) => (
            <MovieCard key={show.title} {...show} />
          ))}
        </div>
      </section>
    </main>
  );
}
