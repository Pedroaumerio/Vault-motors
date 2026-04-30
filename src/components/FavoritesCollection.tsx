"use client";

import { useState } from "react";
import FavoriteCard from "./FavoriteCard";

interface FavoriteVehicle {
  id: string;
  name: string;
  description: string;
  acceleration: string;
  secondaryStat: string;
  secondaryLabel: string;
  imageSrc: string;
  imageAlt: string;
}

const initialFavorites: FavoriteVehicle[] = [
  {
    id: "phantom-v",
    name: "Vault Phantom V",
    description: "Dual-Motor All-Wheel Drive. Obsidian Black finish.",
    acceleration: "1.8s",
    secondaryStat: "250 mph",
    secondaryLabel: "Top Speed",
    imageSrc: "/car-phantom-v.png",
    imageAlt: "Vault Phantom V — obsidian black hypercar in dramatic studio lighting",
  },
  {
    id: "spectre-xr",
    name: "Vault Spectre XR",
    description: "Track-focused aerodynamics package. Liquid Silver.",
    acceleration: "2.1s",
    secondaryStat: "220 mph",
    secondaryLabel: "Top Speed",
    imageSrc: "/car-spectre-xr.png",
    imageAlt: "Vault Spectre XR — silver sport car rear view with red tail lights",
  },
  {
    id: "nebula-gtc",
    name: "Vault Nebula GTC",
    description: "Grand Touring edition with extended range battery cell.",
    acceleration: "2.4s",
    secondaryStat: "520 mi",
    secondaryLabel: "Range",
    imageSrc: "/car-nebula-gtc.png",
    imageAlt: "Vault Nebula GTC — premium forged wheel close-up detail",
  },
];

export default function FavoritesCollection() {
  const [favorites, setFavorites] = useState<FavoriteVehicle[]>(initialFavorites);

  const handleRemove = (id: string) => {
    setFavorites((prev) => prev.filter((fav) => fav.id !== id));
  };

  return (
    <section className="w-full bg-[var(--background)] relative overflow-hidden">
      {/* Subtle background gradient glow */}
      <div
        className="absolute top-0 left-0 right-0 h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 80%, rgba(0, 229, 204, 0.03) 0%, transparent 70%)",
        }}
      />

      {/* Subtle diagonal decorative line */}
      <div
        className="absolute bottom-32 left-0 w-full h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(0, 229, 204, 0.12) 30%, rgba(0, 229, 204, 0.06) 70%, transparent)",
        }}
      />

      <div className="container-center relative z-10 pb-20 lg:pb-28" style={{ paddingTop: '160px' }}>
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
          {/* Title */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white uppercase tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Your Collection
          </h1>

          {/* Vehicle count */}
          <p className="text-[11px] text-[var(--text-muted)] tracking-[0.2em] uppercase font-medium pb-1.5">
            {favorites.length} Vehicle{favorites.length !== 1 ? "s" : ""} Saved
          </p>
        </div>

        {/* Decorative divider under title */}
        <div className="w-full h-px bg-white/6 mb-12 lg:mb-16" />

        {/* Cards Grid */}
        {favorites.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {favorites.map((car) => (
              <FavoriteCard
                key={car.id}
                name={car.name}
                description={car.description}
                acceleration={car.acceleration}
                secondaryStat={car.secondaryStat}
                secondaryLabel={car.secondaryLabel}
                imageSrc={car.imageSrc}
                imageAlt={car.imageAlt}
                onRemove={() => handleRemove(car.id)}
              />
            ))}
          </div>
        ) : (
          /* Empty state */
          <div className="flex flex-col items-center justify-center py-32 text-center">
            <div className="w-16 h-16 flex items-center justify-center rounded-full border border-white/10 mb-6">
              <svg
                className="w-7 h-7 text-[var(--text-muted)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h2
              className="text-xl font-semibold text-white/80 mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              No vehicles saved
            </h2>
            <p className="text-sm text-[var(--text-muted)] max-w-sm">
              Explore our collection and save your favorite vehicles to see them here.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
