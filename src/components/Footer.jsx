import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t bg-background">
      <div className="container mx-auto flex flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold">MovieVerse</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Discover movies and TV shows you love.
          </p>
        </div>

        <nav className="flex gap-4 text-sm text-muted-foreground">
          <Link
            href="/movies"
            className="transition-colors hover:text-foreground"
          >
            Movies
          </Link>

          <Link
            href="/tv-shows"
            className="transition-colors hover:text-foreground"
          >
            TV Shows
          </Link>

          <Link
            href="/trending"
            className="transition-colors hover:text-foreground"
          >
            Trending
          </Link>

          <Link
            href="/top-rated"
            className="transition-colors hover:text-foreground"
          >
            Top Rated
          </Link>
        </nav>
      </div>

      <div className="border-t py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} MovieVerse. All rights reserved.
      </div>
    </footer>
  );
}
