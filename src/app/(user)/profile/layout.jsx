import { getLocale } from "next-intl/server";

const metadataByLocale = {
  en: {
    title: "Profile",
  },
  fa: {
    title: "پروفایل",
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

export default function ProfileLayout({ children }) {
  return <>{children}</>;
}
