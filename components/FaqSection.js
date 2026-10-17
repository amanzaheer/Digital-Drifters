import Link from "next/link";
import { JsonLd, faqJsonLd } from "@/components/JsonLd";

export function FaqList({ faqs }) {
  return (
    <div className="divide-y divide-slate-200 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_8px_30px_-16px_rgba(15,23,42,0.15)]">
      {faqs.map(({ q, a }, i) => (
        <details key={q} className="faq-item group" open={i === 0}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 text-left transition hover:bg-slate-50 sm:px-7">
            <h3 className="text-base font-bold text-[#0B1D3A] sm:text-lg">{q}</h3>
            <span className="faq-icon flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E10E1D]/10 text-xl leading-none text-[#E10E1D] transition-transform duration-300">
              +
            </span>
          </summary>
          <p className="px-6 pb-6 text-[15px] leading-relaxed text-slate-600 sm:px-7">{a}</p>
        </details>
      ))}
    </div>
  );
}

export function FaqSection({ faqs }) {
  return (
    <section
      id="faq"
      className="relative scroll-mt-24 bg-[#F7F8FB] py-14 sm:py-16 lg:py-20"
      aria-labelledby="faq-heading"
    >
      <JsonLd data={faqJsonLd(faqs)} />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:px-10">
        <div className="lg:col-span-4">
          <p className="section-eyebrow">FAQ</p>
          <h2
            id="faq-heading"
            className="mt-5 text-3xl font-black leading-tight tracking-tight text-[#0B1D3A] sm:text-4xl"
          >
            Questions businesses <span className="text-gradient-brand">ask us</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Straight answers about our services, process and results. Can’t find yours?
          </p>
          <Link
            href="/#contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0B1D3A] px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white transition hover:bg-[#13305c]"
          >
            Ask our team →
          </Link>
        </div>
        <div className="lg:col-span-8">
          <FaqList faqs={faqs} />
        </div>
      </div>
    </section>
  );
}
