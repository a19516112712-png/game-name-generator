import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("werewolf-realm-names");

export default function Page() {
  return <LandingPage slug="werewolf-realm-names" />;
}
