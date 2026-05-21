import { CAREERS_EMAIL, OPEN_ROLES } from "@/constants/careers";

export function OpenRolesSection() {
  return (
    <section id="open-roles" className="mx-auto w-full max-w-7xl scroll-mt-24">
      <p className="text-sm font-semibold tracking-wide text-zinc-600 dark:text-zinc-300">
        Open Roles
      </p>
      <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl">
        Current procurement jobs in Noida
      </h2>
      <p className="mt-3 max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
        Explore open roles at Qwalty Solutions and across India.
      </p>

      <ul className="mt-7 space-y-4 border-t border-zinc-200 pt-7 dark:border-zinc-800">
        {OPEN_ROLES.map((role) => (
          <li
            key={role.id}
            className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-[#409098]/30 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900 sm:p-8"
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <span className="inline-block rounded-full bg-[#409098]/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#409098]">
                  {role.department}
                </span>
                <h3 className="mt-3 text-xl font-bold text-zinc-900 dark:text-zinc-50">
                  {role.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {role.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                    {role.type}
                  </span>
                  <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                    {role.location}
                  </span>
                  <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-700 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                    {role.locationDetail}
                  </span>
                </div>
              </div>
              <a
                href={`mailto:${CAREERS_EMAIL}?subject=${role.mailSubject}`}
                className="inline-flex shrink-0 items-center justify-center rounded-xl bg-[#409098] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#409098] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950"
              >
                Apply Now
              </a>
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-6 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-300">
        <span aria-hidden="true">✉️ </span>
        Send your resume &amp; cover letter to{" "}
        <a
          href={`mailto:${CAREERS_EMAIL}`}
          className="font-semibold text-[#409098] hover:underline"
        >
          {CAREERS_EMAIL}
        </a>
      </p>
    </section>
  );
}
