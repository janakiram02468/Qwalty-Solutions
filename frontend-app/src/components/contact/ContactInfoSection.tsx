import { CONTACT } from "@/constants/contact";

const CONTACT_CARDS = [
  {
    icon: "🕻",
    title: "Phone",
    content: (
      <a
        href={CONTACT.phoneHref}
        className="font-semibold text-zinc-900 transition hover:text-[#409098] dark:text-zinc-50"
      >
        {CONTACT.phone}
      </a>
    ),
  },
  {
    icon: "✉️",
    title: "Email",
    content: (
      <a
        href={CONTACT.emailHref}
        className="font-semibold text-zinc-900 transition hover:text-[#409098] dark:text-zinc-50"
      >
        {CONTACT.email}
      </a>
    ),
  },
  {
    icon: "🏢",
    title: CONTACT.corporateOffice.label,
    content: (
      <address className="not-italic leading-relaxed text-zinc-700 dark:text-zinc-300">
        {CONTACT.corporateOffice.lines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </address>
    ),
  },
  {
    icon: "🏭",
    title: CONTACT.warehouse.label,
    content: (
      <address className="not-italic leading-relaxed text-zinc-700 dark:text-zinc-300">
        {CONTACT.warehouse.lines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </address>
    ),
  },
] as const;

export function ContactInfoSection() {
  const { businessHours } = CONTACT;

  return (
    <section className="mx-auto w-full max-w-7xl">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {CONTACT_CARDS.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm transition hover:border-[#409098]/40 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/50"
          >
            <div className="flex items-center gap-3">
              <span className="shrink-0 text-2xl leading-none" aria-hidden="true">
                {card.icon}
              </span>
              <h2 className="text-sm font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                {card.title}
              </h2>
            </div>
            <div className="mt-3 text-sm">{card.content}</div>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[#409098]">
              <span aria-hidden="true">🕐</span>
              Business Hours
            </p>
            <p className="mt-1 text-lg font-bold text-zinc-900 dark:text-zinc-50">
              We&apos;re here for you
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            <div>
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                {businessHours.weekdays}
              </p>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {businessHours.weekdaysTime}
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                {businessHours.sunday}
              </p>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {businessHours.sundayNote}
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">
                Response time
              </p>
              <p className="mt-1 text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                {businessHours.responseTime}
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">
                Quote delivery
              </p>
              <p className="mt-1 text-sm font-semibold text-zinc-900 dark:text-zinc-50">
                {businessHours.quoteDelivery}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
