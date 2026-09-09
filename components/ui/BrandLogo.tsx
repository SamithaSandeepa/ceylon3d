import Image from "next/image";

/**
 * Official Ceylon 3D logo — transparent PNG.
 * File: /images/brand/C3D_New_Black-removebg-preview.png
 *
 * No mix-blend-mode required — the PNG has a transparent background.
 * Both Navbar and Footer share this component.
 *
 * Sizing rationale
 * ────────────────
 * The logo is a wide horizontal artwork (~4.2 : 1) with two text rows:
 *   Row 1 — "Ceylon 3D"  (large)
 *   Row 2 — "Built Beyond Imagination"  (smaller tagline)
 *
 * The tagline needs a minimum rendered height of ~11–13px to be legible.
 * At h-12 (48px) the tagline renders at ≈11px on a 96dpi screen — just clear.
 * At h-14 (56px) on desktop it is comfortably visible.
 * Footer uses h-16 (64px) for stronger brand presence.
 *
 * Container widths are set proportionally so object-contain never letterboxes.
 */

interface BrandLogoProps {
  size?: "navbar" | "footer";
  className?: string;
}

const LOGO_DIMS = {
  /** Mobile: 48px × 190px  |  Desktop md+: 56px × 230px */
  navbar: {
    containerClass: "h-12 w-[190px] md:h-14 md:w-[230px]",
    sizes: "(max-width: 768px) 190px, 230px",
  },
  /** Footer brand column: 64px × 260px */
  footer: {
    containerClass: "h-16 w-[260px]",
    sizes: "260px",
  },
} as const;

export function BrandLogo({ size = "navbar", className = "" }: BrandLogoProps) {
  const { containerClass, sizes } = LOGO_DIMS[size];

  return (
    <div className={`relative ${containerClass} ${className}`}>
      <Image
        src="/images/brand/C3D_New_Black-removebg-preview.png"
        alt="Ceylon 3D — Built Beyond Imagination"
        fill
        className="object-contain object-left"
        sizes={sizes}
        priority
      />
    </div>
  );
}
