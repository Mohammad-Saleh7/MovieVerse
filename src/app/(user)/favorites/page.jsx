import { getTranslations } from "next-intl/server";
import FavoritesList from "./components/FavoritesList";

export default async function FavoritesPage() {
  const t = await getTranslations("favorites");

  return (
    <main className="py-10">
      <section>
        <h1 className="mb-6 text-3xl font-bold">{t("title")}</h1>

        <FavoritesList />
      </section>
    </main>
  );
}
