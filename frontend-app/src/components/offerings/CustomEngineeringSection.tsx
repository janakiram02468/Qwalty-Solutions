import { CUSTOM_ENGINEERING } from "@/constants/ourOfferings";
import { SectionHeader } from "./SectionHeader";

const ENGINEERING_ICONS: Record<string, string> = {
  jigs: "📐",
  fixtures: "🔩",
  fabrication: "🏭",
  moulds: "🧱",
  dies: "⚙️",
};

export function CustomEngineeringSection() {
  return (
    <section className="mx-auto w-full max-w-7xl">
      <SectionHeader
        eyebrow={CUSTOM_ENGINEERING.eyebrow}
        title={CUSTOM_ENGINEERING.title}
        centered
      />

      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {CUSTOM_ENGINEERING.items.map((item) => (
          <li
            key={item.id}
            className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 lg:last:col-span-1"
          >
            <span className="text-2xl" aria-hidden="true">
              {ENGINEERING_ICONS[item.id] ?? "🔧"}
            </span>
            <h3 className="mt-4 text-base font-bold text-zinc-900 dark:text-zinc-50">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {item.description}
            </p>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-center text-sm font-semibold text-zinc-600 dark:text-zinc-400">
        🔧 {CUSTOM_ENGINEERING.footerTagline}
      </p>
    </section>
  );
}
