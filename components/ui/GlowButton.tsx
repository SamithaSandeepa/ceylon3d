import type { ReactNode } from "react";

interface GlowButtonProps {
  href: string;
  children: ReactNode;
  /** Optional right-side icon */
  icon?: ReactNode;
  className?: string;
}

export function GlowButton({ href, children, icon, className = "" }: GlowButtonProps) {
  return (
    <a
      href={href}
      className={`glow-btn inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors ${className}`}
    >
      {children}
      {icon}
    </a>
  );
}
