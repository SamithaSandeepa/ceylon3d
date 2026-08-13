"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { GalleryCategory } from "@/types/gallery";

interface CategoryCardProps {
  category: GalleryCategory;
  onClick: () => void;
  priority?: boolean;
}

export function CategoryCard({ category, onClick, priority = false }: CategoryCardProps) {
  return (
    <div 
      className="group cursor-pointer relative flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50 rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[4/3] bg-black/40 border border-white/[0.06] transition-all duration-500 hover:border-white/[0.12]"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <Image
        src={category.coverImage}
        alt={category.name}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
        priority={priority}
      />
      
      {/* Permanent subtle gradient for mobile fallback, gets darker on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/20 to-transparent opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500" />

      {/* Internal Details Overlay */}
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 flex flex-col justify-end translate-y-0 sm:translate-y-4 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 transition-all duration-500 ease-out">
        <h3 className="text-lg sm:text-xl font-bold text-white mb-1 drop-shadow-sm">
          {category.name}
        </h3>
        
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-gray-300 drop-shadow-sm">
            {category.images.length} {category.images.length === 1 ? "image" : "images"}
          </p>
          <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-400 drop-shadow-sm">
            View Category
            <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
        </div>
      </div>
    </div>
  );
}
