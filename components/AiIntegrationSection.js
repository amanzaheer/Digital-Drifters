"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const NAVY = "text-black";
const NAVY_BG = "bg-[#0B1D3A]";

const AI_CAPABILITIES = [
  {
    id: "chat",
    title: "AI chatbots & auto-replies",
    description:
      "Always-on chat that answers in your brand voice—on your website, WhatsApp, social inboxes, and support widgets.",
    points: [
      "Instant replies to common questions",
      "Trained on your FAQs, catalogs & policies",
      "Smart handoff to a human when needed",
      "Conversation logs for quality review",
    ],
    Icon: IconChat,
  },
  {
    id: "voice",
    title: "AI call bots",
    description:
      "Voice agents that pick up, route, and resolve calls—bookings, order intake, status checks, and after-hours coverage.",
    points: [
      "Inbound & outbound call handling",
      "Natural language routing & scripts",
      "Integrates with CRM & operations tools",
      "Escalation to live agents in one click",
    ],
    Icon: IconPhone,
  },
  {
    id: "knowledge",
    title: "Answers from your company data",
    description:
      "AI grounded in your approved content so customers get accurate product, pricing, and process details—not generic guesses.",
    points: [
      "Knowledge base & document ingestion",
      "Consistent answers across channels",
      "Updates when your offers change",
      "Secure, role-based content control",
    ],
    Icon: IconBrain,
  },
];

const AI_PRODUCTS = [
  {
    name: "AgentDial.ai",
    href: "https://agentdial.ai",
    blurb: "AI voice for operations & call workflows",
  },
  {
    name: "EatsDesk.com",
    href: "https://eatsdesk.com",
    blurb: "Restaurant POS + AI phone line",
  },
];

const INTEGRATION_STEPS = [
  { label: "Customer reaches out", detail: "Chat, call, or social message" },
  { label: "AI understands intent", detail: "Trained on your business rules" },
  { label: "Auto reply or route", detail: "Instant answer or smart transfer" },
  { label: "Logged & reported", detail: "Dashboards your team can trust" },
];

function IconSpark({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2l1.2 5.4L18 9l-4.8 1.6L12 16l-1.2-5.4L6 9l4.8-1.6L12 2zm0 18l1.2-2.2 2.2-1.2-2.2-1.2L12 13l-1.2 2.2-2.2 1.2 2.2 1.2L12 20z" />
    </svg>
  );
}

function IconChat({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      <path d="M8 10h8M8 14h5" strokeLinecap="round" />
    </svg>
  );
}

function IconPhone({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.916.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.894.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function IconBrain({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M9.5 2A5.5 5.5 0 004 7.5c0 1.33.47 2.55 1.26 3.5A5.5 5.5 0 109.5 22a5.5 5.5 0 005.24-3.5A5.5 5.5 0 0020 7.5 5.5 5.5 0 0014.5 2 5.5 5.5 0 009.5 2z" />
      <path d="M12 8v4l2 2" strokeLinecap="round" />
    </svg>
  );
}

function CapabilityCard({ item, index, reduceMotion }) {
  const isCenter = item.id === "voice";

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: reduceMotion ? 0 : index * 0.08 }}
      className={`relative flex flex-col rounded-2xl border bg-white p-6 shadow-sm sm:p-7 ${
        isCenter
          ? "border-orange-500 shadow-[0_0_36px_-10px_rgba(249,115,22,0.35)] lg:-mt-2 lg:scale-[1.02]"
          : "border-orange-500/30"
      }`}
    >
      {isCenter ? (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-red-600 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
          Flagship
        </span>
      ) : null}
      <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${NAVY_BG} text-white`}>
        <item.Icon className="h-6 w-6" />
      </span>
      <h3 className={`mt-5 text-lg font-bold ${NAVY} sm:text-xl`}>{item.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-black sm:text-base">{item.description}</p>
      <ul className="mt-5 flex flex-col gap-2.5">
        {item.points.map((point) => (
          <li key={point} className="flex gap-2 text-sm text-black">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" aria-hidden />
            {point}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

export function AiIntegrationSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="ai"
      className="relative scroll-mt-24 overflow-hidden bg-white py-20 text-black sm:py-24 lg:py-28"
      aria-labelledby="ai-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_50%,rgba(249,115,22,0.08),transparent_60%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-orange-500/50 to-transparent" aria-hidden />

      <div className="relative mx-auto w-full max-w-[min(100%,1600px)] px-5 sm:px-8 lg:px-10 xl:px-14">
        <motion.header
          className="mx-auto max-w-5xl text-center relative space-y-8"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
        >
          <p className="inline-flex items-center gap-2 rounded-full border border-orange-400/40 bg-gradient-to-r from-orange-100 via-white to-red-100 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-orange-700 shadow-lg backdrop-blur-md">
            <IconSpark className="h-2 w-4" />
            AI integration — highlighted
          </p>
          <h2
            id="ai-heading"
            className={`"mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-5xl`}
          >
            Intelligence built into everything we deliver
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-9 text-slate-600 sm:text-xl">
            Digital Drifters does not bolt AI on at the end—we design chatbots, call
            bots, and knowledge-driven assistants into the software, social, and
            operations work we already run for clients. Your audience gets fast,
            accurate answers; your team gets fewer repetitive tasks and clearer data.
          </p>
        </motion.header>

        <motion.div
          className="relative mx-auto mt-12 max-w-4xl overflow-hidden rounded-[32px] border border-orange-300/40 bg-white/90 px-8 py-8 text-center shadow-[0_30px_80px_rgba(0,0,0,0.08)] backdrop-blur-xl sm:px-12"
          initial={reduceMotion ? false : { opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <p className="inline-flex items-center rounded-full border border-orange-300 bg-gradient-to-r from-orange-50 to-white px-5 py-2 text-xs font-bold uppercase tracking-[0.3em] text-orange-600 shadow-md sm:text-sm">
            What we provide through AI
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Auto-replies on digital channels, automated call handling on the phone,
            and reliable answers pulled from your company&apos;s own information—one
            partner for integration, training, monitoring, and improvement.
          </p>
        </motion.div>

        <div className="mx-auto mt-20 max-w-7xl grid gap-8 md:grid-cols-2 xl:grid-cols-3 xl:gap-10">
          {AI_CAPABILITIES.map((item, index) => (
            <CapabilityCard
              key={item.id}
              item={item}
              index={index}
              reduceMotion={reduceMotion === true}
            />
          ))}
        </div>

        <motion.div
          className="relative mt-20 overflow-hidden rounded-[32px] border border-orange-200/60 bg-white/90 backdrop-blur-xl p-8 shadow-[0_35px_90px_rgba(0,0,0,0.1)] sm:p-10"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className={`text-center text-lg font-bold ${NAVY} sm:text-xl`}>
            Live in our product stack
          </h3>
          <div className="mx-auto mt-10 grid max-w-6xl gap-8 md:grid-cols-2 xl:gap-10">
            {AI_PRODUCTS.map((product) => (
              <Link
                key={product.href}
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-xl border border-orange-500/25 bg-orange-50/40 px-5 py-4 transition hover:border-orange-500 hover:bg-orange-50"
              >
                <span className={`text-lg font-bold ${NAVY} group-hover:text-red-600`}>
                  {product.name}
                </span>
                <span className="mt-1 text-sm text-slate-600">{product.blurb}</span>
                <span className="mt-3 inline-flex w-fit items-center rounded-full bg-red-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white transition group-hover:bg-orange-600">
                  View project →
                </span>
              </Link>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-slate-500">
            We also embed the same AI patterns into custom builds, CRM flows, and
            social inbox automation—see{" "}
            <Link href="#work" className="font-semibold text-[#083157] hover:text-[#0B1D3A]">
              all projects
            </Link>
            .
          </p>
        </motion.div>

        <motion.div
          className="mt-12"
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <p className="text-center text-xs font-bold uppercase tracking-[0.22em] text-[#083157] sm:text-sm">
            How it works end-to-end
          </p>
          <div className="mx-auto mt-12 grid max-w-7xl gap-8 md:grid-cols-2 xl:grid-cols-4 xl:gap-10">
            {INTEGRATION_STEPS.map((step, i) => (
              <div
                key={step.label}
                className="group relative overflow-hidden rounded-3xl border border-orange-200/60 bg-white/90 p-6 text-center backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-3 hover:border-orange-500 hover:shadow-[0_30px_80px_rgba(249,115,22,0.25)]"
              >
                <span className="text-[10px] font-black text-black sm:text-xs">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className={`mt-2 text-xs font-bold leading-snug ${NAVY} sm:text-sm`}>
                  {step.label}
                </p>
                <p className="mt-1 text-[10px] leading-relaxed text-black sm:text-xs">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-20 mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-4">
          {[
            "Website chat widgets",
            "WhatsApp auto-reply",
            "Social DM bots",
            "IVR & voice AI",
            "CRM + ops sync",
          ].map((tag) => (
            <span
              key={tag}
              className="rounded-full
              border border-orange-200
             bg-white 
              px-6 py-3
              text-sm
font-semibold
tracking-wide
text-slate-700
shadow-md
transition-all
duration-300
hover:-translate-y-1
hover:border-orange-500
hover:bg-gradient-to-r
hover:from-orange-500
hover:to-red-500
hover:text-white
hover:shadow-xl"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}