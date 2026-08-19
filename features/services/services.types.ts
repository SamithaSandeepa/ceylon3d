import type { LucideIcon } from "lucide-react";

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  workflow: string;
  cta: string;
  href: string;
  image: string;
  icon: LucideIcon;
}
