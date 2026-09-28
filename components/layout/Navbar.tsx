"use client";

import { useState } from "react";
import { Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrolled } from "@/hooks/useScrolled";
import { NAV_LINKS } from "@/content";
import { SITE_CONFIG } from "@/config/site";
import { MobileMenu } from "./MobileMenu";
import { BrandLogo } from "@/components/ui";
import Link from "next/link";
import { navbarEntrance } from "@/lib/motion";

export function Navbar() {
  const scrolled = useScrolled();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-950/95 backdrop-blur-md border-b border-orange-500/20 shadow-lg"
          : "bg-transparent"
      }`}
      {...navbarEntrance}
    >
      {/*
       * Bar heights:
       *   Mobile  h-20 (80px) — logo is 62px, leaving 9px top/bottom
       *   Desktop h-24 (96px) — logo is 76px, leaving 10px top/bottom
       */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-20 md:h-24">

        {/* Brand logo */}
        <Link
          href="/"
          aria-label="Ceylon 3D — go to homepage"
          className="shrink-0"
        >
          <BrandLogo size="navbar" />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-gray-300 hover:text-orange-400 text-[15px] font-medium transition-colors whitespace-nowrap"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Phone CTA */}
        <a
          href={SITE_CONFIG.phoneHref}
          className="hidden md:inline-flex items-center justify-center gap-2 shrink-0 bg-orange-500 hover:bg-orange-400 text-white text-[15px] font-semibold px-4 py-2.5 rounded-lg transition-colors"
        >
          <Phone size={16} strokeWidth={1.8} className="shrink-0" aria-hidden="true" />
          <span>{SITE_CONFIG.phone}</span>
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-300 hover:text-orange-400 p-1 shrink-0"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
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

      {/* Mobile slide-down menu — animated */}
      <AnimatePresence>
        {menuOpen && (
          <MobileMenu
            links={NAV_LINKS}
            phoneLabel={SITE_CONFIG.phone}
            phoneHref={SITE_CONFIG.phoneHref}
            onClose={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
