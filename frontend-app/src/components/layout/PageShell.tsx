import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

type Props = {
  children: ReactNode;
};

export function PageShell({ children }: Props) {
  return (
    <div className="flex min-h-screen flex-1 flex-col">
      <SiteHeader />
      <main className="w-full flex-1 px-4 py-8 sm:px-6 sm:py-10">
        <div className="w-full">{children}</div>
      </main>
      <SiteFooter />
    </div>
  );
}
