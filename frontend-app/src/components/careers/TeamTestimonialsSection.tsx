"use client";

import { useState } from "react";
import { TEAM_TESTIMONIALS } from "@/constants/careers";

export function TeamTestimonialsSection() {
  const [index, setIndex] = useState(0);
  const total = TEAM_TESTIMONIALS.length;
  const current = TEAM_TESTIMONIALS[index];

  function goPrev() {
    setIndex((i) => (i === 0 ? total - 1 : i - 1));
  }

  function goNext() {
    setIndex((i) => (i === total - 1 ? 0 : i + 1));
  }

  return (
    <section className="mx-auto w-full max-w-7xl">
      <p className="text-sm font-semibold tracking-wide text-zinc-600 dark:text-zinc-300">
        What Our Team Says
      </p>
      <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
        Real voices from the people building Qwalty Solutions
      </h2>

      <div className="mt-7 border-t border-zinc-200 pt-7 dark:border-zinc-800">
        <blockquote className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:p-10">
          <span
            className="pointer-events-none absolute -right-2 -top-4 select-none text-[100px] leading-none text-[#409098]/10"
            aria-hidden
          >
            ❝
          </span>
          <p className="relative text-base leading-relaxed text-zinc-700 dark:text-zinc-300 sm:text-lg">
            {current.quote}
          </p>
          <footer className="relative mt-8 border-t border-zinc-100 pt-6 dark:border-zinc-800">
            <p className="text-base font-bold text-zinc-900 dark:text-zinc-50">
              {current.name}
            </p>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              {current.title}
            </p>
          </footer>
        </blockquote>

        <div className="mt-6 flex items-center justify-between gap-4">
            <div className="flex gap-2">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous testimonial"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition hover:border-[#409098]/40 hover:text-[#409098] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#409098] dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200"
              >
                ←
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next testimonial"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition hover:border-[#409098]/40 hover:text-[#409098] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#409098] dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200"
              >
                →
              </button>
            </div>
            <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              {index + 1} / {total}
            </p>
          </div>

          <div className="mt-4 flex justify-center gap-2">
            {TEAM_TESTIMONIALS.map((t, i) => (
              <button
                key={t.id}
                type="button"
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className={[
                  "h-2 rounded-full transition-all",
                  i === index
                    ? "w-8 bg-[#409098]"
                    : "w-2 bg-zinc-300 hover:bg-zinc-400 dark:bg-zinc-600",
                ].join(" ")}
              />
            ))}
          </div>
      </div>
    </section>
  );
}
