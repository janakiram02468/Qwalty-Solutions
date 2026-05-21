import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import { WHY_JOIN_US } from "@/constants/careers";

export function WhyJoinUsSection() {
  const featured = WHY_JOIN_US.find((item) => item.featured);
  const rest = WHY_JOIN_US.filter((item) => !item.featured);

  return (
    <section className="mx-auto w-full max-w-7xl">
      <p className="text-sm font-semibold tracking-wide text-zinc-600 dark:text-zinc-300">
        Why Join Us?
      </p>
      <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
        Build your career where it matters
      </h2>

      <div className="mt-7 border-t border-zinc-200 pt-7 dark:border-zinc-800">
        {featured && (
          <article className="rounded-2xl border-2 border-[#409098]/40 bg-gradient-to-br from-[#409098]/10 via-white to-white p-6 shadow-sm dark:from-[#409098]/15 dark:via-zinc-900 dark:to-zinc-900 sm:p-8">
            <span className="inline-block rounded-full bg-[#409098] px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
              {featured.badge}
            </span>
            <h3 className="mt-4 text-xl font-bold text-zinc-900 dark:text-zinc-50">
              {featured.title}
            </h3>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              {featured.description}
            </p>
          </article>
        )}

        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((item) => (
            <li
              key={item.id}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-[#409098]/30 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
            >
              <span className="text-xs font-bold uppercase tracking-wide text-[#409098]">
                {item.badge}
              </span>
              <h3 className="mt-3 text-base font-semibold text-zinc-900 dark:text-zinc-50">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {item.description}
              </p>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <Link
            href={ROUTES.aboutUs}
            className="inline-flex text-sm font-semibold text-[#409098] transition hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#409098] focus-visible:ring-offset-2"
          >
            Read about us →
          </Link>
        </div>
      </div>
    </section>
  );
}
