import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, SOCIAL_LINKS } from "@/constants/nav";

const QUICK_LINKS = [
  { label: "Support", href: "/support" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "FAQ", href: "/faq" },
  { label: "Brochure", href: "/brochure" },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950 text-zinc-200">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white">
              About
            </h3>
            <p className="mt-4 max-w-sm text-sm leading-6 text-zinc-400">
              We keep industries running with expert MRO services—from routine
              maintenance to critical repairs. Fast, reliable, and built to
              minimise downtime across every sector we serve.
            </p>

            <a
              href={SOCIAL_LINKS.linkedin.href}
              aria-label={SOCIAL_LINKS.linkedin.label}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-md p-2 text-zinc-200 transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#409098] focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
            >
              <span className="inline-flex h-8 w-9 items-center justify-center overflow-hidden rounded-md">
                <Image
                  src="/linkedin.png"
                  alt=""
                  width={48}
                  height={48}
                  className="h-10 w-11 shrink-0 scale-[1.15]"
                />
              </span>
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {[{ label: "Home", href: "/" }, ...NAV_LINKS].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-zinc-400 transition hover:text-[#409098] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#409098] focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {QUICK_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-zinc-400 transition hover:text-[#409098] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#409098] focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white">
              Contact
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-zinc-400">
              <li className="flex gap-3">
                <span className="mt-0.5 text-zinc-500" aria-hidden="true">
                  ☎
                </span>
                <a
                  href="tel:+919030193051"
                  className="transition hover:text-[#409098]"
                >
                  +91-9030193051
                </a>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 text-zinc-500" aria-hidden="true">
                  ✉
                </span>
                <a
                  href="mailto:info@qwaltysolutions.org"
                  className="transition hover:text-[#409098]"
                >
                  info@qwaltysolutions.org
                </a>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 text-zinc-500" aria-hidden="true">
                  📍
                </span>
                <span>
                  Corporate: G-3, D-53 VDS Tower, sector 2, Noida - 201301
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 text-zinc-500" aria-hidden="true">
                  📍
                </span>
                <span>Warehouse: B-1553, Shastri Nagar, New Delhi-110052</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-center px-4 py-6 text-xs text-zinc-500 sm:px-6">
          Copyright © {new Date().getFullYear()} All Right Reserved{" "}
          <span className="ml-1 font-semibold text-zinc-300">
            Qwalty Solutions
          </span>
        </div>
      </div>
    </footer>
  );
}

