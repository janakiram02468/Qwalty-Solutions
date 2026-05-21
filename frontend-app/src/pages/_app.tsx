import type { AppProps } from "next/app";
import { Geist, Geist_Mono } from "next/font/google";
import { PageShell } from "@/components/layout/PageShell";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} min-h-full bg-zinc-50 text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-50`}
    >
      <PageShell>
        <Component {...pageProps} />
      </PageShell>
    </div>
  );
}

