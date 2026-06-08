import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("dwarf-tribe-names");

export default function Page() {
  return <LandingPage slug="dwarf-tribe-names" />;
}
