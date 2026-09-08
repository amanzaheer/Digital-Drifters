"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const NAVY = "text-[#0B1D3A]";
const RED = "#E10E1D";

const PROJECTS = [
  {
    name: "AgentDial.ai",
    href: "https://agentdial.ai",
    aiPowered: true,
    image:
      "https://images.unsplash.com/photo-1553775282-20af80779df7?auto=format&fit=crop&w=1600&q=80",
    tags: ["AI call bot", "Operations"],
    description:
      "AI-powered voice automation platform developed by Digital Drifters to streamline customer communication, automate calls, and improve business operations..",
  },
  {
    name: "EatsDesk.com",
    href: "https://eatsdesk.com",
    aiPowered: true,
    image:
      "https://images.unsplash.com/photo-1742240216264-f0aac25ef4ba?auto=format&fit=crop&w=1600&q=80",
    tags: ["Food Tech", "Business Platform", "Web Application"],
    description:
      "A smart food technology platform designed to simplify business operations, enhance customer experiences, and provide scalable digital solutions with modern web technologies.",
  },
  {
    name: "DomainsPrimeTime.com",
    href: "https://domainsprimetime.com",
    image:
      "https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?auto=format&fit=crop&w=1600&q=80",
    imageFallback:
      "https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?auto=format&fit=crop&w=1600&q=80",
    tags: ["Domain Marketplace", "Web Services", "Digital Solutions"],
    description:
      "A professional domain marketplace platform designed to help users explore, manage, and acquire premium domain names with a smooth browsing experience and modern web features.",
  },
  {
    name: "Verified CRM",
    href: "https://dev.verifiedcrm.com",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    imageFallback:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    tags: ["CRM", "Business Automation", "SaaS Platform"],
    description:
      "A powerful CRM platform designed to help businesses manage customer relationships, streamline workflows, track performance, and improve operations through a centralized dashboard.",
  },
  {
    name: "CashlyCards.com",
    href: "https://cashlycards.com",
    image:
      "https://images.unsplash.com/photo-1685483749753-0dab7e144794?auto=format&fit=crop&w=1600&q=80",
    tags: ["eCommerce", "Online Marketplace", "Shopping Platform"],
    description:
      "A modern eCommerce platform designed to provide seamless online shopping experiences with efficient product management, secure transactions, and smooth order processing capabilities.",
  },
  {
    name: "LogicalCRM.com",
    href: "https://logicalcrm.com",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=80",
    tags: ["CRM", "Business Management", "SaaS Platform"],
    description:
      "A smart CRM platform designed to help businesses manage customer relationships, automate workflows, track sales activities, and improve productivity through a centralized system.",
  },
];

/* ------------------------------------------------------------------ */
/* Icons                                                                */
/* ------------------------------------------------------------------ */

function IconBriefcase({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2M12 12v.01" />
    </svg>
  );
}

/* Simple right arrow — matches the circular "view case study" button */
function IconArrowRight({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Card image with graceful fallback                                   */
/* ------------------------------------------------------------------ */

function ProjectCardImage({ name, image, imageFallback }) {
  const [src, setSrc] = useState(image);
  const [failed, setFailed] = useState(false);

  if (failed) {
    const initial =
      name.replace(/[^a-zA-Z0-9]/g, "").slice(0, 2).toUpperCase() || "DD";
    return (
      <div
        className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-[#0B1D3A] via-[#0B1D3A] to-[#132a52]"
        aria-hidden
      >
        <span className="text-5xl font-black tracking-tighter text-white/70 sm:text-6xl">
          {initial}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={`${name} project preview`}
      fill
      priority={false}
      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
      onError={() => {
        if (imageFallback && src !== imageFallback) {
          setSrc(imageFallback);
          return;
        }
        setFailed(true);
      }}
    />
  );
}

/* ------------------------------------------------------------------ */
/* Card — full-bleed image, content overlaid, Webstacks-style layout   */
/* ------------------------------------------------------------------ */

function ProjectCard({ project, index, reduceMotion }) {
  const transition = {
    duration: reduceMotion ? 0.01 : 0.6,
    delay: reduceMotion ? 0 : index * 0.09,
    ease: [0.22, 1, 0.36, 1],
  };

  const hoverMotion = reduceMotion
    ? {}
    : { y: -8, transition: { type: "spring", stiffness: 320, damping: 26 } };

  return (
    <motion.article
      initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={hoverMotion}
      viewport={{ once: true, margin: "-50px", amount: 0.15 }}
      transition={transition}
      className="group relative isolate flex h-[420px] w-full flex-col justify-between overflow-hidden rounded-[20px] shadow-[0_10px_30px_-14px_rgba(11,29,58,0.25)] transition-shadow duration-500 ease-out hover:shadow-[0_24px_55px_-14px_rgba(11,29,58,0.45)] focus-within:ring-2 focus-within:ring-[#E10E1D] focus-within:ring-offset-2 sm:aspect-[460/500] sm:h-auto lg:mx-auto lg:aspect-auto lg:h-[500px] lg:w-[460px]"
    >
      {/* Full-bleed background image */}
      <div className="absolute inset-0 h-full w-full overflow-hidden rounded-[20px]">
        <ProjectCardImage
          name={project.name}
          image={project.image}
          imageFallback={project.imageFallback}
        />
        {/* Top gradient — keeps title/badge legible over bright images */}
        <div
          className="absolute inset-x-0 top-0 h-2/3 bg-linear-to-b from-[#0B1D3A]/85 via-[#0B1D3A]/25 to-transparent"
          aria-hidden
        />
        {/* Bottom gradient — keeps the CASE STUDY / arrow controls legible */}
        <div
          className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-[#0B1D3A]/80 via-[#0B1D3A]/10 to-transparent"
          aria-hidden
        />
      </div>

      {/* AI-powered badge */}
      {project.aiPowered && (
        <span
          style={{ backgroundColor: RED }}
          className="absolute right-5 top-5 z-10 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg"
        >
          AI-powered
        </span>
      )}

      {/* Top-left: name, category/tags, Case Study button */}
      <div className="relative z-10 flex flex-col gap-3 p-7">
        <div>
          <h3 className="text-2xl font-bold leading-tight tracking-tight text-white sm:text-[1.75rem]">
            {project.name}
          </h3>
          <p className="mt-1.5 text-sm font-medium text-white/75">
            {project.tags.join(", ")}
          </p>
        </div>

        <Link
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-fit items-center rounded-full border border-white/70 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:border-[#E10E1D] hover:bg-[#E10E1D]"
        >
          Case Study
        </Link>
      </div>

      {/* Description — revealed on hover, sits above the footer controls */}
      <div className="relative z-10 px-7">
        <p className="max-h-0 overflow-hidden text-sm leading-relaxed text-white/85 opacity-0 transition-all duration-500 ease-out group-hover:max-h-28 group-hover:opacity-100">
          {project.description}
        </p>
      </div>

      <div className="relative z-10 flex-1" />

      {/* Bottom-right circular arrow button */}
      <div className="relative z-10 flex items-center justify-end p-6">
        <Link
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.name} case study`}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#0B1D3A] shadow-md transition-colors duration-300 group-hover:bg-[#E10E1D] group-hover:text-white"
        >
          <IconArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </motion.article>
  );
}

/* ------------------------------------------------------------------ */
/* Section                                                              */
/* ------------------------------------------------------------------ */

export function ProjectsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="work"
      className="relative scroll-mt-24 bg-white py-20 text-black sm:py-24 lg:py-28"
      aria-labelledby="projects-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_45%_at_50%_0%,rgba(225,14,29,0.06),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-red-500/30 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-[min(100%,1600px)] px-5 sm:px-8 lg:px-10 xl:px-14">
        <motion.header
          className="mx-auto max-w-3xl text-center"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-red-600 sm:text-sm sm:tracking-[0.26em]">
            <IconBriefcase className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
            Our software projects
          </p>
          <h2
            id="projects-heading"
            className={`mt-4 text-3xl font-bold leading-[1.1] tracking-tight ${NAVY} sm:text-4xl lg:text-[2.75rem]`}
          >
            Platforms we&apos;ve built &amp; shipped
          </h2>
          <p className="mt-5 text-base leading-relaxed text-black sm:text-lg">
            End-to-end software from Digital Drifters—voice AI, restaurant ops,
            domain infrastructure, call-center CRM, fintech, and sales systems
            running in production today.
          </p>
          <Link
            href="#ai"
            style={{ backgroundColor: RED }}
            className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-[0_10px_28px_-10px_rgba(225,14,29,0.55)] transition hover:brightness-110 sm:text-sm"
          >
            Explore our AI integration →
          </Link>
        </motion.header>

        <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:mx-auto lg:max-w-[1436px] lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.href}
              project={project}
              index={index}
              reduceMotion={reduceMotion === true}
            />
          ))}
        </div>
      </div>
    </section>
  );
}