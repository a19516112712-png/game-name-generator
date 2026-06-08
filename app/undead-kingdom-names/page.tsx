import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("undead-kingdom-names");

export default function Page() {
  return <LandingPage slug="undead-kingdom-names" />;
}
