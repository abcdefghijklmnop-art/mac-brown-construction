import type { Metadata } from "next";
import ReservationForm from "./reservation-form-client";

export const metadata: Metadata = {
  title: { absolute: "Enroll in the Guide School — Reserve Your Spot" },
  description:
    "Secure your spot at the Guide School. Complete the reservation form, sign the waiver, and pay your deposit to lock in your enrollment date.",
  alternates: { canonical: "https://flyfishingguideschool.com/reservation-form/" },
  openGraph: {
    title: "Reserve Your Spot | Fly Fishing Guide School",
    description:
      "Secure your enrollment in the Fly Fishing Guide School. Deposit holds your seat — form, waiver, and payment in one place.",
    url: "https://flyfishingguideschool.com/reservation-form/",
    images: [{ url: "/images/tuckasegee-sunrise.webp", width: 1920, height: 1280, alt: "Tuckasegee River at sunrise — Fly Fishing Guide School, Bryson City, NC" }],
  },
  twitter: { card: "summary_large_image" },
};

export default function Page() {
  return <ReservationForm />;
}
