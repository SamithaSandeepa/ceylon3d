"use client";

import { GalleryCategory } from "@/types/gallery";
import { GalleryCard } from "./GalleryCard";

interface GalleryGridProps {
  categories: GalleryCategory[];
  activeCategory: string;
  onImageClick: (category: GalleryCategory, imageIndex: number) => void;
}

export function GalleryGrid({ categories, onImageClick }: GalleryGridProps) {
  if (categories.length === 0) {
    return (
      <div className="flex items-center justify-center py-32 px-4 border border-white/[0.04] rounded-2xl bg-white/[0.01]">
        <p className="text-gray-400 text-sm">No images found.</p>
      </div>
    );
  }

  // Flatten images into one continuous list
  const allImages = categories.flatMap(category => 
    category.images.map((image, idx) => ({
      ...image,
      parentCategory: category,
      originalIndex: idx
    }))
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {allImages.map((image, idx) => (
        <GalleryCard
          key={`${image.parentCategory.id}-${image.id}`}
          image={image}
          categoryName={image.parentCategory.name}
          projectTitle={image.title || image.parentCategory.name}
          onClick={() => onImageClick(image.parentCategory, image.originalIndex)}
          priority={idx < 6}
        />
      ))}
    </div>
  );
}
