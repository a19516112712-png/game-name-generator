import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("vampire-order-names");

export default function Page() {
  return <LandingPage slug="vampire-order-names" />;
}
