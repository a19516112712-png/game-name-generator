import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("goblin-empire-names");

export default function Page() {
  return <LandingPage slug="goblin-empire-names" />;
}
