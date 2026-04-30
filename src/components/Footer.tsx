import Link from "next/link";

const footerLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Hangar Locations", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Press", href: "#" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[var(--card-bg)] border-t border-[var(--card-border)]">
      <div className="container-center py-8 lg:py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex-shrink-0">
            <span
              className="text-white font-bold text-sm tracking-[0.15em] uppercase"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Vault
            </span>{" "}
            <span
              className="text-white font-light text-sm tracking-[0.15em] uppercase"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Motors
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[10px] text-[var(--text-muted)] hover:text-[var(--accent-cyan)] transition-colors duration-300 tracking-[0.12em] uppercase"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-[10px] text-[var(--text-muted)] tracking-wider text-right max-w-[200px]">
            © 2026 VAULT MOTORS. PRECISION LUXURY.
          </p>
        </div>
      </div>
    </footer>
  );
}
