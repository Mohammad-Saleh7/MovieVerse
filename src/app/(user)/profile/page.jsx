export default function ProfilePage() {
  return (
    <main className="py-10">
      <section className="mx-auto max-w-2xl">
        <h1 className="mb-8 text-3xl font-bold">Profile</h1>

        <div className="rounded-xl border p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold">User Profile</h2>

            <p className="mt-1 text-sm text-muted-foreground">
              Manage your MovieVerse account.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Name</p>

              <p className="font-medium">John Doe</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Email</p>

              <p className="font-medium">john@example.com</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
