import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("dwarf-empire-names");

export default function Page() {
  return <LandingPage slug="dwarf-empire-names" />;
}
