"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { CategoryCard } from "./CategoryCard";
import { GalleryLightbox } from "./GalleryLightbox";
import { GalleryCategory } from "@/types/gallery";

interface GalleryPreviewProps {
  categories: GalleryCategory[];
}

export function GalleryPreview({ categories }: GalleryPreviewProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory | null>(null);

  const handleCategoryClick = (category: GalleryCategory) => {
    setSelectedCategory(category);
    setLightboxOpen(true);
  };

  return (
    <section className="relative bg-gray-950 py-20 sm:py-24 lg:py-28 overflow-hidden">
      {/* Top separator */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div 
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6 flex items-center gap-3">
            <div className="h-px w-8 bg-orange-500/50" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-orange-400/90">
              OUR WORK
            </span>
          </div>
          
          <h2 className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
            Selected <span className="text-orange-500">Work</span>
          </h2>
          
          <p className="max-w-2xl text-base leading-7 text-gray-400">
            A glimpse at parts, products and solutions created through 3D printing.
          </p>
        </motion.div>

        {/* Empty State */}
        {categories.length === 0 && (
          <div className="flex items-center justify-center py-20 px-4 border border-white/[0.04] rounded-2xl bg-white/[0.01] mb-16">
            <p className="text-gray-400 text-sm">No gallery items available yet.</p>
          </div>
        )}

        {/* Category Grid */}
        {categories.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
            {categories.slice(0, 3).map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CategoryCard 
                  category={category} 
                  onClick={() => handleCategoryClick(category)} 
                  priority={index < 2}
                />
              </motion.div>
            ))}
          </div>
        )}

        {/* Footer CTA */}
        <div className="mt-8 flex justify-center sm:justify-end">
          <Link 
            href="/gallery"
            className="group inline-flex items-center gap-2 text-sm font-medium text-white/70 transition-colors duration-300 hover:text-orange-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50 rounded-sm py-1"
          >
            View Full Gallery
            <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>

      <GalleryLightbox 
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        category={selectedCategory}
        initialIndex={0}
      />
    </section>
  );
}
