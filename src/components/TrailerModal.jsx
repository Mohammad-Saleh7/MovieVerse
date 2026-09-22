"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function TrailerModal({ trailerKey, title }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [position, setPosition] = useState(null);
  const buttonRef = useRef(null);

  const t = useTranslations("movieDetails");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

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

  const handleOpen = () => {
    const rect = buttonRef.current?.getBoundingClientRect();
    if (rect) {
      setPosition({
        top: rect.bottom + window.scrollY + 8, // کمی پایین‌تر از دکمه
        left: rect.left + window.scrollX,
      });
    }
    setOpen(true);
  };

  if (!trailerKey) return null;

  const modal = open ? (
    <div
      className="fixed inset-0 z-[9999] bg-black/80"
      onClick={() => setOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-label={`${title} trailer`}
    >
      <div
        className="absolute w-full max-w-5xl overflow-hidden rounded-xl bg-black shadow-2xl"
        style={
          position
            ? {
                top: position.top,
                left: position.left,
                // مطمئن شو از صفحه بیرون نمی‌زنه
                maxWidth: `min(64rem, calc(100vw - ${position.left * 2}px))`,
              }
            : { top: "1.5rem", left: "50%", transform: "translateX(-50%)" }
        }
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label={t("closeTrailer")}
          className="absolute right-3 top-3 z-10 flex size-9 items-center justify-center rounded-full bg-black/70 text-white transition-colors hover:bg-black"
        >
          <X className="size-5" />
        </button>

        <div className="aspect-video w-full">
          <iframe
            src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
            title={`${title} trailer`}
            className="block h-full w-full"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <Button
        ref={buttonRef}
        type="button"
        onClick={handleOpen}
        className="cursor-pointer"
      >
        ▶ {t("watchTrailer")}
      </Button>

      {mounted && createPortal(modal, document.body)}
    </>
  );
}
