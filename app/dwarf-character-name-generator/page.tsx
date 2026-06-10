import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("dwarf-character-name-generator");

export default function Page() {
  return <LandingPage slug="dwarf-character-name-generator" />;
}
