import { Navbar, Footer } from "@/components/layout";
import { GalleryPageClient } from "./GalleryPageClient";
import { fetchCategories } from "@/lib/gallery-api";
import type { GalleryCategory } from "@/types/gallery";
import type { Metadata } from "next";
import { SITE_CONFIG } from "@/config/site";

export const metadata: Metadata = {
  title: `3D Printing Gallery | ${SITE_CONFIG.companyName}`,
  description: `Explore 3D printed replacement parts, prototypes, custom products and engineering components produced by ${SITE_CONFIG.companyName} in Sri Lanka.`,
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: `3D Printing Gallery | ${SITE_CONFIG.companyName}`,
    description: `Explore 3D printed replacement parts, prototypes, custom products and engineering components produced by ${SITE_CONFIG.companyName} in Sri Lanka.`,
    url: `${SITE_CONFIG.url}/gallery`,
    siteName: SITE_CONFIG.companyName,
    locale: "en_LK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `3D Printing Gallery | ${SITE_CONFIG.companyName}`,
    description: `Explore 3D printed replacement parts, prototypes, custom products and engineering components produced by ${SITE_CONFIG.companyName} in Sri Lanka.`,
  },
};

export default async function GalleryPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const initialCategory = typeof params.category === "string" ? params.category : "all";

  let categories: GalleryCategory[];
  try {
    categories = await fetchCategories();
  } catch (error) {
    console.error("Failed to fetch gallery categories:", error);
    categories = [];
  }

  return (
    <div className="min-h-screen font-[var(--font-sans)] bg-gray-950">
      <Navbar />
      <main className="pt-32 sm:pt-40 pb-24 lg:pb-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 sm:mb-16">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-px w-8 bg-orange-500/50" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-orange-400/90">
                OUR WORK
              </span>
            </div>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.25rem] mb-6">
              Gallery
            </h1>
            <p className="max-w-2xl text-base leading-7 text-gray-400">
              Browse completed parts, custom products and 3D printing work.
            </p>
          </div>
          
          <GalleryPageClient 
            initialCategory={initialCategory} 
            categories={categories}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
