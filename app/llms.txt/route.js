import { SITE, absoluteUrl } from "@/lib/site";
import { HOME_FAQS, SERVICES } from "@/lib/services";

export const dynamic = "force-static";

export function GET() {
  const body = `# ${SITE.name}

> ${SITE.description}

- Headquarters: ${SITE.address.streetAddress}, ${SITE.address.addressLocality} ${SITE.address.postalCode}, United Kingdom
- Phone: ${SITE.phoneDisplay}
- Email: ${SITE.email}
- Website: ${SITE.url}
- Areas served: ${SITE.areaServed.join(", ")}

## Services

${SERVICES.map((s) => `- [${s.title}](${absoluteUrl(`/services/${s.slug}`)}): ${s.summary}`).join("\n")}

## Frequently asked questions

${HOME_FAQS.map((f) => `### ${f.q}\n${f.a}`).join("\n\n")}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
