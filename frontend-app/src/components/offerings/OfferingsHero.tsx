import { OFFERINGS_INTRO } from "@/constants/ourOfferings";

export function OfferingsHero() {
  return (
    <section className="-mx-4 border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 sm:-mx-6">
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div
          className="absolute inset-0 bg-[radial-gradient(900px_circle_at_15%_25%,rgba(64,144,152,0.25),transparent_55%),radial-gradient(800px_circle_at_80%_5%,rgba(20,184,166,0.18),transparent_55%)]"
          aria-hidden="true"
        />
        <div className="relative py-12 sm:py-14">
          <p className="text-sm font-semibold tracking-wide text-zinc-600 dark:text-zinc-300">
            Our Offerings
          </p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            {OFFERINGS_INTRO.eyebrow}
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
            {OFFERINGS_INTRO.description}
          </p>
        </div>
      </div>
    </section>
  );
}
