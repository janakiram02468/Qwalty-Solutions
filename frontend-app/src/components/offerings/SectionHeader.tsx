type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  variant?: "light" | "dark";
};

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered,
  variant = "light",
}: Props) {
  const isDark = variant === "dark";

  return (
    <header className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p
          className={
            isDark
              ? "text-sm font-semibold tracking-wide text-[#7ec8cf]"
              : "text-sm font-semibold tracking-wide text-[#409098]"
          }
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={
          isDark
            ? "mt-2 text-2xl font-extrabold tracking-tight text-white sm:text-3xl"
            : "mt-2 text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-3xl"
        }
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={
            isDark
              ? "mt-3 text-base leading-relaxed text-zinc-300"
              : "mt-3 text-base leading-relaxed text-zinc-600 dark:text-zinc-400"
          }
        >
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}
