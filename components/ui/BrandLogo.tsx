import Image from "next/image";

/**
 * Official Ceylon 3D logo — tightly-cropped transparent PNG.
 *
 * Asset: /images/brand/ceylon3d-logo-transparent.png
 * Dimensions: 689 × 213 px  |  Aspect ratio: 3.235 : 1
 *
 * The source image was cropped from the original 814 × 306 PNG which had
 * ~14% top / ~17% bottom / ~8% side transparent padding. At the old container
 * sizes, the actual visible content occupied only 68% of the container height,
 * making the tagline ~8px — unreadable. The cropped asset eliminates that waste.
 *
 * Container sizes are calculated from the exact 3.235 content ratio so
 * object-contain never letterboxes — the image fills the container precisely.
 *
 * Sizes by variant:
 * ─────────────────────────────────────────────────────────────────────────────
 * navbar  mobile  (< md):  h-[62px] × w-[200px]  — tagline ≈ 17px rendered ✓
 * navbar  desktop (≥ md):  h-[76px] × w-[246px]  — tagline ≈ 21px rendered ✓
 * footer           :       h-[88px] × w-[285px]  — tagline ≈ 24px rendered ✓
 * ─────────────────────────────────────────────────────────────────────────────
 */

interface BrandLogoProps {
  size?: "navbar" | "footer";
  className?: string;
}

/*
 * Width = height × 3.235 (exact content ratio).
 * Heights chosen to balance readability with navbar proportions:
 *   navbar mobile  80px bar →  62px logo → 9px top/bottom breathing room
 *   navbar desktop 96px bar →  76px logo → 10px top/bottom breathing room
 *   footer         unconstrained → 88px for stronger brand presence
 */
const LOGO_DIMS = {
  navbar: {
    containerClass: "h-[62px] w-[200px] md:h-[76px] md:w-[246px]",
    sizes: "(max-width: 768px) 200px, 246px",
  },
  footer: {
    containerClass: "h-[88px] w-[285px]",
    sizes: "285px",
  },
} as const;

export function BrandLogo({ size = "navbar", className = "" }: BrandLogoProps) {
  const { containerClass, sizes } = LOGO_DIMS[size];

  return (
    /*
     * No overflow-hidden — never clip the logo.
     * No mix-blend-mode — the PNG is already transparent.
     * shrink-0 guards against parent flex containers squashing the container.
     */
    <div className={`relative shrink-0 ${containerClass} ${className}`}>
      <Image
        src="/images/brand/ceylon3d-logo-transparent.png"
        alt="Ceylon 3D — Built Beyond Imagination"
        fill
        className="object-contain object-left"
        sizes={sizes}
        priority
      />
    </div>
  );
}
