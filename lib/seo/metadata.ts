import type { Metadata } from "next";
import { SITE_CONFIG } from "@/config/site";

export interface PageMetadataInput {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

export function buildPageMetadata({
  title,
  description,
  path = "",
  image,
}: PageMetadataInput): Metadata {
  const url = path ? `${SITE_CONFIG.url}${path}` : SITE_CONFIG.url;
  const ogImage = image ?? `${SITE_CONFIG.url}/images/about/workshop.jpeg`;

  return {
    title: `${title} | ${SITE_CONFIG.companyName}`,
    description,
    alternates: {
      canonical: path || "/",
    },
    openGraph: {
      title: `${title} | ${SITE_CONFIG.companyName}`,
      description,
      url,
      siteName: SITE_CONFIG.companyName,
      locale: "en_LK",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${SITE_CONFIG.companyName} - ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_CONFIG.companyName}`,
      description,
      images: [ogImage],
    },
  };
}
