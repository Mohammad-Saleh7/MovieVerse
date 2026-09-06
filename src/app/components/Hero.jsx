"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative mt-8 overflow-hidden rounded-2xl">
      <div className="relative h-[350px] sm:h-[400px] lg:h-[500px] w-full">
        <Image
          src="/movie.jpg"
          alt="Featured movie"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-2xl p-5 sm:p-8 lg:p-10">
            <p className="mb-2 text-sm font-medium text-white/70">
              Featured Movie
            </p>

            <h1 className="mb-4 text-2xl sm:text-4xl lg:text-5xl font-bold text-white sm:text-5xl">
              Spider-Man
            </h1>

            <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-white/80">
              <span>2021</span>
              <span>•</span>
              <span>Action</span>
              <span>•</span>
              <span>⭐ 8.8</span>
            </div>

            <p className="mb-6 max-w-xl text-sm leading-6 text-white/80 sm:text-base">
              A young hero discovers his powers and learns what it means to use
              them responsibly.
            </p>

            <Link href={"/movies/1"}>
              <Button className={"cursor-pointer"}>Watch Now</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
