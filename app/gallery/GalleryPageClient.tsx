"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { GalleryCategory } from "@/types/gallery";
import { GalleryCategoryTabs } from "@/components/gallery/GalleryCategoryTabs";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { GalleryLightbox } from "@/components/gallery/GalleryLightbox";
import { motion, AnimatePresence } from "framer-motion";
import { Suspense } from "react";

interface GalleryPageClientProps {
  initialCategory: string;
  categories: GalleryCategory[];
}

function GalleryPageInner({ initialCategory, categories }: GalleryPageClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [activeCategoryFilter, setActiveCategoryFilter] = useState(initialCategory);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxCategory, setLightboxCategory] = useState<GalleryCategory | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      setActiveCategoryFilter(categoryParam);
    } else {
      setActiveCategoryFilter("all");
    }
  }, [searchParams]);

  const handleCategorySelect = (slug: string) => {
    setActiveCategoryFilter(slug);
    if (slug === "all") {
      router.push("/gallery", { scroll: false });
    } else {
      router.push(`/gallery?category=${slug}`, { scroll: false });
    }
  };

  const handleImageClick = (category: GalleryCategory, imageIndex: number) => {
    setLightboxCategory(category);
    setLightboxIndex(imageIndex);
    setLightboxOpen(true);
  };

  return (
    <>
      <GalleryCategoryTabs 
        categories={categories}
        activeCategory={activeCategoryFilter}
        onSelect={handleCategorySelect}
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategoryFilter}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <GalleryGrid 
            categories={activeCategoryFilter === "all" ? categories : categories.filter((c) => c.slug === activeCategoryFilter)}
            activeCategory={activeCategoryFilter}
            onImageClick={handleImageClick}
          />
        </motion.div>
      </AnimatePresence>

      <GalleryLightbox 
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        category={lightboxCategory}
        initialIndex={lightboxIndex}
      />
    </>
  );
}

export function GalleryPageClient(props: GalleryPageClientProps) {
  return (
    <Suspense fallback={<div className="h-96" />}>
      <GalleryPageInner {...props} />
    </Suspense>
  );
}
