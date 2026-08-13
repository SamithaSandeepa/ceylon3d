"use client";

import { GalleryCategory } from "@/types/gallery";

interface GalleryCategoryTabsProps {
  categories: GalleryCategory[];
  activeCategory: string; // 'all' or category slug
  onSelect: (slug: string) => void;
}

export function GalleryCategoryTabs({ categories, activeCategory, onSelect }: GalleryCategoryTabsProps) {
  const tabs = [
    { id: "all", name: "All", slug: "all" },
    ...categories.map(c => ({ id: c.id, name: c.name, slug: c.slug })),
  ];

  return (
    <div className="flex w-full overflow-x-auto no-scrollbar border-b border-white/[0.06] mb-8 lg:mb-12">
      <div className="flex gap-6 sm:gap-8 px-1 min-w-max">
        {tabs.map((tab) => {
          const isActive = activeCategory === tab.slug;
          return (
            <button
              key={tab.id}
              onClick={() => onSelect(tab.slug)}
              aria-pressed={isActive}
              className={`relative pb-4 text-[13px] sm:text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50 rounded-sm ${
                isActive ? "text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              {tab.name}
              {isActive && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-orange-500 rounded-t-full" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
