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
      {favorites.map((item) => {
        const isTvShow = Boolean(item.name);

        return (
          <MovieCard
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
  );
}
