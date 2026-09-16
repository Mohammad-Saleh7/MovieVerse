"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Button
      variant={isFavorite ? "default" : "outline"}
      onClick={() => setIsFavorite(!isFavorite)}
      className="mt-6  cursor-pointer "
    >
      {isFavorite ? "♥ Added to Favorites" : "♡ Add to Favorites"}
    </Button>
  );
}
