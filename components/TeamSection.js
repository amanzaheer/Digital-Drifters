"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const CORE_TEAM = [
  {
    id: "fazal",
    name: "Fazal Mehmood",
    title: "Co-Founder & Business Officer",
    image: "/team/fazal.png",
    fallback:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=800&fit=crop&q=80",
    featured: false,
  },
  {
    id: "aman",
    name: "Aman Zaheer",
    title: "CEO & Co-Founder",
    image: "/team/aman22.png",
    fallback:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=800&fit=crop&q=80",
    featured: true,
  },
  {
    id: "hamza",
    name: "Hamza Ali",
    title: "Chief Technology Officer",
    image: "/team/hamza3.JPEG",
    fallback:
      "https://images.unsplash.com/photo-1519085360751-af11fbc936f5?w=600&h=800&fit=crop&q=80",
    featured: false,
  },
];

const TEAM_PILLARS = [
  "Software Development",
  "Social Media",
  "eCommerce",
  "Call Center",
  "Business Operations",
];

function IconUsers({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" />
      <path d="M16 3.13a4 4 0 010 7.75" />
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

  const height = featured
    ? "h-[440px] lg:h-[520px]"
    : "h-[390px] lg:h-[470px]";

  if (failed) {
    return (
      <div
        className={`relative overflow-hidden rounded-[28px] border border-orange-300 bg-gradient-to-br from-orange-50 to-white ${height}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,.15),transparent)]" />

        <div className="flex h-full items-center justify-center">
          <span className="text-6xl font-black text-orange-500">
            {initials}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`group relative overflow-hidden rounded-[28px] ${height}
      ${
        featured
          ? "border-2 border-orange-500 shadow-[0_20px_60px_rgba(249,115,22,.35)]"
          : "border border-orange-300 shadow-xl"
      }`}
    >
      <Image
        src={src}
        alt={name}
        fill
        className="object-cover object-top transition duration-700 group-hover:scale-105"
        onError={() => {
          if (src !== fallback) {
            setSrc(fallback);
          } else {
            setFailed(true);
          }
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#081B35]/85 via-transparent to-transparent" />

      {featured && (
        <span className="absolute left-5 top-5 rounded-full bg-red-600 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-lg">
          CEO
        </span>
      )}
    </div>
  );
}

function TeamMemberCard({ member, index, reduceMotion }) {
  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.55,
        delay: reduceMotion ? 0 : index * 0.08,
      }}
      className="group text-center"
    >
      <TeamPhoto
        name={member.name}
        image={member.image}
        fallback={member.fallback}
        featured={member.featured}
      />

      <div className="mt-7">
        <h3 className="text-2xl font-extrabold tracking-tight text-[#082C63] transition group-hover:text-orange-500">
          {member.name}
        </h3>

        <div className="mx-auto mt-4 h-[2px] w-14 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-24" />

        <p className="mt-4 text-sm font-bold uppercase tracking-[0.22em] text-red-600">
          {member.title}
        </p>
      </div>
    </motion.article>
  );
}
export function TeamSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="team"
      className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,.08),transparent_60%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-300 bg-orange-50 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-orange-600">
            <IconUsers className="h-4 w-4" />
            Leadership Team
          </span>

          <h2
            className="
            mt-7
            text-5xl
            font-black
            leading-tight
            tracking-tight
            text-[#082C63]
            sm:text-6xl"
          >
            Meet The People Behind
            <span className="block text-orange-500">
              Digital Drifters
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-600">
            Our leadership combines technology, business strategy,
            operations and marketing to build scalable digital
            solutions for clients around the world.
          </p>
        </motion.div>

        {/* Team */}
        <div className="mt-20 grid items-end gap-12 md:grid-cols-3">

          {/* Left */}
          <TeamMemberCard
            member={CORE_TEAM[0]}
            index={0}
            reduceMotion={reduceMotion}
          />

          {/* CEO */}
          <div className="relative scale-105">
            <div className="absolute inset-x-10 -top-8 -bottom-8 rounded-[40px] bg-gradient-to-b from-orange-400/20 to-transparent blur-3xl" />

            <TeamMemberCard
              member={CORE_TEAM[1]}
              index={1}
              reduceMotion={reduceMotion}
            />
          </div>

          {/* Right */}
          <TeamMemberCard
            member={CORE_TEAM[2]}
            index={2}
            reduceMotion={reduceMotion}
          />

        </div>

        {/* Company Card */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="
          relative
          mx-auto
          mt-24
          max-w-6xl
          overflow-hidden
          rounded-[32px]
          border
          border-orange-200
          bg-gradient-to-br
          from-white
          via-orange-50/40
          to-white
          p-10
          shadow-[0_20px_60px_rgba(15,23,42,.08)]"
        >

          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-orange-200/20 blur-3xl" />

          <h3 className="text-center text-4xl font-black text-orange-500">
            20–25+
          </h3>

          <p className="mt-2 text-center text-xl font-bold text-[#082C63]">
            Dedicated Professionals
          </p>

          <p className="mx-auto mt-6 max-w-4xl text-center text-lg leading-9 text-slate-600">
            Beyond our leadership team, Digital Drifters includes
            software engineers, UI/UX designers, social media experts,
            eCommerce specialists, AI engineers, call-center
            professionals and operations managers working together
            to deliver world-class digital solutions.
          </p>

          {/* Skills */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {TEAM_PILLARS.map((item) => (
              <span
                key={item}
                className="
                rounded-full
                border
                border-orange-300
                bg-white
                px-6
                py-3
                text-sm
                font-bold
                text-[#082C63]
                shadow-md
                transition
                duration-300
                hover:-translate-y-1
                hover:border-orange-500
                hover:bg-orange-500
                hover:text-white"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}