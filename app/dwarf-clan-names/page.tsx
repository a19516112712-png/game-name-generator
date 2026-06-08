import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("dwarf-clan-names");

export default function Page() {
  return <LandingPage slug="dwarf-clan-names" />;
}
