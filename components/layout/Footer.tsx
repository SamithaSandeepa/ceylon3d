import Link from "next/link";
import { Phone, MapPin, Clock3, ArrowUpRight } from "lucide-react";
import { FOOTER_CONTENT } from "@/content/footer";
import { SITE_CONFIG } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gray-950 border-t border-white/[0.08] pt-16 sm:pt-20 pb-8 overflow-hidden">
      {/* Subtle top glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12 sm:mb-16">
          {/* Brand Column (Wider: 4 cols) */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4 group">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-sm font-black text-white transition-transform duration-300 group-hover:scale-105">
                {SITE_CONFIG.companyNameHighlight}
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                {SITE_CONFIG.companyNameShort}
                <span className="text-orange-400">{SITE_CONFIG.companyNameHighlight}</span>
              </span>
            </Link>

            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-3">
              {FOOTER_CONTENT.description}
            </p>

            <p className="text-gray-500 text-xs font-medium">
              {FOOTER_CONTENT.subline}
            </p>
          </div>

          {/* Explore Column (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-white text-xs font-semibold uppercase tracking-[0.2em] mb-4 text-white/90">
              {FOOTER_CONTENT.exploreTitle}
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_CONTENT.exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-200 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-white text-xs font-semibold uppercase tracking-[0.2em] mb-4 text-white/90">
              {FOOTER_CONTENT.servicesTitle}
            </h4>
            <ul className="space-y-2.5">
              {FOOTER_CONTENT.servicesLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-200 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-white text-xs font-semibold uppercase tracking-[0.2em] mb-4 text-white/90">
              {FOOTER_CONTENT.contactTitle}
            </h4>
            <div className="space-y-3.5 text-sm text-gray-400">
              {/* Phone */}
              <div className="flex items-start gap-2.5">
                <Phone size={15} className="text-orange-400 shrink-0 mt-0.5" />
                <a
                  href={FOOTER_CONTENT.contactItems.phone.href}
                  className="hover:text-orange-400 transition-colors duration-200"
                >
                  {FOOTER_CONTENT.contactItems.phone.text}
                </a>
              </div>

              {/* Address */}
              <div className="flex items-start gap-2.5">
                <MapPin size={15} className="text-orange-400 shrink-0 mt-0.5" />
                <div>
                  <p>{FOOTER_CONTENT.contactItems.address.line1}</p>
                  <p className="text-gray-500 text-xs mt-0.5">
                    {FOOTER_CONTENT.contactItems.address.line2}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-2.5">
                <Clock3 size={15} className="text-orange-400 shrink-0 mt-0.5" />
                <span>{FOOTER_CONTENT.contactItems.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.08] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {currentYear} {SITE_CONFIG.companyName}. All rights reserved.
          </p>

          <a
            href={FOOTER_CONTENT.ratingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-xs text-gray-400 hover:text-orange-400 transition-colors duration-200"
            aria-label="View Ceylon 3D Google Reviews (opens in new tab)"
          >
            <span className="text-yellow-400 tracking-wider font-semibold" aria-label="5 out of 5 stars">
              ★★★★★
            </span>
            <span>{FOOTER_CONTENT.ratingText}</span>
            <ArrowUpRight size={13} className="text-gray-500 group-hover:text-orange-400 transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
}
