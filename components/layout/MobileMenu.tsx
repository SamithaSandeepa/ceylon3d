"use client";

import type { NavLink } from "@/types";

interface MobileMenuProps {
  links: NavLink[];
  phoneLabel: string;
  phoneHref: string;
  onClose: () => void;
}

export function MobileMenu({ links, phoneLabel, phoneHref, onClose }: MobileMenuProps) {
  return (
    <div className="md:hidden bg-gray-950/98 border-t border-orange-500/20 px-4 pb-4">
      {links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          onClick={onClose}
          className="block py-3 text-gray-300 hover:text-orange-400 border-b border-gray-800 text-sm"
        >
          {l.label}
        </a>
      ))}
      <a
        href={phoneHref}
        className="mt-3 flex items-center gap-2 bg-orange-500 text-white text-sm font-semibold px-4 py-2 rounded-lg w-fit"
      >
        📞 {phoneLabel}
      </a>
    </div>
  );
}
