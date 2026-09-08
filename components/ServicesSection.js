"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const OFFERINGS = [
  {
    title: "Operation Management",
    description:
      "Processes, delivery, and day-to-day operations aligned so your team ships work with clarity—not chaos.",
    Icon: IconLayers,
  },
  {
    title: "Software Development",
    description:
      "Custom software, integrations, and reliable systems built around how your business actually works.",
    Icon: IconCode,
  },
  {
    title: "eCommerce",
    description:
      "Amazon & eBay marketplace management, listings, optimization, and sustainable store growth.",
    Icon: IconChart,
  },
  {
    title: "Call Center",
    description:
      "Professional inbound and outbound customer support that strengthens your brand experience.",
    Icon: IconHeadset,
  },
];

function IconHome({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M3 10.5L12 4l9 6.5V20H15v-6H9v6H3z" />
    </svg>
  );
}

function IconLayers({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 4L4 8l8 4 8-4-8-4zM4 12l8 4 8-4M4 16l8 4 8-4"/>
    </svg>
  );
}

function IconCode({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M8 9l-4 3 4 3M16 9l4 3-4 3M14 5l-4 14"/>
    </svg>
  );
}

function IconChart({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 19h16M8 15l3-4 3 3 5-7"/>
    </svg>
  );
}

function IconHeadset({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 16v-1a7 7 0 0114 0v1M5 16a2 2 0 002 2h1M19 16a2 2 0 01-2 2h-1"/>
    </svg>
  );
}

function ServiceCard({ title, description, Icon, transition, reduceMotion }) {
  return (
    <motion.article
      initial={
        reduceMotion
          ? false
          : {
              opacity: 0,
              y: 40,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={transition}
      whileHover={
        reduceMotion
          ? {}
          : {
              y: -12,
              scale: 1.03,
            }
      }
      className="
      group
      relative
      overflow-hidden
      rounded-[30px]
      border
    border-gray-200
    bg-white
      p-8
      hadow-[0_15px_40px_rgba(15,23,42,.08)]
      transition-all
      duration-500
    hover:border-[#DE0015]
     hover:shadow-[0_35px_70px_rgba(8,49,87,.12)]
"
    >
      {/* Top Line */}

      <div className="absolute left-0 top-0 h-1 w-0 bg-[#DE0015] transition-all duration-500 group-hover:w-full" />

      {/* Icon */}

      <motion.div
        whileHover={
          reduceMotion
            ? {}
            : {
                rotate: -8,
                scale: 1.1,
              }
        }
        className="
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-full
        bg-gradient-to-br
      from-[#083157]
     to-[#DE0015]
       shadow-lg
          "
      >
        <Icon className="h-7 w-7 text-white" />
      </motion.div>

      <h3 className="mt-8 text-2xl font-black text-[#083157]">
        {title}
      </h3>

      <p className="mt-5 text-gray-600 leading-8">
        {description}
      </p>

      <button className="mt-8 font-bold text-[#DE0015] transition group-hover:translate-x-2">
        Learn More →
      </button>
    </motion.article>
  );
}

export function ServicesSection() {

const reduceMotion = useReducedMotion();

const [a,b,c,d]=OFFERINGS;

const enter=(i)=>({
duration:.6,
delay:i*.12,
ease:[0.22,1,0.36,1]
});

return(

<section
id="services"
className="relative bg-white py-24 lg:py-32"
>

<div className="mx-auto max-w-7xl px-6 lg:px-10">

<div className="grid lg:grid-cols-12 gap-16 items-center">

<div className="lg:col-span-5">

<p className="flex items-center gap-2 font-bold uppercase tracking-[.25em] text-[#083157] text-sm">

<IconHome className="h-5 w-5 font-bold"/>

SERVICES WE OFFER

</p>

<h2 className="mt-5 text-4xl font-black leading-tight text-[#083157] lg:text-5xl">

Solutions Every Business Needs

</h2>

<p className="mt-7 max-w-xl text-lg leading-9 text-gray-600 font-bold">

Digital Drifters delivers premium business services including software development, marketplace management, operational excellence, and customer support—designed to help businesses grow with confidence.

</p>

<Link
href="#contact"
className="mt-10 inline-flex rounded-xl bg-[#DE0015] px-9 py-4 font-bold text-white transition hover:scale-105 hover:bg-red-700"
>

Explore Services

</Link>

</div>
{/* Right Side */}

<div className="lg:col-span-7">

  <div className="grid gap-8 md:grid-cols-2">

    {/* Column 1 */}
    <div className="flex flex-col gap-8">

      <ServiceCard
        {...a}
        transition={enter(0)}
        reduceMotion={reduceMotion}
      />

      <ServiceCard
        {...c}
        transition={enter(2)}
        reduceMotion={reduceMotion}
      />

    </div>

    {/* Column 2 */}
    <div className="mt-12 flex flex-col gap-8">

      <ServiceCard
        {...b}
        transition={enter(1)}
        reduceMotion={reduceMotion}
      />

      <ServiceCard
        {...d}
        transition={enter(3)}
        reduceMotion={reduceMotion}
      />

    </div>

  </div>

</div>

</div>

{/* Bottom Premium Banner */}

<motion.div
  initial={
    reduceMotion
      ? false
      : {
          opacity: 0,
          y: 30,
        }
  }
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  viewport={{
    once: true,
  }}
  transition={{
    duration: 0.6,
  }}
  className="
   mt-24
   overflow-hidden
  rounded-[34px]
  border
border-gray-200
bg-white
  p-10
  shadow-[0_25px_70px_rgba(15,23,42,.08)]
  "
>

  <div className="grid items-center gap-10 lg:grid-cols-2">

    <div>

      <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#DE0015]">
        WHY DIGITAL DRIFTERS
      </p>

      <h3 className="mt-4 text-4xl font-black leading-tight text-[#083157]">
        Everything your business needs in one trusted partner.
      </h3>

      <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
        From software development and operations management to
        eCommerce growth and customer support, we help businesses
        streamline operations, improve efficiency, and accelerate
        long-term growth with reliable digital solutions.
      </p>

    </div>

    <div className="grid grid-cols-2 gap-6">

      {[
        "Custom Software",
        "Business Operations",
        "Amazon & eBay",
        "24/7 Support",
      ].map((item) => (

        <div
          key={item}
          className="
          rounded-2xl
          border
        border-gray-200
        bg-white
          p-6
          text-center
          shadow-sm
          transition
         duration-300
        hover:-translate-y-2
       hover:border-[#DE0015]
        hover:shadow-xl
        "
        >

          <div className="mx-auto mb-4 h-3 w-3 rounded-full bg-[#DE0015]" />

          <h4 className="font-bold text-[#083157]">
            {item}
          </h4>

        </div>

      ))}

    </div>

  </div>

</motion.div>

</div>

</section>

);
}