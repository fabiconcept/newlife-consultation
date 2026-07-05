import type { Metadata } from "next";
import PricingContent from "./_pricing-content";
import { buildBreadcrumbs, buildFAQSchema } from "@/lib/metadata";
import { pricingFaqs } from "@/lib/faqs";

const SITE_URL = process.env.SITE_URL || "https://www.newlifeconsulting.com";

export const metadata: Metadata = {
  title: "Pricing | Credit Consulting That Fits Your Budget",
  description:
    "Transparent pricing for credit consulting. Credit assessment for $99, repair programs from $299/mo. No hidden fees, no surprises.",
  openGraph: {
    title: "Pricing | Credit Consulting That Fits Your Budget",
    description:
      "Transparent pricing for credit consulting. No hidden fees, no surprises.",
    url: `${SITE_URL}/pricing`,
    images: [{ url: `${SITE_URL}/api/og?title=Pricing&subtitle=Transparent%20Pricing%20for%20Credit%20Consulting&image=/images/Screenshot_20260503_114017_Telegram.jpg`, width: 1200, height: 630 }],
  },
};

const breadcrumbs = buildBreadcrumbs([
  { name: "Home", path: "/" },
  { name: "Pricing" },
]);

const faqSchema = buildFAQSchema(
  pricingFaqs.map((faq) => ({ question: faq.q, answer: faq.a }))
);

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PricingContent />
    </>
  );
}
