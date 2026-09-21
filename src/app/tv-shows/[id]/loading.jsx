export default function Loading() {
  return (
    <main className="py-10">
      {/* Backdrop */}
      <div className="mb-8 h-[280px] animate-pulse rounded-2xl bg-muted sm:h-[360px] lg:h-[450px]" />

      {/* Main Details */}
      <section className="overflow-hidden rounded-2xl border bg-card">
        <div className="grid gap-8 p-6 md:grid-cols-[280px_1fr] md:p-8">
          {/* Poster */}
          <div className="mx-auto aspect-[2/3] w-full max-w-[280px] animate-pulse rounded-xl bg-muted" />

          {/* Content */}
          <div className="space-y-5">
            <div className="h-10 w-3/4 animate-pulse rounded-md bg-muted" />

            <div className="h-6 w-1/2 animate-pulse rounded-md bg-muted" />

            <div className="flex flex-wrap gap-4">
              <div className="h-5 w-20 animate-pulse rounded bg-muted" />
              <div className="h-5 w-20 animate-pulse rounded bg-muted" />
              <div className="h-5 w-24 animate-pulse rounded bg-muted" />
              <div className="h-5 w-24 animate-pulse rounded bg-muted" />
            </div>

            <div className="flex gap-2">
              <div className="h-8 w-20 animate-pulse rounded-full bg-muted" />
              <div className="h-8 w-24 animate-pulse rounded-full bg-muted" />
              <div className="h-8 w-20 animate-pulse rounded-full bg-muted" />
            </div>

            <div className="space-y-3 pt-2">
              <div className="h-6 w-32 animate-pulse rounded-md bg-muted" />
              <div className="h-4 w-full animate-pulse rounded bg-muted" />
              <div className="h-4 w-11/12 animate-pulse rounded bg-muted" />
              <div className="h-4 w-3/4 animate-pulse rounded bg-muted" />
            </div>

            <div className="flex gap-3 pt-2">
              <div className="h-10 w-40 animate-pulse rounded-md bg-muted" />
            </div>
          </div>
        </div>
      </section>

      {/* Metadata */}
      <section className="mt-12">
        <div className="mb-6 h-8 w-32 animate-pulse rounded-md bg-muted" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="h-24 animate-pulse rounded-xl border bg-muted"
            />
          ))}
        </div>
      </section>

      {/* Cast */}
      <section className="mt-12">
        <div className="mb-6 h-8 w-24 animate-pulse rounded-md bg-muted" />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="space-y-3">
              <div className="aspect-[2/3] animate-pulse rounded-xl bg-muted" />
              <div className="h-4 w-3/4 animate-pulse rounded bg-muted" />
              <div className="h-3 w-1/2 animate-pulse rounded bg-muted" />
            </div>
          ))}
        </div>
      </section>

      {/* Networks / Production Companies */}
      <section className="mt-12">
        <div className="mb-6 h-8 w-40 animate-pulse rounded-md bg-muted" />

        <div className="flex flex-wrap gap-3">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="h-12 w-32 animate-pulse rounded-xl border bg-muted"
            />
          ))}
        </div>
      </section>

      {/* Recommendations */}
      <section className="mt-12">
        <div className="mb-6 h-8 w-40 animate-pulse rounded-md bg-muted" />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="space-y-3">
              <div className="aspect-[2/3] animate-pulse rounded-lg bg-muted" />
              <div className="h-5 w-3/4 animate-pulse rounded bg-muted" />
              <div className="h-4 w-1/2 animate-pulse rounded bg-muted" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
