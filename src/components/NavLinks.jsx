"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/movies", label: "Movies" },
  { href: "/tv-shows", label: "TV Shows" },
  { href: "/trending", label: "Trending" },
  { href: "/top-rated", label: "Top Rated" },
  { href: "/favorites", label: "Favorites" },
  { href: "/watchlist", label: "Watchlist" },
  { href: "/history", label: "History" },
];

export default function NavLinks({ mobile = false, onNavigate }) {
  const pathname = usePathname();

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
                      ? "bg-black text-white dark:bg-accent dark:text-primary"
                      : "hover:bg-accent"
                  }`
                : `transition-colors ${
                    active ? "font-semibold text-primary" : "hover:text-primary"
                  }`
            }
          >
            {item.label}
          </Link>
        );
      })}
    </>
  );
}
