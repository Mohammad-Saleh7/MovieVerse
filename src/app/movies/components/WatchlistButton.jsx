"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function WatchlistButton() {
  const [isInWatchlist, setIsInWatchlist] = useState(false);

  return (
    <Button
      variant={isInWatchlist ? "default" : "outline"}
      onClick={() => setIsInWatchlist(!isInWatchlist)}
      className="mt-6"
    >
      {isInWatchlist ? "✓ Added to Watchlist" : "+ Add to Watchlist"}
    </Button>
  );
}
