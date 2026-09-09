"use client";

import { useState } from "react";
import { useScrolled } from "@/hooks/useScrolled";
import { NAV_LINKS } from "@/content";
import { SITE_CONFIG } from "@/config/site";
import { MobileMenu } from "./MobileMenu";
import { BrandLogo } from "@/components/ui";
import Link from "next/link";

export function Navbar() {
  const scrolled = useScrolled();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-950/95 backdrop-blur-md border-b border-orange-500/20 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Official logo — linked to homepage */}
        <Link href="/" aria-label="Ceylon 3D — go to homepage">
          <BrandLogo size="navbar" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-gray-300 hover:text-orange-400 text-[15px] font-medium transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <a
          href={SITE_CONFIG.phoneHref}
          className="hidden md:inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white text-[15px] font-semibold px-4 py-2 rounded-lg transition-colors"
        >
          <span>📞</span> {SITE_CONFIG.phone}
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-300 hover:text-orange-400"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <MobileMenu
          links={NAV_LINKS}
          phoneLabel={SITE_CONFIG.phone}
          phoneHref={SITE_CONFIG.phoneHref}
          onClose={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
}
