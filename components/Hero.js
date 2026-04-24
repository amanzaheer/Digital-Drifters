"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";

const HERO_BANNER_SRC = "/moon1.png";

const SERVICES = [
  "Operation management",
  "Software development",
  "eCommerce — eBay & Amazon",
  "Call center solutions",
  "Other businesses",
];

/** One interval tick = one character step (typing or deleting). Hold/gap measured in ticks. */
const TICK_MS = 48;
const TICK_MS_REDUCED = 95;
const HOLD_TICKS = Math.ceil(2200 / TICK_MS);
const HOLD_TICKS_REDUCED = Math.ceil(2800 / TICK_MS_REDUCED);
const GAP_TICKS = Math.ceil(450 / TICK_MS);
const GAP_TICKS_REDUCED = Math.ceil(550 / TICK_MS_REDUCED);

/** Many small stars in the right strip only (deterministic layout). */
function buildHeroStars() {
  const out = [];
  for (let i = 0; i < 48; i += 1) {
    const row = Math.floor(i / 6);
    const col = i % 6;
    const topBase = 6 + row * 11.5 + (col % 2) * 4;
    const leftBase = 4 + col * 15 + (row % 3) * 5;
    out.push({
      top: `${Math.min(90, topBase + (i % 4))}%`,
      left: `${Math.min(92, leftBase + (i % 5))}%`,
      size: 1 + (i % 4) * 0.45,
      dur: 2.1 + (i % 9) * 0.32,
      delay: ((i * 0.17) % 2.8) + (i % 3) * 0.08,
    });
  }
  return out;
}

const HERO_STARS = buildHeroStars();

/**
 * Smooth drift via rAF + inline transform (reliable; Framer 3D parent + CSS
 * keyframes often fail to show motion on the image in some browsers).
 */
function HeroMoonDriftImage({ prefersReducedMotion, onLoadComplete }) {
  const wrapRef = useRef(null);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return undefined;

    const t0 = performance.now();
    let rafId = 0;
    const mild = prefersReducedMotion;

    const frame = (now) => {
      const s = (now - t0) / 1000;
      const x =
        Math.sin(s * (mild ? 0.22 : 0.52)) * (mild ? 6 : 22) +
        Math.sin(s * 0.23) * (mild ? 2.5 : 10);
      const y =
        Math.cos(s * (mild ? 0.2 : 0.46)) * (mild ? 5 : 18) +
        Math.cos(s * 0.2) * (mild ? 2.5 : 9);
      el.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0)`;
      rafId = requestAnimationFrame(frame);
    };

    rafId = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(rafId);
      el.style.transform = "translate3d(0,0,0)";
    };
  }, [prefersReducedMotion]);

  return (
    <div
      ref={wrapRef}
      className="relative h-full min-h-0 w-full will-change-transform"
    >
      <Image
        src={HERO_BANNER_SRC}
        alt="Digital Drifters — 3D visual"
        width={1200}
        height={1200}
        priority
        className="h-full w-full object-contain object-center"
        sizes="(max-width: 1024px) 100vw, 58vw"
        onLoadingComplete={onLoadComplete}
      />
    </div>
  );
}

/** Same typography for every rotating service line */
const serviceLineClass =
  "text-left text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl md:text-4xl";

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
      className="mt-8 w-full max-w-xl"
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-white/55">
        Our services
      </p>
      <div
        className="mt-3 min-h-13 sm:min-h-15 md:min-h-17"
        aria-label={`Current service: ${SERVICES[serviceIndex]}`}
      >
        <p className={`${serviceLineClass} inline-flex flex-wrap items-baseline gap-0`}>
          <span>{displayed}</span>
          <span
            className="ml-0.5 inline-block h-[1em] w-[2px] shrink-0 translate-y-[0.08em] self-end rounded-[1px] bg-orange-400 align-bottom will-change-[opacity]"
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
              i === serviceIndex
                ? "w-8 bg-linear-to-r from-orange-500 to-amber-400"
                : "w-1.5 bg-white/25"
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
  const prefersReducedMotion = reduceMotion === true;

  return (
    <section
      id="home"
      className="relative isolate min-h-dvh w-full scroll-mt-24 overflow-hidden bg-black text-white"
      aria-label="Hero"
    >
      <div className="mx-auto grid min-h-dvh w-full max-w-[min(100%,1600px)] lg:grid-cols-12">
        {/* Left: copy */}
        <div className="relative z-10 flex flex-col justify-center px-5 pb-32 pt-28 sm:px-8 sm:pb-28 sm:pt-32 lg:col-span-5 lg:px-10 lg:pb-24 lg:pt-28 xl:px-14">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex max-w-xl flex-col items-start text-left"
          >
            <motion.p
              variants={lineVariants}
              className="text-[11px] font-bold uppercase tracking-[0.32em] text-white/70 sm:text-xs"
            >
              We are
            </motion.p>

            <motion.h1
              variants={lineVariants}
              className="mt-3 font-black uppercase leading-[0.92] tracking-tighter text-white sm:mt-4  "
              style={{ fontSize: "clamp(2.25rem, 8vw, 6.75rem)" }}
            >
              <span className="text-orange-500">Digital</span>
              <span className="text-white"> Drifters</span>
            </motion.h1>

            <motion.div variants={lineVariants} className="w-full">
              <HeroRotatingServices />
            </motion.div>

            <motion.p
              variants={lineVariants}
              className="mt-8 max-w-md text-sm leading-relaxed text-zinc-400 sm:text-base"
            >
              End-to-end partners for operations, custom software, marketplace
              growth, and customer support—built for teams that want clarity and
              scale.
            </motion.p>

            <motion.div variants={lineVariants} className="mt-10">
              <Link
                href="#services"
                className="inline-flex items-center gap-3 rounded-full border border-white/90 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.22em] text-white transition hover:bg-white hover:text-black"
              >
                Discover
                <span aria-hidden className="text-base font-normal">
                  →
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Right: PNG banner with subtle 3D motion */}
        <div className="relative z-0 flex min-h-[42vh] items-stretch justify-center overflow-hidden bg-black lg:col-span-7 lg:min-h-dvh">
          <div
            className="pointer-events-none absolute inset-0 "
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 bg-linear-to-l from-black via-black/40 to-transparent lg:via-black/20"
            aria-hidden
          />

          <div className="relative flex w-full flex-1 items-center justify-center px-4 pb-28 pt-8 sm:px-8 sm:pb-32 lg:px-6 lg:pb-28 lg:pt-16">
            {/* Plain wrapper: no Framer transform on this subtree so moon drift always paints. */}
            <div className="relative aspect-square w-full max-w-[min(100%,560px)]">
              <div className="absolute -inset-6 rounded-4xl" aria-hidden />
              <div
                className={`relative z-10 flex h-full min-h-0 w-full flex-col overflow-hidden rounded-3xl transition-opacity duration-700 ${bannerReady ? "opacity-100" : "opacity-0"
                  }`}
              >
                <div className="relative min-h-0 flex-1">
                  <HeroMoonDriftImage
                    prefersReducedMotion={prefersReducedMotion}
                    onLoadComplete={() => setBannerReady(true)}
                  />
                </div>

                {/* Stars only on the right side of the frame (beside / around moon edge). */}
                <div
                  className="pointer-events-none absolute inset-y-2 right-0 z-20 w-[56%] overflow-hidden rounded-r-3xl sm:inset-y-3"
                  aria-hidden
                >
                  {HERO_STARS.map((st, i) => (
                    <span
                      key={i}
                      className="hero-star absolute rounded-full bg-white shadow-[0_0_5px_rgba(255,237,200,0.95)]"
                      style={{
                        top: st.top,
                        left: st.left,
                        width: st.size,
                        height: st.size,
                        ["--twinkle-dur"]: `${st.dur}s`,
                        ["--twinkle-delay"]: `${st.delay}s`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint — sits above fixed footer */}
      <motion.div
        className="pointer-events-auto absolute bottom-22 right-5 z-20 sm:bottom-25 sm:right-8"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Link
          href="#services"
          className="flex h-11 w-11 items-center justify-center rounded-full  bg-black/40 text-white backdrop-blur-md transition hover:border-white/60 hover:bg-white/10"
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
