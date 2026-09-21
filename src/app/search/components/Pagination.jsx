"use client";

import Link from "next/link";

export default function Pagination({ query, currentPage, totalPages }) {
  const safeCurrentPage =
    Number.isInteger(currentPage) && currentPage > 0 ? currentPage : 1;

  const safeTotalPages =
    Number.isInteger(totalPages) && totalPages > 0 ? totalPages : 1;

  const createPageUrl = (page) => {
    return `/search?q=${encodeURIComponent(query)}&page=${page}`;
  };

  const getPages = () => {
    if (safeTotalPages <= 5) {
      return Array.from({ length: safeTotalPages }, (_, index) => index + 1);
    }

    if (safeCurrentPage <= 3) {
      return [1, 2, 3, 4, "...", safeTotalPages];
    }

    if (safeCurrentPage >= safeTotalPages - 2) {
      return [
        1,
        "...",
        safeTotalPages - 3,
        safeTotalPages - 2,
        safeTotalPages - 1,
        safeTotalPages,
      ];
    }

    return [
      1,
      "...",
      safeCurrentPage - 1,
      safeCurrentPage,
      safeCurrentPage + 1,
      "...",
      safeTotalPages,
    ];
  };

  const pages = getPages();

  return (
    <nav
      aria-label="Search pagination"
      className="mt-10 flex items-center justify-center gap-2"
    >
      {/* Previous */}
      {safeCurrentPage > 1 && (
        <Link
          href={createPageUrl(safeCurrentPage - 1)}
          className="rounded-md border px-3 py-2 text-sm transition-colors hover:bg-accent"
        >
          <span className="hidden sm:inline">← Previous</span>
          <span className="sm:hidden">← Prev</span>
        </Link>
      )}

      {/* Desktop Pages */}
      <div className="hidden items-center gap-1 sm:flex">
        {pages.map((page, index) => {
          if (page === "...") {
            return (
              <span
                key={`ellipsis-${index}`}
                className="px-2 text-muted-foreground"
              >
                ...
              </span>
            );
          }

          const active = page === safeCurrentPage;

          return (
            <Link
              key={`${page}-${index}`}
              href={createPageUrl(page)}
              aria-current={active ? "page" : undefined}
              className={`min-w-9 rounded-md px-3 py-2 text-center text-sm transition-colors ${
                active
                  ? "bg-primary text-primary-foreground"
                  : "border hover:bg-accent"
              }`}
            >
              {page}
            </Link>
          );
        })}
      </div>

      {/* Mobile Page Indicator */}
      <span className="flex min-w-20 items-center justify-center rounded-md border px-3 py-2 text-sm sm:hidden">
        {safeCurrentPage} / {safeTotalPages}
      </span>

      {/* Next */}
      {safeCurrentPage < safeTotalPages && (
        <Link
          href={createPageUrl(safeCurrentPage + 1)}
          className="rounded-md border px-3 py-2 text-sm transition-colors hover:bg-accent"
        >
          <span className="hidden sm:inline">Next →</span>
          <span className="sm:hidden">Next →</span>
        </Link>
      )}
    </nav>
  );
}
