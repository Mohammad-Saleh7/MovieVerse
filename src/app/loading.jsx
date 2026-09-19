export default function Loading() {
  return (
    <main className="py-8">
      {/* Hero Skeleton */}
      <section className="overflow-hidden rounded-2xl">
        <div className="h-[420px] animate-pulse rounded-2xl bg-muted sm:h-[500px] lg:h-[600px]" />
      </section>

      {/* Sections Skeleton */}
      <div className="mt-12 space-y-12">
        {[1, 2, 3].map((section) => (
          <section key={section}>
            <div className="mb-6 h-8 w-48 animate-pulse rounded bg-muted" />

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="overflow-hidden rounded-xl border">
                  <div className="aspect-[2/3] animate-pulse bg-muted" />

                  <div className="space-y-3 p-4">
                    <div className="h-5 animate-pulse rounded bg-muted" />
                    <div className="h-4 w-2/3 animate-pulse rounded bg-muted" />
                    <div className="h-8 animate-pulse rounded bg-muted" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
