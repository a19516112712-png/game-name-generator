import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("medieval-faction-names");

export default function Page() {
  return <LandingPage slug="medieval-faction-names" />;
}
