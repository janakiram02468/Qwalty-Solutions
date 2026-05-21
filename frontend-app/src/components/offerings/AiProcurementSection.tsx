import { AI_PROCUREMENT } from "@/constants/ourOfferings";
import { SectionHeader } from "./SectionHeader";

export function AiProcurementSection() {
  return (
    <section className="-mx-4 bg-zinc-950 px-4 py-14 text-white sm:-mx-6 sm:px-6 sm:py-16">
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeader
          eyebrow={AI_PROCUREMENT.eyebrow}
          title={AI_PROCUREMENT.title}
          centered
          variant="dark"
        />

        <ul className="mt-10 grid gap-6 lg:grid-cols-3">
          {AI_PROCUREMENT.items.map((item) => (
            <li
              key={item.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur transition hover:border-[#409098]/40 hover:bg-white/10"
            >
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                {item.description}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center text-sm font-semibold tracking-wide text-[#7ec8cf]">
          ⚡ {AI_PROCUREMENT.footerTagline}
        </p>
      </div>
    </section>
  );
}
