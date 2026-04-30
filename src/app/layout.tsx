import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vault Motors | Precision Luxury Vehicles",
  description:
    "Precision luxury vehicles. Explore our curated collection of the world's finest performance automobiles.",
  keywords: ["luxury cars", "supercars", "performance vehicles", "Vault Motors", "precision luxury"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
