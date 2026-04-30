import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CarGallery from "@/components/CarGallery";
import TechnicalSpecs from "@/components/TechnicalSpecs";
import CarDescription from "@/components/CarDescription";
import InterestButton from "@/components/InterestButton";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Catalog | Vault Motors",
  description: "Explore the precision engineered Porsche 911 GT3.",
};

export default function CatalogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 container-center pt-28 pb-20 lg:pt-36 lg:pb-32">
        <div className="flex flex-col gap-6">
          <CarGallery />
          <TechnicalSpecs />
        </div>
        
        <div className="mt-24 lg:mt-32">
          <CarDescription />
        </div>
        
        <div className="mt-24 lg:mt-32">
          <InterestButton />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
