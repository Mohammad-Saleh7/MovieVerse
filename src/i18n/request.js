import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value || "en";

  const validLocale = locale === "fa" ? "fa" : "en";

  const messages = (await import(`./${validLocale}.json`)).default;

  return {
    locale: validLocale,
    messages,
  };
});
