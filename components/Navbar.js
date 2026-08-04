"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Project" },
  { href: "#ai", label: "AI" },
  { href: "#social-media", label: "Social" },
  { href: "#about", label: "About" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

/** Solid red CTA to match brand button style */
const ctaGradient =
  "rounded-full bg-red-600 text-sm font-semibold text-white shadow-[0_8px_24px_-6px_rgba(220,38,38,0.5)] transition hover:bg-red-700 hover:shadow-[0_12px_28px_-4px_rgba(220,38,38,0.55)]";

function NavUnderlineLink({ href, label, onNavigate }) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="group relative px-2.5 py-2 text-sm font-medium text-[#0B1F4E]/80 transition-colors hover:text-[#0B1F4E] sm:px-3 sm:text-[15px]"
    >
      <span className="relative z-10">{label}</span>
      <span
        className="pointer-events-none absolute inset-x-0 bottom-1 h-px origin-left scale-x-0 bg-red-600 transition-transform duration-300 ease-out group-hover:scale-x-100"
        aria-hidden
      />
    </Link>
  );
}

function BrandLogo({ onNavigate, compact = false }) {
  return (
    <Link
      href="#home"
      onClick={onNavigate}
      className="group relative flex shrink-0 items-center gap-2.5 sm:gap-3"
      aria-label="Digital Drifters — home"
    >
      <span
        className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#FAF8F3] ring-1 ring-[#0B1F4E]/12 transition duration-300 group-hover:ring-[#C67D4D]/45 group-hover:shadow-[0_0_22px_-4px_rgba(198,125,77,0.5)] group-focus-visible:ring-2 group-focus-visible:ring-[#0B1F4E]/40 ${
          compact ? "h-10 w-10" : "h-11 w-11 sm:h-12 sm:w-12"
        }`}
      >
        <Image
          src="/2.png"
          alt=""
          width={160}
          height={160}
          className="h-[190%] w-[190%] max-w-none object-cover object-center transition duration-500 ease-out group-hover:scale-[1.06]"
          priority
        />
        <span
          className="pointer-events-none absolute inset-0 rounded-full bg-linear-to-br from-[#7FE5E5]/10 via-transparent to-[#C67D4D]/15 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden
        />
      </span>

      {!compact && (
        <span className="hidden min-w-0 flex-col leading-tight min-[420px]:flex">
          <span className="truncate text-[13px] font-bold uppercase tracking-[0.14em] text-[#0B1F4E] sm:text-sm">
            Digital Drifters
          </span>
          <span className="truncate text-[9px] font-semibold uppercase tracking-[0.22em] text-[#0B1F4E]/50 sm:text-[10px]">
            Explore · Connect · Create
          </span>
        </span>
      )}
    </Link>
  );
}

function MenuIcon({ open }) {
  return (
    <svg
      className="h-6 w-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      {open ? (
        <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" />
      ) : (
        <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
      )}
    </svg>
  );
}

function useHeroOverlap() {
  const [onHero, setOnHero] = useState(true);

  useEffect(() => {
    const update = () => {
      const hero = document.getElementById("home");
      if (!hero) {
        setOnHero(false);
        return;
      }
      const bottom = hero.getBoundingClientRect().bottom;
      setOnHero(bottom > 80);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return onHero;
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const onHero = useHeroOverlap();

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia("(min-width: 768px)").matches) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  const shellClass = onHero
    ? "border-slate-200 bg-white/90 shadow-[0_12px_48px_-8px_rgba(15,23,42,0.18)]"
    : "border-slate-200 bg-white/95 shadow-[0_12px_40px_-10px_rgba(15,23,42,0.15)]";

  const menuBtnClass =
    "inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0B1F4E] backdrop-blur-md transition hover:border-[#0B1F4E]/30 hover:bg-slate-50 md:hidden";

  return (
    <>
      <motion.header
        className="pointer-events-none fixed top-0 right-0 left-0 z-50 px-2 pt-3 sm:px-4 sm:pt-4 md:px-6 lg:px-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className={`pointer-events-auto mx-auto flex w-full max-w-[min(100%,1600px)] items-center gap-4 rounded-full border px-5 py-3.5 backdrop-blur-2xl sm:gap-5 sm:px-7 sm:py-4 lg:px-10 ${shellClass}`}
        >
          <BrandLogo onNavigate={closeMenu} />

          <nav
            className="hidden flex-1 items-center justify-center gap-1 md:flex lg:gap-2"
            aria-label="Primary"
          >
            {navItems.map((item) => (
              <NavUnderlineLink
                key={item.href}
                href={item.href}
                label={item.label}
                onNavigate={closeMenu}
              />
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2 sm:gap-3 md:ml-0">
            <Link
              href="#contact"
              onClick={closeMenu}
              className={`hidden px-5 py-2.5 text-[15px] sm:inline-flex md:px-7 md:py-3 ${ctaGradient}`}
            >
              Get Started
            </Link>
            <button
              type="button"
              className={menuBtnClass}
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              <MenuIcon open={open} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              className="fixed inset-0 z-60 bg-slate-900/50 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeMenu}
            />
            <motion.div
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              className="fixed inset-y-0 right-0 z-70 flex w-[min(100%,20rem)] flex-col border-l border-slate-200 bg-white p-6 pt-6 shadow-2xl shadow-slate-900/20 backdrop-blur-2xl md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
            >
              <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-5">
                <BrandLogo onNavigate={closeMenu} compact />
                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-[#0B1F4E] transition hover:border-[#0B1F4E]/30 hover:bg-slate-50"
                  onClick={closeMenu}
                  aria-label="Close menu"
                >
                  <MenuIcon open />
                </button>
              </div>
              <nav className="flex flex-col gap-1" aria-label="Mobile">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.06 + i * 0.05,
                      duration: 0.35,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={closeMenu}
                      className="block rounded-xl px-3 py-3 text-base font-medium text-[#0B1F4E] transition hover:bg-slate-50"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <motion.div
                className="mt-auto flex flex-col gap-3 pt-8"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.35 }}
              >
                <Link
                  href="#contact"
                  onClick={closeMenu}
                  className={`flex w-full items-center justify-center py-3 ${ctaGradient}`}
                >
                  Get Started
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}