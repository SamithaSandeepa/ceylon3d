import type { ReactNode } from "react";

interface OutlineButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export function OutlineButton({ href, children, className = "" }: OutlineButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 border border-gray-600 hover:border-orange-500 text-gray-300 hover:text-orange-400 font-semibold px-8 py-4 rounded-xl text-lg transition-colors ${className}`}
    >
      {children}
    </a>
  );
}
