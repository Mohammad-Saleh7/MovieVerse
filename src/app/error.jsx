"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[60vh] items-center justify-center py-10">
      <section className="max-w-md text-center">
        <h1 className="text-3xl font-bold">Something went wrong</h1>

        <p className="mt-3 text-muted-foreground">
          We couldn't load the movies right now. Please try again.
        </p>

        <Button onClick={() => reset()} className="mt-6">
          Try Again
        </Button>
      </section>
    </main>
  );
}
