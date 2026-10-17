import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceIcon } from "@/components/ServiceIcon";
import { FaqList } from "@/components/FaqSection";
import { JsonLd, faqJsonLd } from "@/components/JsonLd";
import { PROCESS, SERVICES, getService } from "@/lib/services";
import { PROJECTS } from "@/lib/projects";
import { SITE, absoluteUrl } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  const { title, description } = service.seo;
  const path = `/services/${service.slug}`;

  return {
    title,
    description,
    keywords: service.keywords,
    alternates: { canonical: path },
    openGraph: { type: "website", url: path, title: `${title} | ${SITE.name}`, description, siteName: SITE.name, locale: "en_GB" },
    twitter: { card: "summary_large_image", title: `${title} | ${SITE.name}`, description },
  };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const url = absoluteUrl(`/services/${service.slug}`);
  const steps = service.steps ?? PROCESS;
  const related = [
    ...SERVICES.filter((s) => s.category === service.category && s.slug !== service.slug),
    ...SERVICES.filter((s) => s.category !== service.category),
  ].slice(0, 3);
  const work = PROJECTS.filter((p) => p.services?.includes(service.slug));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: service.title,
        serviceType: service.cardTitle,
        description: service.intro,
        url,
        provider: { "@id": `${SITE.url}/#organization` },
        areaServed: SITE.areaServed.map((name) => ({ "@type": "Country", name })),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `${service.title} — what's included`,
          itemListElement: service.included.map((name) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name },
          })),
        },
      },
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: `${service.seo.title} | ${SITE.name}`,
        description: service.seo.description,
        inLanguage: "en-GB",
        isPartOf: { "@id": `${SITE.url}/#website` },
        about: { "@id": `${url}#service` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "Services", item: absoluteUrl("/services") },
          { "@type": "ListItem", position: 3, name: service.title, item: url },
        ],
      },
    ],
  };

  return (
    <main className="flex min-h-dvh flex-col bg-white text-slate-900">
      <JsonLd data={jsonLd} />
      <JsonLd data={faqJsonLd(service.faqs)} />
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0B1D3A] pb-14 pt-32 text-white sm:pb-16 sm:pt-36 lg:pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 h-112 w-md rounded-full bg-[#E10E1D]/20 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-8">
            <nav aria-label="Breadcrumb" className="text-sm text-white/60">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li aria-hidden>/</li>
                <li><Link href="/services" className="hover:text-white">Services</Link></li>
                <li aria-hidden>/</li>
                <li className="text-white" aria-current="page">{service.cardTitle}</li>
              </ol>
            </nav>
            <span className="mt-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E10E1D] shadow-[0_10px_28px_-6px_rgba(225,14,29,0.7)]">
              <ServiceIcon name={service.icon} className="h-7 w-7" />
            </span>
            <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>
            <p className="mt-4 text-lg font-semibold text-[#ff8a7a] sm:text-xl">{service.tagline}</p>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
              {service.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#E10E1D] px-7 py-3.5 text-xs font-bold uppercase tracking-[0.18em] shadow-[0_10px_28px_-8px_rgba(225,14,29,0.7)] transition hover:brightness-110"
              >
                Book a consultation <ServiceIcon name="arrow" className="h-4 w-4" strokeWidth={2.2} />
              </Link>
              <a
                href={`tel:${SITE.phone}`}
                className="inline-flex items-center rounded-full border border-white/25 px-7 py-3.5 text-xs font-bold uppercase tracking-[0.18em] transition hover:bg-white/10"
              >
                Call {SITE.phoneDisplay}
              </a>
            </div>
          </div>

          <aside className="self-end rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm lg:col-span-4">
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/50">At a glance</p>
            <dl className="mt-4 space-y-4 text-sm">
              <div>
                <dt className="text-white/50">Key focus</dt>
                <dd className="mt-1 font-semibold">{service.features.join(" · ")}</dd>
              </div>
              <div>
                <dt className="text-white/50">Areas served</dt>
                <dd className="mt-1 font-semibold">London &amp; across the UK; US clients served remotely</dd>
              </div>
              <div>
                <dt className="text-white/50">Getting started</dt>
                <dd className="mt-1 font-semibold">Discovery call &amp; tailored proposal</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      {/* Overview + who it's for */}
      {service.overview && (
        <section className="py-14 sm:py-16">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-14 lg:px-10">
            <article className="lg:col-span-7">
              <p className="section-eyebrow">Overview</p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-[#0B1D3A] sm:text-4xl">
                How our {service.cardTitle.split(" – ")[0]} service helps your business grow
              </h2>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-700 sm:text-[17px]">
                {service.overview.map((p) => (
                  <p key={p.slice(0, 32)}>{p}</p>
                ))}
              </div>
            </article>
            <aside className="lg:col-span-5">
              <div className="rounded-3xl border border-slate-200 bg-[#F7F8FB] p-7 lg:sticky lg:top-28">
                <h2 className="text-xl font-black tracking-tight text-[#0B1D3A]">Who it’s for</h2>
                <ul className="mt-5 space-y-3">
                  {service.whoFor.map((w) => (
                    <li key={w} className="flex gap-3 text-[15px] leading-snug text-slate-700">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0B1D3A] text-white">
                        <ServiceIcon name="check" className="h-3 w-3" strokeWidth={2.6} />
                      </span>
                      {w}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#E10E1D]"
                >
                  Check if we’re a fit <ServiceIcon name="arrow" className="h-4 w-4" strokeWidth={2.2} />
                </Link>
              </div>
            </aside>
          </div>
        </section>
      )}

      {/* Included + benefits */}
      <section className="bg-[#F7F8FB] py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-7">
            <p className="section-eyebrow">What&apos;s included</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#0B1D3A] sm:text-4xl">
              Our {service.cardTitle.toLowerCase()} service includes
            </h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {service.included.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-[15px] leading-snug text-slate-700 shadow-sm"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E10E1D]/10 text-[#E10E1D]">
                    <ServiceIcon name="check" className="h-3 w-3" strokeWidth={2.6} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-5">
            <p className="section-eyebrow">Why it matters</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#0B1D3A] sm:text-4xl">
              The results you can expect
            </h2>
            <ol className="mt-8 space-y-3">
              {service.benefits.map((b, i) => (
                <li key={b} className="flex items-center gap-4 rounded-2xl bg-[#0B1D3A] p-5 text-white">
                  <span className="font-mono text-sm font-bold text-[#ff8a7a]">0{i + 1}</span>
                  <span className="font-semibold">{b}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <p className="section-eyebrow">How we work</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-[#0B1D3A] sm:text-4xl">
            Our {service.cardTitle.split(" – ")[0]} process, step by step
          </h2>
          <ol className={`mt-8 grid gap-4 sm:grid-cols-2 ${steps.length === 5 ? "lg:grid-cols-5" : "lg:grid-cols-4"}`}>
            {steps.map((step, i) => (
              <li key={step.title} className="relative rounded-3xl border border-slate-200 bg-white p-6">
                <span className="text-4xl font-black text-[#E10E1D]/15">0{i + 1}</span>
                <h3 className="mt-2 text-lg font-bold text-[#0B1D3A]">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F7F8FB] py-14 sm:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:px-10">
          <div className="lg:col-span-4">
            <p className="section-eyebrow">FAQ</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#0B1D3A] sm:text-4xl">
              {service.cardTitle} questions
            </h2>
          </div>
          <div className="lg:col-span-8">
            <FaqList faqs={service.faqs} />
          </div>
        </div>
      </section>

      {/* Real portfolio evidence */}
      {work.length > 0 && (
        <section className="bg-[#0B1D3A] py-14 text-white sm:py-16" aria-labelledby="work-heading">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <p className="section-eyebrow section-eyebrow-dark">Our work</p>
            <h2 id="work-heading" className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
              Products we&apos;ve built
            </h2>
            <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {work.map((p) => (
                <li key={p.href}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener"
                    className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-[#E10E1D]/60 hover:bg-white/10"
                  >
                    <span className="text-lg font-bold">{p.name}</span>
                    <span className="mt-2 flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span key={t} className="rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-semibold text-white/80">
                          {t}
                        </span>
                      ))}
                    </span>
                    <span className="mt-3 text-sm leading-relaxed text-white/70">{p.description}</span>
                    <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold text-[#ff8a7a]">
                      Visit {p.name}
                      <ServiceIcon name="arrow" className="h-4 w-4 transition group-hover:translate-x-1" strokeWidth={2.2} />
                      <span className="sr-only">(opens in a new tab)</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Related */}
      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <h2 className="text-2xl font-black tracking-tight text-[#0B1D3A] sm:text-3xl">Related services</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {related.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex gap-4 rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-[#E10E1D]/40 hover:shadow-[0_20px_40px_-20px_rgba(11,29,58,0.3)]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0B1D3A]/6 text-[#0B1D3A] transition group-hover:bg-[#E10E1D] group-hover:text-white">
                  <ServiceIcon name={s.icon} className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-bold text-[#0B1D3A]">{s.cardTitle}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-slate-600">{s.tagline}</span>
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-3xl bg-linear-to-r from-[#E10E1D] to-[#b30a17] p-8 text-white sm:flex-row sm:items-center sm:p-10">
            <div>
              <h2 className="text-2xl font-black sm:text-3xl">Ready to grow with {SITE.name}?</h2>
              <p className="mt-2 text-white/85">Tell us about your project and we’ll arrange a discovery call.</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-[#0B1D3A] transition hover:bg-white/90"
            >
              Contact us <ServiceIcon name="arrow" className="h-4 w-4" strokeWidth={2.2} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
