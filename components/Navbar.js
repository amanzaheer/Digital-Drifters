"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "Work" },
  { href: "#social-media", label: "Social" },
  { href: "#about", label: "About" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

/** Accent CTA on dark bar — teal → cyan → indigo */
const ctaGradient =
  "rounded-full bg-orange-600 text-sm font-semibold text-white shadow-[0_8px_28px_-6px_rgba(13,148,136,0.45)] transition hover:shadow-[0_12px_32px_-4px_rgba(79,70,229,0.4)] hover:brightness-[1.06]";

function NavUnderlineLink({ href, label, onNavigate }) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className="group relative px-2.5 py-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white sm:px-3 sm:text-[15px]"
    >
      <span className="relative z-10">{label}</span>
      <span
        className="pointer-events-none absolute inset-x-0 bottom-1 h-px origin-left scale-x-0 bg-linear-to-r from-teal-400 via-cyan-400 to-indigo-400 transition-transform duration-300 ease-out group-hover:scale-x-100"
        aria-hidden
      />
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
    ? "border-white/12 bg-black/50 shadow-[0_12px_48px_-8px_rgba(0,0,0,0.65)]"
    : "border-white/10 bg-zinc-950/92 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.55)]";

  const logoClass =
    "bg-linear-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent";

  const menuBtnClass = onHero
    ? "inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:border-white/30 hover:bg-white/15 md:hidden"
    : "inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-zinc-900/90 text-zinc-100 backdrop-blur-md transition hover:border-white/20 hover:bg-zinc-800 md:hidden";

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
          <Link
            href="#home"
            onClick={closeMenu}
            className="shrink-0 text-base font-semibold tracking-tight sm:text-lg"
          >
            <span className={logoClass}>Digital Drifters</span>
          </Link>

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
              className="fixed inset-0 z-60 bg-black/70 backdrop-blur-sm md:hidden"
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
              className="fixed inset-y-0 right-0 z-70 flex w-[min(100%,20rem)] flex-col border-l border-white/10 bg-zinc-950/98 p-6 pt-24 shadow-2xl shadow-black/50 backdrop-blur-2xl md:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
            >
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
                      className="block rounded-xl px-3 py-3 text-base font-medium text-zinc-200 transition hover:bg-white/5 hover:text-white"
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
