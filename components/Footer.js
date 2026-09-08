import Link from "next/link";

const PHONE_DISPLAY = "+44  7466908663 ";
const PHONE_TEL = "+447466908663";
const EMAIL = "digitaldrifters12@gmail.com";

const LOCATIONS = [
  ["London (HQ)", "Manchester", "Birmingham", "Leeds", "Bristol"],
  ["Edinburgh", "Cardiff", "Glasgow", "Liverpool", "Dublin"],
  ["Dallas (TX)", " Los Angeles (CA)", "New York", "Chicago (IL)", "Houston (TX)"],
];

const LEGAL_LINKS = [
  { label: "Terms", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "Accessibility Statement", href: "#" },
  { label: "Sitemap", href: "#" },
  { label: "Privacy Settings", href: "#" },
];

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    Icon: IconFacebook,
  },
  {
    label: "X",
    href: "https://x.com",
    Icon: IconX,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    Icon: IconLinkedIn,
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    Icon: IconYouTube,
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    Icon: IconInstagram,
  },
  {
    label: "RSS feed",
    href: "#",
    Icon: IconRss,
  },
];

function IconFacebook({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function IconX({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function IconLinkedIn({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconYouTube({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function IconInstagram({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function IconRss({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path d="M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248-1.796 0-3.252-1.454-3.252-3.248 0-1.794 1.456-3.248 3.252-3.248 1.795.001 3.251 1.454 3.251 3.248zm-6.503-12.572v4.811c6.05.062 10.998 4.966 11.058 11.011h4.817c-.062-8.71-7.118-15.758-15.875-15.822zm0-3.368c10.58.046 19.152 8.594 19.183 19.188h4.817c-.03-13.231-10.755-23.954-24-24v4.812z" />
    </svg>
  );
}

function IconSearch({ className }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-3.5-3.5" />
    </svg>
  );
}

function FlagUk({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 16" aria-hidden>
      <rect width="24" height="16" fill="#012169" />
      <path d="M0 0l24 16M24 0L0 16" stroke="#fff" strokeWidth="2.5" />
      <path d="M0 0l24 16M24 0L0 16" stroke="#C8102E" strokeWidth="1.5" />
      <path d="M12 0v16M0 8h24" stroke="#fff" strokeWidth="4" />
      <path d="M12 0v16M0 8h24" stroke="#C8102E" strokeWidth="2.5" />
    </svg>
  );
}

function DotPattern() {
  return (
    <div
      className="pointer-events-none absolute bottom-0 right-0 hidden h-48 w-64 overflow-hidden opacity-30 sm:block lg:h-56 lg:w-80"
      aria-hidden
    >
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="footer-dots" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.25" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#footer-dots)" />
      </svg>
    </div>
  );
}

function ContactRow({ label, children }) {
  return (
    <div className="flex gap-3 text-sm leading-relaxed text-white/90 sm:text-[15px]">
      <span className="w-14 shrink-0 font-medium text-white/70">{label}</span>
      <div className="min-w-0">{children}</div>
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="relative scroll-mt-4 overflow-hidden bg-[#0B1D3A] text-white"
      aria-label="Site footer"
    >
      <DotPattern />

      <div className="relative mx-auto max-w-[min(100%,1600px)] px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-12">
          <div className="lg:col-span-4">
            <h2 className="mb-5 text-lg font-bold tracking-tight sm:text-xl">
              Office Headquarters
            </h2>
            <div className="space-y-4">
              <div>
                <p className="text-base font-semibold text-white">Digital Drifters</p>
                <p className="mt-1 text-sm leading-relaxed text-white/85 sm:text-[15px]">
                  Remote-first studio
                  <br />
                  United Kingdom
                </p>
              </div>

              <div className="space-y-2.5 pt-1">
                <ContactRow label="Phone:">
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="inline-flex items-center gap-2 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                  >
                    <FlagUk className="h-3.5 w-5 shrink-0 rounded-[2px] shadow-sm" />
                    <span>{PHONE_DISPLAY}</span>
                  </a>
                </ContactRow>

                <ContactRow label="Email:">
                  <a
                    href={`mailto:${EMAIL}`}
                    className="break-all transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                  >
                    {EMAIL}
                  </a>
                </ContactRow>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <h2 className="mb-5 text-lg font-bold tracking-tight sm:text-xl">Locations</h2>
            <div className="grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-3">
              {LOCATIONS.map((column, columnIndex) => (
                <ul key={columnIndex} className="space-y-2">
                  {column.map((city) => (
                    <li
                      key={city}
                      className="text-sm text-white/85 transition hover:text-white sm:text-[15px]"
                    >
                      {city}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h2 className="mb-5 text-lg font-bold tracking-tight sm:text-xl">Follow Us</h2>
            <div className="flex flex-wrap items-center gap-3 sm:gap-3.5">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-white/90 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                  aria-label={label}
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-[min(100%,1600px)] flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-6 lg:px-10">
          <p className="text-xs text-white/70 sm:text-sm">
            © {year} Digital Drifters. All rights reserved.
          </p>
          <nav aria-label="Legal links">
            <ul className="flex flex-wrap items-center gap-x-1 gap-y-2 text-xs text-white/75 sm:text-sm">
              {LEGAL_LINKS.map(({ label, href }, index) => (
                <li key={label} className="flex items-center">
                  {index > 0 && (
                    <span className="mx-2 text-white/30" aria-hidden>
                      |
                    </span>
                  )}
                  <Link
                    href={href}
                    className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <a
        href="#home"
        className="absolute bottom-6 right-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#E10E1D] text-white shadow-[0_8px_24px_-4px_rgba(225,14,29,0.55)] transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 sm:right-8 lg:right-10"
        aria-label="Back to top"
      >
        <IconSearch className="h-5 w-5" />
      </a>
    </footer>
  );
}
