import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProfilePage() {
  return (
    <main className="py-10">
      <section className="mx-auto max-w-2xl">
        <h1 className="mb-8 text-3xl font-bold">Profile</h1>

        <Card>
          <CardHeader>
            <CardTitle>User Profile</CardTitle>

            <CardDescription>Manage your MovieVerse account.</CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Name</p>
              <p className="font-medium">John Doe</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="font-medium">john@example.com</p>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
