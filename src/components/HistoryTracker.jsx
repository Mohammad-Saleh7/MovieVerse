"use client";

import { useEffect } from "react";

export default function HistoryTracker({ movie }) {
  useEffect(() => {
    const history = JSON.parse(
      localStorage.getItem("movieverse-history") || "[]",
    );

    const filteredHistory = history.filter((item) => item.id !== movie.id);

    const updatedHistory = [movie, ...filteredHistory];

    localStorage.setItem("movieverse-history", JSON.stringify(updatedHistory));
  }, [movie]);

  return null;
}
