/**
 * Ceylon 3D — Motion System
 * ─────────────────────────
 * Centralised motion vocabulary. Import from this file instead of hard-coding
 * animation values per component. This keeps the entire site on a single,
 * coherent motion language.
 *
 * Design philosophy:
 *   • Subtle — motion decorates content, never distracts
 *   • Fast — users never wait for content to become readable
 *   • Consistent — one easing curve, one reveal distance, one stagger rhythm
 *   • Accessible — prefers-reduced-motion is handled at component level
 */

/** Core duration steps (seconds) */
export const DURATION = {
  /** Icon swap, border flash — 0.18s */
  fast: 0.18,
  /** Hover micro-interactions, CTA arrow — 0.2s */
  micro: 0.2,
  /** Standard scroll reveal, card entrance — 0.45s */
  normal: 0.45,
  /** Image fade, section header — 0.55s */
  medium: 0.55,
  /** Full-section entrance, editorial image — 0.65s */
  slow: 0.65,
} as const;

/**
 * Easing curves.
 * expo-out: snappy start, smooth stop — ideal for entrances.
 * standard: Material-style in-out for transitions where smoothness > speed.
 */
export const EASE = {
  /** Exponential ease-out — fast entry, graceful deceleration */
  out: [0.16, 1, 0.3, 1] as const,
  /** Cubic in-out — balanced transitions */
  inOut: [0.4, 0, 0.2, 1] as const,
} as const;

/** Reveal travel distance (px). Keep small — engineering sites feel grounded. */
export const REVEAL_Y = 20;

/** Stagger delay between sibling elements */
export const STAGGER = {
  fast: 0.05,
  normal: 0.08,
  slow: 0.12,
} as const;

/** Hero-specific stagger (tighter — content must be readable immediately) */
export const HERO_STAGGER = 0.07;

/* ─── Pre-built variant objects ───────────────────────────────────────────── */

/**
 * Standard scroll-reveal variant.
 * Usage: spread onto <motion.div initial="hidden" whileInView="visible">
 */
export const revealVariants = {
  hidden: { opacity: 0, y: REVEAL_Y },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.normal, delay, ease: EASE.out },
  }),
};

/**
 * Fade-only variant — for elements where vertical movement would be
 * distracting (images, overlays, footer).
 */
export const fadeVariants = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: DURATION.medium, delay, ease: EASE.inOut },
  }),
};

/**
 * Scale-reveal — for image containers and cards.
 * Tiny scale change gives a "camera pull focus" feel without drama.
 */
export const scaleVariants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION.slow, delay, ease: EASE.out },
  }),
};

/** Navbar/Header slide-down on first load */
export const navbarEntrance = {
  initial: { opacity: 0, y: -12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: DURATION.normal, ease: EASE.out },
};

/** Hero content stagger — items animate on mount, not on scroll */
export const heroVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.medium,
      delay: i * HERO_STAGGER,
      ease: EASE.out,
    },
  }),
};

/** Mobile menu slide-down + fade */
export const mobileMenuVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.fast * 1.5, ease: EASE.out },
  },
  exit: {
    opacity: 0,
    y: -6,
    transition: { duration: DURATION.fast, ease: EASE.inOut },
  },
};

/**
 * Shared whileInView props — spread onto any motion.div that should reveal
 * once when it enters the viewport.
 * viewport.amount: 0.15 — trigger early, before fully visible.
 */
export const inViewProps = {
  viewport: { once: true, amount: 0.15 } as const,
};
