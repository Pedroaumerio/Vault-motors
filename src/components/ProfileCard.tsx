"use client";

import Image from "next/image";

export default function ProfileCard() {
  return (
    <div className="w-full relative group">
      {/* Decorative subtle background glow */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--accent-cyan)]/0 via-[var(--accent-cyan)]/10 to-[var(--accent-cyan)]/0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur" />
      
      <div
        className="relative w-full rounded-xl overflow-hidden p-6 sm:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 lg:gap-8 transition-all duration-500"
        style={{
          background: "linear-gradient(145deg, rgba(20, 20, 20, 0.8), rgba(15, 15, 15, 0.95))",
          border: "1px solid rgba(255, 255, 255, 0.06)",
          backdropFilter: "blur(12px)",
        }}
      >
        {/* Avatar */}
        <div className="relative shrink-0 w-24 h-24 sm:w-28 sm:h-28 rounded-lg overflow-hidden border border-[var(--accent-cyan)]/30 group-hover:border-[var(--accent-cyan)]/60 transition-colors duration-500 shadow-[0_0_15px_rgba(0,229,204,0.15)]">
          <Image
            src="/avatar-elias.png"
            alt="Elias Thorne"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 96px, 112px"
          />
        </div>

        {/* Info Area */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start w-full">
          {/* Header section (Name & Badge) */}
          <div className="flex flex-col sm:flex-row items-center sm:items-baseline gap-2 sm:gap-4 mb-6 md:mb-8 text-center md:text-left">
            <h1
              className="text-2xl sm:text-3xl font-bold text-white tracking-wide"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Elias Thorne
            </h1>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[var(--accent-cyan)]/10 border border-[var(--accent-cyan)]/20 text-[var(--accent-cyan)]">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="text-[10px] font-semibold tracking-widest uppercase">Platinum Member</span>
            </div>
          </div>

          {/* Stats / Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 w-full md:w-auto">
            {/* Base Hangar */}
            <div className="flex flex-col items-center md:items-start">
              <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-[0.15em] font-medium mb-1.5">
                Base Hangar
              </span>
              <span className="text-sm font-medium text-white/90">
                Sector 4, Neo-Zurich
              </span>
            </div>

            {/* Simulations */}
            <div className="flex flex-col items-center md:items-start sm:border-l border-white/10 sm:pl-4">
              <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-[0.15em] font-medium mb-1.5">
                Simulations
              </span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                  04
                </span>
                <span className="text-xs text-[var(--text-secondary)]">Logged</span>
              </div>
            </div>

            {/* Acquisitions */}
            <div className="flex flex-col items-center md:items-start sm:border-l border-white/10 sm:pl-4">
              <span className="text-[10px] text-[var(--text-muted)] uppercase tracking-[0.15em] font-medium mb-1.5">
                Acquisitions
              </span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                  01
                </span>
                <span className="text-xs text-[var(--accent-cyan)] font-medium">Pending</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
