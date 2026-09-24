"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();

  function toggleLanguage() {
    const nextLocale = locale === "en" ? "fa" : "en";

    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000`;

    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      className=" cursor-pointer flex h-10 w-full items-center justify-center rounded-lg border text-sm font-medium transition-all duration-200 hover:bg-accent hover:shadow-sm"
      aria-label={locale === "en" ? "Switch to Persian" : "Switch to English"}
    >
      {locale === "en" ? "FA" : "EN"}
    </button>
  );
}
