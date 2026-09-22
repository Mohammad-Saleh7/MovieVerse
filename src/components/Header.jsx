"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import SearchHeader from "./Search";
import NavLinks from "./NavLinks";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useTranslations } from "next-intl";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations("header");

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
            {t("profile")}
          </Link>

          <Link
            href="/login"
            className="rounded-md bg-primary px-3 py-1.5 text-primary-foreground transition-opacity hover:opacity-90"
          >
            {t("login")}
          </Link>
        </nav>

        {/* Desktop Search & Controls */}
        <div className="hidden items-center gap-3 lg:flex">
          <SearchHeader />

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-md border p-2 transition-colors hover:bg-accent lg:hidden"
          aria-label={isMenuOpen ? t("closeMenu") : t("openMenu")}
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

              <div className="mt-2 flex flex-col gap-2 border-t pt-3">
                <Link
                  href="/profile"
                  onClick={closeMenu}
                  className="flex items-center justify-center rounded-lg border px-3 py-2.5 text-sm font-medium transition-all duration-200 hover:bg-accent hover:shadow-sm"
                >
                  {t("profile")}
                </Link>

                <Link
                  href="/login"
                  onClick={closeMenu}
                  className="flex items-center justify-center rounded-lg bg-primary px-3 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-md"
                >
                  {t("login")}
                </Link>

                <div className="w-full pt-1">
                  <LanguageToggle />
                </div>
              </div>

              {/* Mobile Search */}
              <div className="pt-2">
                <SearchHeader />
              </div>

              {/* Mobile Theme */}
              <div className="flex items-center justify-between rounded-md border px-3 py-2">
                <span className="text-sm font-medium">{t("theme")}</span>

                <ThemeToggle />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
