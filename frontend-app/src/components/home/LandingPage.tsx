import Link from "next/link";
import { NAV_LINKS } from "@/constants/nav";
import Hero from "@/components/Hero";
import { SolutionCardsWithModal } from "@/components/home/SolutionCardsWithModal";
import { ProductCategoriesSection } from "@/components/home/ProductCategoriesSection";
import { TrustedPartnersSection } from "@/components/home/TrustedPartnersSection";
import { AboutUsSection } from "@/components/home/AboutUsSection";

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <header className="mb-7">
      {eyebrow ? (
        <p className="text-sm font-semibold tracking-wide text-[#409098]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}

function PillStat({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
      <span
        className="h-2 w-2 rounded-full bg-[#409098]"
        aria-hidden="true"
      />
      <span>{label}</span>
    </div>
  );
}

export function LandingPage() {
  return (
    <div className="space-y-16">
      <div className="-mx-4 sm:-mx-6">
        <Hero />

        <div className="bg-zinc-950">
          <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center gap-3 px-4 py-6 sm:px-6">
            <PillStat label="Quick Response" />
            <PillStat label="2000+ Products" />
            <PillStat label="Pan-India Delivery" />
          </div>
        </div>
      </div>

      <section className="-mx-4 bg-[#f8f9fa] px-4 py-14 sm:-mx-6 sm:px-6 sm:py-16">
        <div className="mx-auto w-full max-w-7xl">
          <header className="mx-auto mb-10 max-w-3xl text-center">
            <h2 className="text-2xl font-extrabold tracking-tight text-zinc-900 sm:text-3xl">
              Your Industrial MRO Supplier for End-To-End Solutions
            </h2>
            <p className="mt-3 text-base leading-relaxed text-zinc-600">
              As a leading{" "}
              <strong className="font-semibold text-zinc-800">
                industrial MRO supplier
              </strong>
              , we are a complete B2B procurement solution.
            </p>
          </header>

          <SolutionCardsWithModal />
          <ProductCategoriesSection />
        </div>
      </section>

      <TrustedPartnersSection />

      <AboutUsSection />

      <section className="mx-auto w-full max-w-7xl rounded-3xl border border-zinc-200 bg-white px-6 py-10 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:px-10">
        <SectionTitle
          eyebrow="Company"
          title="Explore pages"
          subtitle="Same structure as the reference site’s navigation."
        />

        <div className="flex flex-wrap gap-3">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-zinc-900"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

