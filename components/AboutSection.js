"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const COLLAGE = {
  main: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80",
  topRight: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=500&q=80",
  bottomLeft: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=500&q=80",
  bottomRight: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=700&q=80",
};

const FEATURES = [
  "Operations, software, and marketplaces under one accountable partner.",
  "Clear milestones and reporting so you always know what shipped and why.",
  "Support models that scale—from lean teams to full call-center coverage.",
];

function IconHome({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <path d="M3 10.5L12 4l9 6.5V20a1 1 0 01-1 1h-5v-7H9v7H4a1 1 0 01-1-1v-9.5z" />
    </svg>
  );
}

function IconTrophy({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 01-10 0V4zM17 4h2a2 2 0 012 2v1a2 2 0 01-2 2h-2M7 4H5a2 2 0 00-2 2v1a2 2 0 002 2h2" />
    </svg>
  );
}

function IconCheck({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      aria-hidden
    >
      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ProgressRing({ value, reduceMotion }) {
  const r = 42;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - value / 100);

  return (
    <div className="relative flex shrink-0 items-center justify-center">
      <svg
        className="h-28 w-28 -rotate-90 sm:h-32 sm:w-32"
        viewBox="0 0 100 100"
        aria-hidden
      >
        <circle
          cx="50"
          cy="50"
          r={r}
          fill="none"
          className="stroke-white/10"
          strokeWidth="7"
        />
        <motion.circle
          cx="50"
          cy="50"
          r={r}
          fill="none"
          className="stroke-orange-500"
          strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray={c}
          initial={reduceMotion ? false : { strokeDashoffset: c }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0.01 : 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <span className="absolute text-center text-2xl font-black tracking-tight text-white sm:text-3xl">
        {value}%
      </span>
    </div>
  );
}

export function AboutSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="relative scroll-mt-24 bg-black py-20 text-white sm:py-24 lg:py-28"
      aria-labelledby="about-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_20%_40%,rgba(249,115,22,0.12),transparent_50%)]"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-[min(100%,1600px)] px-5 sm:px-8 lg:px-10 xl:px-14">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Left: collage + experience badge */}
          <motion.div
            className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: reduceMotion ? 0.01 : 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="pointer-events-none absolute -inset-4 -z-10 opacity-[0.35]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at center, rgba(249,115,22,0.35) 1px, transparent 1px)",
                backgroundSize: "14px 14px",
              }}
              aria-hidden
            />

            <div className="relative aspect-[4/5] w-full max-w-md sm:max-w-lg lg:max-w-none">
              <div
                className="absolute inset-0 grid gap-3 sm:gap-4"
                style={{
                  gridTemplateColumns: "minmax(0, 1fr) minmax(0, 38%)",
                  gridTemplateRows:
                    "minmax(0, 1.2fr) minmax(0, 0.22fr) minmax(0, 0.95fr)",
                }}
              >
                <div className="relative min-h-0 overflow-hidden rounded-3xl ring-1 ring-orange-500/25 [grid-column:1] [grid-row:1/span_2]">
                  <Image
                    src={COLLAGE.main}
                    alt="Team collaborating at Digital Drifters"
                    fill
                    className="object-cover grayscale contrast-[1.05]"
                    sizes="(max-width: 1024px) 90vw, 40vw"
                  />
                </div>
                <div className="relative aspect-square min-h-0 overflow-hidden rounded-full ring-1 ring-orange-500/25 [grid-column:2] [grid-row:1]">
                  <Image
                    src={COLLAGE.topRight}
                    alt="Team workshop"
                    fill
                    className="object-cover grayscale contrast-[1.05]"
                    sizes="(max-width: 1024px) 28vw, 14vw"
                  />
                </div>
                <div className="relative aspect-square w-[58%] max-w-[10rem] min-h-0 min-w-0 justify-self-center self-center overflow-hidden rounded-full ring-1 ring-orange-500/25 [grid-column:1] [grid-row:3] sm:max-w-[11rem]">
                  <Image
                    src={COLLAGE.bottomLeft}
                    alt="Working at a laptop"
                    fill
                    className="object-cover grayscale contrast-[1.05]"
                    sizes="(max-width: 1024px) 24vw, 12vw"
                  />
                </div>
                <div className="relative min-h-[7.5rem] min-w-0 overflow-hidden rounded-3xl ring-1 ring-orange-500/25 [grid-column:2] [grid-row:3] sm:min-h-[9rem]">
                  <Image
                    src={COLLAGE.bottomRight}
                    alt="Team in the office"
                    fill
                    className="object-cover grayscale contrast-[1.05]"
                    sizes="(max-width: 1024px) 32vw, 18vw"
                  />
                </div>
              </div>

              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div
                  className="pointer-events-auto flex h-[9.5rem] w-[9.5rem] flex-col items-center justify-center rounded-full bg-orange-500 px-4 text-center shadow-[0_0_60px_-8px_rgba(249,115,22,0.75)] ring-4 ring-black/80 sm:h-[11rem] sm:w-[11rem]"
                  aria-label="Over ten years combined experience across the team"
                >
                  <IconTrophy className="mb-1 h-6 w-6 text-white sm:h-7 sm:w-7" />
                  <span className="text-3xl font-black leading-none text-white sm:text-4xl">
                    10+
                  </span>
                  <span className="mt-1 max-w-[9rem] text-[9px] font-bold uppercase leading-tight tracking-[0.14em] text-white sm:text-[10px] sm:tracking-[0.18em]">
                    Years combined experience
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: copy */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: reduceMotion ? 0.01 : 0.6,
              delay: reduceMotion ? 0 : 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.22em] text-orange-500 sm:text-sm sm:tracking-[0.26em]">
              <IconHome className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
              Introduction to us
            </p>
            <h2
              id="about-heading"
              className="mt-4 text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]"
            >
              Helping fast-moving businesses succeed
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
              Digital Drifters partners with teams that need operations tightened,
              software shipped, eBay and Amazon channels grown, and call-center
              coverage that stays on-brand. We keep scope honest, communication
              direct, and outcomes measurable—black-and-orange clarity, no fluff.
            </p>

            <div className="my-10 h-px w-full max-w-xl bg-linear-to-r from-transparent via-white/20 to-transparent" />

            <div className="grid gap-10 sm:grid-cols-2 sm:gap-12">
              <ul className="flex flex-col gap-5">
                {FEATURES.map((line) => (
                  <li key={line} className="flex gap-3 text-sm leading-snug text-white sm:text-base">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500">
                      <IconCheck className="h-3.5 w-3.5 text-black" />
                    </span>
                    <span className="text-white/90">{line}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                <ProgressRing value={85} reduceMotion={reduceMotion === true} />
                <div>
                  <h3 className="text-lg font-bold text-white sm:text-xl">
                    Agency delivery
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75 sm:text-base">
                    Roadmaps, builds, and support cycles tuned to how your business
                    actually runs—so velocity shows up in revenue and retention, not
                    slide decks alone.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex max-w-xl flex-col gap-8 border-t border-white/10 pt-10 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-orange-500/50">
                  <Image
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=128&h=128&q=80"
                    alt="Digital Drifters leadership"
                    fill
                    className="object-cover grayscale"
                    sizes="56px"
                  />
                </div>
                <div>
                  <p className="text-base font-bold text-white sm:text-lg">
                    Digital Drifters
                  </p>
                  <p className="mt-0.5 text-xs font-bold uppercase tracking-[0.2em] text-orange-500 sm:text-sm">
                    Leadership · Delivery
                  </p>
                </div>
              </div>
              <Link
                href="#services"
                className="inline-flex w-fit items-center justify-center rounded-xl border-2 border-orange-500 bg-black px-7 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-[0_0_28px_-4px_rgba(249,115,22,0.5)] transition hover:bg-orange-500 hover:text-black hover:shadow-[0_0_40px_-2px_rgba(249,115,22,0.65)] sm:text-sm"
              >
                Learn more
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
