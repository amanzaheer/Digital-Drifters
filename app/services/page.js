import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceIcon } from "@/components/ServiceIcon";
import { JsonLd } from "@/components/JsonLd";
import { CATEGORIES, SERVICES } from "@/lib/services";
import { DEFAULT_OG_IMAGE, SITE, absoluteUrl } from "@/lib/site";

const TITLE = "Services – Software, Web, IT & eCommerce";
const DESCRIPTION =
  "All Digital Drifters services: software, websites and mobile apps, IT consulting, SEO, Google Business Profile, eCommerce, operations and support.";

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/services" },
  openGraph: {
    type: "website",
    url: "/services",
    siteName: SITE.name,
    title: `${TITLE} | ${SITE.name}`,
    description: DESCRIPTION,
    locale: "en_GB",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function ServicesIndex() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${SITE.name} services`,
    itemListElement: SERVICES.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.title,
      url: absoluteUrl(`/services/${s.slug}`),
    })),
  };

  return (
    <main className="flex min-h-dvh flex-col bg-[#F7F8FB] text-slate-900">
      <JsonLd data={jsonLd} />
      <Navbar />

      <section className="bg-[#0B1D3A] pb-14 pt-32 text-white sm:pt-36">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <p className="section-eyebrow section-eyebrow-dark">All services</p>
          <h1 className="mt-5 max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl">
            Digital services that help your business{" "}
            <span className="text-gradient-brand">grow and get found</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
            {SITE.name} is a software company in East London (E12), working with businesses across the UK and in the US.
          </p>
        </div>
      </section>

      <div className="mx-auto w-full max-w-7xl space-y-12 px-5 py-14 sm:px-8 lg:px-10">
        {CATEGORIES.filter((c) => c.id !== "all").map((cat) => (
          <section key={cat.id} aria-labelledby={`cat-${cat.id}`}>
            <h2 id={`cat-${cat.id}`} className="text-2xl font-black tracking-tight text-[#0B1D3A] sm:text-3xl">
              {cat.label}
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {SERVICES.filter((s) => s.category === cat.id).map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group flex flex-col rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-[#E10E1D]/40 hover:shadow-[0_20px_40px_-20px_rgba(11,29,58,0.3)]"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0B1D3A]/6 text-[#0B1D3A] transition group-hover:bg-[#E10E1D] group-hover:text-white">
                    <ServiceIcon name={s.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-[#0B1D3A]">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.summary}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold text-[#E10E1D]">
                    Learn more <ServiceIcon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" strokeWidth={2.2} />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      <Footer />
    </main>
  );
}
