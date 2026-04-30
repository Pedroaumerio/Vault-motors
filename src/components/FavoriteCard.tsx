"use client";

import Image from "next/image";
import { useState } from "react";

interface FavoriteCardProps {
  name: string;
  description: string;
  acceleration: string;
  secondaryStat: string;
  secondaryLabel: string;
  imageSrc: string;
  imageAlt: string;
  onRemove?: () => void;
}

export default function FavoriteCard({
  name,
  description,
  acceleration,
  secondaryStat,
  secondaryLabel,
  imageSrc,
  imageAlt,
  onRemove,
}: FavoriteCardProps) {
  const [isRemoving, setIsRemoving] = useState(false);

  const handleRemove = () => {
    setIsRemoving(true);
    setTimeout(() => {
      onRemove?.();
    }, 400);
  };

  return (
    <div
      className={`group relative rounded-lg overflow-hidden transition-all duration-500 ${
        isRemoving
          ? "opacity-0 scale-95 translate-y-4"
          : "opacity-100 scale-100 translate-y-0"
      }`}
      style={{
        background:
          "linear-gradient(145deg, rgba(20, 20, 20, 0.8), rgba(15, 15, 15, 0.95))",
        border: "1px solid rgba(255, 255, 255, 0.06)",
        backdropFilter: "blur(12px)",
      }}
    >
      {/* Car Image */}
      <div className="relative w-full aspect-[16/10] overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
          quality={90}
        />
        {/* Subtle vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        {/* Border glow on hover */}
        <div className="absolute inset-0 rounded-t-lg border border-transparent group-hover:border-[var(--accent-cyan)]/15 transition-all duration-500 pointer-events-none" />

        {/* Trash Icon */}
        <button
          onClick={handleRemove}
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded bg-black/40 backdrop-blur-sm border border-white/10 text-white/50 hover:text-red-400 hover:border-red-400/30 hover:bg-red-950/40 transition-all duration-300 opacity-0 group-hover:opacity-100 cursor-pointer"
          aria-label={`Remove ${name} from favorites`}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>

      {/* Card Content */}
      <div className="p-5 lg:p-6">
        {/* Name */}
        <h3
          className="text-base lg:text-lg font-bold text-white tracking-wide uppercase"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {name}
        </h3>

        {/* Description */}
        <p className="text-xs text-[var(--text-muted)] mt-1.5 leading-relaxed">
          {description}
        </p>

        {/* Divider */}
        <div className="w-full h-px bg-white/8 mt-4 mb-4" />

        {/* Specs Row */}
        <div className="flex items-end gap-8">
          {/* 0-60 MPH */}
          <div>
            <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-[0.15em] font-medium">
              0–60 MPH
            </p>
            <p className="mt-1 flex items-baseline gap-0.5">
              <span
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {acceleration.replace("s", "")}
              </span>
              <span className="text-xs text-[var(--text-secondary)] font-medium">
                s
              </span>
            </p>
          </div>

          {/* Secondary Stat */}
          <div>
            <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-[0.15em] font-medium">
              {secondaryLabel}
            </p>
            <p className="mt-1 flex items-baseline gap-1">
              <span
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {secondaryStat.split(" ")[0]}
              </span>
              <span className="text-xs text-[var(--text-secondary)] font-medium">
                {secondaryStat.split(" ")[1]}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
