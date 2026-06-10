import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("female-dwarf-character-name-generator");

export default function Page() {
  return <LandingPage slug="female-dwarf-character-name-generator" />;
}
