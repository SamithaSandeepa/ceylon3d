import type { BusinessStat } from "@/types/impact";

export const IMPACT_HEADER = {
  eyebrow: "CEYLON 3D IN NUMBERS",
  headingPrefix: "Built around real ",
  headingHighlight: "ideas and real parts.",
  description:
    "From one-off replacement parts to prototypes and custom products, we help turn real requirements into manufacturable solutions.",
};

export const BUSINESS_STATS: BusinessStat[] = [
  {
    id: "services",
    numericValue: 3,
    suffix: "",
    label: "Core Services",
    sublabel: "Prototyping · 3D Scanning · 3D Printing",
  },
  {
    id: "rating",
    numericValue: 5.0,
    decimals: 1,
    suffix: "★",
    label: "Google Rating",
    sublabel: "Verified 5.0 customer feedback",
  },
  {
    id: "turnaround",
    numericValue: 24,
    suffix: "–72h",
    label: "Average Turnaround",
    sublabel: "Fast local fulfillment in Makandura",
  },
];

export const IMPACT_CTA = {
  eyebrow: "HAVE A PART, DESIGN OR IDEA?",
  heading: "Ready to make it real?",
  description:
    "Share your requirement and we'll help determine the right prototyping, scanning or printing approach.",
  primaryLabel: "Start a Project →",
  primaryHref: "/#contact",
};
