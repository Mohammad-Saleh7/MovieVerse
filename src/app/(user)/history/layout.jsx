import { getLocale } from "next-intl/server";

const metadataByLocale = {
  en: {
    title: "Watch History",
  },
  fa: {
    title: "تاریخچه تماشا",
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

export default function HistoryLayout({ children }) {
  return <>{children}</>;
}
