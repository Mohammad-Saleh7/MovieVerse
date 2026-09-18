"use client";

import { useEffect, useState } from "react";
import MovieCard from "@/components/MovieCard";

export default function FavoritesList() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("movieverse-favorites") || "[]",
    );

    setFavorites(storedFavorites);
  }, []);

  if (favorites.length === 0) {
    return (
      <p className="text-muted-foreground">
        You haven't added any favorites yet.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {favorites.map((movie) => (
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
  );
}
