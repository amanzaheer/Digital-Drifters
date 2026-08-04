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
  {
    text: "Operations, software, and marketplaces under one accountable partner.",
    icon: "briefcase",
  },
  {
    text: "Clear milestones and reporting so you always know what shipped and why.",
    icon: "flag",
  },
  {
    text: "Support models that scale—from lean teams to full call-center coverage.",
    icon: "users",
  },
];

function IconHome({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M3 10.5L12 4l9 6.5V20a1 1 0 01-1 1h-5v-7H9v7H4a1 1 0 01-1-1v-9.5z" />
    </svg>
  );
}

function IconTrophy({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 01-10 0V4zM17 4h2a2 2 0 012 2v1a2 2 0 01-2 2h-2M7 4H5a2 2 0 00-2 2v1a2 2 0 002 2h2" />
    </svg>
  );
}

function IconBriefcase({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <rect x="3" y="7.5" width="18" height="12" rx="2" />
      <path d="M8 7.5V6a2 2 0 012-2h4a2 2 0 012 2v1.5M3 12.5h18" strokeLinecap="round" />
    </svg>
  );
}

function IconFlag({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M5 3v18" strokeLinecap="round" />
      <path d="M5 4.5c2-1.2 4-1.2 6 0s4 1.2 6 0v9c-2 1.2-4 1.2-6 0s-4-1.2-6 0v-9z" strokeLinejoin="round" />
    </svg>
  );
}

function IconUsers({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <circle cx="9" cy="8" r="3.25" />
      <path d="M2.5 20c.7-3.4 3.2-5.5 6.5-5.5s5.8 2.1 6.5 5.5" strokeLinecap="round" />
      <path d="M15.5 5.2c1.6.4 2.75 1.85 2.75 3.55 0 1.7-1.15 3.15-2.75 3.55M21.5 20c-.55-2.65-2-4.5-4.25-5.25" strokeLinecap="round" />
    </svg>
  );
}

function IconArrowRight({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" aria-hidden>
      <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const FEATURE_ICONS = {
  briefcase: IconBriefcase,
  flag: IconFlag,
  users: IconUsers,
};

/** Small quarter-arc accent badge that sits on the icon circle, echoing the progress-ring motif */
function IconArcBadge() {
  return (
    <svg
      className="absolute -right-1 -top-1 h-4 w-4 sm:h-[18px] sm:w-[18px]"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <circle cx="12" cy="12" r="9.5" className="stroke-slate-200" strokeWidth="2.5" fill="white" />
      <path
        d="M12 2.5a9.5 9.5 0 016.5 16.4"
        className="stroke-red-600"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function ProgressRing({ value, reduceMotion }) {
  const r = 42;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - value / 100);

  return (
    <div className="relative flex shrink-0 items-center justify-center">
      <svg className="h-24 w-24 -rotate-90 sm:h-28 sm:w-28" viewBox="0 0 100 100" aria-hidden>
        <circle cx="50" cy="50" r={r} fill="none" className="stroke-slate-200" strokeWidth="7" />
        <motion.circle
          cx="50"
          cy="50"
          r={r}
          fill="none"
          className="stroke-red-600"
          strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray={c}
          initial={reduceMotion ? false : { strokeDashoffset: c }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0.01 : 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <span className="absolute text-center text-xl font-black tracking-tight text-[#0B1F4E] sm:text-2xl">
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
      className="relative scroll-mt-24 bg-slate-50 py-20 text-slate-900 sm:py-24 lg:py-28"
      aria-labelledby="about-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_20%_40%,rgba(249,115,22,0.06),transparent_50%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(11,31,78,0.12) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage: "linear-gradient(to bottom right, black, transparent 45%)",
        }}
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
            {/* soft red-to-navy glow along the left edge, echoing the reference */}
            <div
              className="pointer-events-none absolute -left-6 top-6 -z-10 h-[85%] w-16 rounded-full bg-linear-to-b from-red-600 via-red-500/60 to-[#0B1F4E] opacity-70 blur-2xl sm:-left-8 sm:w-20"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -inset-4 -z-10 opacity-[0.35]"
              style={{
                backgroundImage: "radial-gradient(circle at center, rgba(249,115,22,0.35) 1px, transparent 1px)",
                backgroundSize: "14px 14px",
              }}
              aria-hidden
            />

            <div className="relative aspect-[4/5] w-full max-w-md sm:max-w-lg lg:max-w-none">
              <div
                className="absolute inset-0 grid gap-3 sm:gap-4"
                style={{
                  gridTemplateColumns: "minmax(0, 1fr) minmax(0, 38%)",
                  gridTemplateRows: "minmax(0, 1.2fr) minmax(0, 0.22fr) minmax(0, 0.95fr)",
                }}
              >
                <div className="relative min-h-0 overflow-hidden rounded-3xl shadow-xl shadow-[#0B1F4E]/20 ring-1 ring-black/5 [grid-column:1] [grid-row:1/span_2]">
                  <Image
                    src={COLLAGE.main}
                    alt="Team collaborating at Digital Drifters"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 90vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#0B1F4E]/70 via-[#0B1F4E]/5 to-transparent" aria-hidden />
                  <p className="absolute left-5 top-5 max-w-[70%] font-serif text-lg italic leading-snug text-white drop-shadow-sm sm:text-xl">
                    We build
                    <br />
                    partnerships
                    <br />
                    <span className="relative inline-block">
                      that perform.
                      <span className="absolute -bottom-1 left-0 h-[3px] w-[85%] rounded-full bg-red-500" />
                    </span>
                  </p>
                </div>
                <div className="relative aspect-square min-h-0 overflow-hidden rounded-full shadow-lg shadow-[#0B1F4E]/20 ring-4 ring-white [grid-column:2] [grid-row:1]">
                  <Image
                    src={COLLAGE.topRight}
                    alt="Team workshop"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 28vw, 14vw"
                  />
                </div>
                <div className="relative aspect-square w-[58%] max-w-[10rem] min-h-0 min-w-0 justify-self-center self-center overflow-hidden rounded-full shadow-lg shadow-[#0B1F4E]/20 ring-4 ring-white [grid-column:1] [grid-row:3] sm:max-w-[11rem]">
                  <Image
                    src={COLLAGE.bottomLeft}
                    alt="Working at a laptop"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 24vw, 12vw"
                  />
                </div>
                <div className="relative min-h-[7.5rem] min-w-0 overflow-hidden rounded-3xl shadow-lg shadow-[#0B1F4E]/20 ring-1 ring-black/5 [grid-column:2] [grid-row:3] sm:min-h-[9rem]">
                  <Image
                    src={COLLAGE.bottomRight}
                    alt="Team in the office"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 32vw, 18vw"
                  />
                </div>
              </div>

              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div
                  className="pointer-events-auto flex h-[9.5rem] w-[9.5rem] flex-col items-center justify-center rounded-full bg-[#0B1F4E] px-4 text-center shadow-[0_0_50px_-8px_rgba(11,31,78,0.55)] ring-4 ring-white sm:h-[11rem] sm:w-[11rem]"
                  aria-label="Over ten years combined experience across the team"
                >
                  <IconTrophy className="mb-1 h-6 w-6 text-red-400 sm:h-7 sm:w-7" />
                  <span className="text-3xl font-black leading-none text-white sm:text-4xl">10+</span>
                  <span className="mt-1 max-w-[9rem] text-[9px] font-bold uppercase leading-tight tracking-[0.14em] text-red-300 sm:text-[10px] sm:tracking-[0.18em]">
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
            transition={{ duration: reduceMotion ? 0.01 : 0.6, delay: reduceMotion ? 0 : 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.22em] text-red-600 sm:text-sm sm:tracking-[0.26em]">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-red-50 ring-1 ring-red-100 sm:h-9 sm:w-9">
                <IconHome className="h-4 w-4 shrink-0 sm:h-[18px] sm:w-[18px]" />
              </span>
              Introduction to us
            </p>
            <h2
              id="about-heading"
              className="mt-4 text-3xl font-bold leading-[1.12] tracking-tight text-[#0B1F4E] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]"
            >
              Helping fast-moving businesses{" "}
              <span className="relative inline-block text-red-600">
                succeed
                <svg
                  className="absolute -bottom-1.5 left-0 w-full text-red-500"
                  viewBox="0 0 160 12"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path d="M2 8 Q80 2 158 8" stroke="currentColor" strokeWidth="3.5" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Digital Drifters partners with teams that need operations tightened,
              software shipped, eBay and Amazon channels grown, and call-center
              coverage that stays on-brand. We keep scope honest, communication
              direct, and outcomes measurable—<span className="font-semibold text-slate-800">clear delivery, no fluff.</span>
            </p>

            <div className="my-10 h-px w-full max-w-xl bg-linear-to-r from-transparent via-slate-200 to-transparent" />

            <div className="grid gap-10 sm:grid-cols-2 sm:gap-12">
              <ul className="flex flex-col gap-5">
                {FEATURES.map(({ text, icon }) => {
                  const Icon = FEATURE_ICONS[icon];
                  return (
                    <li key={text} className="flex gap-3.5 text-sm leading-snug sm:text-base">
                      <span className="relative mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#0B1F4E]">
                        <Icon className="h-4 w-4 text-white" />
                        <IconArcBadge />
                      </span>
                      <span className="text-slate-700">
                        <span className="font-semibold text-[#0B1F4E]">{text.split(",")[0]}</span>
                        {text.slice(text.split(",")[0].length)}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <div className="flex flex-col gap-5 rounded-2xl bg-white p-5 shadow-lg shadow-slate-200/60 ring-1 ring-slate-100 sm:flex-row sm:items-center sm:gap-6">
                <ProgressRing value={85} reduceMotion={reduceMotion === true} />
                <div>
                  <h3 className="text-lg font-bold text-[#0B1F4E] sm:text-xl">Agency delivery</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
                    Roadmaps, builds, and support cycles tuned to how your business
                    actually runs—so velocity shows up in revenue and retention, not
                    slide decks alone.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex max-w-xl flex-col gap-6 rounded-2xl bg-[#0B1F4E] p-5 shadow-xl shadow-[#0B1F4E]/25 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:p-6">
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-red-500">
                  <Image
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=128&h=128&q=80"
                    alt="Digital Drifters leadership"
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <div>
                  <p className="text-base font-bold text-white sm:text-lg">Digital Drifters</p>
                  <p className="mt-0.5 text-xs font-bold uppercase tracking-[0.2em] text-red-400 sm:text-sm">
                    Leadership · Delivery
                  </p>
                </div>
              </div>
              <Link
                href="#services"
                className="group inline-flex w-fit items-center justify-center gap-2 rounded-xl bg-red-600 px-7 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-[0_8px_24px_-6px_rgba(220,38,38,0.6)] transition hover:bg-red-500 sm:text-sm"
              >
                Learn more
                <IconArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}