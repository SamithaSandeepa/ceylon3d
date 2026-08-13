"use client";

import { useEffect, useCallback, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { GalleryCategory } from "@/types/gallery";

interface GalleryLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  category: GalleryCategory | null;
  initialIndex: number;
}

export function GalleryLightbox({
  isOpen,
  onClose,
  category,
  initialIndex,
}: GalleryLightboxProps) {
  const images = category?.images || [];
  const isLooping = images.length > 1;

  // Main Image Carousel
  const [mainRef, mainApi] = useEmblaCarousel({
    align: "center",
    loop: isLooping,
    startIndex: initialIndex,
    skipSnaps: false,
  });

  // Thumbnail Carousel
  const [thumbRef, thumbApi] = useEmblaCarousel({
    align: "center",
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const scrollPrev = useCallback(() => mainApi && mainApi.scrollPrev(), [mainApi]);
  const scrollNext = useCallback(() => mainApi && mainApi.scrollNext(), [mainApi]);

  const onThumbClick = useCallback(
    (index: number) => {
      if (!mainApi || !thumbApi) return;
      mainApi.scrollTo(index);
    },
    [mainApi, thumbApi]
  );

  const onSelect = useCallback(() => {
    if (!mainApi || !thumbApi) return;
    const index = mainApi.selectedScrollSnap();
    setCurrentIndex(index);
    thumbApi.scrollTo(index);
  }, [mainApi, thumbApi]);

  useEffect(() => {
    if (!mainApi) return;
    onSelect();
    mainApi.on("select", onSelect);
    mainApi.on("reInit", onSelect);
  }, [mainApi, onSelect]);

  useEffect(() => {
    if (mainApi && thumbApi && isOpen) {
      setTimeout(() => {
        mainApi.reInit({ startIndex: initialIndex, loop: isLooping });
        thumbApi.reInit();
        mainApi.scrollTo(initialIndex, true);
        thumbApi.scrollTo(initialIndex, true);
        setCurrentIndex(initialIndex);
      }, 0);
    }
  }, [isOpen, initialIndex, mainApi, thumbApi, isLooping]);

  useEffect(() => {
    if (!isOpen) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && isLooping) scrollPrev();
      if (e.key === "ArrowRight" && isLooping) scrollNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose, scrollPrev, scrollNext, isLooping]);

  if (!isOpen || !category || images.length === 0) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-gray-950/98 backdrop-blur-md transition-opacity duration-300">
      
      {/* --- HEADER --- */}
      <div className="absolute top-0 inset-x-0 z-20 flex items-center justify-between p-4 sm:p-6 lg:p-8 bg-gradient-to-b from-gray-950/80 to-transparent pointer-events-none">
        <button
          onClick={onClose}
          aria-label="Close viewer"
          className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 ml-auto pointer-events-auto"
        >
          <X size={24} />
        </button>
      </div>

      {/* --- MAIN CAROUSEL --- */}
      <div className="flex-1 relative flex flex-col justify-center overflow-hidden h-full pt-12 sm:pt-16 pb-4">
        
        {/* Navigation Buttons */}
        {isLooping && (
          <>
            <button
              onClick={scrollPrev}
              aria-label="Previous image"
              className="absolute z-10 left-2 sm:left-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-black/40 border border-white/10 text-white flex items-center justify-center hover:bg-black/80 hover:border-orange-500/50 hover:text-orange-400 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 backdrop-blur-sm"
            >
              <ChevronLeft size={28} strokeWidth={1.5} />
            </button>

            <button
              onClick={scrollNext}
              aria-label="Next image"
              className="absolute z-10 right-2 sm:right-8 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-black/40 border border-white/10 text-white flex items-center justify-center hover:bg-black/80 hover:border-orange-500/50 hover:text-orange-400 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 backdrop-blur-sm"
            >
              <ChevronRight size={28} strokeWidth={1.5} />
            </button>
          </>
        )}

        <div className="overflow-hidden h-full w-full flex items-center" ref={mainRef}>
          <div className="flex h-full w-full backface-hidden cursor-grab active:cursor-grabbing">
            {images.map((image, index) => (
              <div 
                key={image.id}
                className="relative min-w-0 shrink-0 grow-0 basis-full h-full flex flex-col items-center justify-center px-4 sm:px-12 lg:px-24"
              >
                {/* Large Image Container */}
                <div className="relative w-full max-w-[1300px] h-[55vh] sm:h-[65vh] flex items-center justify-center mx-auto transition-transform duration-500">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="100vw"
                    className="object-contain"
                    priority={Math.abs(currentIndex - index) <= 1}
                  />
                </div>
                
                {/* Image Details */}
                <div className="w-full max-w-[1300px] mx-auto mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div className="flex-1">
                    <h2 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-400 mb-2">
                      {category.name}
                    </h2>
                    {image.title && (
                      <p className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {image.title}
                      </p>
                    )}
                  </div>
                  
                  {isLooping && (
                    <div className="text-sm font-mono text-gray-500 tracking-widest shrink-0">
                      {String(currentIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* --- THUMBNAIL STRIP --- */}
      {isLooping && (
        <div className="w-full bg-gray-950/80 border-t border-white/[0.06] mt-auto backdrop-blur-lg pb-4 sm:pb-0">
          <div className="max-w-[1300px] mx-auto px-4 sm:px-8 lg:px-24 py-4 sm:py-6">
            <div className="overflow-hidden" ref={thumbRef}>
              <div className="flex gap-2 sm:gap-3 backface-hidden">
                {images.map((image, index) => {
                  const isActive = index === currentIndex;
                  return (
                    <button
                      key={`thumb-${image.id}`}
                      onClick={() => onThumbClick(index)}
                      aria-label={`View image ${index + 1} of ${images.length}`}
                      aria-current={isActive ? "true" : "false"}
                      className={`relative min-w-0 shrink-0 grow-0 w-[72px] sm:w-[100px] aspect-[4/3] rounded-lg overflow-hidden transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500
                        ${isActive 
                          ? "opacity-100 scale-[1.02] ring-2 ring-orange-500" 
                          : "opacity-40 hover:opacity-75"
                        }
                      `}
                    >
                      <Image
                        src={image.src}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        sizes="120px"
                        className="object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
