import Image from "next/image";
import React from "react";

export default async function MovieDetailsPage({ params }) {
  const { id } = await params;

  return (
    <main className="py-10">
      <div className="grid gap-8 md:grid-cols-[280px_1fr]">
        <div className="relative h-[400px] overflow-hidden rounded-xl">
          <Image
            src="/movie.jpg"
            alt="Spider-Man"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <p className="mb-2 text-sm text-muted-foreground">Movie ID: {id}</p>

          <h1 className="mb-4 text-4xl font-bold">Spider-Man</h1>

          <div className="mb-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span>2021</span>
            <span>Action</span>
            <span>⭐ 8.8</span>
          </div>

          <p className="max-w-2xl leading-7 text-muted-foreground">
            A young hero discovers his powers and learns what it means to use
            them responsibly.
          </p>
        </div>
      </div>
    </main>
  );
}
