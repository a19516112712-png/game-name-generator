import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("goblin-alliance-names");

export default function Page() {
  return <LandingPage slug="goblin-alliance-names" />;
}
