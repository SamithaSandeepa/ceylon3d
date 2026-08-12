/**
 * Animation presets — adjust timing, easing, and behavior from one place.
 */
export const ANIMATIONS = {
  float: {
    className: "float-anim",
    duration: "4s",
    easing: "ease-in-out",
  },
  glowPulse: {
    className: "glow-btn",
    duration: "2.5s",
    easing: "ease-in-out",
  },
  slideUp: {
    className: "section-fade",
    duration: "0.6s",
    easing: "ease",
  },
  cardHover: {
    className: "card-hover",
    translateY: "-6px",
    transitionDuration: "0.3s",
  },
  scrollIndicatorPulse: {
    className: "animate-pulse",
  },
  badgePulse: {
    className: "animate-pulse",
  },
} as const;
