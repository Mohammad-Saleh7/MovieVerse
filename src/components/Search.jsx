"use client";

import { Input } from "@base-ui/react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchHeader() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!query.trim()) return;

    router.push(`/search?q=${encodeURIComponent(query.trim())}`);
  }

  return (
    <form onSubmit={handleSubmit} className="relative w-full md:w-64 lg:w-72">
      <Search
        size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
      />

      <Input
        type="search"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full pl-10"
      />
    </form>
  );
}
