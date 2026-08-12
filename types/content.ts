export interface StatItem {
  /** Display value (e.g., "5.0⭐", "Fast", "LKR") */
  value: string;
  /** Label text below the value */
  label: string;
}

export interface SectionHeaderData {
  /** Small uppercase subtitle */
  subtitle: string;
  /** Main heading — plain text portion before the gradient word */
  headingPrefix: string;
  /** The gradient-highlighted word */
  headingHighlight: string;
  /** Optional heading suffix after the highlighted word */
  headingSuffix?: string;
  /** Description paragraph */
  description: string;
}

export interface HeroContent {
  /** Badge text (e.g., "Now Open in Makandura") */
  badgeText: string;
  /** Headline parts for multi-line rendering */
  headline: {
    line1: string;
    highlight: string;
    line3: string;
  };
  /** Subtext paragraph */
  subtext: string;
  /** Primary CTA button label */
  primaryCTA: {
    label: string;
    href: string;
  };
  /** Secondary CTA button label */
  secondaryCTA: {
    label: string;
    href: string;
  };
  /** Stats displayed below the CTAs */
  stats: StatItem[];
}

export interface CTAButton {
  /** Button label */
  label: string;
  /** Button href */
  href: string;
  /** Optional icon (emoji or component identifier) */
  icon?: string;
}
