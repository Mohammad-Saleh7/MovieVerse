"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[70vh] items-center justify-center py-10">
      <section className="text-center">
        <h2 className="text-2xl font-bold">Something went wrong!</h2>

        <p className="mt-2 text-muted-foreground">
          We couldn't load the registration page right now.
        </p>

        <button
          onClick={() => reset()}
          className="mt-6 rounded-md bg-primary px-4 py-2 text-primary-foreground transition-opacity hover:opacity-90"
        >
          Try Again
        </button>
      </section>
    </main>
  );
}
