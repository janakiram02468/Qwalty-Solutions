import { PROCUREMENT_TOOLS } from "@/constants/ourOfferings";
import { SectionHeader } from "./SectionHeader";

const TOOL_ICONS: Record<string, string> = {
  "reverse-auction": "🔨",
  "ai-smart": "🤖",
  "demand-forecasting": "📈",
  "data-analytics-tools": "📊",
};

export function ProcurementToolsSection() {
  return (
    <section className="mx-auto w-full max-w-7xl">
      <SectionHeader
        eyebrow={PROCUREMENT_TOOLS.eyebrow}
        title={PROCUREMENT_TOOLS.title}
        centered
      />

      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {PROCUREMENT_TOOLS.items.map((tool) => (
          <li
            key={tool.id}
            className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
          >
            <span className="text-2xl" aria-hidden="true">
              {TOOL_ICONS[tool.id] ?? "⚙️"}
            </span>
            <h3 className="mt-4 text-base font-bold text-zinc-900 dark:text-zinc-50">
              {tool.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {tool.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
