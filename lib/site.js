export const SITE = {
  name: "Digital Drifters",
  url: "https://digitaldrifters.co",
  tagline: "Software, eCommerce, SEO & Operations Agency",
  description:
    "Digital Drifters is a London-based digital agency delivering custom software development, SEO, AEO & GEO, Google Business Profile management, Amazon & eBay eCommerce, operation management, AI integration and call center solutions for businesses in the UK, US and worldwide.",
  email: "digitaldrifters12@gmail.com",
  phone: "+447466908663",
  phoneDisplay: "+44 7466 908663",
  address: {
    streetAddress: "375-377 High Street North",
    addressLocality: "London",
    addressRegion: "England",
    postalCode: "E12 6PG",
    addressCountry: "GB",
  },
  areaServed: [
    "United Kingdom",
    "United States",
    "Ireland",
    "Canada",
    "Australia",
    "United Arab Emirates",
    "Europe",
    "Worldwide",
  ],
};

export const absoluteUrl = (path = "/") => new URL(path, SITE.url).toString();
