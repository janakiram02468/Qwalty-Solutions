"use client";

import { useEffect, useId, type ReactNode } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  title: string;
  eyebrow?: string;
  icon?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  accentColor?: string;
  maxWidth?: string;
};

export function ContentModal({
  open,
  onClose,
  title,
  eyebrow,
  icon,
  children,
  footer,
  accentColor = "#409098",
  maxWidth = "max-w-lg",
}: Props) {
  const titleId = useId();
  const accentLight = `${accentColor}1a`;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-6"
      aria-hidden={!open}
    >
      <button
        type="button"
        className="absolute inset-0 bg-zinc-950/60 backdrop-blur-[2px]"
        aria-label="Close"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={`relative z-[101] flex max-h-[min(90vh,720px)] w-full ${maxWidth} flex-col rounded-t-2xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-700 dark:bg-zinc-900 sm:max-h-[85vh] sm:rounded-2xl`}
      >
        <div className="flex shrink-0 items-start justify-between gap-4 border-b border-zinc-100 px-5 py-4 dark:border-zinc-800 sm:px-6 sm:py-5">
          <div className="flex min-w-0 items-start gap-3">
            {icon ? (
              <span
                className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-lg"
                style={{ backgroundColor: accentLight, color: accentColor }}
              >
                {icon}
              </span>
            ) : null}
            <div className="min-w-0">
              {eyebrow ? (
                <p
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: accentColor }}
                >
                  {eyebrow}
                </p>
              ) : null}
              <h2
                id={titleId}
                className="mt-1 text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-xl"
              >
                {title}
              </h2>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="-m-2 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-2xl leading-none text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#409098] dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-900"
            aria-label="Close dialog"
          >
            ×
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-5 py-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 sm:px-6 sm:py-5">
          {children}
        </div>

        {footer ? (
          <div className="shrink-0 border-t border-zinc-100 px-5 py-4 dark:border-zinc-800 sm:px-6">
            {footer}
          </div>
        ) : null}
      </div>
    </div>
  );
}
