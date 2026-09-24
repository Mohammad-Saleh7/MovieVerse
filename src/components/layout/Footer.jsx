"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="mt-auto border-t bg-background">
      <div className="container mx-auto flex flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold">MovieVerse</p>

          <p className="mt-1 text-sm text-muted-foreground">
            {t("description")}
          </p>
        </div>

        <nav className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <Link
            href="/movies"
            className="transition-colors hover:text-foreground"
          >
            {t("movies")}
          </Link>

          <Link
            href="/tv-shows"
            className="transition-colors hover:text-foreground"
          >
            {t("tvShows")}
          </Link>

          <Link
            href="/trending"
            className="transition-colors hover:text-foreground"
          >
            {t("trending")}
          </Link>

          <Link
            href="/top-rated"
            className="transition-colors hover:text-foreground"
          >
            {t("topRated")}
          </Link>
        </nav>
      </div>

      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        {t("copyright", {
          year: new Date().getFullYear(),
        })}
      </div>
    </footer>
  );
}
