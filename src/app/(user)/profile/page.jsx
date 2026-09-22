import { getTranslations } from "next-intl/server";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">{t("name")}</p>
              <p className="font-medium">John Doe</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">{t("email")}</p>
              <p className="font-medium">john@example.com</p>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
