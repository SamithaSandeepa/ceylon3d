import type { Metadata } from "next";
import { SITE_CONFIG } from "@/config/site";

export const SITE_METADATA: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: `${SITE_CONFIG.companyName} | 3D Printing, Scanning & Prototyping in Sri Lanka`,
  description: `Professional 3D printing, 3D scanning, prototyping and reverse engineering services in ${SITE_CONFIG.location}, Sri Lanka. Create replacement parts, prototypes and custom components with ${SITE_CONFIG.companyName}.`,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${SITE_CONFIG.companyName} | 3D Printing, Scanning & Prototyping in Sri Lanka`,
    description: `Professional 3D printing, 3D scanning, prototyping and reverse engineering services in ${SITE_CONFIG.location}, Sri Lanka. Create replacement parts, prototypes and custom components with ${SITE_CONFIG.companyName}.`,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.companyName,
    locale: "en_LK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.companyName} | 3D Printing, Scanning & Prototyping in Sri Lanka`,
    description: `Professional 3D printing, 3D scanning, prototyping and reverse engineering services in ${SITE_CONFIG.location}, Sri Lanka. Create replacement parts, prototypes and custom components with ${SITE_CONFIG.companyName}.`,
  },
};
