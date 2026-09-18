"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function WatchlistButton({ movie }) {
  const [isInWatchlist, setIsInWatchlist] = useState(false);

  useEffect(() => {
    const watchlist = JSON.parse(
      localStorage.getItem("movieverse-watchlist") || "[]",
    );

    setIsInWatchlist(watchlist.some((item) => item.id === movie.id));
  }, [movie.id]);

  function handleWatchlist() {
    const watchlist = JSON.parse(
      localStorage.getItem("movieverse-watchlist") || "[]",
    );

    const exists = watchlist.some((item) => item.id === movie.id);

    if (exists) {
      const updatedWatchlist = watchlist.filter((item) => item.id !== movie.id);

      localStorage.setItem(
        "movieverse-watchlist",
        JSON.stringify(updatedWatchlist),
      );

      setIsInWatchlist(false);
    } else {
      const updatedWatchlist = [...watchlist, movie];

      localStorage.setItem(
        "movieverse-watchlist",
        JSON.stringify(updatedWatchlist),
      );

      setIsInWatchlist(true);
    }
  }

  return (
    <Button
      variant={isInWatchlist ? "default" : "outline"}
      onClick={handleWatchlist}
      className="mt-6"
    >
      {isInWatchlist ? "✓ Added to Watchlist" : "+ Add to Watchlist"}
    </Button>
  );
}
