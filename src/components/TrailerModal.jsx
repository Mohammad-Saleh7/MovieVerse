"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TrailerModal({ trailerKey, title }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  if (!trailerKey) return null;

  return (
    <>
      <Button
        type="button"
        onClick={() => setOpen(true)}
        className="cursor-pointer"
      >
        ▶ Watch Trailer
      </Button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`${title} trailer`}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-xl bg-black shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close trailer"
              className="absolute right-3 top-3 z-10 flex size-9 items-center justify-center rounded-full bg-black/70 text-white transition-colors hover:bg-black"
            >
              <X className="size-5" />
            </button>

            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
                title={`${title} trailer`}
                className="h-full w-full"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
