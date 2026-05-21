import Head from "next/head";
import { OfferingsHero } from "@/components/offerings/OfferingsHero";
import { BusinessModelsSection } from "@/components/offerings/BusinessModelsSection";
import { ScaleSolutionsSection } from "@/components/offerings/ScaleSolutionsSection";
import { ProcurementToolsSection } from "@/components/offerings/ProcurementToolsSection";
import { AiProcurementSection } from "@/components/offerings/AiProcurementSection";
import { CustomEngineeringSection } from "@/components/offerings/CustomEngineeringSection";
import { OfferingsCtaSection } from "@/components/offerings/OfferingsCtaSection";

export default function OurOfferingsPage() {
  return (
    <>
      <Head>
        <title>Our Offerings | Qwalty Solutions</title>
        <meta
          name="description"
          content="B2B and B2C industrial MRO procurement, AI-powered tools, supply chain solutions, and precision custom engineering from Qwalty Solutions."
        />
      </Head>

      <div className="space-y-16 sm:space-y-20">
        <OfferingsHero />
        <BusinessModelsSection />
        <ScaleSolutionsSection />
        <ProcurementToolsSection />
        <AiProcurementSection />
        <CustomEngineeringSection />
        <OfferingsCtaSection />
      </div>
    </>
  );
}
