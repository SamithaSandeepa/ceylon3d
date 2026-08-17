/**
 * Site-wide constants — company identity.
 * Change these values to update the phone number, address, etc. everywhere at once.
 */
export const SITE_CONFIG = {
  companyName: "Ceylon 3D",
  companyNameShort: "Ceylon",
  companyNameHighlight: "3D",
  phone: "074 311 7565",
  phoneHref: "tel:+94743117565",
  whatsappNumber: "94743117565",
  address: {
    line1: "No 23 Gonavila, Makandura 60170",
    line2: "Public Library Shopping Complex",
  },
  location: "Makandura",
  googleRating: "5.0",
  googleRatingStars: "★★★★★",
  googleReviewsUrl: "https://www.google.com/search?q=Ceylon+3D+Makandura",
  copyrightYear: new Date().getFullYear().toString(),
  url: "https://www.ceylon3d.com",
} as const;
