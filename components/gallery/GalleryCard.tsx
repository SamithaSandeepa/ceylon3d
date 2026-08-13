"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { GalleryImage } from "@/types/gallery";

interface GalleryCardProps {
  image: GalleryImage;
  categoryName: string;
  projectTitle: string;
  onClick?: () => void;
  priority?: boolean;
}

export function GalleryCard({ image, categoryName, projectTitle, onClick, priority = false }: GalleryCardProps) {
  return (
    <div 
      className="group cursor-pointer relative flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50 rounded-xl overflow-hidden aspect-[4/3] bg-black/20 border border-white/[0.04] transition-all duration-500 hover:border-white/[0.12]"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick?.();
        }
      }}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        priority={priority}
      />
      
      {/* Permanent subtle gradient for mobile fallback */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/20 to-transparent opacity-80 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-500" />

      {/* Internal Details Overlay */}
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 flex flex-col justify-end translate-y-0 sm:translate-y-4 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100 transition-all duration-500 ease-out">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-orange-400/90 mb-1 drop-shadow-sm">
          {categoryName}
        </span>
        
        <div className="flex items-center justify-between">
          <h3 className="text-sm sm:text-[15px] font-bold text-white drop-shadow-sm line-clamp-1 pr-4">
            {projectTitle}
          </h3>
          <ArrowUpRight size={16} className="text-white/70 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-orange-400 shrink-0" />
        </div>
      </div>
    </div>
  );
}
