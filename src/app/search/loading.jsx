export default function Loading() {
  return (
    <main className="py-10">
      <section>
        {/* Title Skeleton */}
        <div className="mb-6 h-9 w-48 animate-pulse rounded-md bg-muted" />

        {/* Movies Skeleton */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="space-y-3">
              {/* Poster */}
              <div className="aspect-[2/3] animate-pulse rounded-lg bg-muted" />

              {/* Title */}
              <div className="h-5 w-3/4 animate-pulse rounded bg-muted" />

              {/* Meta */}
              <div className="h-4 w-1/2 animate-pulse rounded bg-muted" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
