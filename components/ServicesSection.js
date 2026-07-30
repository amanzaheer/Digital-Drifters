"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const OFFERINGS = [
  {
    title: "Operation management",
    description:
      "Processes, delivery, and day-to-day operations aligned so your team ships work with clarity—not chaos.",
    Icon: IconLayers,
  },
  {
    title: "Software development",
    description:
      "Custom software, integrations, and reliable systems built around how you actually run the business.",
    Icon: IconCode,
  },
  {
    title: "eCommerce — eBay & Amazon",
    description:
      "Listings, catalog discipline, and marketplace growth so your store stays competitive where buyers already are.",
    Icon: IconChart,
  },
  {
    title: "Call center solutions",
    description:
      "Inbound and outbound support setups that keep customers heard and your brand consistent on every call.",
    Icon: IconHeadset,
  },
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

function IconLayers({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <path d="M12 4L4 8l8 4 8-4-8-4zM4 12l8 4 8-4M4 16l8 4 8-4" />
    </svg>
  );
}

function IconCode({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <path d="M8 9l-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" />
    </svg>
  );
}

function IconChart({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <path d="M4 19h16M7 15l3-4 3 3 4-6M9 19V9" />
    </svg>
  );
}

function IconHeadset({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <path d="M5 16v-1a7 7 0 0114 0v1M5 16a2 2 0 002 2h1M19 16a2 2 0 01-2 2h-1M9 19h6M12 5v0" />
    </svg>
  );
}

function CardWaves() {
  return (
    <svg
      className="absolute -bottom-2 -right-2 h-36 w-44 text-orange-500/[0.14]"
      viewBox="0 0 120 100"
      fill="none"
      aria-hidden
    >
      <path
        d="M0 80c20-8 40-8 60 0s40 8 60 0M0 92c22-6 44-6 66 0s44 6 66 0M10 65c18-10 36-10 54 0s36 10 54 0"
        stroke="currentColor"
        strokeWidth="1.25"
      />
    </svg>
  );
}

function ServiceCard({ title, description, Icon, transition, reduceMotion }) {
  const hoverMotion = reduceMotion
    ? {}
    : {
        y: -8,
        scale: 1.02,
        transition: { type: "spring", stiffness: 420, damping: 26 },
      };

  return (
    <motion.article
      initial={
        reduceMotion
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 36, scale: 0.97 }
      }
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={hoverMotion}
      viewport={{ once: true, margin: "-80px", amount: 0.2 }}
      transition={transition}
      className="group relative flex min-h-[300px] flex-col overflow-visible rounded-2xl border border-orange-500/30 bg-white p-7 pb-8 pt-14 shadow-[0_0_40px_-12px_rgba(249,115,22,0.22)] transition-[border-color,box-shadow] duration-300 ease-out will-change-transform hover:border-orange-500/55 hover:shadow-[0_0_52px_-6px_rgba(249,115,22,0.42)] sm:min-h-[320px] sm:pt-16 md:min-h-[340px]"
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl opacity-[0.65] transition-opacity duration-500 ease-out group-hover:opacity-100"
        aria-hidden
      >
        <CardWaves />
      </div>
      <motion.div
        className="absolute -left-1 -top-3 z-20 flex h-14 w-14 items-center justify-center rounded-full bg-orange-500/10 ring-4 ring-white transition-[transform,box-shadow] duration-300 ease-out group-hover:-translate-y-0.5 group-hover:scale-105 group-hover:shadow-[0_0_20px_-2px_rgba(249,115,22,0.55)] sm:h-15 sm:w-15"
        whileHover={
          reduceMotion
            ? {}
            : { scale: 1.08, rotate: -4, transition: { duration: 0.25 } }
        }
        aria-hidden
      >
        <div className="absolute inset-0 rounded-full ring-1 ring-orange-500/50 ring-offset-2 ring-offset-white group-hover:ring-orange-500" />
        <Icon className="relative h-6 w-6 text-[#083157] sm:h-7 sm:w-7" />
      </motion.div>
      <div className="relative z-10 mt-1 flex flex-1 flex-col">
        <h3 className="text-xl font-bold tracking-tight text-[#083157] transition-colors duration-300 sm:text-2xl">
          {title}
        </h3>
        <p className="mt-4 flex-1 text-base leading-relaxed text-black/80 transition-[color] duration-300 group-hover:text-black sm:text-[1.0625rem] sm:leading-relaxed">
          {description}
        </p>
      </div>
    </motion.article>
  );
}

export function ServicesSection() {
  const reduceMotion = useReducedMotion();
  const [a, b, c, d] = OFFERINGS;
  const enterTrans = (i) => ({
    duration: reduceMotion ? 0.01 : 0.58,
    delay: reduceMotion ? 0 : i * 0.12,
    ease: [0.22, 1, 0.36, 1],
  });

  return (
    <section
      id="services"
      className="relative scroll-mt-24 bg-white py-20 text-[#083157] sm:py-24 lg:py-28"
      aria-labelledby="services-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-15%,rgba(249,115,22,0.06),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#083157]/40 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-[min(100%,1600px)] px-5 sm:px-8 lg:px-10 xl:px-14">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-12 lg:items-start">
          <div className="lg:col-span-5">
            <motion.div
              initial={
                reduceMotion ? false : { opacity: 0, y: 28, x: -12 }
              }
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, margin: "-80px", amount: 0.25 }}
              transition={{
                duration: reduceMotion ? 0.01 : 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <p className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.22em] text-[#083157] sm:text-sm sm:tracking-[0.26em]">
                <IconHome className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
                Services we offer
              </p>
              <h2
                id="services-heading"
                className="mt-4 text-4xl font-bold leading-[1.1] tracking-tight text-[#083157] sm:text-5xl sm:leading-[1.08] lg:text-[3.15rem] lg:leading-[1.06]"
              >
                Solutions every business needs
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-black sm:text-lg sm:leading-relaxed">
                Digital Drifters helps teams run operations, ship custom software,
                grow on eBay and Amazon, and run call-center support—practical
                partnerships for businesses that want momentum without noise. We
                also support adjacent ventures when the fit is right.
              </p>

              <Link
                href="#contact"
                className="mt-10 inline-flex items-center justify-center rounded-lg bg-red-600 px-9 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-red-700 hover:shadow-lg"
              >
                More Services
              </Link>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7">
              <div className="flex flex-col gap-6 sm:gap-7">
                <ServiceCard {...a} transition={enterTrans(0)} reduceMotion={reduceMotion} />
                <ServiceCard {...c} transition={enterTrans(2)} reduceMotion={reduceMotion} />
              </div>
              <div className="flex flex-col gap-6 sm:gap-7 sm:translate-y-10 lg:translate-y-12">
                <ServiceCard {...b} transition={enterTrans(1)} reduceMotion={reduceMotion} />
                <ServiceCard {...d} transition={enterTrans(3)} reduceMotion={reduceMotion} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}