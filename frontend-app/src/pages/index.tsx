import Head from "next/head";
import { LandingPage } from "@/components/home/LandingPage";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Qwalty Solutions</title>
        <meta
          name="description"
          content="Static Next.js + Tailwind website."
        />
      </Head>
      <LandingPage />
    </>
  );
}

