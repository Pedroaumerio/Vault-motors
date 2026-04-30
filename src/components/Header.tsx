"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Explore", href: "/" },
  { label: "Catalog", href: "/catalog" },
  { label: "Favorites", href: "/favorites" },
  { label: "Profile", href: "/profile" },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-white/5">
      <div className="container-center">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span
              className="text-white font-bold text-base tracking-[0.15em] uppercase"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Vault
            </span>
            <span
              className="text-white font-light text-base tracking-[0.15em] uppercase"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Motors
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive =
                link.href === pathname ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative text-sm tracking-wide transition-colors duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-[var(--text-secondary)] hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[1px] bg-white" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Search Icon */}
            <button
              className="p-2 text-[var(--accent-cyan)] hover:text-white transition-colors duration-300 cursor-pointer"
              aria-label="Search"
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            {/* Inquiry Button */}
            <button className="px-5 py-2 text-xs font-semibold text-[var(--accent-cyan)] border border-[var(--accent-cyan)] rounded hover:bg-[var(--accent-cyan)] hover:text-black transition-all duration-300 tracking-[0.15em] uppercase cursor-pointer">
              Inquiry
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white p-2 cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 space-y-3 bg-black/90 border-t border-white/5">
          {navLinks.map((link) => {
            const isActive =
              link.href === pathname ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`block text-sm transition-colors duration-300 tracking-wide ${
                  isActive
                    ? "text-white"
                    : "text-[var(--text-secondary)] hover:text-white"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <button className="w-full mt-2 px-5 py-2 text-xs font-semibold text-[var(--accent-cyan)] border border-[var(--accent-cyan)] rounded hover:bg-[var(--accent-cyan)] hover:text-black transition-all duration-300 tracking-[0.15em] uppercase cursor-pointer">
            Inquiry
          </button>
        </div>
      </div>
    </header>
  );
}
