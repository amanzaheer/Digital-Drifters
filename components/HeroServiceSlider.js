"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Drop your PNGs into `public/images/hero-slider/` with these names.
 * If a file is missing, the `fallback` URL is used automatically.
 */
const slides = [
  {
    primary: "/images/hero-slider/web-development.png",
    fallback:
      "https://placehold.co/720x560/0b1220/38bdf8/png?text=Web+Development",
    alt: "Web development",
  },
  {
    primary: "/images/hero-slider/ecommerce.png",
    fallback:
      "https://placehold.co/720x560/12061e/c4b5fd/png?text=eCommerce",
    alt: "eCommerce",
  },
  {
    primary: "/images/hero-slider/call-center.png",
    fallback:
      "https://placehold.co/720x560/052e16/86efac/png?text=Call+Center",
    alt: "Call center services",
  },
];

const intervalMs = 4500;

export function HeroServiceSlider() {
  const [index, setIndex] = useState(0);
  const [useFallback, setUseFallback] = useState(() =>
    slides.map(() => false),
  );

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, []);

  const current = slides[index];
  const src = useFallback[index] ? current.fallback : current.primary;

  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
      <div className="relative aspect-[9/10] w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${index}-${src}`}
            className="absolute inset-0"
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -28 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <Image
              src={src}
              alt={current.alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 28rem"
              priority={index === 0}
              onError={() => {
                setUseFallback((prev) => {
                  const next = [...prev];
                  next[index] = true;
                  return next;
                });
              }}
            />
          </motion.div>
        </AnimatePresence>
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/40 to-transparent"
          aria-hidden
        />
      </div>
      <div className="mt-4 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === index
                ? "w-8 bg-[#E10E1D]"
                : "w-2 bg-slate-300 hover:bg-[#E10E1D]/50"
            }`}
            aria-label={`Show slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}