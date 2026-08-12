import type { WhyUsFeature } from "@/types";

export const WHY_US_HEADING = {
  subtitle: "About Us",
  headingPrefix: "Why Choose ",
  headingHighlight: "Ceylon 3D",
  headingSuffix: "?",
};

export const WHY_US_DESCRIPTION =
  "Located in the heart of Makandura at the Public Library Shopping Complex, Ceylon 3D brings professional-grade 3D printing to your doorstep. We combine cutting-edge technology with friendly local service.";

export const WHY_US_LOCATION = {
  icon: "📍",
  title: "Visit Us",
  line1: "No 23 Gonavila, Makandura 60170",
  line2: "Public Library Shopping Complex",
};

export const WHY_US: WhyUsFeature[] = [
  {
    icon: "⚡",
    title: "Fast Turnaround",
    desc: "Most orders ready within 24\u201372 hours depending on complexity.",
  },
  {
    icon: "💎",
    title: "Premium Quality",
    desc: "Using high-grade PLA, ABS, and specialty filaments for durable prints.",
  },
  {
    icon: "💰",
    title: "Affordable Pricing",
    desc: "Competitive rates with transparent pricing \u2014 no hidden fees.",
  },
  {
    icon: "🤝",
    title: "Expert Support",
    desc: "Our team guides you from design file to finished product.",
  },
];
