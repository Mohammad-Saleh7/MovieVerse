export default function Loading() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center py-10">
      <section className="w-full max-w-md space-y-6">
        <div className="space-y-3 text-center">
          <div className="mx-auto h-9 w-48 animate-pulse rounded-md bg-muted" />
          <div className="mx-auto h-5 w-64 animate-pulse rounded-md bg-muted" />
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <div className="h-5 w-16 animate-pulse rounded bg-muted" />
            <div className="h-10 w-full animate-pulse rounded-md bg-muted" />
          </div>

          <div className="space-y-2">
            <div className="h-5 w-20 animate-pulse rounded bg-muted" />
            <div className="h-10 w-full animate-pulse rounded-md bg-muted" />
          </div>

          <div className="h-10 w-full animate-pulse rounded-md bg-muted" />
        </div>
      </section>
    </main>
  );
}
