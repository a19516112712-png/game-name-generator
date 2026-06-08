import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("dwarf-legion-names");

export default function Page() {
  return <LandingPage slug="dwarf-legion-names" />;
}
