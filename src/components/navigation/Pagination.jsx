import Link from "next/link";
import { getTranslations } from "next-intl/server";

export default async function Pagination({
  currentPage,
  totalPages,
  category,
  basePath,
}) {
  const t = await getTranslations("pagination");

  const previousPage = currentPage - 1;
  const nextPage = currentPage + 1;

  return (
    <div className="mt-10 flex items-center justify-center gap-2">
      {currentPage > 1 && (
        <Link
          href={`${basePath}?category=${category}&page=${previousPage}`}
          className="rounded-md border px-4 py-2 text-sm hover:bg-accent"
        >
          {t("previous")}
        </Link>
      )}

      <span className="px-4 py-2 text-sm font-medium">
        {t("pageOf", {
          currentPage,
          totalPages,
        })}
      </span>

      {currentPage < totalPages && (
        <Link
          href={`${basePath}?category=${category}&page=${nextPage}`}
          className="rounded-md border px-4 py-2 text-sm hover:bg-accent"
        >
          {t("next")}
        </Link>
      )}
    </div>
  );
}
