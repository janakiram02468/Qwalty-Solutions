import Head from "next/head";

export default function OurSolutionsPage() {
  return (
    <>
      <Head>
        <title>Our Solutions | Qwalty</title>
      </Head>
      <div className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
          Our Solutions
        </h1>
        <p className="max-w-3xl text-base text-zinc-700 dark:text-zinc-300">
          Static demo page. Add your solutions overview here.
        </p>
      </div>
    </>
  );
}

