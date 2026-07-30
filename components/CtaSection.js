"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const PHONE_DISPLAY = "+44 7466908663";
const PHONE_TEL = "+447466908663";
const WHATSAPP_HREF = "https://wa.me/447466908663";
const EMAIL = "digitaldrifters12@gmail.com";
const MAILTO = `mailto:${EMAIL}`;

const NAVY = "text-[#0B1D3A]";
const RED = "#E10E1D";

const BG_SRC =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80";
const FIGURE_SRC =
  "/cta.png";

function IconSpark({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2l1.2 5.4L18 9l-4.8 1.6L12 16l-1.2-5.4L6 9l4.8-1.6L12 2zm0 18l1.2-2.2 2.2-1.2-2.2-1.2L12 13l-1.2 2.2-2.2 1.2 2.2 1.2L12 20z" />
    </svg>
  );
}

function IconPhone({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function IconMail({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <path d="M22 6l-10 7L2 6" />
    </svg>
  );
}

function IconWhatsApp({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.883 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export function CtaSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="relative isolate overflow-hidden bg-white py-16 text-slate-900 sm:py-20 lg:py-0"
      aria-labelledby="cta-heading"
    >
      <div className="pointer-events-none absolute inset-0">
        <Image
          src={BG_SRC}
          alt=""
          fill
          className="object-cover object-center opacity-10 grayscale"
          sizes="100vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-white/60" aria-hidden />
        <div
          className="absolute inset-0 bg-linear-to-r from-white via-white/60 to-white/70"
          aria-hidden
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[min(100%,1600px)] px-5 sm:px-8 lg:px-10 xl:px-14">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-12">
          {/* Figure */}
          <motion.div
            className="relative mx-auto hidden h-[min(52vw,320px)] max-w-[280px] sm:block lg:col-span-4 lg:mx-0 lg:h-[420px] lg:max-w-none"
            initial={reduceMotion ? false : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative h-full w-full [mask-image:linear-gradient(to_top,black_65%,transparent)] lg:[mask-image:linear-gradient(to_right,black_85%,transparent)]">
              <Image
                src={FIGURE_SRC}
                alt="Digital Drifters — ready to help with your project"
                fill
                className="object-contain object-bottom scale-[1.08] lg:object-right-bottom"
                sizes="(max-width: 1024px) 280px, 33vw"
              />
            </div>
          </motion.div>

          {/* Center copy + buttons */}
          <motion.div
            className="text-center lg:col-span-4 lg:px-2"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.55,
              delay: reduceMotion ? 0 : 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.28em] text-orange-600 sm:text-[11px]">
              <IconSpark className="h-3.5 w-3.5 text-red-600" />
              Join us now
            </p>
            <h2
              id="cta-heading"
              className={`mt-5 text-3xl font-black leading-[1.08] tracking-tight ${NAVY} sm:text-4xl lg:text-[2.35rem] xl:text-4xl`}
            >
              Have a project?
              <br />
              Hire us now!
            </h2>
            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-center">
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: RED }}
                className="inline-flex items-center justify-center rounded-xl px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-[0_10px_28px_-8px_rgba(225,14,29,0.55)] transition hover:brightness-110 sm:min-w-[11rem]"
              >
                Hire now
              </a>
              <Link
                href="#about"
                className={`inline-flex items-center justify-center rounded-xl border-2 border-[#0B1D3A]/80 bg-transparent px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] ${NAVY} transition hover:bg-[#0B1D3A]/5 sm:min-w-[11rem]`}
              >
                Learn more
              </Link>
            </div>
          </motion.div>

          {/* Contact cards */}
          <motion.div
            className="mx-auto flex w-full max-w-md flex-col gap-4 lg:col-span-4 lg:mx-0 lg:max-w-none"
            initial={reduceMotion ? false : { opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.55,
              delay: reduceMotion ? 0 : 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="rounded-2xl border border-dashed border-red-500/60 bg-white px-5 py-4 shadow-sm backdrop-blur-sm sm:px-6 sm:py-5">
              <div className="flex items-start gap-4">
                <span
                  style={{ backgroundColor: RED }}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white"
                >
                  <IconPhone className="h-5 w-5 text-white" />
                </span>
                <div className="min-w-0 flex-1 text-left">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 sm:text-[11px]">
                    Call us anytime
                  </p>
                  <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2">
                    <a
                      href={`tel:${PHONE_TEL}`}
                      className={`text-lg font-bold tracking-tight ${NAVY} transition hover:text-red-600 sm:text-xl`}
                    >
                      {PHONE_DISPLAY}
                    </a>
                    <a
                      href={WHATSAPP_HREF}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-red-500/50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-red-600 transition hover:bg-red-50"
                      aria-label="WhatsApp"
                    >
                      <IconWhatsApp className="h-3.5 w-3.5" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-dashed border-red-500/60 bg-white px-5 py-4 shadow-sm backdrop-blur-sm sm:px-6 sm:py-5">
              <div className="flex items-start gap-4">
                <span
                  style={{ backgroundColor: RED }}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white"
                >
                  <IconMail className="h-5 w-5 text-white" />
                </span>
                <div className="min-w-0 flex-1 text-left">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-black sm:text-[11px]">
                    Mail us now
                  </p>
                  <a
                    href={MAILTO}
                    className={`mt-2 block break-all text-base font-bold tracking-tight ${NAVY} transition hover:text-red-600 sm:text-lg`}
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}