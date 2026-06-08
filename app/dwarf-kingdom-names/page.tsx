import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("dwarf-kingdom-names");

export default function Page() {
  return <LandingPage slug="dwarf-kingdom-names" />;
}
