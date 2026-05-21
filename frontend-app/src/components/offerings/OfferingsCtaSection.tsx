import Link from "next/link";
import { ROUTES } from "@/constants/routes";

export function OfferingsCtaSection() {
  return (
    <section className="mx-auto w-full max-w-7xl overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <div className="relative p-8 text-center sm:p-12">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_50%_0%,rgba(64,144,152,0.20),transparent_55%)]"
          aria-hidden="true"
        />
        <div className="relative">
          <h2 className="text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
            Let&apos;s build something smarter
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-zinc-600 dark:text-zinc-400">
            Start a conversation with our team about procurement, tooling, or
            custom engineering for your operations.
          </p>
          <Link
            href={ROUTES.contactUs}
            className="mt-7 inline-flex items-center justify-center rounded-xl bg-[#409098] px-8 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#409098] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950"
          >
            Start a conversation →
          </Link>
        </div>
      </div>
    </section>
  );
}
