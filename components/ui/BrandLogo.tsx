import Image from "next/image";

/**
 * Official Ceylon 3D logo — transparent PNG artwork.
 *
 * File: /images/brand/C3D_New_Black-removebg-preview.png
 * Background-removed (transparent), white artwork — works directly on dark site.
 * No mix-blend-mode required.
 *
 * Both Navbar and Footer share this single component.
 */

interface BrandLogoProps {
  /** Controls rendered dimensions. */
  size?: "navbar" | "footer";
  className?: string;
}

/*
 * Sizing rationale:
 *
 * The logo has a horizontal layout (starburst mark + "Ceylon 3D" + tagline).
 * Estimated artwork aspect ratio ≈ 4.2 : 1 (wide).
 *
 * The tagline "Built Beyond Imagination" sits below the main text — it needs
 * a minimum rendered height of ~10–12px to be legible. At h-10 (40px) the
 * tagline renders at roughly 8–10px — just readable. At h-11 (44px) it is
 * clearly comfortable.
 *
 * Navbar (h-16 / 64px bar):
 *   Mobile  — h-10 (40px) × w-[170px] → fits comfortably beside hamburger
 *   Desktop — h-11 (44px) × w-[195px] → balanced against nav links + phone CTA
 *
 * Footer (more vertical space):
 *   h-12 (48px) × w-[210px] → stronger brand presence in the brand column
 */
const LOGO_DIMS = {
  navbar: {
    containerClass: "h-10 w-[170px] md:h-11 md:w-[195px]",
    sizes: "(max-width: 768px) 170px, 195px",
  },
  footer: {
    containerClass: "h-12 w-[210px]",
    sizes: "210px",
  },
} as const;

export function BrandLogo({ size = "navbar", className = "" }: BrandLogoProps) {
  const { containerClass, sizes } = LOGO_DIMS[size];

  return (
    /*
     * position: relative is required by next/image fill.
     * No overflow-hidden — the logo must not be clipped.
     * No fixed aspect-square constraint — the container is explicitly wide.
     */
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
