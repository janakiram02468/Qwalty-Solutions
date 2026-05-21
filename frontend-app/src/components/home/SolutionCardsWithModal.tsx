"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ContentModal } from "@/components/ui/ContentModal";
import cardImage from "@/assets/B2B_giftcards-01.png";

type SolutionKey = "platform" | "tools" | "vendors";

const BRAND = "#409098";
const BRAND_LIGHT = "rgba(64, 144, 152, 0.12)";

const SOLUTIONS: Record<
  SolutionKey,
  {
    badge: string;
    cardTitle: string;
    cardDesc: string;
    icon: ReactNode;
    modalTitle: string;
    modalEyebrow: string;
    modalIcon: string;
    modalDesc: string;
    bullets: string[];
    href: string;
    hrefLabel: string;
  }
> = {
  platform: {
    badge: "PLATFORM",
    cardTitle: "Digital Platform & Streamline Procurement",
    cardDesc:
      "A fully digital experience to manage all your procurement workflows in one place — fast and hassle-free.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <rect x="2" y="4" width="20" height="14" rx="2" />
        <path d="M8 20h8M12 18v2" />
      </svg>
    ),
    modalTitle: "Digital Procurement Platform",
    modalEyebrow: "Digital Platform",
    modalIcon: "📦",
    modalDesc:
      "A centralized platform that transforms how industrial buyers manage MRO procurement — with complete visibility across your supply chain.",
    bullets: [
      "End-to-end digitization – from indent to invoice",
      "Real-time inventory tracking and automated reordering",
      "Custom approval workflows tailored to your organization",
      "Cost control dashboards with spend analytics",
    ],
    href: "/our-solutions",
    hrefLabel: "Our Solutions",
  },
  tools: {
    badge: "TOOLS",
    cardTitle: "Tools — AI, Reverse Auction, ERP",
    cardDesc:
      "Leverage AI-powered sourcing, live reverse auctions, and seamless ERP integrations to cut costs and save time.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2" />
      </svg>
    ),
    modalTitle: "AI-Powered Sourcing, Reverse Auction & ERP",
    modalEyebrow: "Advanced Tools",
    modalIcon: "⚙️",
    modalDesc:
      "Cutting-edge tools that drive down costs — AI-driven sourcing and competitive bidding among pre-qualified vendors.",
    bullets: [
      "AI-based demand forecasting – reduce stockouts and excess inventory",
      "Live reverse auctions – achieve 15–25% cost savings on high-value items",
      "Seamless ERP connectors (Odoo, SAP) – no manual data entry",
      "Automated PO generation and invoice matching",
    ],
    href: "/our-offerings",
    hrefLabel: "Our Offerings",
  },
  vendors: {
    badge: "VENDORS",
    cardTitle: "Pre-qualified Vendors Across All Categories",
    cardDesc:
      "Access a curated network of verified MRO suppliers across every industrial category — ready to deliver.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    modalTitle: "Pre-qualified & Verified MRO Suppliers",
    modalEyebrow: "Vendor Network",
    modalIcon: "🤝",
    modalDesc:
      "A trusted network of MRO vendors vetted for quality, delivery reliability, and financial stability.",
    bullets: [
      "Authorised dealers of top industrial brands",
      "Geographic diversity across major industrial clusters",
      "Transparent ratings & performance history",
      "Single-point billing & quality assurance",
    ],
    href: "/our-solutions",
    hrefLabel: "Our Solutions",
  },
};

function cardShellClass(isActive: boolean) {
  return [
    "group relative flex h-full w-full flex-col overflow-hidden rounded-[28px] bg-white text-left",
    "transform-gpu transition-all duration-300 ease-out will-change-transform",
    "hover:z-20 hover:scale-105 hover:shadow-[0_24px_48px_rgba(15,23,42,0.18)]",
    "motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:hover:shadow-none",
    isActive
      ? "z-10 scale-105 shadow-[0_24px_48px_rgba(15,23,42,0.18)]"
      : "shadow-[0_2px_12px_rgba(15,23,42,0.06)]",
  ].join(" ");
}

export function SolutionCardsWithModal() {
  const [open, setOpen] = useState<SolutionKey | null>(null);
  const data = open ? SOLUTIONS[open] : null;

  return (
    <>
      <ul className="grid grid-cols-1 items-stretch gap-8 overflow-visible py-4 md:grid-cols-3 md:gap-6">
        {(Object.keys(SOLUTIONS) as SolutionKey[]).map((key) => {
          const s = SOLUTIONS[key];
          const isActive = open === key;

          return (
            <li key={key} className="flex min-h-[520px] overflow-visible">
              <article className={cardShellClass(isActive)}>
                <div className="relative h-[210px] w-full shrink-0 overflow-hidden">
                  <Image
                    src={cardImage}
                    alt={s.cardTitle}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110 motion-reduce:group-hover:scale-100"
                  />
                  <span
                    className="absolute left-4 top-4 z-10 rounded-full px-3.5 py-1.5 text-[11px] font-bold tracking-[0.14em] text-white"
                    style={{ backgroundColor: BRAND }}
                  >
                    {s.badge}
                  </span>
                </div>

                <div className="flex flex-1 flex-col px-7 pb-8 pt-6">
                  <span
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{ backgroundColor: BRAND_LIGHT, color: BRAND }}
                    aria-hidden
                  >
                    {s.icon}
                  </span>

                  <h3 className="mt-5 text-left text-[17px] font-bold leading-snug text-zinc-900">
                    {s.cardTitle}
                  </h3>

                  <p className="mt-3 flex-1 text-left text-[15px] leading-relaxed text-zinc-600">
                    {s.cardDesc}
                  </p>

                  <div className="mt-6 shrink-0">
                    <div
                      className="mb-5 h-[3px] w-10 rounded-full"
                      style={{ backgroundColor: BRAND }}
                      aria-hidden
                    />
                    <button
                      type="button"
                      onClick={() => setOpen(key)}
                      className="inline-flex cursor-pointer items-center gap-1.5 rounded-full border-2 bg-white px-6 py-2.5 text-sm font-semibold transition-colors duration-300 hover:bg-[#409098]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#409098] focus-visible:ring-offset-2"
                      style={{ borderColor: BRAND, color: BRAND }}
                    >
                      Learn More <span aria-hidden="true">→</span>
                    </button>
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </ul>

      <ContentModal
        open={!!data}
        onClose={() => setOpen(null)}
        title={data?.modalTitle ?? ""}
        eyebrow={data?.modalEyebrow}
        icon={data?.modalIcon}
        accentColor={BRAND}
        maxWidth="max-w-2xl"
        footer={
          data ? (
            <Link
              href={data.href}
              className="inline-flex text-sm font-semibold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              style={{ color: BRAND }}
              onClick={() => setOpen(null)}
            >
              {data.hrefLabel} →
            </Link>
          ) : null
        }
      >
        {data ? (
          <>
            <p className="text-zinc-600">{data.modalDesc}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-[#409098]">
              {data.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </>
        ) : null}
      </ContentModal>
    </>
  );
}
