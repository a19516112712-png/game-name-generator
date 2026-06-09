import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("viridian-legion-names");

export default function Page() {
  return <LandingPage slug="viridian-legion-names" />;
}
