export const SITE = {
  name: "Digital Drifters",
  url: "https://digitaldrifters.co",
  tagline: "Software, Web & eCommerce Agency in London",
  /** Long-form entity description — used in structured data and llms.txt. */
  description:
    "Digital Drifters is a software company based in East London (E12), UK. We provide custom software and application development, website design and development, mobile app development, IT and software consulting, eCommerce and online store management, Google Business Profile management, SEO, social media management, AI integration, operations management and call center support for businesses in the UK and the US.",
  /** ≤160 characters — used for the homepage meta description. */
  metaDescription:
    "London software company building custom software, websites and mobile apps, plus eCommerce, SEO and Google Business Profile support for UK & US businesses.",
  email: "digitaldrifters12@gmail.com",
  phone: "+447466908663",
  phoneDisplay: "+44 7466 908663",
  whatsapp: "https://wa.me/447466908663",
  address: {
    streetAddress: "375-377 High Street North",
    addressLocality: "London",
    addressRegion: "England",
    postalCode: "E12 6PG",
    addressCountry: "GB",
  },
  /** Markets confirmed by the business. Add more only when genuinely served. */
  areaServed: ["United Kingdom", "United States"],
  /**
   * Official profiles (Google Business Profile Maps URL, LinkedIn, Facebook…).
   * Leave empty until the real URLs are known — they feed schema `sameAs`
   * and the footer social icons.
   */
  sameAs: [],
  /** Bump when page content meaningfully changes (used for sitemap lastmod). */
  contentUpdated: "2026-10-18",
};

/** Default share image (app/opengraph-image.js) for pages that declare their own openGraph. */
export const DEFAULT_OG_IMAGE = { url: "/opengraph-image", width: 1200, height: 630, alt: "Digital Drifters" };

export const absoluteUrl = (path = "/") => new URL(path, SITE.url).toString();
