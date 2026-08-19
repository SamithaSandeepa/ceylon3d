import { SITE_CONFIG } from "@/config/site";
import { NAV_LINKS } from "./navigation";
import { SERVICES } from "@/features/services";

export interface FooterLink {
  label: string;
  href: string;
}

export const FOOTER_CONTENT = {
  description: `Professional 3D printing, prototyping and scanning services from ${SITE_CONFIG.location}, Sri Lanka.`,
  subline: "Turning digital ideas into physical parts.",
  exploreTitle: "EXPLORE",
  exploreLinks: [
    { label: "Home", href: "/" },
    ...NAV_LINKS.filter((link) => link.label !== "Services"),
  ] as FooterLink[],
  servicesTitle: "SERVICES",
  servicesLinks: SERVICES.map((s) => ({
    label: s.title,
    href: "/#services",
  })) as FooterLink[],
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
