import Link from "next/link";
import Image from "next/image";
import { ROUTES } from "@/constants/routes";
import { NAV_LINKS, SOCIAL_LINKS } from "@/constants/nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link
          href={ROUTES.home}
          className="flex shrink-0 items-center"
        >
          <Image
            src="/qwalty-logo.png"
            alt="Qwalty Solutions"
            width={220}
            height={48}
            className="h-14 max-h-full w-auto object-contain"
            priority
          />
        </Link>

        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-5 text-sm font-medium text-zinc-700 dark:text-zinc-200 md:flex">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-2 py-1 transition duration-150 ease-out hover:bg-[#409098]/10 hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#409098] focus-visible:ring-offset-2 dark:hover:bg-[#409098]/20 dark:hover:text-white dark:focus-visible:ring-offset-zinc-950"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            href={SOCIAL_LINKS.linkedin.href}
            aria-label={SOCIAL_LINKS.linkedin.label}
            target="_blank"
            rel="noreferrer"
            className="ml-2 inline-flex items-center justify-center rounded-md p-2 transition hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#409098] focus-visible:ring-offset-2 dark:hover:bg-zinc-900 dark:focus-visible:ring-offset-zinc-950"
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

          <details className="relative md:hidden">
            <summary className="list-none">
              <span className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-zinc-200 bg-white text-zinc-700 hover:bg-zinc-50 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200 dark:hover:bg-zinc-900">
                <svg
                  viewBox="0 0 24 24"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 6h16" />
                  <path d="M4 12h16" />
                  <path d="M4 18h16" />
                </svg>
              </span>
            </summary>

            <div className="absolute right-0 top-12 z-50 w-56 overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-lg dark:border-zinc-800 dark:bg-zinc-950">
              <div className="flex flex-col p-2 text-sm">
                {NAV_LINKS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-lg px-3 py-2 text-zinc-700 transition duration-150 ease-out hover:scale-[1.02] hover:bg-[#409098]/10 hover:text-zinc-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#409098] focus-visible:ring-offset-2 dark:text-zinc-200 dark:hover:bg-[#409098]/20 dark:hover:text-white dark:focus-visible:ring-offset-zinc-950"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
