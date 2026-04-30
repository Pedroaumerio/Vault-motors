import Image from "next/image";

export default function CarGallery() {
  return (
    <section className="w-full">
      {/* Title */}
      <div className="mb-8">
        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--accent-cyan)] italic tracking-tight leading-[1.1]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          PORSCHE 911 GT3
        </h1>
        <p className="text-[10px] sm:text-xs text-[var(--text-muted)] tracking-[0.25em] uppercase mt-2">
          Precision Engineered • Track Ready
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-4">
        {/* Main Image - takes 3 columns */}
        <div className="md:col-span-3 relative aspect-[4/3] rounded-xl overflow-hidden group">
          <Image
            src="/porsche-gt3-main.png"
            alt="Porsche 911 GT3 front view in desert landscape"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
            quality={90}
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </div>

        {/* Right Column - 2 stacked images */}
        <div className="md:col-span-2 grid grid-rows-2 gap-3">
          {/* Wheel Image */}
          <div className="relative rounded-xl overflow-hidden group">
            <Image
              src="/porsche-wheel.png"
              alt="Porsche 911 GT3 precision-forged wheel"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              quality={85}
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>

          {/* Showroom Image */}
          <div className="relative rounded-xl overflow-hidden group">
            <Image
              src="/showroom-interior.png"
              alt="Vault Motors showroom interior"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              quality={85}
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        </div>
      </div>

      {/* Technical Specifications Label */}
      <p className="text-[10px] text-[var(--text-muted)] tracking-[0.2em] uppercase">
        Technical Specifications
      </p>
    </section>
  );
}
