import { SITE_CONFIG } from "@/config/site";

export const FOOTER_CONTENT = {
  description: `Professional 3D printing, prototyping and scanning services from ${SITE_CONFIG.location}, Sri Lanka.`,
  subline: "Turning digital ideas into physical parts.",
  exploreTitle: "EXPLORE",
  exploreLinks: [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "In Numbers", href: "/#numbers" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/#contact" },
  ],
  servicesTitle: "SERVICES",
  servicesLinks: [
    { label: "Prototyping", href: "/#services" },
    { label: "3D Scanning", href: "/#services" },
    { label: "3D Printing", href: "/#services" },
  ],
  contactTitle: "CONTACT",
  contactItems: {
    phone: {
      text: SITE_CONFIG.phone,
      href: SITE_CONFIG.phoneHref,
    },
    address: {
      line1: SITE_CONFIG.address.line1,
      line2: SITE_CONFIG.address.line2,
    },
    hours: "Mon – Sat, until 5 PM",
  },
  ratingText: `${SITE_CONFIG.googleRating} on Google`,
  ratingUrl: SITE_CONFIG.googleReviewsUrl,
};
