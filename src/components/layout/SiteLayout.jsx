"use client";

import { Suspense } from "react";
import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function SiteLayout({ children }) {
  const pathname = usePathname();

  const isAuthPage = pathname === "/login" || pathname === "/register";

  if (isAuthPage) {
    return <main>{children}</main>;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense fallback={null}>
          <Header />
        </Suspense>

        <main className="page-enter">{children}</main>
      </div>

      <Footer />
    </div>
  );
}
