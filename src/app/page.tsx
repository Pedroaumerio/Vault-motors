import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import EngineeringSection from "@/components/EngineeringSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <EngineeringSection />
      </main>
      <Footer />
    </>
  );
}
