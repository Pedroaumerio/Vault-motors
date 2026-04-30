import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProfileCard from "@/components/ProfileCard";
import InterestHistory from "@/components/InterestHistory";
import SystemProtocol from "@/components/SystemProtocol";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile | Vault Motors",
  description: "Manage your Vault Motors account, history, and preferences.",
};

export default function ProfilePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--background)]">
      <Header />
      
      <main className="flex-1 container-center pt-28 pb-20 lg:pt-36 lg:pb-32">
        <div className="flex flex-col gap-6 lg:gap-8 max-w-5xl mx-auto">
          <ProfileCard />
          <InterestHistory />
          <SystemProtocol />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
