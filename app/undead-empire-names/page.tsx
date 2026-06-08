import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("undead-empire-names");

export default function Page() {
  return <LandingPage slug="undead-empire-names" />;
}
