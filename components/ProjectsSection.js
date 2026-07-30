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
      "A professional domain marketplace platform designed to help users explore, manage, and acquire premium domain names with a smooth browsing experience and modern web features."
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
      "A powerful CRM platform designed to help businesses manage customer relationships, streamline workflows, track performance, and improve operations through a centralized dashboard."
  },
  {
    name: "CashlyCards.com",
    href: "https://cashlycards.com",
    image:
      "https://images.unsplash.com/photo-1685483749753-0dab7e144794?auto=format&fit=crop&w=1600&q=80",
    tags: ["eCommerce", "Online Marketplace", "Shopping Platform"],
    description:
      "A modern eCommerce platform designed to provide seamless online shopping experiences with efficient product management, secure transactions, and smooth order processing capabilities."
  },
  {
    name: "LogicalCRM.com",
    href: "https://logicalcrm.com",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=80",
    tags: ["CRM", "Business Management", "SaaS Platform"],
    description:
      "A smart CRM platform designed to help businesses manage customer relationships, automate workflows, track sales activities, and improve productivity through a centralized system."
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
        className="absolute inset-0 flex items-center justify-center bg-linear-to-br from-red-500/15 via-white to-white"
        aria-hidden
      >
        <span className="text-5xl font-black tracking-tighter text-[#0B1D3A]/80 sm:text-6xl">
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
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border bg-white shadow-[0_10px_30px_-14px_rgba(15,23,42,0.18)] transition-[border-color,box-shadow] duration-300 hover:shadow-[0_16px_40px_-12px_rgba(225,14,29,0.25)] ${
        project.aiPowered
          ? "border-red-500/45 hover:border-red-500"
          : "border-slate-200 hover:border-red-500/40"
      }`}
    >
      <Link
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block aspect-[16/10] overflow-hidden"
      >
        {project.aiPowered ? (
          <span
            style={{ backgroundColor: RED }}
            className="absolute left-3 top-3 z-10 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg"
          >
            AI-powered
          </span>
        ) : null}
        <ProjectCardImage
          name={project.name}
          image={project.image}
          imageFallback={project.imageFallback}
        />
        <div
          className="absolute inset-0 bg-linear-to-t from-black/70 via-black/25 to-transparent"
          aria-hidden
        />
        <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/40 bg-black/60 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className={`text-lg font-bold tracking-tight ${NAVY} transition-colors group-hover:text-red-600 sm:text-xl`}>
            {project.name}
          </h3>
          <span
            style={{ borderColor: `${RED}66` }}
            className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-red-600 transition group-hover:bg-[#E10E1D] group-hover:text-white group-hover:border-[#E10E1D]"
          >
            <IconExternal className="h-3.5 w-3.5" />
          </span>
        </div>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-700 sm:text-base">
          {project.description}
        </p>
        <Link
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex w-fit items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-sm transition hover:brightness-110"
          style={{ backgroundColor: RED }}
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
      className="relative scroll-mt-24 bg-white py-20 text-black sm:py-24 lg:py-28"
      aria-labelledby="projects-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_45%_at_50%_0%,rgba(225,14,29,0.06),transparent_55%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-red-500/30 to-transparent" aria-hidden />

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