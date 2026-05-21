"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const PLATFORMS = [
  {
    name: "Facebook",
    role: "Community updates & live engagement",
    Icon: IconFacebook,
  },
  {
    name: "Instagram",
    role: "Visual storytelling & reels",
    Icon: IconInstagram,
  },
  {
    name: "X (Twitter)",
    role: "Real-time announcements & dialogue",
    Icon: IconX,
  },
  {
    name: "LinkedIn",
    role: "Institutional & professional outreach",
    Icon: IconLinkedIn,
  },
  {
    name: "YouTube",
    role: "Long-form briefings & explainers",
    Icon: IconYouTube,
  },
];

const METRICS = [
  {
    value: "5+",
    label: "Platforms",
    detail: "Unified strategy across channels",
  },
  {
    value: "100%",
    label: "Pre-publish review",
    detail: "Tone, facts, and brand compliance",
  },
  {
    value: "Weekly",
    label: "Leadership reports",
    detail: "Reach, engagement, sentiment, actions",
  },
  {
    value: "< 2h",
    label: "Response SLA",
    detail: "Stakeholder & public inquiries",
  },
];

const GOVERNMENT_FOCUS = [
  {
    title: "Policy & initiative communication",
    text: "Clear, consistent messaging for programs, reforms, and public-service updates—aligned with official tone and timelines.",
  },
  {
    title: "Citizen engagement",
    text: "Structured comment moderation, FAQ pathways, and feedback loops that keep channels respectful and actionable.",
  },
  {
    title: "Awareness campaigns",
    text: "Calendar-driven campaigns for health, digital literacy, employment, and national initiatives with measurable reach.",
  },
  {
    title: "Reputation & crisis readiness",
    text: "Escalation playbooks, holding statements, and rapid coordination when narratives need correction or clarification.",
  },
];

const PROCESS = [
  { step: "01", title: "Audit & strategy", text: "Channel review, audience mapping, KPIs, and governance rules." },
  { step: "02", title: "Editorial calendar", text: "Planned posts, approvals, and bilingual-ready copy workflows." },
  { step: "03", title: "Creative production", text: "On-brand graphics, short video, and accessible formats." },
  { step: "04", title: "Publish & engage", text: "Scheduled releases, live coverage, and monitored responses." },
  { step: "05", title: "Measure & report", text: "Dashboards and executive summaries for decision-makers." },
];

/** Sample reporting framework — illustrative structure, not client-specific claims. */
const REPORTING_ROWS = [
  { metric: "Total reach", period: "Month", trend: "+42%", status: "Strong" },
  { metric: "Engagement rate", period: "Month", trend: "+38%", status: "Strong" },
  { metric: "Positive sentiment", period: "Month", trend: "91%", status: "Stable" },
  { metric: "Inquiry resolution", period: "Month", trend: "96%", status: "On target" },
  { metric: "Content on calendar", period: "Month", trend: "98%", status: "On target" },
];

const CHART_BARS = [
  { month: "Jan", pct: 52 },
  { month: "Feb", pct: 58 },
  { month: "Mar", pct: 64 },
  { month: "Apr", pct: 71 },
  { month: "May", pct: 78 },
  { month: "Jun", pct: 86 },
];

function IconMegaphone({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M3 11v2a1 1 0 001 1h1l4 7v-18l-4 7H4a1 1 0 00-1 1zM16 8a5 5 0 010 8M18.5 6.5a8 8 0 010 11" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconFacebook({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function IconInstagram({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function IconX({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function IconLinkedIn({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.127 0 2.062 2.062 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconYouTube({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function MetricCard({ item, index, reduceMotion }) {
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: reduceMotion ? 0 : index * 0.06 }}
      className="rounded-2xl border border-orange-500/30 bg-black p-5 text-center shadow-[0_0_32px_-12px_rgba(249,115,22,0.25)] sm:p-6"
    >
      <p className="text-3xl font-black tracking-tight text-orange-500 sm:text-4xl">{item.value}</p>
      <p className="mt-2 text-sm font-bold uppercase tracking-wider text-white">{item.label}</p>
      <p className="mt-1.5 text-xs leading-relaxed text-white/70 sm:text-sm">{item.detail}</p>
    </motion.div>
  );
}

export function SocialMediaSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="social-media"
      className="relative scroll-mt-24 bg-black py-20 text-white sm:py-24 lg:py-28"
      aria-labelledby="social-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_50%_at_80%_20%,rgba(249,115,22,0.12),transparent_50%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-orange-500/35 to-transparent" aria-hidden />

      <div className="relative mx-auto w-full max-w-[min(100%,1600px)] px-5 sm:px-8 lg:px-10 xl:px-14">
        <motion.header
          className="mx-auto max-w-4xl text-center"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
        >
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-orange-500 sm:text-sm sm:tracking-[0.26em]">
            <IconMegaphone className="h-4 w-4 sm:h-5 sm:w-5" />
            Social media management
          </p>
          <h2
            id="social-heading"
            className="mt-4 text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]"
          >
            Professional channels for public impact
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
            Digital Drifters manages social presence with the discipline institutions
            expect—clear governance, measurable reporting, and respectful engagement
            suited to government, enterprise, and national initiatives in Pakistan and
            beyond.
          </p>
        </motion.header>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
          {METRICS.map((item, i) => (
            <MetricCard key={item.label} item={item} index={i} reduceMotion={reduceMotion === true} />
          ))}
        </div>

        <motion.div
          className="mt-14 rounded-2xl border border-orange-500/40 bg-orange-500/5 px-5 py-5 sm:px-8 sm:py-6"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-center text-sm font-bold uppercase tracking-[0.2em] text-orange-500 sm:text-base">
            Government &amp; institutional readiness
          </p>
          <p className="mx-auto mt-3 max-w-3xl text-center text-sm leading-relaxed text-white/85 sm:text-base">
            We support ministries and public-sector teams to enhance digital outreach—
            policy communication, citizen services awareness, and coordinated messaging
            with approval workflows leadership can trust.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {PLATFORMS.map((p, i) => (
            <motion.div
              key={p.name}
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: reduceMotion ? 0 : i * 0.05 }}
              className="flex flex-col items-center rounded-2xl border border-orange-500/25 bg-black px-4 py-6 text-center transition hover:border-orange-500/50"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500 text-black">
                <p.Icon className="h-5 w-5" />
              </span>
              <p className="mt-4 text-sm font-bold text-white">{p.name}</p>
              <p className="mt-2 text-xs leading-relaxed text-white/70">{p.role}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-12">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              Public-sector focus areas
            </h3>
            <ul className="mt-6 flex flex-col gap-5">
              {GOVERNMENT_FOCUS.map((item) => (
                <li
                  key={item.title}
                  className="rounded-xl border border-orange-500/20 bg-black p-5 transition hover:border-orange-500/40"
                >
                  <p className="font-bold text-orange-500">{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/80 sm:text-base">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="rounded-2xl border border-orange-500/30 bg-black p-5 sm:p-7"
            initial={reduceMotion ? false : { opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <h3 className="text-xl font-bold text-white sm:text-2xl">
                  Performance overview
                </h3>
                <p className="mt-1 text-xs text-white/60 sm:text-sm">
                  Sample reporting framework · illustrative trends
                </p>
              </div>
              <span className="rounded-full border border-orange-500/50 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-orange-500">
                Monthly
              </span>
            </div>

            <div className="mt-8 flex h-40 items-end justify-between gap-2 sm:h-48 sm:gap-3">
              {CHART_BARS.map((bar) => {
                const barHeight = `${Math.round((bar.pct / 100) * 10.5)}rem`;
                return (
                  <div key={bar.month} className="flex flex-1 flex-col items-center gap-2">
                    <motion.div
                      className="w-full max-w-8 rounded-t-md bg-orange-500 sm:max-w-10"
                      initial={reduceMotion ? false : { height: 0 }}
                      whileInView={{ height: barHeight }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <span className="text-[10px] font-medium text-white/60 sm:text-xs">{bar.month}</span>
                  </div>
                );
              })}
            </div>

            <p className="mt-4 text-center text-xs font-bold uppercase tracking-wider text-white/50">
              Organic reach index (structured programs)
            </p>

            <div className="mt-8 overflow-x-auto rounded-xl border border-orange-500/20">
              <table className="w-full min-w-[320px] text-left text-sm">
                <thead>
                  <tr className="border-b border-orange-500/25 bg-orange-500/10 text-[10px] font-bold uppercase tracking-wider text-orange-500">
                    <th className="px-4 py-3">Metric</th>
                    <th className="px-4 py-3">Period</th>
                    <th className="px-4 py-3">Trend</th>
                    <th className="px-4 py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {REPORTING_ROWS.map((row) => (
                    <tr
                      key={row.metric}
                      className="border-b border-white/5 text-white/85 last:border-0"
                    >
                      <td className="px-4 py-3 font-medium text-white">{row.metric}</td>
                      <td className="px-4 py-3 text-white/70">{row.period}</td>
                      <td className="px-4 py-3 font-semibold text-orange-500">{row.trend}</td>
                      <td className="px-4 py-3 text-white/75">{row.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-16"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-center text-xl font-bold text-white sm:text-2xl">
            How we manage every channel
          </h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS.map((step, i) => (
              <div
                key={step.step}
                className="relative rounded-2xl border border-orange-500/25 bg-black p-5 pt-6"
              >
                <span className="text-2xl font-black text-orange-500/80">{step.step}</span>
                <p className="mt-2 text-sm font-bold text-white sm:text-base">{step.title}</p>
                <p className="mt-2 text-xs leading-relaxed text-white/75 sm:text-sm">{step.text}</p>
                {i < PROCESS.length - 1 ? (
                  <span
                    className="pointer-events-none absolute -right-2 top-1/2 hidden h-px w-4 bg-orange-500/40 lg:block"
                    aria-hidden
                  />
                ) : null}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-14 flex flex-col items-center gap-6 text-center"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <p className="max-w-2xl text-base text-white/80 sm:text-lg">
            Ready to strengthen your institution&apos;s digital presence with accountable,
            data-led social media management?
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border-2 border-orange-500 bg-black px-9 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-[0_0_28px_-4px_rgba(249,115,22,0.55)] transition hover:bg-orange-500 hover:text-black sm:text-sm"
          >
            Discuss social media partnership
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
