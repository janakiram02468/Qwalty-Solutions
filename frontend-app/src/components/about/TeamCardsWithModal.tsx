"use client";

import { useState } from "react";
import Link from "next/link";
import { ContentModal } from "@/components/ui/ContentModal";
import { ROUTES } from "@/constants/routes";

type Member = {
  id: string;
  role: string;
  name: string;
  title: string;
  desc: string;
  bio: string[];
};

const TEAM: Member[] = [
  {
    id: "rohit",
    role: "Advisor · Strategic",
    name: "Rohit Khanna",
    title: "Advisor – Strategic",
    desc: "Leads growth strategy and partnerships with a hands-on approach to supply chain scale-ups.",
    bio: [
      "Focus areas include category strategy, vendor governance, and building repeatable procurement playbooks.",
      "Prefers tight operating metrics: lead times, fill rates, and exception handling — not vanity dashboards.",
      "Works closely with leadership to align sourcing decisions with plant uptime and cash flow.",
    ],
  },
  {
    id: "meera",
    role: "Director · Business Ops",
    name: "Meera Jain",
    title: "Director – Business Operations",
    desc: "Owns execution across onboarding, vendor quality, and customer success—keeping delivery predictable.",
    bio: [
      "Runs day-to-day coordination between buyers, suppliers, and internal teams.",
      "Builds onboarding checklists and SLAs so expectations are clear from the first order.",
      "Escalation owner for fulfilment issues — prioritises transparency and fast resolutions.",
    ],
  },
  {
    id: "vikram",
    role: "Advisor · Operations",
    name: "Vikram Rao",
    title: "Advisor – Operations",
    desc: "Brings multi-industry operational leadership with a focus on efficiency, governance, and reliability.",
    bio: [
      "Deep experience across manufacturing adjacencies and third-party fulfilment constraints.",
      "Champions standard work: fewer one-off exceptions, more consistent outcomes.",
      "Advises on network design — when to consolidate suppliers vs. when to diversify risk.",
    ],
  },
];

function cardShellClass(active: boolean) {
  return [
    "w-full rounded-2xl border bg-white p-6 text-left shadow-sm transition dark:bg-zinc-900",
    active
      ? "border-[#409098] ring-2 ring-[#409098]/25 dark:border-[#409098]"
      : "border-zinc-200 hover:border-zinc-300 hover:shadow-md dark:border-zinc-800 dark:hover:border-zinc-700",
  ].join(" ");
}

export function TeamCardsWithModal() {
  const [openId, setOpenId] = useState<string | null>(null);
  const member = TEAM.find((m) => m.id === openId) ?? null;

  return (
    <>
      <ul className="grid gap-4 md:grid-cols-3">
        {TEAM.map((p) => (
          <li key={p.id}>
            <button
              type="button"
              onClick={() => setOpenId(p.id)}
              className={cardShellClass(openId === p.id)}
            >
              <p className="text-xs font-semibold tracking-wide text-zinc-500 dark:text-zinc-400">
                {p.role}
              </p>
              <div className="mt-4 flex items-center gap-4">
                <div
                  className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#409098]/10 text-[#409098]"
                  aria-hidden="true"
                >
                  👤
                </div>
                <div className="min-w-0 text-left">
                  <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                    {p.name}
                  </p>
                  <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                    {p.title}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {p.desc}
              </p>
              <span className="mt-4 inline-flex text-sm font-semibold text-[#409098]">
                View profile →
              </span>
            </button>
          </li>
        ))}
      </ul>

      <ContentModal
        open={!!member}
        onClose={() => setOpenId(null)}
        title={member?.name ?? ""}
        eyebrow={member?.title}
        icon="👤"
        footer={
          <Link
            href={ROUTES.contactUs}
            className="inline-flex text-sm font-semibold text-[#409098] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#409098] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-900"
            onClick={() => setOpenId(null)}
          >
            Contact us →
          </Link>
        }
      >
        {member ? (
          <>
            <p className="font-medium text-zinc-900 dark:text-zinc-50">
              {member.role}
            </p>
            <p className="mt-2 text-zinc-600 dark:text-zinc-400">{member.desc}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-[#409098]">
              {member.bio.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </>
        ) : null}
      </ContentModal>
    </>
  );
}
