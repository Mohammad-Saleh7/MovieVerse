"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import SearchHeader from "./Search";
import NavLinks from "./NavLinks";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="border-b py-5">
      <div className="flex items-center justify-between gap-4">
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-3"
        >
          <span className="text-xl font-bold tracking-tight">MovieVerse</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-x-5 text-sm font-medium lg:flex">
          <NavLinks />

          <Link
            href="/profile"
            className="rounded-md border px-3 py-1.5 transition-colors hover:bg-accent"
          >
            Profile
          </Link>

          <Link
            href="/login"
            className="rounded-md bg-primary px-3 py-1.5 text-primary-foreground transition-opacity hover:opacity-90"
          >
            Login
          </Link>
        </nav>

        {/* Desktop Search */}
        <div className="hidden lg:flex gap-5">
          <SearchHeader />
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-md border p-2 transition-colors hover:bg-accent lg:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`grid transition-[grid-template-rows] duration-500 ease-out lg:hidden ${
          isMenuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="mt-5 border-t pt-5">
            <nav className="flex flex-col gap-2">
              <NavLinks mobile onNavigate={closeMenu} />

              <Link
                href="/profile"
                onClick={closeMenu}
                className="rounded-md border px-3 py-2 text-sm font-medium transition-colors hover:bg-accent"
              >
                Profile
              </Link>

              <Link
                href="/login"
                onClick={closeMenu}
                className="rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Login
              </Link>

              {/* Mobile Search */}
              <div className="pt-2">
                <SearchHeader />
              </div>

              {/* Mobile Theme */}
              <div className="flex items-center justify-between rounded-md border px-3 py-2">
                <span className="text-sm font-medium">Theme</span>

                <ThemeToggle />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
