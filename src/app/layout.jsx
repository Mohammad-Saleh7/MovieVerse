import "./globals.css";
import SiteLayout from "@/components/layout/SiteLayout";
import ThemeProvider from "../components/theme/ThemeProvider";
import { Ubuntu } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
const ubuntu = Ubuntu({
  subsets: ["latin"],
  variable: "--font-ubuntu",
  weight: ["300", "400", "500", "700"],
});

const metadataByLocale = {
  en: {
    title: "MovieVerse",
    description: "Discover movies and TV shows you love.",
  },
  fa: {
    title: "مووی ورس",
    description: "فیلم‌ها و سریال‌های مورد علاقه‌تان را کشف کنید.",
  },
};

export async function generateMetadata() {
  const locale = await getLocale();

  return {
    title: {
      default: metadataByLocale[locale]?.title || metadataByLocale.en.title,
      template: `%s | MovieVerse`,
    },
    description:
      metadataByLocale[locale]?.description || metadataByLocale.en.description,
    icons: {
      icon: "/logo.png",
      shortcut: "/logo.png",
      apple: "/logo.png",
    },
  };
}

export default async function RootLayout({ children }) {
  const locale = await getLocale();
  const messages = await getMessages();

  const isRTL = locale === "fa";

  return (
    <html
      lang={locale}
      dir={isRTL ? "rtl" : "ltr"}
      suppressHydrationWarning
      className={ubuntu.variable}
    >
      <body className="min-h-screen antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider>
            <SiteLayout>{children}</SiteLayout>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
