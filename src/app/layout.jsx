import "./globals.css";
import SiteLayout from "@/components/SiteLayout";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata = {
  title: "MovieVerse",
  description: "MovieVerse - Movies and TV Shows",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <ThemeProvider>
          <SiteLayout>{children}</SiteLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
