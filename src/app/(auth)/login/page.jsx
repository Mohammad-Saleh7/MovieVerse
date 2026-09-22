import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default async function LoginPage() {
  const t = await getTranslations("auth.login");

  return (
    <main className="flex min-h-[70vh] items-center justify-center py-10">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold">{t("title")}</h1>

          <p className="mt-2 text-sm text-muted-foreground">
            {t("description")}
          </p>
        </div>

        <form className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              {t("email")}
            </label>

            <Input
              id="email"
              type="email"
              placeholder={t("emailPlaceholder")}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">
              {t("password")}
            </label>

            <Input
              id="password"
              type="password"
              placeholder={t("passwordPlaceholder")}
            />
          </div>

          <Button type="submit" className="w-full">
            {t("submit")}
          </Button>
        </form>

        <p className="text-center text-sm text-muted-foreground">
          {t("noAccount")}{" "}
          <Link
            href="/register"
            className="font-medium text-primary hover:underline"
          >
            {t("register")}
          </Link>
        </p>
      </div>
    </main>
  );
}
