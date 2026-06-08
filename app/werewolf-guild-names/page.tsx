import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("werewolf-guild-names");

export default function Page() {
  return <LandingPage slug="werewolf-guild-names" />;
}
