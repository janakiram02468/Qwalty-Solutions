import React from "react";
import Link from "next/link";

const HeroContent = React.memo(function HeroContent() {
  return (
    <div className="relative z-10 mx-auto w-full max-w-4xl px-4 text-center text-white sm:px-6">
      <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
        Simplifying Industrial Supply
      </h1>

      <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-white/90 md:text-xl">
        One-stop procurement platform for bearings, tools, safety equipment, and
        industrial supplies. Trusted by 500+ businesses across India.
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/contact-us"
          className="inline-flex items-center justify-center rounded-xl bg-[#409098] px-7 py-3 text-sm font-semibold text-white shadow-sm transition duration-200 hover:brightness-110 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          REQUEST A QUOTE
        </Link>

        <Link
          href="/our-solutions"
          className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition duration-200 hover:bg-white/15 hover:border-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
          EXPLORE PRODUCTS
        </Link>
      </div>
    </div>
  );
});

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative flex min-h-[78vh] w-full items-center justify-center">
        <div
          className="absolute inset-0 bg-[radial-gradient(1000px_circle_at_30%_20%,rgba(64,144,152,0.35),transparent_55%),radial-gradient(900px_circle_at_70%_0%,rgba(20,184,166,0.22),transparent_55%),linear-gradient(to_bottom,rgba(9,9,11,0.92),rgba(9,9,11,0.78),rgba(9,9,11,0.82))]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(to_right,rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:48px_48px]"
          aria-hidden="true"
        />
        <HeroContent />
      </div>
    </section>
  );
}

