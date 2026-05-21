"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ContentModal } from "@/components/ui/ContentModal";
import { ROUTES } from "@/constants/routes";
import {
  PRODUCT_CATEGORY_ROWS,
  type ProductCategory,
} from "@/constants/productCategories";
import cardImage from "@/assets/B2B_giftcards-01.png";

const BRAND = "#409098";

function CategoryCard({
  category,
  isActive,
  onSelect,
}: {
  category: ProductCategory;
  isActive: boolean;
  onSelect: () => void;
}) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <li className="min-w-0">
      <button
        type="button"
        onClick={onSelect}
        className={[
          "group flex h-full w-full cursor-pointer flex-col overflow-hidden rounded-[24px] bg-white text-left",
          "transform-gpu transition-all duration-300 ease-out",
          "hover:z-10 hover:scale-105 hover:shadow-[0_20px_40px_rgba(15,23,42,0.2)]",
          "motion-reduce:hover:scale-100 motion-reduce:hover:shadow-none",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#409098] focus-visible:ring-offset-2",
          isActive
            ? "z-10 scale-105 shadow-[0_20px_40px_rgba(15,23,42,0.2)]"
            : "shadow-[0_4px_16px_rgba(15,23,42,0.08)]",
        ].join(" ")}
      >
        <div className="relative h-[200px] w-full shrink-0 overflow-hidden sm:h-[220px]">
          <Image
            src={imgFailed ? cardImage : category.image}
            alt={category.name}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-110 motion-reduce:group-hover:scale-100"
            onError={() => setImgFailed(true)}
          />
          <span
            className="absolute left-4 top-4 z-10 rounded-md px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em] text-white shadow-md"
            style={{ backgroundColor: BRAND }}
          >
            {category.badge}
          </span>
        </div>

        <div className="flex flex-1 flex-col px-5 pb-6 pt-5 sm:px-6">
          <h3 className="text-lg font-bold leading-snug text-zinc-900">
            {category.name}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600">
            {category.description}
          </p>
          <div
            className="mt-4 h-[3px] w-10 rounded-full"
            style={{ backgroundColor: BRAND }}
            aria-hidden
          />
        </div>
      </button>
    </li>
  );
}

export function ProductCategoriesSection() {
  const [openId, setOpenId] = useState<string | null>(null);
  const active =
    PRODUCT_CATEGORY_ROWS.flat().find((c) => c.id === openId) ?? null;

  return (
    <div className="mt-16 border-t border-zinc-200/80 pt-14">
      <header className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-extrabold tracking-tight text-[#409098] sm:text-3xl">
          Industrial MRO Supplier India – Product Categories
        </h2>
        <p className="mt-3 text-base leading-relaxed text-zinc-600">
          IndustryMRO is your trusted B2B partner for industrial MRO supplies.
          Browse a wide range of maintenance, repair, and operations products
          for businesses across India.
        </p>

        <div
          className="mx-auto mt-5 flex max-w-sm items-center justify-center gap-2"
          aria-hidden
        >
          <span className="h-px flex-1 bg-[#409098]/35" />
          <span className="flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: BRAND }}
              />
            ))}
          </span>
          <span className="h-px flex-1 bg-[#409098]/35" />
        </div>
      </header>

      <div className="relative my-10">
        <div
          className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-zinc-200"
          aria-hidden
        />
        <p className="relative mx-auto w-fit rounded-full border border-zinc-200 bg-white px-5 py-2.5 text-center text-sm text-zinc-600 shadow-sm">
          Click on any category to see sub-categories
        </p>
      </div>

      <div className="space-y-8 sm:space-y-10">
        {PRODUCT_CATEGORY_ROWS.map((row, rowIndex) => (
          <ul
            key={rowIndex}
            className="grid grid-cols-1 gap-5 overflow-visible py-2 sm:grid-cols-2 lg:grid-cols-4"
          >
            {row.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                isActive={openId === category.id}
                onSelect={() => setOpenId(category.id)}
              />
            ))}
          </ul>
        ))}
      </div>

      <ContentModal
        open={!!active}
        onClose={() => setOpenId(null)}
        title={active?.name ?? ""}
        eyebrow="Sub-categories"
        accentColor={BRAND}
        maxWidth="max-w-2xl"
        footer={
          <Link
            href={ROUTES.contactUs}
            className="inline-flex cursor-pointer text-sm font-semibold text-[#409098] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#409098] focus-visible:ring-offset-2"
            onClick={() => setOpenId(null)}
          >
            Contact us to know more products →
          </Link>
        }
      >
        {active ? (
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {active.subcategories.map((sub) => (
              <li
                key={sub.name}
                className="overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50"
              >
                <div className="relative h-24 w-full bg-zinc-100">
                  <Image
                    src={sub.image}
                    alt={sub.name}
                    fill
                    sizes="160px"
                    className="object-cover"
                  />
                </div>
                <p className="px-2 py-2 text-center text-xs font-semibold text-zinc-800 sm:text-sm">
                  {sub.name}
                </p>
              </li>
            ))}
          </ul>
        ) : null}
      </ContentModal>
    </div>
  );
}
