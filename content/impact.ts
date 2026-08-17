export interface BusinessStat {
  id: string;
  numericValue?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  displayValue?: string;
  label: string;
  sublabel?: string;
}

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
  /*
   * Configurable slots for future verified metrics (e.g., Projects Completed / Parts Produced):
   * {
   *   id: "projects",
   *   numericValue: 50,
   *   suffix: "+",
   *   label: "Projects Completed",
   * },
   */
];

export const IMPACT_CTA = {
  eyebrow: "HAVE A PART, DESIGN OR IDEA?",
  heading: "Ready to make it real?",
  description:
    "Share your requirement and we'll help determine the right prototyping, scanning or printing approach.",
  primaryLabel: "Start a Project →",
  primaryHref: "/#contact",
};
