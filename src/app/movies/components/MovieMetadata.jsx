import { getTranslations } from "next-intl/server";

export default async function MovieMetadata({ movie }) {
  const t = await getTranslations("movieDetails.metadata");

  const formatCurrency = (value) => {
    if (!value) return "N/A";

    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatDate = (date) => {
    if (!date) return "N/A";

    return new Intl.DateTimeFormat(t("locale") === "fa" ? "fa-IR" : "en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(date));
  };

  return (
    <section className="mt-12">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">{t("title")}</h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border bg-card p-5">
          <p className="text-sm text-muted-foreground">{t("releaseDate")}</p>

          <p className="mt-2 font-semibold">{formatDate(movie.release_date)}</p>
        </div>

        <div className="rounded-xl border bg-card p-5">
          <p className="text-sm text-muted-foreground">{t("runtime")}</p>

          <p className="mt-2 font-semibold">
            {movie.runtime ? `${movie.runtime} ${t("minutes")}` : "N/A"}
          </p>
        </div>

        <div className="rounded-xl border bg-card p-5">
          <p className="text-sm text-muted-foreground">{t("status")}</p>

          <p className="mt-2 font-semibold">{movie.status || "N/A"}</p>
        </div>

        <div className="rounded-xl border bg-card p-5">
          <p className="text-sm text-muted-foreground">
            {t("originalLanguage")}
          </p>

          <p className="mt-2 font-semibold uppercase">
            {movie.original_language || "N/A"}
          </p>
        </div>

        <div className="rounded-xl border bg-card p-5">
          <p className="text-sm text-muted-foreground">{t("budget")}</p>

          <p className="mt-2 font-semibold">{formatCurrency(movie.budget)}</p>
        </div>

        <div className="rounded-xl border bg-card p-5">
          <p className="text-sm text-muted-foreground">{t("revenue")}</p>

          <p className="mt-2 font-semibold">{formatCurrency(movie.revenue)}</p>
        </div>
      </div>
    </section>
  );
}
