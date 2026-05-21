export function WorkplaceCultureSection() {
  return (
    <section className="mx-auto w-full max-w-7xl overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
      <div className="grid gap-0 lg:grid-cols-2">
        <div className="relative p-8 sm:p-10">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_0%_20%,rgba(64,144,152,0.20),transparent_55%)]"
            aria-hidden="true"
          />
          <div className="relative">
            <p className="text-sm font-semibold tracking-wide text-[#409098]">
              Careers
            </p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
              A workplace where you thrive
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
              We foster a culture of innovation, collaboration, and growth. Join
              a dynamic, inclusive team where creativity is valued, ideas are
              welcomed, and excellence drives our work.
            </p>
          </div>
        </div>

        <div className="border-t border-zinc-200 bg-zinc-50 p-8 dark:border-zinc-800 dark:bg-zinc-900 sm:p-10 lg:border-l lg:border-t-0">
          <ul className="space-y-4">
            {[
              "Innovation-first mindset across procurement and operations",
              "Collaborative teams with direct access to leadership",
              "Inclusive culture where every voice shapes outcomes",
              "Growth paths from entry-level to leadership roles",
            ].map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm text-zinc-700 dark:text-zinc-300"
              >
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#409098]/15 text-xs font-bold text-[#409098]"
                  aria-hidden
                >
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
