import MediaCard from "@/components/media/MediaCard";
import { getTrendingMovies } from "@/lib/tmdb";
import { getLocale, getTranslations } from "next-intl/server";

export default async function TrendingPage() {
  const locale = await getLocale();
  const t = await getTranslations("trending");

  const data = await getTrendingMovies(locale);

  return (
    <main className="py-10">
      <section>
        <h1 className="mb-6 text-3xl font-bold">{t("title")}</h1>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {data.results?.map((movie) => (
            <MediaCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              year={movie.release_date?.slice(0, 4)}
              rating={movie.vote_average}
              overview={movie.overview}
              poster={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : undefined
              }
            />
          ))}
        </div>
      </section>
    </main>
  );
}
