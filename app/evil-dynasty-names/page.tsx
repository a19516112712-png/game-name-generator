import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("evil-dynasty-names");

export default function Page() {
  return <LandingPage slug="evil-dynasty-names" />;
}
