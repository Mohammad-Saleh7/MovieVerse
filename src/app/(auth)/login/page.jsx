import { getTranslations } from "next-intl/server";
import LoginForm from "./components/LoginForm";

export async function generateMetadata() {
  const t = await getTranslations("auth.login");

  return {
    title: {
      absolute: t("title"),
    },
  };
}

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

        <LoginForm />

        <p className="text-center text-sm text-muted-foreground">
          {t("noAccount")}{" "}
          <a
            href="/register"
            className="font-medium text-primary hover:underline"
          >
            {t("register")}
          </a>
        </p>
      </div>
    </main>
  );
}
