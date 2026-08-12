import type { Service } from "@/types";
import type { SectionHeaderData } from "@/types";

export const SERVICES_HEADER: SectionHeaderData = {
  subtitle: "What We Do",
  headingPrefix: "Our ",
  headingHighlight: "Services",
  description:
    "From concept to creation \u2014 we handle every stage of the 3D printing process with quality and care.",
};

export const SERVICES: Service[] = [
  {
    icon: "⚙️",
    title: "Functional Prototypes",
    desc: "Turn your engineering concepts into test-ready physical parts with high dimensional accuracy.",
    highlight: "Engineering-grade accuracy",
  },
  {
    icon: "🏛️",
    title: "Architectural Models",
    desc: "Detailed scale models for architects, interior designers, and real estate presentations.",
    highlight: "Scale-accurate details",
  },
  {
    icon: "🎨",
    title: "Custom Design Prints",
    desc: "Upload your own design or work with us to create one-of-a-kind custom objects.",
    highlight: "Your design, our print",
  },
  {
    icon: "🎓",
    title: "Educational Models",
    desc: "3D printed visual aids for schools and universities \u2014 anatomy, geography, science models.",
    highlight: "Used in 10+ schools",
  },
  {
    icon: "🔧",
    title: "Replacement Parts",
    desc: "Can\u2019t find a spare part? We can replicate broken or discontinued components on demand.",
    highlight: "Same-day quotes",
  },
  {
    icon: "🏆",
    title: "Awards & Trophies",
    desc: "Custom-designed trophies, plaques, and recognition pieces for events and competitions.",
    highlight: "Fully customizable",
  },
];
