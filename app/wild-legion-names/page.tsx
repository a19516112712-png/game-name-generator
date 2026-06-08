import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("wild-legion-names");

export default function Page() {
  return <LandingPage slug="wild-legion-names" />;
}
