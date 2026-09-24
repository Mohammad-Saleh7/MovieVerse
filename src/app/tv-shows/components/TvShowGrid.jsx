import MediaCard from "@/components/media/MediaCard";

export default function TvShowGrid({ shows }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {shows.map((show) => (
        <MediaCard
          key={show.id}
          id={show.id}
          title={show.name}
          year={show.first_air_date?.slice(0, 4)}
          rating={show.vote_average}
          poster={
            show.poster_path
              ? `https://image.tmdb.org/t/p/w500${show.poster_path}`
              : undefined
          }
          overview={show.overview}
          type="tv"
        />
      ))}
    </div>
  );
}
