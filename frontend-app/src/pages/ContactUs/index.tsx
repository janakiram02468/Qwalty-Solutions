import Head from "next/head";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactInfoSection } from "@/components/contact/ContactInfoSection";
import { ContactForm } from "@/components/contact/ContactForm";

export default function ContactUsPage() {
  return (
    <>
      <Head>
        <title>Contact Us | Qwalty Solutions</title>
        <meta
          name="description"
          content="Contact Qwalty Solutions for MRO supplies, quotes, and technical support. We respond within 24 hours."
        />
      </Head>

      <div className="space-y-12 sm:space-y-16">
        <ContactHero />
        <ContactInfoSection />
        <ContactForm />
      </div>
    </>
  );
}
