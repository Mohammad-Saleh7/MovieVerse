import { getLocale, getTranslations } from "next-intl/server";

export default async function TvShowMetadata({ show }) {
  const locale = await getLocale();
  const t = await getTranslations("tvShowMetadata");

  const formatDate = (date) => {
    if (!date) return t("na");

    return new Intl.DateTimeFormat(locale === "fa" ? "fa-IR" : "en-US", {
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
          <p className="text-sm text-muted-foreground">{t("firstAirDate")}</p>
          <p className="mt-2 font-semibold">
            {formatDate(show.first_air_date)}
          </p>
        </div>

        <div className="rounded-xl border bg-card p-5">
          <p className="text-sm text-muted-foreground">{t("lastAirDate")}</p>
          <p className="mt-2 font-semibold">{formatDate(show.last_air_date)}</p>
        </div>

        <div className="rounded-xl border bg-card p-5">
          <p className="text-sm text-muted-foreground">{t("seasons")}</p>
          <p className="mt-2 font-semibold">
            {show.number_of_seasons || t("na")}
          </p>
        </div>

        <div className="rounded-xl border bg-card p-5">
          <p className="text-sm text-muted-foreground">{t("episodes")}</p>
          <p className="mt-2 font-semibold">
            {show.number_of_episodes || t("na")}
          </p>
        </div>

        <div className="rounded-xl border bg-card p-5">
          <p className="text-sm text-muted-foreground">{t("status")}</p>
          <p className="mt-2 font-semibold">{show.status || t("na")}</p>
        </div>

        <div className="rounded-xl border bg-card p-5">
          <p className="text-sm text-muted-foreground">
            {t("originalLanguage")}
          </p>
          <p className="mt-2 font-semibold uppercase">
            {show.original_language || t("na")}
          </p>
        </div>

        <div className="rounded-xl border bg-card p-5">
          <p className="text-sm text-muted-foreground">{t("episodeRuntime")}</p>
          <p className="mt-2 font-semibold">
            {show.episode_run_time?.length
              ? `${show.episode_run_time[0]} ${t("minutes")}`
              : t("na")}
          </p>
        </div>

        <div className="rounded-xl border bg-card p-5">
          <p className="text-sm text-muted-foreground">{t("type")}</p>
          <p className="mt-2 font-semibold">{show.type || t("na")}</p>
        </div>
      </div>

      {show.networks?.length > 0 && (
        <div className="mt-8">
          <h3 className="mb-4 text-lg font-semibold">{t("networks")}</h3>

          <div className="flex flex-wrap gap-3">
            {show.networks.map((network) => (
              <div
                key={network.id}
                className="rounded-xl border bg-card px-4 py-3"
              >
                <p className="font-medium">{network.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {show.production_companies?.length > 0 && (
        <div className="mt-8">
          <h3 className="mb-4 text-lg font-semibold">
            {t("productionCompanies")}
          </h3>

          <div className="flex flex-wrap gap-3">
            {show.production_companies.map((company) => (
              <div
                key={company.id}
                className="rounded-xl border bg-card px-4 py-3"
              >
                <p className="font-medium">{company.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
