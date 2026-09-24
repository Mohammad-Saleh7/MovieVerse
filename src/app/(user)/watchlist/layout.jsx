import { getLocale } from "next-intl/server";

const metadataByLocale = {
  en: {
    title: "Watchlist",
  },
  fa: {
    title: "لیست تماشا",
  },
};

export async function generateMetadata() {
  const locale = await getLocale();
  const metadata = metadataByLocale[locale] || metadataByLocale.en;

  return {
    title: {
      absolute: metadata.title,
    },
  };
}

export default function WatchlistLayout({ children }) {
  return <>{children}</>;
}
