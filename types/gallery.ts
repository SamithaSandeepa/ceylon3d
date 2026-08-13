export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
  caption?: string; // Keep existing caption support for backward compatibility if any
};

export type GalleryCategory = {
  id: string;
  name: string;
  slug: string;
  coverImage: string;
  images: GalleryImage[];
};
