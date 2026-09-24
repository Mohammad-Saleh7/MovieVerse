import { getLocale } from "next-intl/server";

const metadataByLocale = {
  en: {
    title: "Favorites",
  },
  fa: {
    title: "علاقه‌مندی‌ها",
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

export default function FavoritesLayout({ children }) {
  return <>{children}</>;
}
