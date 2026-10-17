"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ServiceIcon } from "@/components/ServiceIcon";

const PILLARS = [
  {
    tag: "SEO",
    title: "Rank on Google & Bing",
    text: "Technical, on-page and local SEO that wins the keywords your buyers search.",
    icon: "search",
    href: "/services/seo",
  },
  {
    tag: "GBP",
    title: "Win Google Maps",
    text: "Google Business Profile creation, verification and management for the local 3-pack.",
    icon: "pin",
    href: "/services/google-business-profile-management",
  },
  {
    tag: "AEO",
    title: "Become the answer",
    text: "Featured snippets, People Also Ask and voice search answers that point to you.",
    icon: "answer",
    href: "/services/aeo-answer-engine-optimization",
  },
  {
    tag: "GEO",
    title: "Get recommended by AI",
    text: "Visibility inside ChatGPT, Gemini, Perplexity, Copilot and Google AI Overviews.",
    icon: "spark",
    href: "/services/geo-generative-engine-optimization",
  },
];

const ENGINES = ["Google", "Google Maps", "Bing", "ChatGPT", "Gemini", "Perplexity", "Copilot", "Siri & Alexa"];

function SearchMockup() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div
        aria-hidden
        className="absolute -inset-6 rounded-[2.5rem] bg-[radial-gradient(circle_at_30%_20%,rgba(225,14,29,0.35),transparent_60%)] blur-2xl"
      />
      <div className="relative space-y-3">
        {/* Search bar */}
        <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white px-5 py-3.5 text-sm text-slate-500 shadow-2xl">
          <ServiceIcon name="search" className="h-4 w-4 text-slate-400" />
          best software &amp; SEO agency near me
        </div>

        {/* AI overview */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.07] p-4 backdrop-blur-md">
          <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#ffb4a8]">
            <ServiceIcon name="spark" className="h-3.5 w-3.5" /> AI overview
          </p>
          <p className="mt-2 text-sm leading-relaxed text-white/85">
            <span className="font-semibold text-white">Digital Drifters</span> is a London-based
            agency offering software development, SEO, GEO and Google Business Profile management…
          </p>
        </div>

        {/* Map pack */}
        <div className="rounded-2xl bg-white p-4 shadow-xl">
          <div className="flex items-start gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E10E1D] text-white">
              <ServiceIcon name="pin" className="h-4 w-4" strokeWidth={2} />
            </span>
            <div className="min-w-0">
              <p className="truncate font-bold text-[#0B1D3A]">Digital Drifters</p>
              <p className="text-xs text-slate-500">Software company · London E12</p>
              <p className="mt-1 text-xs font-semibold text-emerald-600">Open · Call · Website</p>
            </div>
          </div>
        </div>

        {/* Organic result */}
        <div className="rounded-2xl bg-white/95 p-4 shadow-xl">
          <p className="text-xs text-emerald-700">digitaldrifters.co › services</p>
          <p className="mt-0.5 font-semibold text-[#1a0dab]">
            Digital Drifters | Software, SEO &amp; eCommerce Agency
          </p>
          <p className="mt-1 text-xs leading-relaxed text-slate-600">
            Custom software, SEO, AEO &amp; GEO, Amazon &amp; eBay management and more…
          </p>
        </div>
      </div>
    </div>
  );
}

export function SearchVisibilitySection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="seo"
      className="relative scroll-mt-24 overflow-hidden bg-[#0B1D3A] py-14 text-white sm:py-16 lg:py-20"
      aria-labelledby="seo-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.18) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage: "radial-gradient(ellipse 60% 60% at 80% 40%, black 20%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 60% at 80% 40%, black 20%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <motion.div
            className="lg:col-span-7"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="section-eyebrow section-eyebrow-dark">SEO · AEO · GEO · Google Business</p>
            <h2
              id="seo-heading"
              className="mt-5 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl"
            >
              Be found everywhere your{" "}
              <span className="text-gradient-brand">customers search</span>
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
              Search has changed. Buyers now find businesses on Google, in Maps, through voice
              assistants and inside AI tools like ChatGPT. We optimise your brand for all of
              them—so you show up first, wherever and however people look.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {PILLARS.map((p, i) => (
                <motion.div
                  key={p.tag}
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.07 }}
                >
                  <Link
                    href={p.href}
                    className="group flex h-full gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-[#E10E1D]/60 hover:bg-white/[0.08]"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E10E1D] shadow-[0_8px_20px_-6px_rgba(225,14,29,0.7)]">
                      <ServiceIcon name={p.icon} className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff8a7a]">
                        {p.tag}
                      </span>
                      <span className="mt-0.5 block font-bold">{p.title}</span>
                      <span className="mt-1 block text-sm leading-relaxed text-white/65">{p.text}</span>
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5"
            initial={reduceMotion ? false : { opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <SearchMockup />
          </motion.div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4 border-t border-white/10 pt-8 sm:mt-12 lg:flex-row lg:justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
            Optimised for
          </p>
          <ul className="flex flex-wrap justify-center gap-2">
            {ENGINES.map((e) => (
              <li
                key={e}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-white/80"
              >
                {e}
              </li>
            ))}
          </ul>
          <Link
            href="/services/seo"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-[#0B1D3A] transition hover:bg-white/90"
          >
            Get a free SEO audit <ServiceIcon name="arrow" className="h-4 w-4" strokeWidth={2.2} />
          </Link>
        </div>
      </div>
    </section>
  );
}
