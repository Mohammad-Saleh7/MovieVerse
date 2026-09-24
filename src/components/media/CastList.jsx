import Image from "next/image";
import { getTranslations } from "next-intl/server";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w185";

export default async function CastList({ cast = [] }) {
  const t = await getTranslations("movieDetails.cast");

  const visibleCast = cast.filter((person) => person.profile_path).slice(0, 8);

  if (visibleCast.length === 0) {
    return null;
  }

  return (
    <section className="mt-12">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">{t("title")}</h2>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
        {visibleCast.map((person) => (
          <div
            key={person.id}
            className="group overflow-hidden rounded-xl border bg-card transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="relative aspect-[2/3] overflow-hidden bg-muted">
              <Image
                src={`${IMAGE_BASE_URL}${person.profile_path}`}
                alt={person.name}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 185px"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="p-3">
              <h3 className="truncate text-sm font-semibold">{person.name}</h3>

              <p className="mt-1 truncate text-xs text-muted-foreground">
                {person.character || t("unknownRole")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
