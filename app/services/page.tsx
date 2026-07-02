import type { Metadata } from "next";
import ServicesContent from "./_services-content";

const SITE_URL = process.env.SITE_URL || "https://www.newlifeconsulting.com";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Credit score analysis, credit repair, financial planning, debt management, financial literacy, and expert consulting. We help you take control of your financial future.",
  openGraph: {
    title: "Our Services",
    description:
      "Credit score analysis, credit repair, financial planning, debt management, financial literacy, and expert consulting.",
    url: `${SITE_URL}/services`,
    images: [{ url: `${SITE_URL}/api/og?title=Our%20Services&subtitle=Credit%20Repair%2C%20Financial%20Planning%20%26%20More`, width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <ServicesContent />;
}
