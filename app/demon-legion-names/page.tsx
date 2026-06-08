import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("demon-legion-names");

export default function Page() {
  return <LandingPage slug="demon-legion-names" />;
}
