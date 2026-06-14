import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("vault-dungeon-names");

export default function Page() {
  return <LandingPage slug="vault-dungeon-names" />;
}
