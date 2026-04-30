export default function InterestButton() {
  return (
    <div className="w-full flex justify-center">
      <button className="group px-8 py-3.5 text-xs font-semibold text-[var(--accent-cyan)] border border-[var(--accent-cyan)] rounded hover:bg-[var(--accent-cyan)] hover:text-black transition-all duration-300 tracking-[0.2em] uppercase cursor-pointer flex items-center gap-3">
        Demonstrate Interest
        <svg
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
  );
}
