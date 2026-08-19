import { Navbar, Footer } from "@/components/layout";
import {
  HeroSection,
  ServicesSection,
  WhyUsSection,
  VisualBreak,
  ImpactSection,
  RatingBanner,
  ContactSection,
} from "@/components/sections";
import { GalleryPreview } from "@/components/gallery/GalleryPreview";
import { fetchCategories } from "@/lib/gallery-api";
import type { GalleryCategory } from "@/types/gallery";

export default async function Home() {
  let categories: GalleryCategory[] = [];
  try {
    categories = await fetchCategories();
  } catch (error) {
    console.error("Failed to fetch gallery categories for homepage:", error);
  }

  return (
    <div className="min-h-screen font-[var(--font-sans)]">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyUsSection />
        <VisualBreak />
        <ImpactSection />
        <GalleryPreview categories={categories} />
        <RatingBanner />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
