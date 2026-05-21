import Head from "next/head";
import { CareersHero } from "@/components/careers/CareersHero";
import { WhyJoinUsSection } from "@/components/careers/WhyJoinUsSection";
import { TeamTestimonialsSection } from "@/components/careers/TeamTestimonialsSection";
import { WorkplaceCultureSection } from "@/components/careers/WorkplaceCultureSection";
import { OpenRolesSection } from "@/components/careers/OpenRolesSection";
import { ApplyByEmailSection } from "@/components/careers/ApplyByEmailSection";

export default function CareersPage() {
  return (
    <>
      <Head>
        <title>Careers | Qwalty Solutions</title>
        <meta
          name="description"
          content="Join Qwalty Solutions — procurement, logistics, and finance roles in Noida. Apply for open positions on our B2B MRO platform."
        />
      </Head>

      <div className="space-y-16 sm:space-y-20">
        <CareersHero />
        <WhyJoinUsSection />
        <TeamTestimonialsSection />
        <WorkplaceCultureSection />
        <OpenRolesSection />
        <ApplyByEmailSection />
      </div>
    </>
  );
}
