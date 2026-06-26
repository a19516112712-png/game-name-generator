import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("runemaster-wizard-names");
export default function Page() { return <LandingPage slug="runemaster-wizard-names" />; }
