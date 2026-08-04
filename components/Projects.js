"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { useMemo, useState, useRef, useEffect } from "react";

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
    industry: "Operations",
    platform: "Custom Build",
    expertise: "AI Integration",
    description:
      "AI-powered voice automation platform developed by Digital Drifters to streamline customer communication, automate calls, and improve business operations.",
  },
  {
    name: "EatsDesk.com",
    href: "https://eatsdesk.com",
    aiPowered: true,
    image:
      "https://images.unsplash.com/photo-1742240216264-f0aac25ef4ba?auto=format&fit=crop&w=1600&q=80",
    tags: ["Food Tech", "Business Platform", "Web Application"],
    industry: "Food & Beverage",
    platform: "Web Application",
    expertise: "AI Integration",
    description:
      "A smart food technology platform designed to simplify business operations, enhance customer experiences, and provide scalable digital solutions with modern web technologies.",
  },
  {
    name: "DomainsPrimeTime.com",
    href: "https://domainsprimetime.com",
    image:
      "https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?auto=format&fit=crop&w=1600&q=80",
    tags: ["Domain Marketplace", "Web Services", "Digital Solutions"],
    industry: "Web Services",
    platform: "Marketplace",
    expertise: "Full-Stack Development",
    description:
      "A professional domain marketplace platform designed to help users explore, manage, and acquire premium domain names with a smooth browsing experience and modern web features.",
  },
  {
    name: "Verified CRM",
    href: "https://dev.verifiedcrm.com",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    tags: ["CRM", "Business Automation", "SaaS Platform"],
    industry: "Business Automation",
    platform: "SaaS",
    expertise: "Full-Stack Development",
    description:
      "A powerful CRM platform designed to help businesses manage customer relationships, streamline workflows, track performance, and improve operations through a centralized dashboard.",
  },
  {
    name: "CashlyCards.com",
    href: "https://cashlycards.com",
    image:
      "https://images.unsplash.com/photo-1685483749753-0dab7e144794?auto=format&fit=crop&w=1600&q=80",
    tags: ["eCommerce", "Online Marketplace", "Shopping Platform"],
    industry: "Fintech",
    platform: "eCommerce",
    expertise: "Full-Stack Development",
    description:
      "A modern eCommerce platform designed to provide seamless online shopping experiences with efficient product management, secure transactions, and smooth order processing capabilities.",
  },
  {
    name: "LogicalCRM.com",
    href: "https://logicalcrm.com",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=80",
    tags: ["CRM", "Business Management", "SaaS Platform"],
    industry: "Business Automation",
    platform: "SaaS",
    expertise: "Full-Stack Development",
    description:
      "A smart CRM platform designed to help businesses manage customer relationships, automate workflows, track sales activities, and improve productivity through a centralized system.",
  },
];

const INDUSTRIES = [...new Set(PROJECTS.map((p) => p.industry))];
const PLATFORMS = [...new Set(PROJECTS.map((p) => p.platform))];
const EXPERTISES = [...new Set(PROJECTS.map((p) => p.expertise))];


/* Icons */

function IconBriefcase({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
    >
      <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2M12 12v.01" />
    </svg>
  );
}

function IconArrowRight({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
function IconChevronDown({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function IconSearch({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  );
}

function IconX({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}


/* Filter Dropdown */

function FilterDropdown({ label, options, value, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`flex w-full items-center justify-between gap-3 rounded-lg border px-4 py-2.5 text-sm font-medium transition sm:w-44 ${
          value
            ? "bg-[#0B1D3A] text-white"
            : "border-[#0B1D3A]/15 bg-[#EAF0FA] text-[#0B1D3A]"
        }`}
      >
        <span>{value || label}</span>

        <IconChevronDown
          className={`h-4 w-4 transition ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="absolute left-0 top-full z-30 mt-2 w-full overflow-hidden rounded-lg border bg-white shadow-xl"
          >
            <li>
              <button
                onClick={() => {
                  onChange(null);
                  setOpen(false);
                }}
                className="w-full px-4 py-2 text-left text-sm hover:bg-[#EAF0FA]"
              >
                All {label}
              </button>
            </li>

            {options.map((item) => (
              <li key={item}>
                <button
                  onClick={() => {
                    onChange(item);
                    setOpen(false);
                  }}
                  className="w-full px-4 py-2 text-left text-sm hover:bg-[#EAF0FA]"
                >
                  {item}
                </button>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}


/* Card Image */

function ProjectCardImage({
  name,
  image,
  imageFallback,
}) {
  const [src, setSrc] = useState(image);
  const [failed, setFailed] = useState(false);


  if (failed) {
    const initial =
      name
        .replace(/[^a-zA-Z0-9]/g, "")
        .slice(0, 2)
        .toUpperCase() || "DD";

    return (
      <div className="absolute inset-0 flex items-center justify-center bg-[#0B1D3A]">
        <span className="text-6xl font-black text-white/70">
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
      className="object-cover transition duration-700 group-hover:scale-110"
      sizes="(max-width:768px)100vw,50vw"
      onError={() => {
        if (imageFallback && src !== imageFallback) {
          setSrc(imageFallback);
        } else {
          setFailed(true);
        }
      }}
    />
  );
}


/* Project Card */

function ProjectCard({
  project,
  index,
  reduceMotion,
}) {

  const openProject = () => {
    window.open(
      project.href,
      "_blank",
      "noopener,noreferrer"
    );
  };


  return (
    <motion.article
      layout
      initial={
        reduceMotion
          ? false
          : { opacity: 0, y: 30 }
      }
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
      }}
      whileHover={
        reduceMotion
          ? {}
          : {
              y: -8,
            }
      }
      onClick={openProject}
      className="group relative flex h-[500px] cursor-pointer overflow-hidden rounded-[20px] shadow-xl"
    >

      <div className="absolute inset-0">
        <ProjectCardImage
          name={project.name}
          image={project.image}
          imageFallback={project.imageFallback}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1D3A]/80 via-transparent to-[#0B1D3A]/90" />
      </div>
      {project.aiPowered && (
          <span
            style={{ backgroundColor: RED }}
            className="absolute right-5 top-5 z-20 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white"
          >
            AI Powered
          </span>
        )}

        <div className="relative z-10 flex flex-col justify-between h-full p-7">

          <div>
            <h3 className="text-3xl font-bold text-white">
              {project.name}
            </h3>

            <p className="mt-2 text-sm text-white/75">
              {project.tags.join(", ")}
            </p>

            <span className="mt-4 inline-flex rounded-full border border-white/60 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white transition group-hover:bg-[#E10E1D] group-hover:border-[#E10E1D]">
              Case Study
            </span>
          </div>


          <div className="mt-auto flex items-end justify-between">

            <p className="max-w-sm text-sm leading-relaxed text-white/80 opacity-0 transition duration-500 group-hover:opacity-100">
              {project.description}
            </p>


            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#0B1D3A] transition group-hover:bg-[#E10E1D] group-hover:text-white">
              <IconArrowRight className="h-5 w-5" />
            </span>

          </div>

        </div>

      </motion.article>
    );
}

/* Main Section */

export default function projects() {

  const reduceMotion = useReducedMotion();


  const [search,setSearch] = useState("");
  const [industry,setIndustry] = useState(null);
  const [platform,setPlatform] = useState(null);
  const [expertise,setExpertise] = useState(null);



  const filtered = useMemo(()=>{

    const q = search.toLowerCase().trim();


    return PROJECTS.filter((p)=>{


      if(industry && p.industry !== industry)
        return false;


      if(platform && p.platform !== platform)
        return false;


      if(expertise && p.expertise !== expertise)
        return false;



      if(!q)
        return true;



      return [
        p.name,
        p.description,
        ...p.tags,
        p.industry,
        p.platform,
        p.expertise
      ]
      .join(" ")
      .toLowerCase()
      .includes(q);


    });


  },[
    search,
    industry,
    platform,
    expertise
  ]);

  function clearFilters(){

    setSearch("");
    setIndustry(null);
    setPlatform(null);
    setExpertise(null);

  }
  const hasActiveFilters =
    search ||
    industry ||
    platform ||
    expertise;

  return (

    <section
      id="projects"
      className="relative bg-white py-20 text-black sm:py-24"
    >


      {/* TOP PROJECTS HEADING */}

      <div className="relative mx-auto mb-14 max-w-7xl px-5 text-center sm:px-8">

        <h1
          className={`text-5xl font-bold tracking-tight ${NAVY}`}
        >
          Projects
        </h1>


        <p className="mt-3 text-lg text-black/60">
          Explore our latest software projects and digital solutions.
        </p>


      </div>



      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-8 lg:px-10">


        <motion.header
          className="mx-auto max-w-3xl text-center"
          initial={
            reduceMotion
            ? false
            : {
              opacity:0,
              y:20
            }
          }
          whileInView={{
            opacity:1,
            y:0
          }}
          viewport={{
            once:true
          }}
        >


          <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-red-600">

            <IconBriefcase className="h-5 w-5"/>

            Our software projects

          </p>

          <h2
            className={`mt-4 text-4xl font-bold ${NAVY}`}
          >
            Platforms we&apos;ve built &amp; shipped
          </h2>


          <p className="mt-5 text-lg text-black">
            End-to-end software from Digital Drifters including AI,
            business platforms, CRM systems and SaaS products.
          </p>



          <Link
            href="#ai"
            style={{
              backgroundColor:RED
            }}
            className="mt-6 inline-flex rounded-full px-6 py-3 text-sm font-bold text-white"
          >
            Explore AI Integration →
          </Link>


        </motion.header>
                {/* Filters */}

                <div className="mx-auto mt-12 flex max-w-5xl flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">


  <FilterDropdown
   label="Industries"
  options={INDUSTRIES}
  value={industry}
  onChange={setIndustry}
  />

 <FilterDropdown
  label="Platforms"
  options={PLATFORMS}
  value={platform}
  onChange={setPlatform}
/>
<FilterDropdown
  label="Expertise"
  options={EXPERTISES}
  value={expertise}
  onChange={setExpertise}
/>

{/* Search */}

<div className="relative flex-1 sm:min-w-[220px]">

  <IconSearch
    className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0B1D3A]/40"
  />


  <input
    type="text"
    value={search}
    onChange={(e)=>setSearch(e.target.value)}
    placeholder="Search by keyword..."
    className="w-full rounded-lg border border-[#0B1D3A]/15 py-2.5 pl-10 pr-10 text-sm outline-none focus:border-[#E10E1D]"
  />


  {search && (

    <button
      type="button"
      onClick={()=>setSearch("")}
      className="absolute right-3 top-1/2 -translate-y-1/2"
    >

      <IconX className="h-4 w-4"/>

    </button>

  )}

</div>
{hasActiveFilters && (

  <button
    type="button"
    onClick={clearFilters}
    className="text-xs font-bold uppercase text-[#E10E1D]"
  >
    Clear all
  </button>
)}
</div>

<p className="mt-5 text-center text-xs font-bold uppercase tracking-wider text-[#0B1D3A]/40">

{filtered.length}
{" "}
{filtered.length === 1 ? "Project" : "Projects"}

</p>

{/* Project Cards */}


<motion.div

layout

className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3"

>


<AnimatePresence mode="popLayout">


  {filtered.map((project,index)=>(


    <ProjectCard

      key={project.href}

      project={project}

      index={index}

      reduceMotion={reduceMotion}

    />


  ))}



</AnimatePresence>


</motion.div>

{/* Empty Result */}

{filtered.length === 0 && (

<div className="mt-10 rounded-2xl border border-dashed border-[#0B1D3A]/20 py-16 text-center">


  <h3
    className={`text-xl font-bold ${NAVY}`}
  >
    No projects found
  </h3>


  <p className="mt-2 text-black/60">
    Try changing your search or filters.
  </p>



  <button

    onClick={clearFilters}

    style={{
      backgroundColor:RED
    }}

    className="mt-5 rounded-full px-6 py-3 text-sm font-bold text-white"

  >
    Clear Filters

  </button>

</div>

)}
</div>

</section>


);

}