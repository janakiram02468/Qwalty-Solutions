import Link from "next/link";
import { ROUTES } from "@/constants/routes";

const BRAND = "#409098";

const QUOTE = {
  text: "At Qwalty Solutions, we believe procurement should never be a bottleneck. Our goal is to give every business in India — big or small — access to the right industrial supplies, at the right time, without the complexity of traditional sourcing. We're building the infrastructure for smarter B2B procurement, one order at a time.",
  name: "Meera Jain",
  title: "Director Operations at Qwalty Solutions",
};

export function AboutUsSection() {
  return (
    <section
      className="-mx-4 bg-[#f8f9fa] px-4 py-14 sm:-mx-6 sm:px-6 sm:py-16"
      aria-labelledby="about-us-heading"
    >
      <div className="mx-auto w-full max-w-7xl">
        <header className="mx-auto max-w-3xl text-center">
          <span
            className="inline-block rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em]"
            style={{ backgroundColor: `${BRAND}1a`, color: BRAND }}
          >
            Know Who We Are
          </span>
          <h2
            id="about-us-heading"
            className="mt-4 text-2xl font-extrabold tracking-tight text-zinc-900 sm:text-3xl"
          >
            About us
          </h2>
          <p className="mt-4 text-lg font-medium leading-relaxed text-zinc-800 sm:text-xl">
            To simplify industrial procurement for Indian businesses — giving
            teams the tools they need to keep operations running without the
            hassle of traditional supply chains.
          </p>
          <div
            className="mx-auto mt-5 h-[3px] w-12 rounded-full"
            style={{ backgroundColor: BRAND }}
            aria-hidden
          />
        </header>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="text-base leading-relaxed text-zinc-600 sm:text-lg">
              <strong className="font-semibold text-zinc-900">
                Qwalty Solutions
              </strong>{" "}
              is an online procurement platform built for businesses that run on
              reliability. Based in Noida, we supply Maintenance, Repair, and
              Operations (MRO) products to industries, enterprises, and
              procurement teams across India — making industrial sourcing
              faster, simpler, and more cost-effective.
            </p>

            <Link
              href={ROUTES.aboutUs}
              className="mt-6 inline-flex text-sm font-semibold text-[#409098] transition hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#409098] focus-visible:ring-offset-2"
            >
              Learn more about us →
            </Link>
          </div>

          <blockquote className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 shadow-[0_8px_30px_rgba(15,23,42,0.08)] sm:p-10">
            <span
              className="pointer-events-none absolute -right-4 -top-6 select-none text-[120px] leading-none text-[#409098]/10"
              aria-hidden
            >
              ❝
            </span>
            <p className="relative text-base leading-relaxed text-zinc-700 sm:text-lg">
              {QUOTE.text}
            </p>
            <footer className="relative mt-8 border-t border-zinc-100 pt-6">
              <p className="text-base font-bold text-zinc-900">{QUOTE.name}</p>
              <p className="mt-1 text-sm text-zinc-500">{QUOTE.title}</p>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
