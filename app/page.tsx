import type { Metadata } from "next";
import HomeContent from "./_home-content";

const SITE_URL = process.env.SITE_URL || "https://www.newlifeconsulting.com";

export const metadata: Metadata = {
  title: "New Life Consulting | Fix Your Credit, Build Your Future",
  description:
    "500+ people fixed their credit with New Life Consulting. Credit repair, financial planning, and debt management that delivers measurable results.",
  openGraph: {
    title: "New Life Consulting | Fix Your Credit, Build Your Future",
    description:
      "500+ people fixed their credit with New Life Consulting. Measurable results, not empty promises.",
    url: SITE_URL,
    images: [{ url: `${SITE_URL}/api/og?title=New%20Life%20Consulting&subtitle=Credit%20Consulting%20for%20Everyday%20People&image=/images/Screenshot_20260627_184529_209.jpg`, width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <HomeContent />;
}
