import "./globals.css";
import SiteLayout from "@/components/SiteLayout";

export const metadata = {
  title: "MovieVerse",
  description: "MovieVerse - Movies and TV Shows",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
