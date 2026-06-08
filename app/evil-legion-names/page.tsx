import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("evil-legion-names");

export default function Page() {
  return <LandingPage slug="evil-legion-names" />;
}
