import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

interface GlowButtonProps {
  href: string;
  children: ReactNode;
  /**
   * Override the default ArrowRight icon.
   * Pass `null` to suppress the icon entirely.
   */
  icon?: ReactNode | null;
  className?: string;
}

export function GlowButton({ href, children, icon, className = "" }: GlowButtonProps) {
  // Use caller-supplied icon when provided; fall back to ArrowRight.
  // Passing `null` explicitly suppresses the icon.
  const trailingIcon =
    icon !== undefined ? icon : (
      <ArrowRight
        size={16}
        strokeWidth={2}
        aria-hidden="true"
        className="transition-transform duration-200 group-hover:translate-x-0.5"
      />
    );

  return (
    <a
      href={href}
      className={`glow-btn group inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors ${className}`}
    >
      {children}
      {trailingIcon}
    </a>
  );
}
