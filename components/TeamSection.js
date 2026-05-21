"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

/** Add photos to /public/team/ — filenames below. Fallback portraits load if files are missing. */
const CORE_TEAM = [
  {
    id: "fazal",
    name: "Fazal Mehmood",
    title: "Co-Founder & Business Officer",
    image: "/team/fazal.png",
    fallback:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=620&fit=crop&q=80",
    featured: false,
  },
  {
    id: "aman",
    name: "Aman Zaheer",
    title: "CEO & Co-Founder",
    image: "/team/aman22.png",
    fallback:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=620&fit=crop&q=80",
    featured: true,
  },
  {
    id: "hamza",
    name: "Hamza Ali",
    title: "Chief Technology Officer",
    image: "/team/hamza3.JPEG",
    fallback:
      "https://images.unsplash.com/photo-1519085360751-af11fbc936f5?w=500&h=620&fit=crop&q=80",
    featured: false,
  },
];

const TEAM_PILLARS = [
  "Software development",
  "Social media management",
  "eCommerce & marketplaces",
  "Call center operations",
  "Business operations",
];

function IconUsers({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </svg>
  );
}

function TeamPhoto({ name, image, fallback, featured }) {
  const [src, setSrc] = useState(image);
  const [failed, setFailed] = useState(false);
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  const frameClass = featured
    ? "h-[min(72vw,22rem)] w-full sm:h-[26rem] lg:h-[28rem]"
    : "h-[min(64vw,18rem)] w-full sm:h-[22rem] lg:h-[24rem]";

  if (failed) {
    return (
      <div
        className={`relative overflow-hidden rounded-2xl border-2 border-orange-500/50 bg-linear-to-br from-orange-500/20 to-black ${frameClass}`}
      >
        <div className="flex h-full w-full items-center justify-center">
          <span className="text-5xl font-black tracking-tight text-orange-500/90 sm:text-6xl">
            {initials}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border-2 bg-black ${frameClass} ${featured ? "border-orange-500 shadow-[0_0_48px_-8px_rgba(249,115,22,0.45)]" : "border-orange-500/35"
        }`}
    >
      <Image
        src={src}
        alt={name}
        fill
        className="object-cover object-top"
        sizes={featured ? "(max-width: 1024px) 90vw, 380px" : "(max-width: 1024px) 80vw, 320px"}
        onError={() => {
          if (src !== fallback) {
            setSrc(fallback);
            return;
          }
          setFailed(true);
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent"
        aria-hidden
      />
    </div>
  );
}

function TeamMemberCard({ member, index, reduceMotion }) {
  const isFeatured = member.featured;

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.55,
        delay: reduceMotion ? 0 : index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="flex flex-col items-center text-center"
    >
      <div className={`w-full max-w-[20rem] ${isFeatured ? "lg:max-w-88" : ""}`}>
        <TeamPhoto
          name={member.name}
          image={member.image}
          fallback={member.fallback}
          featured={isFeatured}
        />
      </div>
      <h3
        className={`mt-5 font-bold tracking-tight text-white ${isFeatured ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"}`}
      >
        {member.name}
      </h3>
      <p
        className={`mt-1.5 font-semibold uppercase tracking-wide text-orange-500 ${isFeatured ? "text-xs sm:text-sm" : "text-[11px] sm:text-xs"}`}
      >
        {member.title}
      </p>
    </motion.article>
  );
}

export function TeamSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="team"
      className="relative scroll-mt-24 bg-black py-20 text-white sm:py-24 lg:py-28"
      aria-labelledby="team-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(249,115,22,0.12),transparent_55%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-orange-500/35 to-transparent" aria-hidden />

      <div className="relative mx-auto w-full max-w-[min(100%,1600px)] px-5 sm:px-8 lg:px-10 xl:px-14">
        <motion.header
          className="mx-auto max-w-3xl text-center"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-orange-500 sm:text-sm sm:tracking-[0.26em]">
            <IconUsers className="h-4 w-4 sm:h-5 sm:w-5" />
            Core leadership
          </p>
          <h2
            id="team-heading"
            className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.65rem]"
          >
            The team behind Digital Drifters
          </h2>
          <p className="mt-4 inline-flex items-center justify-center rounded-full border border-orange-500/50 bg-orange-500/10 px-5 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-orange-500 sm:text-[11px]">
            Leadership
          </p>
        </motion.header>

        <div className="mt-14 grid grid-cols-1 items-end gap-10 sm:grid-cols-3 sm:gap-6 lg:gap-10">
          {CORE_TEAM.map((member, index) => (
            <TeamMemberCard
              key={member.id}
              member={member}
              index={index}
              reduceMotion={reduceMotion === true}
            />
          ))}
        </div>

        <motion.div
          className="mx-auto mt-16 max-w-4xl rounded-2xl border border-orange-500/30 bg-black px-6 py-8 text-center shadow-[0_0_40px_-12px_rgba(249,115,22,0.25)] sm:px-10 sm:py-10"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="text-2xl font-black tracking-tight text-orange-500 sm:text-3xl">
            20–25+ professionals
          </p>
          <p className="mt-4 text-base leading-relaxed text-white/85 sm:text-lg">
            Beyond our leadership trio, Digital Drifters runs as a full delivery
            team of more than twenty specialists—covering{" "}
            <span className="text-white">social media management</span>,{" "}
            <span className="text-white">software development</span>,{" "}
            <span className="text-white">eCommerce</span> (eBay, Amazon, and
            owned stores), <span className="text-white">call-center operations</span>,
            and day-to-day <span className="text-white">business operations</span>{" "}
            for partners who need accountable execution at scale.
          </p>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {TEAM_PILLARS.map((pillar) => (
              <li
                key={pillar}
                className="rounded-full border border-orange-500/40 bg-orange-500/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider text-orange-500 sm:text-[11px]"
              >
                {pillar}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
