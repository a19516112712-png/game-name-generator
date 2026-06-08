import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("dwarf-alliance-names");

export default function Page() {
  return <LandingPage slug="dwarf-alliance-names" />;
}
