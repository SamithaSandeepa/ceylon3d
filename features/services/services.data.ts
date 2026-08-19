import { Layers, ScanLine, Box } from "lucide-react";
import type { ServiceItem } from "./services.types";

export const SERVICES: ServiceItem[] = [
  {
    number: "01",
    title: "Prototyping",
    description:
      "Turn concepts and CAD designs into functional physical prototypes for testing, validation and product development.",
    workflow: "CONCEPT → DESIGN → PROTOTYPE",
    cta: "Explore Prototyping",
    href: "/services/prototyping",
    image: "/images/services/prototyping.jpg",
    icon: Layers,
  },
  {
    number: "02",
    title: "3D Scanning",
    description:
      "Convert existing physical components into accurate digital 3D models for reverse engineering, reproduction and modification.",
    workflow: "PHYSICAL PART → SCAN → DIGITAL MODEL",
    cta: "Explore 3D Scanning",
    href: "/services/3d-scanning",
    image: "/images/services/3d-scanning.jpg",
    icon: ScanLine,
  },
  {
    number: "03",
    title: "3D Printing",
    description:
      "Transform digital 3D models into accurate physical components for prototypes, custom parts, replacements and low-volume production.",
    workflow: "DIGITAL MODEL → PRINT → PHYSICAL PART",
    cta: "Explore 3D Printing",
    href: "/services/3d-printing",
    image: "/images/services/3d-printing.jpg",
    icon: Box,
  },
];

export const CARD_COUNT = SERVICES.length;
