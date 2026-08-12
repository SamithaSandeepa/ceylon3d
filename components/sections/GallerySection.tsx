import { GALLERY_HEADER, GALLERY_ITEMS } from "@/content";
import { SectionHeader, GalleryCard } from "@/components/ui";

export function GallerySection() {
  return (
    <section id="gallery" className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeader data={GALLERY_HEADER} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <GalleryCard key={item.label} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
