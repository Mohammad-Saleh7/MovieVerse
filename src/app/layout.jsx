import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "MovieVerse",
  description: "MovieVerse - Movies and TV Shows",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Header />

          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
