import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FavoritesCollection from "@/components/FavoritesCollection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Favorites | Vault Motors",
  description: "View your collection of saved luxury vehicles.",
};

export default function FavoritesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)]">
      <Header />
      
      <main className="flex-1 flex flex-col">
        <FavoritesCollection />
      </main>
      
      <Footer />
    </div>
  );
}
