"use client";

import { useEffect, useState } from "react";
import MovieCard from "@/components/MovieCard";

export default function WatchListPage() {
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    const storedWatchlist = JSON.parse(
      localStorage.getItem("movieverse-watchlist") || "[]",
    );

    setWatchlist(storedWatchlist);
  }, []);

  return (
    <main className="py-10">
      <section>
        <h1 className="mb-6 text-3xl font-bold">My Watchlist</h1>

        {watchlist.length === 0 ? (
          <p className="text-muted-foreground">
            You haven't added any movies to your watchlist yet.
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {watchlist.map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                year={movie.release_date?.slice(0, 4)}
                rating={movie.vote_average?.toFixed(1)}
                overview={movie.overview}
                poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
