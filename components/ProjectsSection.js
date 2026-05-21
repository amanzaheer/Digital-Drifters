"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const PROJECTS = [
  {
    name: "AgentDial.ai",
    href: "https://agentdial.ai",
    aiPowered: true,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&h=560&fit=crop&q=80",
    tags: ["AI call bot", "Operations"],
    description:
      "AI voice agent for handling day-to-day operations through an intelligent call bot—routing, responses, and workflows without losing the human touch when it matters.",
  },
  {
    name: "EatsDesk.com",
    href: "https://eatsdesk.com",
    aiPowered: true,
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&h=560&fit=crop&q=80",
    tags: ["Restaurant POS", "AI calls"],
    description:
      "Restaurant point-of-sale paired with an AI call bot so orders, reservations, and guest questions are handled on the line while the floor stays focused on service.",
  },
  {
    name: "DomainsPrimeTime.com",
    href: "https://domainsprimetime.com",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&h=560&fit=crop&q=80",
    imageFallback:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=900&h=560&fit=crop&q=80",
    tags: ["Domains", "Site builder"],
    description:
      "Full-featured domain management: buy domains, connect them to sites, and spin up thousands of sites in seconds from one control plane built for scale.",
  },
  {
    name: "Verified CRM",
    href: "https://dev.verifiedcrm.com",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&h=560&fit=crop&q=80",
    imageFallback:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=560&fit=crop&q=80",
    tags: ["Call center", "Gold broker"],
    description:
      "Call-center and gold-broker operations in one management system—queues, agents, compliance-friendly workflows, and leadership dashboards for live floor control.",
  },
  {
    name: "CashlyCards.com",
    href: "https://cashlycards.com",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=900&h=560&fit=crop&q=80",
    tags: ["Fintech", "Payments"],
    description:
      "Fintech platform for payment processing and card management—secure flows, card lifecycle tools, and reporting built for teams that move money at volume.",
  },
  {
    name: "LogicalCRM.com",
    href: "https://logicalcrm.com",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=560&fit=crop&q=80",
    tags: ["CRM", "Sales"],
    description:
      "Complete CRM built collaboratively with our team—business management, customer relationships, pipeline and sales tooling in one logical workspace.",
  },
];

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

function IconExternal({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
    </svg>
  );
}

function ProjectCardImage({ name, image, imageFallback }) {
  const [src, setSrc] = useState(image);
  const [failed, setFailed] = useState(false);

  if (failed) {
    const initial = name.replace(/[^a-zA-Z0-9]/g, "").slice(0, 2).toUpperCase() || "DD";
    return (
      <div
        className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-orange-500/25 via-black to-black"
        aria-hidden
      >
        <span className="text-5xl font-black tracking-tighter text-orange-500/90 sm:text-6xl">
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
      className="object-cover transition duration-500 group-hover:scale-[1.04] group-hover:opacity-90"
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

function ProjectCard({ project, index, reduceMotion }) {
  const transition = {
    duration: reduceMotion ? 0.01 : 0.5,
    delay: reduceMotion ? 0 : index * 0.08,
    ease: [0.22, 1, 0.36, 1],
  };

  const hoverMotion = reduceMotion
    ? {}
    : {
        y: -6,
        transition: { type: "spring", stiffness: 420, damping: 28 },
      };

  return (
    <motion.article
      initial={
        reduceMotion
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: 28, scale: 0.98 }
      }
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={hoverMotion}
      viewport={{ once: true, margin: "-50px", amount: 0.15 }}
      transition={transition}
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border bg-black shadow-[0_0_36px_-14px_rgba(249,115,22,0.2)] transition-[border-color,box-shadow] duration-300 hover:shadow-[0_0_48px_-8px_rgba(249,115,22,0.35)] ${
        project.aiPowered
          ? "border-orange-500/55 hover:border-orange-500"
          : "border-orange-500/25 hover:border-orange-500/50"
      }`}
    >
      <Link
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block aspect-[16/10] overflow-hidden"
      >
        {project.aiPowered ? (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-orange-500 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-black shadow-lg">
            AI-powered
          </span>
        ) : null}
        <ProjectCardImage
          name={project.name}
          image={project.image}
          imageFallback={project.imageFallback}
        />
        <div
          className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent"
          aria-hidden
        />
        <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-orange-500/40 bg-black/70 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-orange-500 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold tracking-tight text-white transition-colors group-hover:text-orange-500 sm:text-xl">
            {project.name}
          </h3>
          <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-orange-500/40 text-orange-500 transition group-hover:bg-orange-500 group-hover:text-black">
            <IconExternal className="h-3.5 w-3.5" />
          </span>
        </div>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-white/75 sm:text-base">
          {project.description}
        </p>
        <Link
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-orange-500 transition hover:text-white"
        >
          View project
          <IconExternal className="h-3.5 w-3.5" />
        </Link>
      </div>
    </motion.article>
  );
}

export function ProjectsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="work"
      className="relative scroll-mt-24 bg-black py-20 text-white sm:py-24 lg:py-28"
      aria-labelledby="projects-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_45%_at_50%_0%,rgba(249,115,22,0.14),transparent_55%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-orange-500/35 to-transparent" aria-hidden />

      <div className="relative mx-auto w-full max-w-[min(100%,1600px)] px-5 sm:px-8 lg:px-10 xl:px-14">
        <motion.header
          className="mx-auto max-w-3xl text-center"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-orange-500 sm:text-sm sm:tracking-[0.26em]">
            <IconBriefcase className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
            Our software projects
          </p>
          <h2
            id="projects-heading"
            className="mt-4 text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]"
          >
            Platforms we&apos;ve built &amp; shipped
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/75 sm:text-lg">
            End-to-end software from Digital Drifters—voice AI, restaurant ops,
            domain infrastructure, call-center CRM, fintech, and sales systems
            running in production today.
          </p>
          <Link
            href="#ai"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-orange-500/50 bg-orange-500/10 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.18em] text-orange-500 transition hover:bg-orange-500 hover:text-black sm:text-sm"
          >
            Explore our AI integration →
          </Link>
        </motion.header>

        <div className="mt-14 grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
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
