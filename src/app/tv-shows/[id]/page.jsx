import Image from "next/image";

export default async function TvShowDetailsPage({ params }) {
  const { id } = await params;

  return (
    <main className="py-10">
      <div className="grid gap-8 md:grid-cols-[280px_1fr]">
        <div className="relative h-[400px] overflow-hidden rounded-xl">
          <Image
            src="/movie.jpg"
            alt="Breaking Bad"
            fill
            className="object-cover"
          />
        </div>

        <div>
          <p className="mb-2 text-sm text-muted-foreground">TV Show ID: {id}</p>

          <h1 className="mb-4 text-4xl font-bold">Breaking Bad</h1>

          <div className="mb-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span>2008</span>
            <span>Drama</span>
            <span>⭐ 9.5</span>
          </div>

          <p className="max-w-2xl leading-7 text-muted-foreground">
            A high school chemistry teacher turns to manufacturing
            methamphetamine after being diagnosed with cancer.
          </p>
        </div>
      </div>
    </main>
  );
}
