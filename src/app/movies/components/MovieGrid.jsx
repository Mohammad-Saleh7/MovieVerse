import MediaCard from "@/components/MediaCard";

export default function MovieGrid({ movies }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {movies.map((movie) => (
        <MediaCard
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
  );
}
