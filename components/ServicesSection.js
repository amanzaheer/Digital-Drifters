"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CATEGORIES, SERVICES } from "@/lib/services";
import { ServiceIcon } from "@/components/ServiceIcon";

const HIGHLIGHTS = [
  { value: String(SERVICES.length), label: "Services under one roof" },
  { value: "E12", label: "East London head office" },
  { value: "UK · US", label: "Markets we serve" },
  { value: "1", label: "Point of contact" },
];

const LG_SPAN = { 1: "lg:col-span-1", 2: "lg:col-span-2", 3: "lg:col-span-3" };
const MD_SPAN = { 1: "md:col-span-1", 2: "md:col-span-2" };

function ServiceCard({ service, index, reduceMotion }) {
  const { slug, cardTitle, summary, features, icon, category } = service;
  const isSearch = category === "search";

  return (
    <motion.article
      layout={!reduceMotion}
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduceMotion ? {} : { opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-7 shadow-[0_1px_2px_rgba(15,23,42,0.04),0_8px_24px_-12px_rgba(15,23,42,0.08)] transition-[box-shadow,border-color,transform] duration-500 hover:-translate-y-1.5 hover:border-transparent hover:shadow-[0_28px_60px_-20px_rgba(11,29,58,0.35)]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-linear-to-br from-[#0B1D3A] via-[#0f2a52] to-[#0B1D3A] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#E10E1D]/25 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="relative flex items-start justify-between gap-3">
        <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[#0B1D3A]/[0.06] text-[#0B1D3A] ring-1 ring-[#0B1D3A]/10 transition-all duration-500 group-hover:bg-[#E10E1D] group-hover:text-white group-hover:ring-[#E10E1D] group-hover:shadow-[0_10px_24px_-6px_rgba(225,14,29,0.6)]">
          <ServiceIcon name={icon} className="h-6 w-6" />
        </span>
        {isSearch ? (
          <span className="rounded-full bg-[#E10E1D]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#E10E1D] transition-colors duration-500 group-hover:bg-white/10 group-hover:text-white">
            Search growth
          </span>
        ) : (
          <span className="font-mono text-sm font-semibold tracking-wider text-slate-300 transition-colors duration-500 group-hover:text-white/40">
            {String(SERVICES.indexOf(service) + 1).padStart(2, "0")}
          </span>
        )}
      </div>

      <h3 className="relative mt-5 text-xl font-bold tracking-tight text-[#0B1D3A] transition-colors duration-500 group-hover:text-white">
        {cardTitle}
      </h3>
      <p className="relative mt-2.5 text-[15px] leading-relaxed text-slate-600 transition-colors duration-500 group-hover:text-white/75">
        {summary}
      </p>

      <ul className="relative mt-5 space-y-2 border-t border-slate-100 pt-4 transition-colors duration-500 group-hover:border-white/10">
        {features.map((f) => (
          <li
            key={f}
            className="flex items-center gap-2.5 text-sm font-medium text-slate-700 transition-colors duration-500 group-hover:text-white/90"
          >
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E10E1D]/10 text-[#E10E1D] transition-colors duration-500 group-hover:bg-white/10 group-hover:text-white">
              <ServiceIcon name="check" className="h-3 w-3" strokeWidth={2.6} />
            </span>
            {f}
          </li>
        ))}
      </ul>

      <Link
        href={`/services/${slug}`}
        className="relative mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-[#E10E1D] transition-colors duration-500 after:absolute after:inset-0 group-hover:text-white"
      >
        Explore service
        <ServiceIcon
          name="arrow"
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5"
          strokeWidth={2.2}
        />
        <span className="sr-only">: {service.title}</span>
      </Link>
    </motion.article>
  );
}

function ConsultCard({ count }) {
  const lg = count % 3 === 0 ? 3 : 3 - (count % 3);
  const md = count % 2 === 0 ? 2 : 1;

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`relative flex flex-col justify-between gap-6 overflow-hidden rounded-3xl border border-dashed border-[#E10E1D]/35 bg-linear-to-br from-[#fff5f5] via-white to-[#f3f6fb] p-7 ${MD_SPAN[md]} ${LG_SPAN[lg]} ${lg > 1 ? "lg:flex-row lg:items-center" : ""}`}
    >
      <div>
        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#E10E1D]">
          Not sure where to start?
        </p>
        <h3 className="mt-2 text-xl font-black tracking-tight text-[#0B1D3A] sm:text-2xl">
          Talk to us about your goals
        </h3>
        <p className="mt-2 max-w-md text-[15px] leading-relaxed text-slate-600">
          Tell us your goals—we’ll recommend the right mix of services and a clear plan.
        </p>
      </div>
      <Link
        href="/#contact"
        className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full bg-[#E10E1D] px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-[0_10px_28px_-8px_rgba(225,14,29,0.6)] transition hover:brightness-110 lg:self-auto"
      >
        Book a consultation
        <ServiceIcon name="arrow" className="h-4 w-4" strokeWidth={2.2} />
      </Link>
    </motion.div>
  );
}

export function ServicesSection() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState("all");
  const visible = active === "all" ? SERVICES : SERVICES.filter((s) => s.category === active);

  return (
    <section
      id="services"
      className="relative scroll-mt-24 overflow-hidden bg-[#F7F8FB] py-14 sm:py-16 lg:py-20"
      aria-labelledby="services-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(11,29,58,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(11,29,58,0.05) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 70% 50% at 50% 0%, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 50% at 50% 0%, black 30%, transparent 75%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.header
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="section-eyebrow">Services we offer</p>
          <h2
            id="services-heading"
            className="mt-5 text-3xl font-black leading-tight tracking-tight text-[#0B1D3A] sm:text-4xl lg:text-5xl"
          >
            Solutions every business{" "}
            <span className="text-gradient-brand">needs to grow</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Software, websites and apps, IT consulting, SEO, Google Business Profile,
            eCommerce, operations and customer support—one team and one partner for the
            capabilities your business needs to grow.
          </p>
        </motion.header>

        <div
          role="tablist"
          aria-label="Filter services by category"
          className="mx-auto mt-8 flex w-fit max-w-full gap-1 overflow-x-auto rounded-full border border-slate-200 bg-white p-1.5 shadow-sm [scrollbar-width:none]"
        >
          {CATEGORIES.map((c) => {
            const selected = c.id === active;
            return (
              <button
                key={c.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(c.id)}
                className={`relative shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors sm:px-5 ${
                  selected ? "text-white" : "text-slate-600 hover:text-[#0B1D3A]"
                }`}
              >
                {selected && (
                  <motion.span
                    layoutId="services-tab"
                    className="absolute inset-0 rounded-full bg-[#0B1D3A]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{c.label}</span>
              </button>
            );
          })}
        </div>

        <motion.div layout className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          <AnimatePresence mode="popLayout">
            {visible.map((service, i) => (
              <ServiceCard
                key={service.slug}
                service={service}
                index={i}
                reduceMotion={reduceMotion}
              />
            ))}
            <ConsultCard key={`consult-${active}`} count={visible.length} />
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative mt-10 overflow-hidden rounded-3xl bg-[#0B1D3A] p-7 text-white shadow-[0_30px_70px_-30px_rgba(11,29,58,0.6)] sm:mt-12 sm:p-10"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full bg-[#E10E1D]/20 blur-3xl"
          />
          <div className="relative grid items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/60">
                Why Digital Drifters
              </p>
              <h3 className="mt-3 text-2xl font-black leading-tight sm:text-3xl">
                Everything your business needs in one trusted partner.
              </h3>
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-white/70">
                We streamline operations, improve visibility and accelerate long-term
                growth with reliable, end-to-end digital solutions.
              </p>
              <Link
                href="/#contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#E10E1D] px-7 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-[0_10px_28px_-8px_rgba(225,14,29,0.7)] transition hover:brightness-110"
              >
                Start a project <ServiceIcon name="arrow" className="h-4 w-4" strokeWidth={2.2} />
              </Link>
            </div>
            <dl className="grid grid-cols-2 gap-3 sm:gap-4 lg:col-span-6">
              {HIGHLIGHTS.map((h) => (
                <div
                  key={h.label}
                  className="flex flex-col-reverse rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition hover:border-white/25 hover:bg-white/[0.07]"
                >
                  <dt className="mt-1 text-xs font-medium uppercase tracking-wider text-white/55">
                    {h.label}
                  </dt>
                  <dd className="text-2xl font-black sm:text-3xl">{h.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
