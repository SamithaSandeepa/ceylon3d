import { SITE_CONFIG } from "@/config/site";

export function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_CONFIG.url}/#business`,
    "name": SITE_CONFIG.companyName,
    "url": SITE_CONFIG.url,
    "telephone": SITE_CONFIG.phone,
    "image": `${SITE_CONFIG.url}/images/about/workshop.jpeg`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": `${SITE_CONFIG.address.line1}, ${SITE_CONFIG.address.line2}`,
      "addressLocality": SITE_CONFIG.location,
      "postalCode": "60170",
      "addressCountry": "LK",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
