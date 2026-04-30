import Image from "next/image";

interface CarCardProps {
  name: string;
  price: string;
  acceleration: string;
  imageSrc: string;
  imageAlt: string;
}

export default function CarCard({
  name,
  price,
  acceleration,
  imageSrc,
  imageAlt,
}: CarCardProps) {
  return (
    <div className="group relative bg-[var(--card-bg)] rounded-xl overflow-hidden border border-[var(--card-border)] hover:border-[var(--accent-cyan)]/30 transition-all duration-500 cursor-pointer">
      {/* Car Image */}
      <div className="relative w-full aspect-[3/4] overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
        />
        {/* Gradient overlay on image */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--card-bg)] via-transparent to-transparent" />
      </div>

      {/* Card Info */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        {/* Name & Price */}
        <h3
          className="text-lg font-bold text-white tracking-wide"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {name}
        </h3>
        <p className="text-xs font-semibold text-[var(--accent-cyan)] tracking-wider uppercase mt-1">
          Start at {price}
        </p>

        {/* Specs Row */}
        <div className="flex items-end justify-between mt-4 pt-3 border-t border-white/10">
          <div>
            <p className="text-[10px] text-[var(--text-muted)] uppercase tracking-wider">
              0-60 MPH
            </p>
            <p
              className="text-2xl font-bold text-white mt-0.5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {acceleration}
            </p>
          </div>

          {/* Arrow Button */}
          <button
            className="w-9 h-9 flex items-center justify-center rounded-full border border-white/20 text-white/60 hover:border-[var(--accent-cyan)] hover:text-[var(--accent-cyan)] transition-all duration-300 cursor-pointer"
            aria-label={`View ${name} details`}
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
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
