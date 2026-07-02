import type { Metadata } from "next";
import HomeContent from "./_home-content";

const SITE_URL = process.env.SITE_URL || "https://www.newlifeconsulting.com";

export const metadata: Metadata = {
  title: "Credit Consulting for Everyday People",
  description:
    "Expert credit consulting for everyday people. Credit repair, financial planning, debt management, and more. Transform your financial future with a team that cares.",
  openGraph: {
    title: "Credit Consulting for Everyday People",
    description:
      "Expert credit consulting for everyday people. Credit repair, financial planning, debt management, and more.",
    url: SITE_URL,
    images: [{ url: `${SITE_URL}/api/og?title=New%20Life%20Consulting&subtitle=Credit%20Consulting%20for%20Everyday%20People&image=/images/Screenshot_20260627_184529_209.jpg`, width: 1200, height: 630 }],
  },
};

export default function Page() {
  return <HomeContent />;
}
