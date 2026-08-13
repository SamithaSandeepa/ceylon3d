import { Navbar, Footer } from "@/components/layout";
import {
  HeroSection,
  ServicesSection,
  WhyUsSection,
  ProcessSection,
  RatingBanner,
  ContactSection,
} from "@/components/sections";
import { GalleryPreview } from "@/components/gallery/GalleryPreview";

export default function Home() {
  return (
    <div className="min-h-screen font-[var(--font-sans)]">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyUsSection />
        <ProcessSection />
        <GalleryPreview />
        <RatingBanner />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
