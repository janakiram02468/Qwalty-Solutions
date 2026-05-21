"use client";

import { useState } from "react";
import { CAREERS_EMAIL, CAREERS_EMAIL_HREF } from "@/constants/careers";

export function ApplyByEmailSection() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(CAREERS_EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section className="mx-auto w-full max-w-7xl">
      <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-gradient-to-br from-[#409098]/10 via-white to-white p-8 text-center shadow-sm dark:border-zinc-800 dark:from-[#409098]/15 dark:via-zinc-900 dark:to-zinc-900 sm:p-12">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#409098]">
          Apply now
        </p>
        <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
          Apply for procurement jobs in Noida — send your CV to
        </h2>
        <p className="mt-4 text-lg font-semibold text-zinc-800 dark:text-zinc-200">
          <a
            href={CAREERS_EMAIL_HREF}
            className="text-[#409098] hover:underline"
          >
            {CAREERS_EMAIL}
          </a>
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#409098] focus-visible:ring-offset-2 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50 dark:hover:bg-zinc-900"
          >
            {copied ? "Copied!" : "Copy email"}
          </button>
          <a
            href={CAREERS_EMAIL_HREF}
            className="inline-flex items-center justify-center rounded-xl bg-[#409098] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#409098] focus-visible:ring-offset-2"
          >
            Open email client
          </a>
        </div>
        <p className="mt-6 text-sm text-zinc-600 dark:text-zinc-400">
          We accept PDF, DOC, or DOCX. Include the role title in your subject
          line.
        </p>
      </div>
    </section>
  );
}
