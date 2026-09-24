import Link from "next/link";
import { getTranslations } from "next-intl/server";

export default async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <main className="flex min-h-[60vh] items-center justify-center px-4 py-10">
      <section className="text-center">
        <p className="text-6xl font-bold text-primary">404</p>

        <h1 className="mt-4 text-3xl font-bold">{t("title")}</h1>

        <p className="mt-2 text-muted-foreground">{t("description")}</p>

        <Link
          href="/"
          className="mt-6 inline-flex rounded-md bg-primary px-4 py-2 text-primary-foreground transition-opacity hover:opacity-90"
        >
          {t("backHome")}
        </Link>
      </section>
    </main>
  );
}
