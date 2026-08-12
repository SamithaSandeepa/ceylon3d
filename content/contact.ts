import type { ContactCardData, BusinessHours } from "@/types";
import type { SectionHeaderData } from "@/types";
import { SITE_CONFIG } from "@/config/site";

export const CONTACT_HEADER: SectionHeaderData = {
  subtitle: "Get In Touch",
  headingPrefix: "Visit or ",
  headingHighlight: "Contact Us",
  description:
    "We\u2019d love to hear about your project. Reach out through any of these channels.",
};

export const CONTACT_CARDS: ContactCardData[] = [
  {
    icon: "📞",
    title: "Call Us",
    primary: SITE_CONFIG.phone,
    href: SITE_CONFIG.phoneHref,
    subtitle: "Mon\u2013Sat, until 5 PM",
  },
  {
    icon: "📍",
    title: "Find Us",
    lines: [SITE_CONFIG.address.line1, SITE_CONFIG.address.line2],
  },
];

export const BUSINESS_HOURS: BusinessHours[] = [
  { day: "Monday \u2013 Friday", hours: "Open till 5 PM" },
  { day: "Saturday", hours: "Open till 5 PM" },
  { day: "Sunday", hours: "Closed", isClosed: true },
];

export const CONTACT_CTA = {
  heading: "Ready to print your idea?",
  description:
    "Send us your file or description and we\u2019ll get back to you with a quote within hours.",
  buttonLabel: `📞 Call Now: ${SITE_CONFIG.phone}`,
  buttonHref: SITE_CONFIG.phoneHref,
};

export const RATING_BANNER = {
  rating: `${SITE_CONFIG.googleRating} ${SITE_CONFIG.googleRatingStars}`,
  headline: "Rated 5 Stars on Google",
  description:
    "Our customers love the quality and service. Come see why Ceylon 3D is Makandura\u2019s top-rated printing service.",
};
