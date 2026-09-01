import type { Metadata } from "next";
import Payment from "./payment-client";

export const metadata: Metadata = {
  title: {
    absolute: "Payment — Mac Brown Fly Fish",
  },
  description:
    "Complete your payment for a guided trip, casting school, or clinic with Mac Brown Fly Fish in Bryson City, NC.",
  alternates: { canonical: "https://macbrownflyfish.com/payment/" },
  openGraph: {
    title: "Payment — Mac Brown Fly Fish",
    description: "Secure payment for guided trips, casting schools, and clinics with Mac Brown Fly Fish.",
    url: "https://macbrownflyfish.com/payment/",
    images: [{ url: "/images/fall-river-fishing.webp", width: 1920, height: 1280, alt: "Guided fly fishing on the Tuckasegee River — Bryson City, NC" }],
  },
};

export default function Page() {
  return <Payment />;
}
