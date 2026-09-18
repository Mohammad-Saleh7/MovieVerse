"use client";

import { useEffect, useState } from "react";
import MovieCard from "@/components/MovieCard";

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
            You haven't watched any movies yet.
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {history.map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                overview={movie.overview}
                year={movie.release_date?.slice(0, 4)}
                rating={movie.vote_average?.toFixed(1)}
                poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
