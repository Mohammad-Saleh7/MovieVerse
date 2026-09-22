"use client";

import { Input } from "@base-ui/react";
import { Search, X } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

export default function SearchHeader() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const t = useTranslations("search");

  const currentQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(currentQuery);

  useEffect(() => {
    setQuery(currentQuery);
  }, [currentQuery]);

  function handleSubmit(e) {
    e.preventDefault();

    const trimmedQuery = query.trim();

    if (!trimmedQuery) return;

    router.push(`/search?q=${encodeURIComponent(trimmedQuery)}`);
  }

  function handleClear() {
    setQuery("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="group relative w-full md:w-72 lg:w-80"
    >
      <Search
        size={18}
        className="pointer-events-none absolute left-3.5 top-1/2 z-10 -translate-y-1/2 text-muted-foreground transition-colors duration-200 group-focus-within:text-primary"
      />

      <Input
        type="search"
        placeholder={t("placeholder")}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="h-10 w-full rounded-full border-border/60 bg-muted/40 pl-10 pr-10 text-sm shadow-sm transition-all duration-200 placeholder:text-muted-foreground/70 hover:border-border hover:bg-muted/60 focus:border-black focus:ring-2 focus:ring-black/10 [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-decoration]:appearance-none"
      />
      {query && (
        <button
          type="button"
          onClick={handleClear}
          aria-label={t("clear")}
          className="absolute right-3 top-1/2 z-10 flex size-6 -translate-y-1/2 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        >
          <X size={15} />
        </button>
      )}
    </form>
  );
}
