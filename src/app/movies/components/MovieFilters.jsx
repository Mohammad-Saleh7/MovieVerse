"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";

const filters = [
  { value: "popular", key: "popular" },
  { value: "top-rated", key: "topRated" },
  { value: "now-playing", key: "nowPlaying" },
  { value: "upcoming", key: "upcoming" },
];

export default function MovieFilters() {
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category") || "popular";
  const t = useTranslations("movies.filters");

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
            {t(filter.key)}
          </Link>
        );
      })}
    </div>
  );
}
