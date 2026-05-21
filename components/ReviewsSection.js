"use client";

import { motion, useReducedMotion } from "framer-motion";

const REVIEWS = [
  {
    id: "r1",
    category: "Software",
    quote:
      "Digital Drifters rebuilt our operations stack from spreadsheets into a single dashboard. Releases are predictable and our team finally trusts the numbers.",
    name: "Jennifer Walsh",
    role: "Operations Director",
    org: "Summit Logistics · Denver, CO",
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
    category: "Software",
    quote:
      "The CRM rollout was collaborative—not a black box. Sales, support, and management all use LogicalCRM daily without the usual adoption fight.",
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
    category: "Software",
    quote:
      "AgentDial.ai integration cut manual call routing dramatically. The bot handles routine operations; humans step in only when needed.",
    name: "David Chen",
    role: "VP Technology",
    org: "Atlas Operations Group · San Jose, CA",
  },
  {
    id: "r7",
    category: "Operations",
    quote:
      "EatsDesk POS plus their AI call line kept our front-of-house calm during peak hours. Orders and reservations no longer collide on one phone.",
    name: "Elena Vasquez",
    role: "General Manager",
    org: "Vasquez Dining Co. · Miami, FL",
  },
  {
    id: "r8",
    category: "Software",
    quote:
      "DomainsPrimeTime let us provision and connect hundreds of microsites in a controlled way. DNS, SSL, and publishing are no longer a bottleneck.",
    name: "Tyler Brooks",
    role: "Platform Architect",
    org: "Northline Digital · Seattle, WA",
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
      "CashlyCards payment flows were audited end-to-end. Card lifecycle reporting is clear for compliance and our ops team sleeps better at month-end.",
    name: "Michael Brooks",
    role: "Chief Operating Officer",
    org: "Brooks Pay · New York, NY",
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
    <div className="flex gap-0.5 text-orange-500" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-3.5 w-3.5 sm:h-4 sm:w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review }) {
  const categoryClass =
    review.category === "Software"
      ? "border-orange-500/50 text-orange-500"
      : review.category === "Social media"
        ? "border-orange-500/40 text-orange-500"
        : "border-orange-500/35 text-orange-500";

  return (
    <article className="reviews-card flex shrink-0 flex-col rounded-2xl border border-orange-500/25 bg-black p-5 shadow-[0_0_36px_-14px_rgba(249,115,22,0.22)] sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <IconQuote className="h-7 w-7 shrink-0 text-orange-500/40 sm:h-8 sm:w-8" />
        <span
          className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${categoryClass}`}
        >
          {review.category}
        </span>
      </div>
      <StarRating />
      <p className="mt-3 flex-1 text-sm leading-relaxed text-white/85 line-clamp-5 sm:mt-4 sm:text-[15px]">
        &ldquo;{review.quote}&rdquo;
      </p>
      <div className="mt-5 border-t border-white/10 pt-4">
        <p className="font-bold text-white">{review.name}</p>
        <p className="mt-0.5 text-xs text-white/70 sm:text-sm">{review.role}</p>
        <p className="mt-0.5 text-xs font-medium text-orange-500/90">{review.org}</p>
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
      className="relative scroll-mt-24 overflow-hidden bg-black py-20 text-white sm:py-24 lg:py-28"
      aria-labelledby="reviews-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_100%,rgba(249,115,22,0.1),transparent_55%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-orange-500/35 to-transparent" aria-hidden />

      <div className="relative mx-auto mb-10 w-full max-w-[min(100%,1600px)] px-5 sm:mb-12 sm:px-8 lg:px-10 xl:px-14">
        <motion.header
          className="mx-auto max-w-3xl text-center"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange-500 sm:text-sm sm:tracking-[0.26em]">
            Client testimonials
          </p>
          <h2
            id="reviews-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.65rem]"
          >
            Trusted for software, social &amp; operations
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/75 sm:text-lg">
            Partners describe how we deliver platforms, managed channels, and
            operational clarity—professional delivery from kickoff to reporting.
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

      <p className="relative mx-auto mt-8 max-w-2xl px-5 text-center text-[11px] leading-relaxed text-white/45 sm:text-xs">
        Illustrative client feedback for portfolio presentation.
      </p>
    </section>
  );
}
