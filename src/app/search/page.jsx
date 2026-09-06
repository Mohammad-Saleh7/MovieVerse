import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function SearchPage() {
  return (
    <main className="py-10">
      <section>
        <h1 className="mb-6 text-3xl font-bold">Search</h1>

        <div className="relative max-w-xl">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          />

          <Input
            type="search"
            placeholder="Search movies and TV shows..."
            className="pl-10"
          />
        </div>
      </section>
    </main>
  );
}
