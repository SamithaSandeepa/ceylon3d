import { SITE_CONFIG } from "@/config/site";

export const FOOTER_CONTENT = {
  description: `Professional 3D printing services in ${SITE_CONFIG.location}, Sri Lanka. Turning ideas into physical reality.`,
  quickLinksTitle: "Quick Links",
  contactTitle: "Contact",
  contactItems: [
    { icon: "📞", text: SITE_CONFIG.phone, href: SITE_CONFIG.phoneHref },
    { icon: "📍", text: SITE_CONFIG.address.line1 },
    { icon: "🕐", text: "Open daily until 5 PM" },
  ],
  copyright: `\u00A9 ${SITE_CONFIG.copyrightYear} ${SITE_CONFIG.companyName}. All rights reserved.`,
  ratingText: `${SITE_CONFIG.googleRating} on Google`,
};
