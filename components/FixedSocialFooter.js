import React from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Rss,
  Phone,
  Printer,
  Mail,
  MapPin,
} from "lucide-react";

const locationGroups = [
  ["Des Plaines (HQ)", "Chicago", "Cleveland", "Ft. Wayne", "Los Angeles"],
  ["Milwaukee", "Nashville", "New York", "Washington D.C."],
  ["Brighton, England", "Sofia, Bulgaria", "Valencia, Spain", "Zurich, Switzerland"],
];

const socialLinks = [
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Twitter, label: "X", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: Rss, label: "RSS", href: "#" },
];

const legalLinks = [
  { label: "Terms", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "Accessibility Statement", href: "#" },
  { label: "Sitemap", href: "#" },
  { label: "Privacy Settings", href: "#" },
];

function DotGrid() {
  const cols = 6;
  const rows = 4;
  return (
    <div
      className="pointer-events-none absolute bottom-0 right-0 hidden select-none opacity-40 md:block"
      style={{ width: 180, height: 120 }}
      aria-hidden="true"
    >
      <svg width="100%" height="100%" viewBox="0 0 180 120">
        {Array.from({ length: rows }).map((_, r) =>
          Array.from({ length: cols }).map((_, c) => {
            const isAccent = r === 0 && c === 1;
            return (
              <circle
                key={`${r}-${c}`}
                cx={20 + c * 30}
                cy={20 + r * 30}
                r={isAccent ? 4 : 2.5}
                fill={isAccent ? "#E4572E" : "#3E6280"}
              />
            );
          })
        )}
      </svg>
    </div>
  );
}

function FooterLink({ href, children }) {
  return (
    <a
      href={href}
      className="group relative inline-block text-[15px] font-semibold text-white/90 transition-colors duration-200 hover:text-white"
    >
      {children}
      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#E4572E] transition-all duration-300 group-hover:w-full" />
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0B3556] text-white mt-34">
      <div className="relative mx-auto  my-auto max-w-7xl px-6 pb-10 pt-14 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.1fr_1.6fr_0.8fr]">
          {/* Office Headquarters */}
          <div>
            <h3 className="mb-5 text-xl font-bold tracking-tight">
              Office Headquarters
            </h3>
            <address className="not-italic text-[15px] leading-relaxed text-white/80">
              <div className="flex gap-2">
                <MapPin size={16} className="mt-1 shrink-0 text-[#E4572E]" />
                <span>
                  Americaneagle.com
                  <br />
                  2600 South River Road
                  <br />
                  Des Plaines, IL 60018
                </span>
              </div>
            </address>

            <div className="mt-6 space-y-3 text-[15px] text-white/80">
              <div className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 shrink-0 text-[#E4572E]" />
                <div>
                  <span className="mr-2 text-white/60">Phone:</span>
                  <a
                    href="tel:+18779326691"
                    className="transition-colors hover:text-white"
                  >
                    🇺🇸 +1 (877) 932-6691
                  </a>
                  <br />
                  <a
                    href="tel:+442081919000"
                    className="ml-[calc(1.25rem+0.5rem)] transition-colors hover:text-white"
                  >
                    🇬🇧 +44 (0) 20 8191-9000
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Printer size={16} className="shrink-0 text-[#E4572E]" />
                <span className="text-white/60">Fax:</span>
                <span>+1 (847) 699-4207</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-[#E4572E]" />
                <span className="text-white/60">Email:</span>
                <a
                  href="mailto:info@americaneagle.com"
                  className="transition-colors hover:text-white"
                >
                  info@americaneagle.com
                </a>
              </div>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h3 className="mb-5 text-xl font-bold tracking-tight">
              Locations
            </h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3 sm:grid-cols-3">
              {locationGroups.map((group, i) => (
                <ul key={i} className="space-y-3">
                  {group.map((loc) => (
                    <li key={loc}>
                      <FooterLink href="#">{loc}</FooterLink>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="mb-5 text-xl font-bold tracking-tight">
              Follow Us
            </h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/90 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#E4572E] hover:bg-[#E4572E] hover:text-white"
                >
                  <Icon size={17} strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-white/10" />

        {/* Bottom bar */}
        <div className="flex flex-col items-start justify-between gap-4 text-sm text-white/70 sm:flex-row sm:items-center">
          <p>© 2026 Americaneagle.com. All rights reserved.</p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="underline decoration-white/30 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <DotGrid />
      </div>
    </footer>
  );
}