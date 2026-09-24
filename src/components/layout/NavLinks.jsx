"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

const navItems = [
  { href: "/", key: "home" },
  { href: "/movies", key: "movies" },
  { href: "/tv-shows", key: "tvShows" },
  { href: "/trending", key: "trending" },
  { href: "/top-rated", key: "topRated" },
  { href: "/favorites", key: "favorites" },
  { href: "/watchlist", key: "watchlist" },
  { href: "/history", key: "history" },
];

export default function NavLinks({ mobile = false, onNavigate }) {
  const pathname = usePathname();
  const t = useTranslations("nav");

  function isActive(href) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  }

  return (
    <>
      {navItems.map((item) => {
        const active = isActive(item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={
              mobile
                ? `rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "bg-black text-white dark:bg-white dark:text-black"
                      : "hover:bg-accent"
                  }`
                : `transition-colors ${
                    active
                      ? "font-bold text-primary text-2xl "
                      : "hover:text-primary"
                  }`
            }
          >
            {t(item.key)}
          </Link>
        );
      })}
    </>
  );
}
