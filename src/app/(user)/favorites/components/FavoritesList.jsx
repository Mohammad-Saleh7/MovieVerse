"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import MediaCard from "@/components/media/MediaCard";

export default function FavoritesList() {
  const [favorites, setFavorites] = useState([]);
  const t = useTranslations("favorites");

  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("movieverse-favorites") || "[]",
    );

    setFavorites(storedFavorites);
  }, []);

  if (favorites.length === 0) {
    return <p className="text-muted-foreground">{t("empty")}</p>;
  }

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      {favorites.map((item) => {
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
  );
}
