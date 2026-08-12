import type { ProcessStep } from "@/types";
import type { SectionHeaderData } from "@/types";

export const PROCESS_HEADER: SectionHeaderData = {
  subtitle: "Simple Process",
  headingPrefix: "How It ",
  headingHighlight: "Works",
  description:
    "Getting your 3D print is easy. Three simple steps from idea to finished product.",
};

export const PROCESS: ProcessStep[] = [
  {
    step: "01",
    title: "Share Your Idea",
    desc: "Bring a sketch, file (.STL, .OBJ, .3MF), or just an idea. We handle the rest.",
  },
  {
    step: "02",
    title: "Get a Quote",
    desc: "We review your design and provide a fast, transparent price estimate.",
  },
  {
    step: "03",
    title: "Print & Deliver",
    desc: "Your item is printed with precision and ready for pickup at our Makandura location.",
  },
];
