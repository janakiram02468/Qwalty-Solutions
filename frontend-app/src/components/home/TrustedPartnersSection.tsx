"use client";

import { useState } from "react";
import Image from "next/image";
import { BRAND_PARTNERS, type BrandPartner } from "@/constants/brandPartners";

const BRAND = "#409098";

function BrandLogoCard({ brand }: { brand: BrandPartner }) {
  const [imgFailed, setImgFailed] = useState(false);
  const showImage = brand.image && !imgFailed;

  return (
    <li
      className="flex h-[88px] w-[168px] shrink-0 items-center justify-center rounded-2xl border border-zinc-100 bg-white px-5 py-4 shadow-[0_4px_20px_rgba(15,23,42,0.06)] sm:h-[96px] sm:w-[188px]"
      aria-label={brand.name}
    >
      {showImage ? (
        <div className="relative h-12 w-full sm:h-14">
          <Image
            src={brand.image!}
            alt={brand.name}
            fill
            sizes="188px"
            className="object-contain object-center"
            onError={() => setImgFailed(true)}
          />
        </div>
      ) : (
        <span className="text-center text-sm font-bold tracking-wide text-zinc-500">
          {brand.name}
        </span>
      )}
    </li>
  );
}

export function TrustedPartnersSection() {
  const loop = [...BRAND_PARTNERS, ...BRAND_PARTNERS];

  return (
    <section
      className="-mx-4 bg-white px-4 py-14 sm:-mx-6 sm:px-6 sm:py-16"
      aria-labelledby="trusted-partners-heading"
    >
      <div className="mx-auto w-full max-w-7xl">
        <header className="mx-auto max-w-2xl text-center">
          <span
            className="inline-block rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em]"
            style={{ backgroundColor: `${BRAND}1a`, color: BRAND }}
          >
            Trusted Partners
          </span>
          <h2
            id="trusted-partners-heading"
            className="mt-4 text-2xl font-extrabold tracking-tight text-zinc-900 sm:text-3xl"
          >
            Brands We Deal In
          </h2>
          <p className="mt-3 text-base leading-relaxed text-zinc-600">
            Authorised distributors of 50+ leading industrial brands
          </p>
          <div
            className="mx-auto mt-5 h-[3px] w-12 rounded-full"
            style={{ backgroundColor: BRAND }}
            aria-hidden
          />
        </header>

        <div
          className="brand-marquee relative mt-12 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <ul className="brand-marquee-track flex w-max list-none gap-4 sm:gap-5">
            {loop.map((brand, index) => (
              <BrandLogoCard
                key={`${brand.name}-${index}`}
                brand={brand}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
