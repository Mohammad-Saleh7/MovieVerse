export default function TvShowMetadata({ show }) {
  const formatDate = (date) => {
    if (!date) return "N/A";

    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(date));
  };

  return (
    <section className="mt-12">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">TV Show Info</h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border bg-card p-5">
          <p className="text-sm text-muted-foreground">First Air Date</p>
          <p className="mt-2 font-semibold">
            {formatDate(show.first_air_date)}
          </p>
        </div>

        <div className="rounded-xl border bg-card p-5">
          <p className="text-sm text-muted-foreground">Last Air Date</p>
          <p className="mt-2 font-semibold">{formatDate(show.last_air_date)}</p>
        </div>

        <div className="rounded-xl border bg-card p-5">
          <p className="text-sm text-muted-foreground">Seasons</p>
          <p className="mt-2 font-semibold">
            {show.number_of_seasons || "N/A"}
          </p>
        </div>

        <div className="rounded-xl border bg-card p-5">
          <p className="text-sm text-muted-foreground">Episodes</p>
          <p className="mt-2 font-semibold">
            {show.number_of_episodes || "N/A"}
          </p>
        </div>

        <div className="rounded-xl border bg-card p-5">
          <p className="text-sm text-muted-foreground">Status</p>
          <p className="mt-2 font-semibold">{show.status || "N/A"}</p>
        </div>

        <div className="rounded-xl border bg-card p-5">
          <p className="text-sm text-muted-foreground">Original Language</p>
          <p className="mt-2 font-semibold uppercase">
            {show.original_language || "N/A"}
          </p>
        </div>

        <div className="rounded-xl border bg-card p-5">
          <p className="text-sm text-muted-foreground">Episode Runtime</p>
          <p className="mt-2 font-semibold">
            {show.episode_run_time?.length
              ? `${show.episode_run_time[0]} min`
              : "N/A"}
          </p>
        </div>

        <div className="rounded-xl border bg-card p-5">
          <p className="text-sm text-muted-foreground">Type</p>
          <p className="mt-2 font-semibold">{show.type || "N/A"}</p>
        </div>
      </div>

      {/* Networks */}
      {show.networks?.length > 0 && (
        <div className="mt-8">
          <h3 className="mb-4 text-lg font-semibold">Networks</h3>

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

      {/* Production Companies */}
      {show.production_companies?.length > 0 && (
        <div className="mt-8">
          <h3 className="mb-4 text-lg font-semibold">Production Companies</h3>

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
