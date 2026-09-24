export default function Loading() {
  return (
    <main className="py-10">
      <section className="mx-auto max-w-2xl">
        <div className="mb-8 h-9 w-32 animate-pulse rounded-md bg-muted" />

        <div className="overflow-hidden rounded-xl border bg-card">
          <div className="border-b p-6">
            <div className="h-6 w-40 animate-pulse rounded bg-muted" />
            <div className="mt-2 h-4 w-64 animate-pulse rounded bg-muted" />
          </div>

          <div className="space-y-6 p-6">
            <div>
              <div className="h-4 w-16 animate-pulse rounded bg-muted" />
              <div className="mt-2 h-5 w-32 animate-pulse rounded bg-muted" />
            </div>

            <div>
              <div className="h-4 w-16 animate-pulse rounded bg-muted" />
              <div className="mt-2 h-5 w-48 animate-pulse rounded bg-muted" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
