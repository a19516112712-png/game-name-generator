import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("undead-alliance-names");

export default function Page() {
  return <LandingPage slug="undead-alliance-names" />;
}
