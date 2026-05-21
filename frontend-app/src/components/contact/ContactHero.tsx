export function ContactHero() {
  return (
    <section className="-mx-4 border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 sm:-mx-6">
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div
          className="absolute inset-0 bg-[radial-gradient(900px_circle_at_15%_25%,rgba(64,144,152,0.25),transparent_55%),radial-gradient(800px_circle_at_80%_5%,rgba(20,184,166,0.18),transparent_55%)]"
          aria-hidden="true"
        />
        <div className="relative py-12 sm:py-16">
          <p className="text-sm font-semibold tracking-wide text-zinc-600 dark:text-zinc-300">
            Contact Us
          </p>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl lg:text-5xl">
            Let&apos;s talk —{" "}
            <span className="text-[#409098]">Qwalty Solutions</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-700 dark:text-zinc-300 sm:text-lg">
            Need industrial parts, maintenance support, or a custom quote? Our
            MRO experts are ready. Reach out — we respond within 24 hours.
          </p>
          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#409098]/30 bg-[#409098]/10 px-4 py-2 text-sm font-semibold text-[#2d6a70] dark:text-[#7ec8cf]">
            <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#409098] opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#409098]" />
            </span>
            Team online — ready to help
          </p>
        </div>
      </div>
    </section>
  );
}
