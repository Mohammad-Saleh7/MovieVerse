export default function Loading() {
  return (
    <main className="py-10">
      <div className="mb-8 h-[280px] animate-pulse rounded-2xl bg-muted sm:h-[360px] lg:h-[450px]" />

      <section className="rounded-2xl border bg-card p-6 md:p-8">
        <div className="grid gap-8 md:grid-cols-[280px_1fr]">
          <div className="mx-auto aspect-[2/3] w-full max-w-[280px] animate-pulse rounded-xl bg-muted" />

          <div className="space-y-5">
            <div className="h-10 w-3/4 animate-pulse rounded-md bg-muted" />

            <div className="h-6 w-1/2 animate-pulse rounded-md bg-muted" />

            <div className="flex gap-4">
              <div className="h-5 w-20 animate-pulse rounded bg-muted" />
              <div className="h-5 w-20 animate-pulse rounded bg-muted" />
              <div className="h-5 w-20 animate-pulse rounded bg-muted" />
            </div>

            <div className="space-y-3">
              <div className="h-6 w-32 animate-pulse rounded bg-muted" />
              <div className="h-4 w-full animate-pulse rounded bg-muted" />
              <div className="h-4 w-11/12 animate-pulse rounded bg-muted" />
              <div className="h-4 w-3/4 animate-pulse rounded bg-muted" />
            </div>

            <div className="flex gap-3">
              <div className="h-10 w-40 animate-pulse rounded-md bg-muted" />
              <div className="h-10 w-40 animate-pulse rounded-md bg-muted" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
