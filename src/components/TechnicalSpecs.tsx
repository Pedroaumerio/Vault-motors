const specs = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    value: "320",
    label: "Top Speed (km/h)",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    value: "510",
    label: "Horsepower (HP)",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    value: "3.4s",
    label: "0-100 km/h",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    value: "Flat-6",
    label: "Naturally Aspirated",
  },
];

export default function TechnicalSpecs() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {specs.map((spec) => (
          <div
            key={spec.label}
            className="relative bg-[var(--card-bg)] rounded-xl border border-[var(--card-border)] p-5 sm:p-6 hover:border-[var(--accent-cyan)]/20 transition-all duration-500 group"
          >
            {/* Icon */}
            <div className="text-[var(--accent-cyan)] mb-4 transition-transform duration-300 group-hover:scale-110">
              {spec.icon}
            </div>

            {/* Value */}
            <p
              className="text-3xl sm:text-4xl font-bold text-white tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {spec.value}
            </p>

            {/* Label */}
            <p className="text-[10px] text-[var(--text-muted)] tracking-[0.15em] uppercase mt-2">
              {spec.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
