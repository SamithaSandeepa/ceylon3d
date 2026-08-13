import { GalleryCategory } from "@/types/gallery";

// This static dataset is temporary for the local implementation.
// Later, this structure maps directly to CMS (e.g. Directus) category collections.

export const galleryCategories: GalleryCategory[] = [
  {
    id: "cat-1",
    name: "Reverse Engineering",
    slug: "reverse-engineering",
    coverImage: "/images/projects/ACVent/acvent1.jpeg",
    images: [
      {
        id: "img-1-1",
        src: "/images/projects/ACVent/acvent1.jpeg",
        alt: "Finished AC vent components measured for precision",
        title: "Recreated AC Vent Components",
        caption: "Final inspection of printed parts",
      },
      {
        id: "img-1-2",
        src: "/images/projects/ACVent/acvent2.jpeg",
        alt: "AC vent components during the printing process",
        title: "Recreated AC Vent Components",
        caption: "In-process manufacturing",
      },
      {
        id: "img-1-3",
        src: "/images/projects/ACVent/acvent3.jpeg",
        alt: "AC vent components during the printing process",
        title: "Recreated AC Vent Components",
        caption: "In-process manufacturing",
      },
    ],
  },
  {
    id: "cat-2",
    name: "Automotive Component",
    slug: "automotive-component",
    coverImage: "/images/projects/Toyota/toyota1.jpeg",
    images: [
      {
        id: "img-2-1",
        src: "/images/projects/Toyota/toyota1.jpeg",
        alt: "3D printed side mirror backing structure",
        title: "Toyota Corolla DX Wagon – Mirror Backing Plate",
        caption: "Printing the structural backing plate",
      },
      {
        id: "img-2-2",
        src: "/images/projects/Toyota/toyota2.jpeg",
        alt: "Testing fitment of the mirror plate",
        title: "Toyota Corolla DX Wagon – Mirror Backing Plate",
        caption: "Fitment testing and support removal",
      },
      {
        id: "img-2-3",
        src: "/images/projects/Toyota/toyota3.jpeg",
        alt: "CAD design for Toyota mirror backing",
        title: "Toyota Corolla DX Wagon – Mirror Backing Plate",
        caption: "Initial digital modeling phase",
      },
      {
        id: "img-2-4",
        src: "/images/projects/Toyota/toyota4.jpeg",
        alt: "CAD design for Toyota mirror backing",
        title: "Toyota Corolla DX Wagon – Mirror Backing Plate",
        caption: "Initial digital modeling phase",
      },
    ],
  },
  {
    id: "cat-3",
    name: "Custom Product",
    slug: "custom-product",
    coverImage: "/images/projects/BedsideLight/light1.jpeg",
    images: [
      {
        id: "img-3-1",
        src: "/images/projects/BedsideLight/light1.jpeg",
        alt: "Completed bedside light in the workshop",
        title: "3D Printed Bedside Light",
        caption: "Fully assembled and illuminated lamp",
      },
      {
        id: "img-3-2",
        src: "/images/projects/BedsideLight/light2.jpeg",
        alt: "Detail view of the lamp diffusion layer",
        title: "3D Printed Bedside Light",
        caption: "Detailed texture of the shade component",
      },
    ],
  },
];
