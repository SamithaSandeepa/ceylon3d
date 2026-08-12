import type { Metadata } from "next";
import { SITE_CONFIG } from "@/config/site";

export const SITE_METADATA: Metadata = {
  title: `${SITE_CONFIG.companyName} | Professional 3D Printing Service in ${SITE_CONFIG.location}`,
  description: `${SITE_CONFIG.companyName} delivers high-quality 3D printing services in ${SITE_CONFIG.location}, Sri Lanka. Prototypes, custom models, architectural prints, and more.`,
};
