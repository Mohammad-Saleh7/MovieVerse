"use client";

export default function Error({ reset }) {
  return (
    <main className="flex min-h-[60vh] items-center justify-center py-10">
      <section className="max-w-md text-center">
        <h1 className="text-3xl font-bold">Something went wrong</h1>

        <p className="mt-3 text-muted-foreground">
          We couldn't load this movie. Please try again.
        </p>

        <button
          type="button"
          onClick={() => reset()}
          className="mt-6 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Try Again
        </button>
      </section>
    </main>
  );
}
