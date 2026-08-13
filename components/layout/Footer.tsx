import { NAV_LINKS, FOOTER_CONTENT } from "@/content";
import { SITE_CONFIG } from "@/config/site";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-sm font-black text-white">
                {SITE_CONFIG.companyNameHighlight}
              </div>
              <span className="font-bold text-xl text-white">
                {SITE_CONFIG.companyNameShort}
                <span className="text-orange-400">{SITE_CONFIG.companyNameHighlight}</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              {FOOTER_CONTENT.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">{FOOTER_CONTENT.quickLinksTitle}</h4>
            <div className="space-y-2">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block text-gray-500 hover:text-orange-400 text-sm transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">{FOOTER_CONTENT.contactTitle}</h4>
            <div className="space-y-3 text-sm text-gray-500">
              {FOOTER_CONTENT.contactItems.map((item) => (
                <div key={item.text} className="flex items-start gap-2">
                  <span>{item.icon}</span>
                  {item.href ? (
                    <a href={item.href} className="hover:text-orange-400 transition-colors">
                      {item.text}
                    </a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">{FOOTER_CONTENT.copyright}</p>
          <div className="flex items-center gap-2">
            <span className="text-yellow-400">{SITE_CONFIG.googleRatingStars}</span>
            <span className="text-gray-500 text-sm">{FOOTER_CONTENT.ratingText}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
