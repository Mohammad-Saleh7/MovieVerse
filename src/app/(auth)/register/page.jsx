import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function RegisterPage() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center py-10">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Create Account</h1>

          <p className="mt-2 text-sm text-muted-foreground">
            Create your MovieVerse account
          </p>
        </div>

        <form className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Name
            </label>

            <Input id="name" type="text" placeholder="Your name" />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>

            <Input id="email" type="email" placeholder="you@example.com" />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>

            <Input id="password" type="password" placeholder="••••••••" />
          </div>

          <Button type="submit" className="w-full">
            Register
          </Button>
        </form>
      </div>
    </main>
  );
}
