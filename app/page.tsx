import { Navbar, Footer } from "@/components/layout";
import {
  HeroSection,
  ServicesSection,
  WhyUsSection,
  ProcessSection,
  GallerySection,
  RatingBanner,
  ContactSection,
} from "@/components/sections";

export default function Home() {
  return (
    <div className="min-h-screen font-[var(--font-sans)]">
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyUsSection />
        <ProcessSection />
        <GallerySection />
        <RatingBanner />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
