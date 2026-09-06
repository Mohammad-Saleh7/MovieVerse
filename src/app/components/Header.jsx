"use client";

import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

export default function Header() {
  return (
    <header className="mt-5 flex w-full flex-col gap-5 md:flex-row md:items-center md:justify-between">
      {/* Logo */}
      <div className="flex items-center gap-3 justify-center ">
        <Link href="/" className="shrink-0 ">
          <Image
            src="/header-logo.jpg"
            width={55}
            height={55}
            alt="MovieVerse"
            className="rounded-full object-cover"
          />
        </Link>
        <div className="h-12 w-px bg-gray-950" />
        <Link href={"/"}>
          <h2>MovieVerse</h2>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
        <Link href="/" className="transition-colors hover:text-primary">
          Home
        </Link>

        <Link href="/movies" className="transition-colors hover:text-primary">
          Movies
        </Link>

        <Link href="/tv-shows" className="transition-colors hover:text-primary">
          TV Shows
        </Link>

        <Link href="/trending" className="transition-colors hover:text-primary">
          Trending
        </Link>

        <Link href="/login" className="transition-colors hover:text-primary">
          Login
        </Link>
      </nav>

      {/* Search */}
      <div className="relative w-full md:w-64 lg:w-72">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
        />

        <Input
          type="search"
          placeholder="Search movies..."
          className="w-full pl-10"
        />
      </div>
    </header>
  );
}
