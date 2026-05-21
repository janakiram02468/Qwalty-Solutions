import { BUSINESS_MODELS } from "@/constants/ourOfferings";

const BRAND = "#409098";

export function BusinessModelsSection() {
  return (
    <section className="mx-auto w-full max-w-7xl">
      <ul className="grid gap-6 md:grid-cols-2">
        {BUSINESS_MODELS.map((model) => (
          <li
            key={model.id}
            className="rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 sm:p-8"
          >
            <span
              className="inline-flex rounded-full px-3.5 py-1 text-xs font-bold tracking-[0.14em] text-white"
              style={{ backgroundColor: BRAND }}
            >
              {model.badge}
            </span>
            <h3 className="mt-4 text-xl font-bold text-zinc-900 dark:text-zinc-50">
              {model.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {model.description}
            </p>
            <ul className="mt-5 space-y-2.5 border-t border-zinc-100 pt-5 dark:border-zinc-800">
              {model.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex gap-2.5 text-sm text-zinc-700 dark:text-zinc-300"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: BRAND }}
                    aria-hidden="true"
                  />
                  {bullet}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
