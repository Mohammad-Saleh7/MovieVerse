"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useTranslations } from "next-intl";

const FALLBACK_POSTER = "/images/poster-placeholder.png";

export default function Hero({ movie }) {
  const t = useTranslations("hero");

  if (!movie) {
    return null;
  }

  const imagePath = movie.backdrop_path || movie.poster_path;

  const poster = imagePath
    ? `https://image.tmdb.org/t/p/w1280${imagePath}`
    : FALLBACK_POSTER;

  return (
    <section className="relative mt-8 overflow-hidden rounded-2xl bg-black">
      <div className="relative min-h-[420px] w-full sm:min-h-[500px] lg:min-h-[600px]">
        <Image
          src={poster}
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          quality={40}
          className="scale-110 object-cover object-center opacity-50 blur-2xl"
        />

        <Image
          src={poster}
          alt={movie.title || t("posterAlt")}
          fill
          priority
          sizes="100vw"
          quality={80}
          className="object-contain object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />

        <div className="absolute inset-0 flex items-end">
          <div className="max-w-2xl p-6 sm:p-10 lg:p-12">
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
              {t("featured")}
            </span>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              {movie.title}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/80">
              <span>{movie.release_date?.slice(0, 4) || "—"}</span>

              <span className="flex items-center gap-1">
                <Star className="size-4 fill-yellow-400 text-yellow-400" />
                {movie.vote_average?.toFixed(1) || "N/A"}
              </span>
            </div>

            <p className="mt-5 max-w-xl line-clamp-3 text-sm leading-7 text-white/75 sm:text-base">
              {movie.overview || t("noOverview")}
            </p>

            <div className="mt-7">
              <Link href={`/movies/${movie.id}`}>
                <Button size="lg" className="cursor-pointer">
                  {t("watchNow")}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
