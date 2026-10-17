"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { CATEGORIES, SERVICES } from "@/lib/services";
import { ServiceIcon } from "@/components/ServiceIcon";

const SERVICE_GROUPS = CATEGORIES.filter((c) => c.id !== "all").map((c) => ({
  ...c,
  items: SERVICES.filter((s) => s.category === c.id),
}));

const navItems = [
  { href: "/#seo", label: "SEO" },
  { href: "/#work", label: "Work" },
  { href: "/#marketplace", label: "eCommerce" },
  { href: "/#ai", label: "AI" },
  { href: "/#about", label: "About" },
  { href: "/#faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
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

function Chevron({ open }) {
  return (
    <svg
      className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

/** Desktop mega menu listing every service, grouped by category. */
function ServicesMenu({ onNavigate }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);
  const closeTimer = useRef(null);

  const show = () => {
    clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const hide = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 140);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onClick = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  useEffect(() => () => clearTimeout(closeTimer.current), []);

  const navigate = () => {
    setOpen(false);
    onNavigate?.();
  };

  return (
    <div ref={wrapRef} onMouseEnter={show} onMouseLeave={hide}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls="services-menu"
        className={`group relative inline-flex items-center gap-1 px-2.5 py-2 text-sm font-medium transition-colors sm:px-3 sm:text-[15px] ${
          open ? "text-[#0B1F4E]" : "text-[#0B1F4E]/80 hover:text-[#0B1F4E]"
        }`}
      >
        Services
        <Chevron open={open} />
        <span
          className={`pointer-events-none absolute inset-x-0 bottom-1 h-px origin-left bg-red-600 transition-transform duration-300 ease-out ${
            open ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
          }`}
          aria-hidden
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id="services-menu"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 top-full z-50 mx-auto w-[min(calc(100vw-2rem),62rem)] pt-3"
          >
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_30px_80px_-20px_rgba(11,29,58,0.35)]">
              <div className="grid gap-4 p-5 md:grid-cols-3 lg:gap-6 lg:p-7">
                {SERVICE_GROUPS.map((group) => (
                  <div key={group.id}>
                    <p className="mb-3 px-3 text-[11px] font-bold uppercase tracking-[0.2em] text-[#E10E1D]">
                      {group.label}
                    </p>
                    <ul className="space-y-1">
                      {group.items.map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/services/${s.slug}`}
                            onClick={navigate}
                            className="group/item flex gap-3 rounded-2xl p-3 transition hover:bg-[#F7F8FB]"
                          >
                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0B1D3A]/6 text-[#0B1D3A] transition group-hover/item:bg-[#E10E1D] group-hover/item:text-white">
                              <ServiceIcon name={s.icon} className="h-5 w-5" />
                            </span>
                            <span className="min-w-0">
                              <span className="block text-sm font-bold text-[#0B1D3A]">{s.cardTitle}</span>
                              <span className="mt-0.5 line-clamp-2 block text-xs leading-relaxed text-slate-500">
                                {s.tagline}
                              </span>
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-3 border-t border-slate-100 bg-[#F7F8FB] px-6 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-7">
                <p className="text-sm text-slate-600">
                  Not sure which service fits?{" "}
                  <span className="font-semibold text-[#0B1D3A]">Talk to our team.</span>
                </p>
                <div className="flex items-center gap-4">
                  <Link
                    href="/services"
                    onClick={navigate}
                    className="text-sm font-bold text-[#0B1D3A] transition hover:text-[#E10E1D]"
                  >
                    View all services →
                  </Link>
                  <Link
                    href="/#contact"
                    onClick={navigate}
                    className="rounded-full bg-[#E10E1D] px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-white transition hover:brightness-110"
                  >
                    Book a consultation
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/** Mobile drawer accordion with every service. */
function MobileServices({ onNavigate }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-services"
        className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-base font-medium text-[#0B1F4E] transition hover:bg-slate-50"
      >
        Services
        <Chevron open={open} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="mobile-services"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="space-y-4 pb-3 pl-3 pt-1">
              {SERVICE_GROUPS.map((group) => (
                <div key={group.id}>
                  <p className="px-3 pb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#E10E1D]">
                    {group.label}
                  </p>
                  {group.items.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      onClick={onNavigate}
                      className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-[#0B1F4E] transition hover:bg-slate-50"
                    >
                      <ServiceIcon name={s.icon} className="h-4 w-4 shrink-0 text-[#0B1F4E]/60" />
                      {s.cardTitle}
                    </Link>
                  ))}
                </div>
              ))}
              <Link href="/services" onClick={onNavigate} className="block px-3 text-sm font-bold text-[#E10E1D]">
                View all services →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function BrandLogo({ onNavigate, compact = false }) {
  return (
    <Link
      href="/"
      onClick={onNavigate}
      className="group relative flex shrink-0 items-center gap-2.5 sm:gap-3"
      aria-label="Digital Drifters — home"
    >
      <span
        className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-xl shadow-[0_4px_14px_-4px_rgba(11,29,58,0.45)] transition duration-300 group-hover:shadow-[0_0_22px_-4px_rgba(198,125,77,0.6)] group-focus-visible:ring-2 group-focus-visible:ring-[#0B1F4E]/40 ${compact ? "h-10 w-10" : "h-10 w-10 sm:h-11 sm:w-11"
          }`}
      >
        <Image
          src="/logo-mark.png"
          alt=""
          width={88}
          height={88}
          className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.06]"
          priority
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
          className={`pointer-events-auto relative mx-auto flex w-full max-w-[min(100%,1600px)] items-center gap-4 rounded-full border px-4 py-2.5 backdrop-blur-2xl sm:gap-5 sm:px-6 sm:py-3 lg:px-8 ${shellClass}`}
        >
          <BrandLogo onNavigate={closeMenu} />

          <nav
            className="hidden flex-1 items-center justify-center gap-1 md:flex lg:gap-2"
            aria-label="Primary"
          >
            <ServicesMenu onNavigate={closeMenu} />
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
              href="/#contact"
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
              className="fixed inset-y-0 right-0 z-70 flex w-[min(100%,20rem)] flex-col overflow-y-auto border-l border-slate-200 bg-white p-6 pt-6 shadow-2xl shadow-slate-900/20 backdrop-blur-2xl md:hidden"
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
                <MobileServices onNavigate={closeMenu} />
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
                  href="/#contact"
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