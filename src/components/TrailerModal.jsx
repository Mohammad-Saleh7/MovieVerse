"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function TrailerModal({ trailerKey, title }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const t = useTranslations("movieDetails");

  useEffect(() => {
    setMounted(true);

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  if (!trailerKey) {
    return null;
  }

  const modal = (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} trailer`}
      onClick={() => setOpen(false)}
    >
      <div
        className="relative w-full max-w-5xl overflow-hidden rounded-xl bg-black shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label={t("closeTrailer")}
          className="absolute right-3 top-3 z-20 flex size-10 cursor-pointer items-center justify-center rounded-full bg-black/70 text-white transition-colors hover:bg-black"
        >
          <X className="size-5" />
        </button>

        <div className="aspect-video w-full bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1&rel=0`}
            title={`${title} trailer`}
            className="block h-full w-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <Button
        type="button"
        onClick={() => setOpen(true)}
        className="cursor-pointer"
      >
        ▶ {t("watchTrailer")}
      </Button>

      {mounted && open && createPortal(modal, document.body)}
    </>
  );
}
