import Image from "next/image";

export default function CarDescription() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* Text Content */}
        <div className="space-y-6">
          <h2
            className="text-3xl sm:text-4xl lg:text-[2.5rem] font-normal text-white leading-[1.2] italic"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            The pinnacle of naturally aspirated performance.
          </h2>

          <div className="space-y-5">
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Forged on the track and refined for the road, the GT3 represents
              the purest distillation of driving dynamics. Every line, every
              intake, and every aerodynamic element serves a singular purpose:
              absolute control at the absolute limit.
            </p>

            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Experience razor-sharp throttle response, telepathic steering, and
              a soundtrack that revs to an astronomical 9,000 RPM. This is not
              just transport; it is a mechanical symphony.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden group">
          <Image
            src="/porsche-gt3-black.png"
            alt="Porsche 911 GT3 in black with red accents, rear three-quarter view"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            quality={90}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
