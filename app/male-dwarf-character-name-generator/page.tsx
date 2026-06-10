import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("male-dwarf-character-name-generator");

export default function Page() {
  return <LandingPage slug="male-dwarf-character-name-generator" />;
}
