"use client";

import { motion, useReducedMotion } from "framer-motion";

const REVIEWS = [
  {
    id: "r1",
    category: "eCommerce",
    quote:
      "Our eBay listings finally look consistent and convert. Inventory sync and weekly performance reports mean we know what is selling without chasing spreadsheets.",
    name: "Jennifer Walsh",
    role: "Operations Director",
    org: "Summit Retail · Denver, CO",
  },
  {
    id: "r2",
    category: "Social media",
    quote:
      "Our channels went from reactive posts to a governed calendar with weekly leadership-ready reports. Tone stays professional and engagement climbed steadily.",
    name: "Ahmed Hassan",
    role: "Communications Lead",
    org: "Public-sector initiative · Islamabad",
  },
  {
    id: "r3",
    category: "Operations",
    quote:
      "They mapped our call-center workflows, SLAs, and handoffs in two weeks. Agent utilization improved and leadership gets one clear morning brief.",
    name: "Rebecca Stone",
    role: "Head of Customer Operations",
    org: "Harbor Financial · Chicago, IL",
  },
  {
    id: "r4",
    category: "SEO",
    quote:
      "Search visibility improved month over month. Local pages rank for the queries that matter, and Google Business Profile reviews stay current without our team chasing them.",
    name: "James Porter",
    role: "Managing Partner",
    org: "Porter & Hale Consulting · Boston, MA",
  },
  {
    id: "r5",
    category: "Social media",
    quote:
      "Comment moderation, campaign bursts, and analytics are handled with discipline. We present clean metrics to stakeholders every Friday without scrambling.",
    name: "Fatima Noor",
    role: "Digital Outreach Manager",
    org: "National awareness program · Lahore",
  },
  {
    id: "r6",
    category: "AI",
    quote:
      "Their AI call handling cut manual routing dramatically. Routine questions are answered automatically; humans only step in when it actually matters.",
    name: "David Chen",
    role: "VP Technology",
    org: "Atlas Operations Group · San Jose, CA",
  },
  {
    id: "r7",
    category: "Operations",
    quote:
      "Peak-hour phone volume no longer overwhelms the floor. AI intake plus clear handoffs keep orders and reservations from colliding on one line.",
    name: "Elena Vasquez",
    role: "General Manager",
    org: "Vasquez Dining Co. · Miami, FL",
  },
  {
    id: "r8",
    category: "eCommerce",
    quote:
      "Amazon store health and Buy Box coverage improved after they rebuilt our listings and pricing rules. Sales reporting is finally something leadership trusts.",
    name: "Tyler Brooks",
    role: "Marketplace Lead",
    org: "Northline Commerce · Seattle, WA",
  },
  {
    id: "r9",
    category: "Social media",
    quote:
      "LinkedIn, Facebook, and X now tell one story. Creative is on-brand, approvals are logged, and crisis replies follow a playbook we actually use.",
    name: "Linda Foster",
    role: "Brand & Communications",
    org: "Foster Enterprise Tech · Atlanta, GA",
  },
  {
    id: "r10",
    category: "Operations",
    quote:
      "Processes, SOPs, and day-to-day ownership are documented end to end. Month-end reporting is clear and our ops team spends less time firefighting.",
    name: "Michael Brooks",
    role: "Chief Operating Officer",
    org: "Brooks Group · New York, NY",
  },
];

function IconQuote({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.29l.806 1.721C6.657 7.74 5.091 9.971 5.091 12.011c0 1.469.445 2.598 1.345 3.631.24.26.365.48.365.678 0 .192-.114.384-.342.552H4.583zm9 0C12.553 16.227 12 15 12 13.011c0-3.5 2.457-6.637 6.03-8.29l.806 1.721C15.657 7.74 14.091 9.971 14.091 12.011c0 1.469.445 2.598 1.345 3.631.24.26.365.48.365.678 0 .192-.114.384-.342.552h-2.915z" />
    </svg>
  );
}

function StarRating() {
  return (
    <div className="flex gap-0.5 text-red-600" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-3.5 w-3.5 sm:h-4 sm:w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review }) {
  const categoryClass = "border-orange-500/40 text-orange-500";

  return (
    <article className="reviews-card flex shrink-0 flex-col rounded-2xl border border-orange-500/25 bg-white p-5 shadow-[0_4px_28px_-10px_rgba(15,23,42,0.15)] sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <IconQuote className="h-7 w-7 shrink-0 text-red-500/40 sm:h-8 sm:w-8" />
        <span
          className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${categoryClass}`}
        >
          {review.category}
        </span>
      </div>
      <StarRating />
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-700 line-clamp-5 sm:mt-4 sm:text-[15px]">
        &ldquo;{review.quote}&rdquo;
      </p>
      <div className="mt-5 border-t border-slate-200 pt-4">
        <p className="font-bold text-[#0B1F4E]">{review.name}</p>
        <p className="mt-0.5 text-xs text-slate-500 sm:text-sm">{review.role}</p>
        <p className="mt-0.5 text-xs font-medium text-red-500/90">{review.org}</p>
      </div>
    </article>
  );
}

export function ReviewsSection() {
  const reduceMotion = useReducedMotion();
  const marqueeItems = [...REVIEWS, ...REVIEWS];

  return (
    <section
      id="reviews"
      className="relative scroll-mt-24 overflow-hidden bg-white py-14 text-slate-900 sm:py-16 lg:py-20"
      aria-labelledby="reviews-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_100%,rgba(249,115,22,0.07),transparent_55%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-orange-500/35 to-transparent" aria-hidden />

      <div className="relative mx-auto mb-8 w-full max-w-[min(100%,1600px)] px-5 sm:mb-10 sm:px-8 lg:px-10 xl:px-14">
        <motion.header
          className="mx-auto max-w-3xl text-center"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-eyebrow">
            Client testimonials
          </p>
          <h2
            id="reviews-heading"
            className="mt-5 text-3xl font-black tracking-tight text-[#0B1F4E] sm:text-4xl lg:text-[2.65rem]"
          >
            Trusted for eCommerce, social &amp; operations
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            Partners describe how we deliver marketplace growth, managed channels,
            and operational clarity—professional delivery from kickoff to reporting.
          </p>
        </motion.header>
      </div>

      <div
        className="reviews-marquee group relative mx-auto w-full max-w-[min(100%,1600px)] overflow-hidden px-5 mask-[linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] sm:px-8 lg:px-10 xl:px-14"
        aria-label="Auto-scrolling client testimonials, four cards visible on large screens"
      >
        <div
          className="reviews-marquee-track py-1"
          style={reduceMotion ? { animationDuration: "120s" } : undefined}
        >
          {marqueeItems.map((review, index) => (
            <ReviewCard key={`${review.id}-${index}`} review={review} />
          ))}
        </div>
      </div>

      <p className="relative mx-auto mt-8 max-w-2xl px-5 text-center text-[11px] leading-relaxed text-slate-400 sm:text-xs">
        Illustrative client feedback for portfolio presentation.
      </p>
    </section>
  );
}