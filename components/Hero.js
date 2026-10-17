"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";

const HERO_BANNER_SRC = "/3.png";

const SERVICES = [
  "Software development",
  "SEO, AEO & GEO",
  "Google Business Profile",
  "eCommerce — eBay & Amazon",
  "Operation management",
  "AI integration",
  "Call center solutions",
];

/** One interval tick = one character step (typing or deleting). Hold/gap measured in ticks. */
const TICK_MS = 48;
const TICK_MS_REDUCED = 95;
const HOLD_TICKS = Math.ceil(2200 / TICK_MS);
const HOLD_TICKS_REDUCED = Math.ceil(2800 / TICK_MS_REDUCED);
const GAP_TICKS = Math.ceil(450 / TICK_MS);
const GAP_TICKS_REDUCED = Math.ceil(550 / TICK_MS_REDUCED);

/** Same typography for every rotating service line */
const serviceLineClass =
  "text-left text-2xl font-semibold leading-snug tracking-tight text-[#083157] sm:text-3xl md:text-4xl";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.12,
    },
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

function HeroRotatingServices() {
  const reduceMotion = useReducedMotion();
  const [displayed, setDisplayed] = useState("");
  const [serviceIndex, setServiceIndex] = useState(0);

  /** Ref-driven machine avoids Strict Mode clearing chained timeouts. */
  const machineRef = useRef({
    phase: "typing",
    charIndex: 0,
    svc: 0,
    holdTicks: 0,
    gapTicks: 0,
  });

  const tickMs = reduceMotion ? TICK_MS_REDUCED : TICK_MS;
  const holdTicks = reduceMotion ? HOLD_TICKS_REDUCED : HOLD_TICKS;
  const gapTicks = reduceMotion ? GAP_TICKS_REDUCED : GAP_TICKS;

  const stepMachine = useCallback(() => {
    const m = machineRef.current;
    const full = SERVICES[m.svc];

    if (m.phase === "typing") {
      if (m.charIndex < full.length) {
        m.charIndex += 1;
        setDisplayed(full.slice(0, m.charIndex));
      } else {
        m.phase = "hold";
        m.holdTicks = 0;
      }
      return;
    }

    if (m.phase === "hold") {
      m.holdTicks += 1;
      if (m.holdTicks >= holdTicks) {
        m.phase = "deleting";
      }
      return;
    }

    if (m.phase === "deleting") {
      if (m.charIndex > 0) {
        m.charIndex -= 1;
        setDisplayed(full.slice(0, m.charIndex));
      } else {
        m.phase = "gap";
        m.gapTicks = 0;
      }
      return;
    }

    if (m.phase === "gap") {
      m.gapTicks += 1;
      if (m.gapTicks >= gapTicks) {
        m.svc = (m.svc + 1) % SERVICES.length;
        m.charIndex = 0;
        m.phase = "typing";
        setServiceIndex(m.svc);
        setDisplayed("");
      }
    }
  }, [holdTicks, gapTicks]);

  useEffect(() => {
    const id = window.setInterval(stepMachine, tickMs);
    return () => window.clearInterval(id);
  }, [stepMachine, tickMs]);

  /** JS-driven blink so the caret stays visible vs. Framer / stacking contexts. */
  const [caretVisible, setCaretVisible] = useState(true);
  useEffect(() => {
    const ms = reduceMotion ? 1100 : 520;
    const id = window.setInterval(() => setCaretVisible((v) => !v), ms);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  return (
    <div
      className="mt-6 w-full max-w-xl"
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#6b7280]">
        Our services
      </p>
      <div
        className="mt-3 min-h-13 sm:min-h-15 md:min-h-17"
        aria-label={`Current service: ${SERVICES[serviceIndex]}`}
      >
        <p className={`${serviceLineClass} inline-flex flex-wrap items-baseline gap-0`}>
          <span>{displayed}</span>
          <span
            className="ml-0.5 inline-block h-[1em] w-[2px] shrink-0 translate-y-[0.08em] self-end rounded-[1px] bg-[#073763] align-bottom will-change-[opacity]"
            style={{ opacity: caretVisible ? 1 : 0 }}
            aria-hidden
          />
        </p>
      </div>
      <div className="mt-4 flex gap-1.5" aria-hidden>
        {SERVICES.map((line, i) => (
          <span
            key={line}
            className={`h-0.5 rounded-full transition-all duration-500 ${
              i === serviceIndex ? "w-8 bg-[#083157]" : "w-1.5 bg-[#083157]/15"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  const [bannerReady, setBannerReady] = useState(false);
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative isolate w-full scroll-mt-24 lg:min-h-dvh overflow-hidden bg-white text-[#083157]"
      aria-label="Hero"
    >
      {/* Ambient dot-grid backdrop, contained to the copy column like the reference layout */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-0 w-full lg:w-[46%]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(8,49,87,0.14) 1.5px, transparent 1.5px)",
          backgroundSize: "26px 26px",
          maskImage:
            "radial-gradient(ellipse 80% 65% at 30% 55%, black 45%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 65% at 30% 55%, black 45%, transparent 85%)",
        }}
      />

      <div className="relative z-10 mx-auto grid w-full lg:min-h-dvh max-w-[min(100%,1600px)] lg:grid-cols-12">
        {/* Left: copy */}
        <div className="relative z-10 flex flex-col justify-center px-5 pb-8 pt-28 sm:px-8 sm:pb-10 sm:pt-32 lg:col-span-5 lg:px-10 lg:pb-16 lg:pt-28 xl:px-14">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex max-w-xl flex-col items-start text-left"
          >
            <motion.h1 variants={lineVariants} className="text-[#083157]">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#E10E1D]/20 bg-white px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#E10E1D] shadow-sm sm:text-[11px]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#E10E1D]" aria-hidden />
                London software, SEO &amp; eCommerce agency
              </span>
              <span
                className="mt-4 block font-black leading-[0.92] tracking-tighter sm:mt-5"
                style={{ fontSize: "clamp(2.75rem, 8vw, 6.75rem)" }}
              >
                Digital Drifters
              </span>
            </motion.h1>

            <motion.div variants={lineVariants} className="w-full">
              <HeroRotatingServices />
            </motion.div>

            <motion.p
              variants={lineVariants}
              className="mt-6 max-w-md text-base font-medium leading-relaxed text-[#4b5563]"
            >
              End-to-end partners for custom software, SEO &amp; AI search visibility,
              marketplace growth, operations and customer support—serving businesses across
              the UK, US and worldwide.
            </motion.p>

            <motion.div variants={lineVariants} className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="#services"
                className="inline-flex items-center gap-3 rounded-full bg-red-600 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-white shadow-[0_16px_32px_-12px_rgba(8,49,87,0.55)] transition hover:bg-[#0a3d6b] hover:shadow-[0_20px_36px_-10px_rgba(8,49,87,0.6)]"
              >
                Discover
                <span aria-hidden className="text-base font-normal">
                  →
                </span>
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center rounded-full border border-[#083157]/20 px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#083157] transition hover:border-[#083157]/40 hover:bg-[#083157]/5"
              >
                Free consultation
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Right: device showcase banner, framed in a soft card like the reference */}
        <div className="relative z-0 flex items-stretch justify-center overflow-hidden bg-white lg:col-span-7 lg:min-h-dvh">
          <div className="relative flex w-full flex-1 items-center justify-center px-4 pb-12 pt-2 sm:px-8 sm:pb-14 lg:px-10 lg:pb-16 lg:pt-24">
            <div className="relative w-full max-w-[min(100%,760px)]">
              <div className="rounded-[2rem] bg-[#f4f5f7] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] sm:p-10 lg:p-12">
                <div
                  className={`relative overflow-hidden rounded-3xl transition-opacity duration-700 ${
                    bannerReady ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={HERO_BANNER_SRC}
                    alt="Digital Drifters — web, mobile, and platform work across devices"
                    width={2112}
                    height={1152}
                    priority
                    className="h-auto w-full object-contain object-center drop-shadow-[0_24px_48px_rgba(8,49,87,0.16)]"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    onLoad={() => setBannerReady(true)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint — sits above fixed footer */}
      <motion.div
        className="pointer-events-auto absolute bottom-8 right-8 z-20 hidden lg:block"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Link
          href="#services"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#083157]/15 bg-white text-[#083157] shadow-sm backdrop-blur-md transition hover:border-[#083157]/30 hover:bg-[#083157]/5"
          aria-label="Scroll to services"
        >
          <motion.span
            aria-hidden
            animate={reduceMotion ? {} : { y: [0, 4, 0] }}
            transition={
              reduceMotion
                ? {}
                : { duration: 1.6, repeat: Infinity, ease: "easeInOut" }
            }
            className="flex flex-col items-center"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.75"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </motion.span>
        </Link>
      </motion.div>
    </section>
  );
}