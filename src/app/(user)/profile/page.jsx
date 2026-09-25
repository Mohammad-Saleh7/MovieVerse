import { getTranslations } from "next-intl/server";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import ProfileInfo from "./components/ProfileInfo";

export default async function ProfilePage() {
  const t = await getTranslations("profile");

  return (
    <main className="py-10">
      <section className="mx-auto max-w-2xl">
        <h1 className="mb-8 text-3xl font-bold">{t("title")}</h1>

        <Card>
          <CardHeader>
            <CardTitle>{t("userProfile")}</CardTitle>

            <CardDescription>{t("description")}</CardDescription>
          </CardHeader>

          <CardContent>
            <ProfileInfo
              labels={{
                name: t("name"),
                email: t("email"),
              }}
            />
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
