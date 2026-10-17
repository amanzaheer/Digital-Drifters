import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";

export default function sitemap() {
  // A fixed content date: sitemap lastmod should change only when content does.
  const lastModified = new Date(SITE.contentUpdated);

  return [
    { url: SITE.url, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE.url}/services`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    ...SERVICES.map((s) => ({
      url: `${SITE.url}/services/${s.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    })),
    { url: `${SITE.url}/contact`, lastModified, changeFrequency: "yearly", priority: 0.7 },
  ];
}
