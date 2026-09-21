"use client";

import { useEffect, useState } from "react";
import MediaCard from "@/components/MediaCard";

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
            You haven't added any movies or TV shows to your watchlist yet.
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {watchlist.map((item) => {
              const isTvShow = Boolean(item.name);

              return (
                <MediaCard
                  key={item.id}
                  id={item.id}
                  title={item.title || item.name}
                  year={
                    isTvShow
                      ? item.first_air_date?.slice(0, 4)
                      : item.release_date?.slice(0, 4)
                  }
                  rating={item.vote_average?.toFixed(1)}
                  overview={item.overview}
                  poster={
                    item.poster_path
                      ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
                      : undefined
                  }
                  type={isTvShow ? "tv" : "movie"}
                />
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}
