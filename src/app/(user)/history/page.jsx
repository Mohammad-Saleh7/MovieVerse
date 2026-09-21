"use client";

import { useEffect, useState } from "react";
import MediaCard from "@/components/MediaCard";

export default function HistoryPage() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const storedHistory = JSON.parse(
      localStorage.getItem("movieverse-history") || "[]",
    );

    setHistory(storedHistory);
  }, []);

  return (
    <main className="py-10">
      <section>
        <h1 className="mb-6 text-3xl font-bold">Watch History</h1>

        {history.length === 0 ? (
          <p className="text-muted-foreground">
            You haven't watched any movies or TV shows yet.
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {history.map((item) => {
              const isTvShow = Boolean(item.name);

              return (
                <MediaCard
                  key={item.id}
                  id={item.id}
                  title={item.title || item.name}
                  overview={item.overview}
                  year={
                    isTvShow
                      ? item.first_air_date?.slice(0, 4)
                      : item.release_date?.slice(0, 4)
                  }
                  rating={item.vote_average?.toFixed(1)}
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
