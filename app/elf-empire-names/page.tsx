import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("elf-empire-names");

export default function Page() {
  return <LandingPage slug="elf-empire-names" />;
}
