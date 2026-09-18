import FavoritesList from "./components/FavoritesList";

export default function FavoritesPage() {
  return (
    <main className="py-10">
      <section>
        <h1 className="mb-6 text-3xl font-bold">My Favorites</h1>

        <FavoritesList />
      </section>
    </main>
  );
}
