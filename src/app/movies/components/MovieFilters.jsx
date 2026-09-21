"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

const filters = [
  { value: "popular", label: "Popular" },
  { value: "top-rated", label: "Top Rated" },
  { value: "now-playing", label: "Now Playing" },
  { value: "upcoming", label: "Upcoming" },
];

export default function MovieFilters() {
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category") || "popular";

  return (
    <div className="mb-8 flex flex-wrap gap-2">
      {filters.map((filter) => {
        const active = currentCategory === filter.value;

        return (
          <Link
            key={filter.value}
            href={`/movies?category=${filter.value}`}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              active
                ? "border-primary bg-primary text-primary-foreground"
                : "hover:bg-accent"
            }`}
          >
            {filter.label}
          </Link>
        );
      })}
    </div>
  );
}
