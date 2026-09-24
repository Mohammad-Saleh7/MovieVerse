"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTranslations } from "next-intl";

const FALLBACK_POSTER = "/images/poster-placeholder.png";

export default function MediaCard({
  id,
  title,
  year,
  rating,
  poster,
  overview,
  type = "movie",
  priority = false,
}) {
  const t = useTranslations("mediaCard");

  const href = `/${type === "tv" ? "tv-shows" : "movies"}/${id}`;

  return (
    <Link
      href={href}
      aria-label={title}
      className="group block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      <Card className="w-full max-w-xs gap-0 overflow-hidden p-0 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
        <div className="group/poster relative aspect-[2/3] w-full overflow-hidden bg-muted">
          <Image
            src={poster || FALLBACK_POSTER}
            alt={`پوستر ${title}`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 320px"
            priority={priority}
            className="object-cover transition-transform duration-500 ease-out group-hover/poster:scale-105"
          />

          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover/poster:opacity-100 dark:bg-[radial-gradient(circle_at_center,rgba(17,47,137,0.22),transparent_65%)] bg-[radial-gradient(circle_at_center,rgba(49,92,255,0.12),transparent_65%)]" />
        </div>

        <CardContent className="space-y-2 p-4">
          <h3 className="truncate text-lg font-semibold transition-colors group-hover:text-primary">
            {title}
          </h3>

          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{year ?? "—"}</span>

            <span className="flex items-center gap-1 font-medium">
              <Star className="size-4 fill-yellow-400 text-yellow-400" />
              {rating ? Number(rating).toFixed(1) : "N/A"}
            </span>
          </div>

          <p className="line-clamp-2 min-h-[48px] text-sm leading-6 text-muted-foreground">
            {overview || t("noOverview")}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
