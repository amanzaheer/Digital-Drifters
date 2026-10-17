import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { JsonLd } from "@/components/JsonLd";
import { SITE, absoluteUrl } from "@/lib/site";
import { SERVICES } from "@/lib/services";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const DEFAULT_TITLE = `${SITE.name} | ${SITE.tagline}`;

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.metaDescription,
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "Business Services",
  formatDetection: { telephone: true, email: true, address: true },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: DEFAULT_TITLE,
    description: SITE.metaDescription,
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: SITE.metaDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // Paste the codes from Google Search Console / Bing Webmaster Tools into .env
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
      : undefined,
  },
};

export const viewport = {
  themeColor: "#0B1D3A",
};

const ORG_ID = `${SITE.url}/#organization`;

const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      // Organization (not LocalBusiness): add a LocalBusiness subtype only once it is
      // confirmed customers are served at this address, matching Google Business Profile.
      "@type": "Organization",
      "@id": ORG_ID,
      name: SITE.name,
      url: SITE.url,
      logo: { "@type": "ImageObject", url: absoluteUrl("/logo-mark.png"), width: 512, height: 512 },
      image: absoluteUrl("/logo-mark.png"),
      description: SITE.description,
      slogan: "Explore · Connect · Create",
      email: SITE.email,
      telephone: SITE.phone,
      address: { "@type": "PostalAddress", ...SITE.address },
      areaServed: SITE.areaServed.map((name) => ({ "@type": "Country", name })),
      ...(SITE.sameAs.length ? { sameAs: SITE.sameAs } : {}),
      contactPoint: {
        "@type": "ContactPoint",
        telephone: SITE.phone,
        email: SITE.email,
        contactType: "sales",
        availableLanguage: ["English"],
        areaServed: ["GB", "US"],
      },
      knowsAbout: SERVICES.map((s) => s.title),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Digital Drifters services",
        itemListElement: SERVICES.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s.title,
            description: s.summary,
            url: absoluteUrl(`/services/${s.slug}`),
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      description: SITE.description,
      inLanguage: "en-GB",
      publisher: { "@id": ORG_ID },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en-GB"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh bg-black font-sans text-white">
        <JsonLd data={siteJsonLd} />
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
