import { useState, type FormEvent } from "react";
import Link from "next/link";
import { CONTACT_STATS, INQUIRY_TYPES } from "@/constants/contact";

const inputClassName =
  "mt-1.5 w-full rounded-xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 shadow-sm outline-none transition placeholder:text-zinc-400 focus:border-[#409098] focus:ring-2 focus:ring-[#409098]/20 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50 dark:placeholder:text-zinc-500";

const labelClassName =
  "block text-sm font-semibold text-zinc-800 dark:text-zinc-200";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="mx-auto w-full max-w-7xl">
      <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:gap-12">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50 sm:p-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
            Send us a message
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-base">
            Fill out the form and one of our MRO specialists will get back to
            you promptly with a tailored response.
          </p>

          {submitted ? (
            <div
              role="status"
              className="mt-8 rounded-xl border border-[#409098]/30 bg-[#409098]/10 px-5 py-6 text-sm text-zinc-800 dark:text-zinc-200"
            >
              <p className="font-semibold text-[#2d6a70] dark:text-[#7ec8cf]">
                Thank you for reaching out!
              </p>
              <p className="mt-2 leading-relaxed">
                Your message has been recorded. Our team will respond within 24
                hours. For urgent requests, call us directly.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-4 text-sm font-semibold text-[#409098] underline-offset-2 hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="fullName" className={labelClassName}>
                    Full name <span className="text-[#409098]">*</span>
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    autoComplete="name"
                    className={inputClassName}
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="companyName" className={labelClassName}>
                    Company name
                  </label>
                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    autoComplete="organization"
                    className={inputClassName}
                    placeholder="Your company"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className={labelClassName}>
                    Email address <span className="text-[#409098]">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className={inputClassName}
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClassName}>
                    Phone number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className={inputClassName}
                    placeholder="+91-XXXXXXXXXX"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="inquiryType" className={labelClassName}>
                  Inquiry type <span className="text-[#409098]">*</span>
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  required
                  defaultValue=""
                  className={`${inputClassName} cursor-pointer`}
                >
                  <option value="" disabled>
                    Select an inquiry type
                  </option>
                  {INQUIRY_TYPES.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.emoji} {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className={labelClassName}>
                  Message / details <span className="text-[#409098]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className={`${inputClassName} resize-y min-h-[120px]`}
                  placeholder="Tell us about your requirements, quantities, or questions..."
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-[#409098] px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#409098] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950 sm:w-auto"
                >
                  Send message →
                </button>
                <p className="mt-3 text-xs text-zinc-500 dark:text-zinc-400">
                  By submitting, you agree to our{" "}
                  <Link
                    href="/privacy-policy"
                    className="font-medium text-[#409098] underline-offset-2 hover:underline"
                  >
                    privacy policy
                  </Link>
                  . We never share your data.
                </p>
              </div>
            </form>
          )}
        </div>

        <aside className="flex flex-col gap-4">
          {CONTACT_STATS.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-zinc-200 bg-white p-6 text-center shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50"
            >
              <p className="text-3xl font-extrabold text-[#409098] sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                {stat.label}
              </p>
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
}
