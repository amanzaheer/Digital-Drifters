import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceIcon } from "@/components/ServiceIcon";
import { JsonLd } from "@/components/JsonLd";
import { SERVICES } from "@/lib/services";
import { DEFAULT_OG_IMAGE, SITE, absoluteUrl } from "@/lib/site";

const TITLE = "Contact Us – Software Company in East London";
const DESCRIPTION =
  "Contact Digital Drifters, a software company at 375-377 High Street North, London E12 6PG. Call +44 7466 908663, WhatsApp or email us.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    url: "/contact",
    siteName: SITE.name,
    title: `${TITLE} | ${SITE.name}`,
    description: DESCRIPTION,
    locale: "en_GB",
    images: [DEFAULT_OG_IMAGE],
  },
};

const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${SITE.name}, ${SITE.address.streetAddress}, ${SITE.address.addressLocality} ${SITE.address.postalCode}`
)}`;

const STEPS = [
  { title: "Get in touch", text: "Call, WhatsApp or email with a short description of what you need." },
  { title: "Discovery call", text: "We discuss your goals, timeline and budget, and ask the right questions." },
  { title: "Proposal", text: "You receive a clear proposal with scope, milestones and pricing." },
];

export default function ContactPage() {
  const url = absoluteUrl("/contact");
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${url}#webpage`,
        url,
        name: `${TITLE} | ${SITE.name}`,
        description: DESCRIPTION,
        inLanguage: "en-GB",
        isPartOf: { "@id": `${SITE.url}/#website` },
        about: { "@id": `${SITE.url}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "Contact", item: url },
        ],
      },
    ],
  };

  const channels = [
    { label: "Phone", value: SITE.phoneDisplay, href: `tel:${SITE.phone}` },
    { label: "WhatsApp", value: SITE.phoneDisplay, href: SITE.whatsapp, external: true },
    { label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  ];

  return (
    <main className="flex min-h-dvh flex-col bg-[#F7F8FB] text-slate-900">
      <JsonLd data={jsonLd} />
      <Navbar />

      <section className="bg-[#0B1D3A] pb-14 pt-32 text-white sm:pt-36">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <nav aria-label="Breadcrumb" className="text-sm text-white/60">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li aria-hidden>/</li>
              <li className="text-white" aria-current="page">Contact</li>
            </ol>
          </nav>
          <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight sm:text-5xl">
            Contact Digital Drifters
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
            We’re a software company based in East London (E12), working with businesses in London,
            across the UK and in the US. Tell us what you’re planning and we’ll help you work out the
            next step.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 lg:grid-cols-12 lg:px-10">
          <div className="space-y-4 lg:col-span-7">
            <h2 className="text-2xl font-black tracking-tight text-[#0B1D3A]">How to reach us</h2>
            <ul className="grid gap-4 sm:grid-cols-3">
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-[#E10E1D]/40 hover:shadow-[0_20px_40px_-20px_rgba(11,29,58,0.3)]"
                  >
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#E10E1D]">{c.label}</span>
                    <span className="mt-2 break-all font-bold text-[#0B1D3A]">{c.value}</span>
                  </a>
                </li>
              ))}
            </ul>

            <h2 className="pt-6 text-2xl font-black tracking-tight text-[#0B1D3A]">What happens next</h2>
            <ol className="grid gap-4 sm:grid-cols-3">
              {STEPS.map((step, i) => (
                <li key={step.title} className="rounded-3xl border border-slate-200 bg-white p-6">
                  <span className="text-3xl font-black text-[#E10E1D]/20">0{i + 1}</span>
                  <h3 className="mt-1 font-bold text-[#0B1D3A]">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>

          <aside className="lg:col-span-5">
            <div className="rounded-3xl bg-[#0B1D3A] p-7 text-white">
              <h2 className="text-xl font-black">Head office</h2>
              <address className="mt-4 not-italic leading-relaxed text-white/85">
                {SITE.name}
                <br />
                {SITE.address.streetAddress}
                <br />
                {SITE.address.addressLocality} {SITE.address.postalCode}
                <br />
                United Kingdom
              </address>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-bold uppercase tracking-[0.15em] text-[#0B1D3A] transition hover:bg-white/90"
              >
                <ServiceIcon name="pin" className="h-4 w-4" strokeWidth={2} /> Open in Google Maps
              </a>
              <h2 className="mt-8 text-xl font-black">Areas we serve</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                East London and London, businesses across the UK, and clients in the United States
                (delivered remotely).
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="pb-14 sm:pb-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <h2 className="text-2xl font-black tracking-tight text-[#0B1D3A]">What can we help with?</h2>
          <ul className="mt-5 flex flex-wrap gap-2">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-[#0B1D3A] transition hover:border-[#E10E1D]/40 hover:text-[#E10E1D]"
                >
                  <ServiceIcon name={s.icon} className="h-4 w-4" />
                  {s.cardTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  );
}
