import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("dawn-dynasty-names");

export default function Page() {
  return <LandingPage slug="dawn-dynasty-names" />;
}
