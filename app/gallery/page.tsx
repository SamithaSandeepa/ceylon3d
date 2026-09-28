import { Navbar, Footer } from "@/components/layout";
import { SectionHeader } from "@/components/ui";
import { GalleryPageClient } from "@/features/gallery/components/GalleryPageClient";
import { fetchCategories } from "@/lib/gallery-api";
import { buildPageMetadata } from "@/lib/seo/metadata";
import { SITE_CONFIG } from "@/config/site";
import type { GalleryCategory } from "@/types/gallery";

export const metadata = buildPageMetadata({
  title: "3D Printing Gallery",
  description: `Explore 3D printed replacement parts, prototypes, custom products and engineering components produced by ${SITE_CONFIG.companyName} in Sri Lanka.`,
  path: "/gallery",
});

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
          <SectionHeader
            eyebrow="OUR WORK"
            heading="Gallery"
            description="Browse completed parts, custom products and 3D printing work."
            align="left"
            className="mb-12 sm:mb-16"
          />
          
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
