export default function MovieMetadata({ movie }) {
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

    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(new Date(date));
  };

  return (
    <section className="mt-12">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Movie Info</h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border bg-card p-5">
          <p className="text-sm text-muted-foreground">Release Date</p>
          <p className="mt-2 font-semibold">{formatDate(movie.release_date)}</p>
        </div>

        <div className="rounded-xl border bg-card p-5">
          <p className="text-sm text-muted-foreground">Runtime</p>
          <p className="mt-2 font-semibold">
            {movie.runtime ? `${movie.runtime} min` : "N/A"}
          </p>
        </div>

        <div className="rounded-xl border bg-card p-5">
          <p className="text-sm text-muted-foreground">Status</p>
          <p className="mt-2 font-semibold">{movie.status || "N/A"}</p>
        </div>

        <div className="rounded-xl border bg-card p-5">
          <p className="text-sm text-muted-foreground">Original Language</p>
          <p className="mt-2 font-semibold uppercase">
            {movie.original_language || "N/A"}
          </p>
        </div>

        <div className="rounded-xl border bg-card p-5">
          <p className="text-sm text-muted-foreground">Budget</p>
          <p className="mt-2 font-semibold">{formatCurrency(movie.budget)}</p>
        </div>

        <div className="rounded-xl border bg-card p-5">
          <p className="text-sm text-muted-foreground">Revenue</p>
          <p className="mt-2 font-semibold">{formatCurrency(movie.revenue)}</p>
        </div>
      </div>
    </section>
  );
}
