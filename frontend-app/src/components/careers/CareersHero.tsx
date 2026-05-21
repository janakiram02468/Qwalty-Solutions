import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import { CAREERS_HERO_TAGS } from "@/constants/careers";

export function CareersHero() {
  return (
    <section className="-mx-4 border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 sm:-mx-6">
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div
          className="absolute inset-0 bg-[radial-gradient(900px_circle_at_15%_25%,rgba(64,144,152,0.25),transparent_55%),radial-gradient(800px_circle_at_80%_5%,rgba(20,184,166,0.18),transparent_55%)]"
          aria-hidden="true"
        />
        <div className="relative py-12 sm:py-16">
          <p className="text-sm font-semibold tracking-wide text-zinc-600 dark:text-zinc-300">
            Careers
          </p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl lg:text-5xl">
            Looking for procurement jobs in{" "}
            <span className="text-[#409098]">Noida?</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-700 dark:text-zinc-300 sm:text-lg">
            Engineer your future. Lead. Innovate. Transform industry.
          </p>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            Qwalty Solutions is a fast-growing B2B MRO platform hiring across
            procurement, logistics, and finance.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {CAREERS_HERO_TAGS.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-sm font-semibold text-zinc-800 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#open-roles"
              className="inline-flex items-center justify-center rounded-xl bg-[#409098] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#409098] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950"
            >
              Join Our Team
            </a>
            <Link
              href={ROUTES.aboutUs}
              className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#409098] focus-visible:ring-offset-2 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-zinc-900 dark:focus-visible:ring-offset-zinc-950"
            >
              Read about us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
