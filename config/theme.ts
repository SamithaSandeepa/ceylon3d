/**
 * Centralized theme tokens.
 * To rebrand the entire site (e.g., orange → blue), update these values.
 */
export const THEME = {
  colors: {
    primary: "orange-500",
    primaryHover: "orange-400",
    primaryLight: "orange-500/10",
    primaryBorder: "orange-500/20",
    primaryBorderHover: "orange-500/50",
    primaryText: "orange-400",
    accent: "amber-500",
    accentLight: "amber-500/10",
    accentBorder: "amber-500/40",
    bgDark: "gray-950",
    bgSection: "gray-900",
    bgCard: "gray-950",
    borderDefault: "gray-800",
    textPrimary: "white",
    textSecondary: "gray-300",
    textMuted: "gray-400",
    textDim: "gray-500",
    textDimmer: "gray-600",
  },
  gradients: {
    text: "linear-gradient(135deg, #f97316, #fb923c, #fbbf24)",
    radialGlow: "radial-gradient(circle, #f97316 0%, transparent 70%)",
    ratingBanner: "from-orange-600 via-orange-500 to-amber-500",
    ctaBanner: "from-gray-950 via-orange-500/10 to-gray-950",
    gridLines: {
      color: "rgba(249,115,22,0.3)",
      size: "60px",
    },
  },
  shadows: {
    cardHover: "0 20px 40px rgba(249, 115, 22, 0.15)",
    navbarBlur: "bg-gray-950/95 backdrop-blur-md",
  },
  borderRadius: {
    card: "rounded-2xl",
    button: "rounded-xl",
    badge: "rounded-full",
    logo: "rounded-lg",
  },
} as const;
