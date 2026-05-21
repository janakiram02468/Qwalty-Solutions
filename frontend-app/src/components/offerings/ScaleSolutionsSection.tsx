import { SCALE_SOLUTIONS } from "@/constants/ourOfferings";
import { SectionHeader } from "./SectionHeader";

const BRAND = "#409098";

export function ScaleSolutionsSection() {
  return (
    <section className="-mx-4 bg-[#f8f9fa] px-4 py-14 dark:bg-zinc-900/50 sm:-mx-6 sm:px-6 sm:py-16">
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeader
          eyebrow={SCALE_SOLUTIONS.eyebrow}
          title={SCALE_SOLUTIONS.title}
          subtitle={SCALE_SOLUTIONS.subtitle}
          centered
        />

        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {SCALE_SOLUTIONS.items.map((item) => (
            <li
              key={item.id}
              className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950"
            >
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
                {item.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {item.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div
                className="mt-5 h-[3px] w-10 rounded-full"
                style={{ backgroundColor: BRAND }}
                aria-hidden="true"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
