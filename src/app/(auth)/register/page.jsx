import { getTranslations } from "next-intl/server";
import RegisterForm from "./components/RegisterForm";

export async function generateMetadata() {
  const t = await getTranslations("auth.register");

  return {
    title: {
      absolute: t("title"),
    },
  };
}

export default async function RegisterPage() {
  const t = await getTranslations("auth.register");

  return (
    <main className="flex min-h-[70vh] items-center justify-center py-10">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold">{t("title")}</h1>

          <p className="mt-2 text-sm text-muted-foreground">
            {t("description")}
          </p>
        </div>

        <RegisterForm />

        <p className="text-center text-sm text-muted-foreground">
          {t("hasAccount")}{" "}
          <a href="/login" className="font-medium text-primary hover:underline">
            {t("login")}
          </a>
        </p>
      </div>
    </main>
  );
}
