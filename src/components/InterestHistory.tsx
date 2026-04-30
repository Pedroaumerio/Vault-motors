import Image from "next/image";

export default function InterestHistory() {
  return (
    <div className="w-full mt-12 lg:mt-16">
      {/* Section Header */}
      <div className="flex items-end justify-between mb-6">
        <h2
          className="text-lg lg:text-xl font-bold text-white tracking-wide"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Interest History
        </h2>
        <button className="text-[10px] font-semibold text-[var(--accent-cyan)] uppercase tracking-widest hover:text-white transition-colors duration-300 flex items-center gap-1 cursor-pointer">
          View All / Print
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Large Card (Left) */}
        <div 
          className="lg:col-span-2 relative group rounded-xl overflow-hidden min-h-[300px] lg:min-h-[400px] flex flex-col justify-end p-6 md:p-8 border border-white/5 hover:border-[var(--accent-cyan)]/20 transition-all duration-500 cursor-pointer"
        >
          <Image
            src="/car-nebula-x.png"
            alt="Vault X-1 Apex"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 66vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent opacity-90" />
          
          <div className="relative z-10 w-full flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-[10px] font-semibold text-[var(--accent-cyan)] uppercase tracking-[0.2em] mb-2">
                Simulated 2 days ago
              </p>
              <h3 
                className="text-2xl md:text-3xl font-bold text-white tracking-wide mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Vault X-1 Apex
              </h3>
              <p className="text-xs text-[var(--text-secondary)] max-w-sm leading-relaxed">
                Dual-motor V12 hybrid with advanced track telemetry setup and custom aero dynamics.
              </p>
            </div>
            
            <div className="shrink-0">
              <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-[0.15em] font-medium mb-1">
                0–60 MPH
              </p>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                  1.8
                </span>
                <span className="text-xs text-[var(--text-secondary)]">s</span>
              </div>
            </div>
          </div>
        </div>

        {/* Smaller Cards (Right) */}
        <div className="flex flex-col gap-6">
          {/* Small Card 1 */}
          <div className="relative group flex-1 rounded-xl overflow-hidden min-h-[160px] flex flex-col justify-end p-5 border border-white/5 hover:border-[var(--accent-cyan)]/20 transition-all duration-500 cursor-pointer">
            <Image
              src="/car-nebula-gtc.png"
              alt="Aero-Disc Alloys"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent opacity-90" />
            
            <div className="relative z-10">
              <p className="text-[9px] font-semibold text-[var(--accent-cyan)] uppercase tracking-[0.2em] mb-1.5">
                Last viewed 1 week ago
              </p>
              <h3 
                className="text-lg font-bold text-white tracking-wide"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Aero-Disc Alloys
              </h3>
            </div>
          </div>

          {/* Small Card 2 */}
          <div className="relative group flex-1 rounded-xl overflow-hidden min-h-[160px] flex flex-col justify-end p-5 border border-white/5 hover:border-[var(--accent-cyan)]/20 transition-all duration-500 cursor-pointer">
            <Image
              src="/car-spectre-xr.png"
              alt="V-GT Touring"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent opacity-90" />
            
            <div className="relative z-10">
              <p className="text-[9px] font-semibold text-[var(--text-muted)] uppercase tracking-[0.2em] mb-1.5 group-hover:text-white/70 transition-colors">
                Awaiting Concierge Reply
              </p>
              <h3 
                className="text-lg font-bold text-white tracking-wide"
                style={{ fontFamily: "var(--font-display)" }}
              >
                V-GT Touring
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
