import Head from "next/head";
import Link from "next/link";
import { ROUTES } from "@/constants/routes";
import { TeamCardsWithModal } from "@/components/about/TeamCardsWithModal";

export default function AboutUsPage() {
  return (
    <>
      <Head>
        <title>About Us | Qwalty</title>
      </Head>

      <div className="space-y-20">
        <section className="-mx-4 border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 sm:-mx-6">
          <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
            <div
              className="absolute inset-0 bg-[radial-gradient(900px_circle_at_15%_25%,rgba(64,144,152,0.25),transparent_55%),radial-gradient(800px_circle_at_80%_5%,rgba(20,184,166,0.18),transparent_55%)]"
              aria-hidden="true"
            />
            <div className="relative py-12 sm:py-14">
              <p className="text-sm font-semibold tracking-wide text-zinc-600 dark:text-zinc-300">
                About Us
              </p>
              <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
                Who We Are
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
                We’re a modern B2B procurement partner helping businesses source
                MRO products with speed, clarity, and reliability. Our focus is
                simple: reduce downtime, remove sourcing friction, and make
                buying industrial essentials feel effortless.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href={ROUTES.contactUs}
                  className="inline-flex items-center justify-center rounded-xl bg-[#409098] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#409098] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950"
                >
                  Contact us today →
                </Link>
                <Link
                  href={ROUTES.ourSolutions}
                  className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#409098] focus-visible:ring-offset-2 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-zinc-900 dark:focus-visible:ring-offset-zinc-950"
                >
                  Explore our solutions
                </Link>
              </div>

              <div className="mt-8 flex flex-wrap gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                {[
                  "GST billing",
                  "Verified suppliers",
                  "Pan-India delivery",
                  "2000+ products",
                ].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 font-semibold shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl">
          <p className="text-sm font-semibold tracking-wide text-zinc-600 dark:text-zinc-300">
            The People Behind Us
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
            Meet Our Team
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            A compact team with deep operational experience and a bias for
            execution—focused on building dependable procurement workflows.
          </p>

          <div className="mt-7 border-t border-zinc-200 pt-7 dark:border-zinc-800">
            <TeamCardsWithModal />
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl">
          <p className="text-sm font-semibold tracking-wide text-zinc-600 dark:text-zinc-300">
            What Drives Us
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
            Core Values
          </h2>

          <div className="mt-7 border-t border-zinc-200 pt-7 dark:border-zinc-800">
            <ul className="grid gap-4 md:grid-cols-4">
            {[
              {
                icon: "🎯",
                title: "Reliability",
                desc: "Consistent quality and predictable delivery—so operations keep moving.",
              },
              {
                icon: "💡",
                title: "Innovation",
                desc: "Smarter sourcing tools that remove manual steps and reduce cost.",
              },
              {
                icon: "🤝",
                title: "Partnership",
                desc: "We act like an extension of your procurement team, not a vendor.",
              },
              {
                icon: "⚡",
                title: "Efficiency",
                desc: "Fast turnaround with clear SLAs and simple workflows.",
              },
            ].map((v) => (
              <li
                key={v.title}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="text-2xl" aria-hidden="true">
                  {v.icon}
                </div>
                <p className="mt-3 text-base font-semibold text-zinc-900 dark:text-zinc-50">
                  {v.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {v.desc}
                </p>
              </li>
            ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
          <div className="grid gap-0 lg:grid-cols-5">
            <div className="relative p-8 sm:p-10 lg:col-span-3">
              <div
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_0%_20%,rgba(64,144,152,0.20),transparent_55%)]"
                aria-hidden="true"
              />
              <div className="relative">
                <p className="text-sm font-semibold tracking-wide text-[#409098]">
                  Our Mission
                </p>
                <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
                  Built to make procurement simple
                </h2>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
                  We connect businesses with reliable supply partners and help
                  teams buy what they need—faster, with better visibility and
                  fewer follow-ups. Whether you’re running a plant, a lab, or an
                  office, we keep purchasing straightforward.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  {[
                    "Manufacturing plants",
                    "Construction companies",
                    "Laboratories",
                    "Corporate offices",
                    "Pan-India delivery",
                  ].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-sm font-semibold text-zinc-800 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900 lg:col-span-2 lg:border-l lg:border-t-0">
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                Get started
              </p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                Partner with a team that values speed, transparency, and
                consistent delivery.
              </p>
              <div className="mt-6 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <p className="font-semibold text-zinc-900 dark:text-zinc-50">
                  No hidden fees
                </p>
                <p>Monday to Saturday · 10 AM – 7 PM IST</p>
              </div>
              <Link
                href={ROUTES.contactUs}
                className="mt-7 inline-flex w-full items-center justify-center rounded-xl bg-[#409098] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#409098] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950"
              >
                Contact us today →
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

