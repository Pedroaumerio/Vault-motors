import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="hero" className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero-car.png"
          alt="Luxury supercar in a modern garage"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full container-center">
        <div className="max-w-2xl">
          {/* Main Heading */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase tracking-tight leading-[1.1] mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ignite The
            <br />
            Experience
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-white/60 max-w-md mb-8 leading-relaxed">
            Redefining luxury for those who demand excellence.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <button className="px-6 py-3 text-xs sm:text-sm font-semibold text-black bg-[var(--accent-cyan)] rounded hover:bg-[var(--accent-cyan-dark)] transition-all duration-300 tracking-widest uppercase cursor-pointer">
              Explore Collection
            </button>
            <button className="px-6 py-3 text-xs sm:text-sm font-semibold text-white border border-white/30 rounded hover:border-white/60 hover:bg-white/5 transition-all duration-300 tracking-widest uppercase cursor-pointer">
              View Catalog
            </button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </section>
  );
}
