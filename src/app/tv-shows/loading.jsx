export default function Loading() {
  return (
    <main className="py-10">
      <section>
        {/* Title */}
        <div className="mb-6 h-9 w-32 animate-pulse rounded-md bg-muted" />

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-2">
          <div className="h-10 w-24 animate-pulse rounded-full bg-muted" />
          <div className="h-10 w-28 animate-pulse rounded-full bg-muted" />
        </div>

        {/* TV Shows Grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="space-y-3">
              {/* Poster */}
              <div className="aspect-[2/3] animate-pulse rounded-lg bg-muted" />

              {/* Title */}
              <div className="h-5 w-3/4 animate-pulse rounded bg-muted" />

              {/* Info */}
              <div className="h-4 w-1/2 animate-pulse rounded bg-muted" />
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex items-center justify-center gap-2">
          <div className="h-10 w-20 animate-pulse rounded-md bg-muted" />
          <div className="h-10 w-24 animate-pulse rounded-md bg-muted" />
          <div className="h-10 w-20 animate-pulse rounded-md bg-muted" />
        </div>
      </section>
    </main>
  );
}
