import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("elf-legion-names");

export default function Page() {
  return <LandingPage slug="elf-legion-names" />;
}
