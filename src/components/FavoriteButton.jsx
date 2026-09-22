"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function FavoriteButton({ movie }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const itemTitle = movie.title || movie.name;

  useEffect(() => {
    const favorites = JSON.parse(
      localStorage.getItem("movieverse-favorites") || "[]",
    );

    setIsFavorite(favorites.some((item) => item.id === movie.id));
  }, [movie.id]);

  function handleFavorite() {
    const favorites = JSON.parse(
      localStorage.getItem("movieverse-favorites") || "[]",
    );

    const exists = favorites.some((item) => item.id === movie.id);

    if (exists) {
      const updatedFavorites = favorites.filter((item) => item.id !== movie.id);

      localStorage.setItem(
        "movieverse-favorites",
        JSON.stringify(updatedFavorites),
      );

      setIsFavorite(false);
    } else {
      const updatedFavorites = [...favorites, movie];

      localStorage.setItem(
        "movieverse-favorites",
        JSON.stringify(updatedFavorites),
      );

      setIsFavorite(true);
    }
  }

  return (
    <Button
      variant={isFavorite ? "default" : "outline"}
      onClick={handleFavorite}
      className="mt-6"
    >
      {isFavorite ? `♥  Added to Favorites` : `♡ Add  to Favorites`}
    </Button>
  );
}
