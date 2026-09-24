"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";

export default function Error({ error, reset }) {
  const t = useTranslations("auth.error");

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-[70vh] items-center justify-center py-10">
      <section className="text-center">
        <h2 className="text-2xl font-bold">{t("title")}</h2>

        <p className="mt-2 text-muted-foreground">{t("description")}</p>

        <button
          onClick={() => reset()}
          className="mt-6 rounded-md bg-primary px-4 py-2 text-primary-foreground transition-opacity hover:opacity-90"
        >
          {t("tryAgain")}
        </button>
      </section>
    </main>
  );
}
