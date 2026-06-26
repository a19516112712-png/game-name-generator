import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("arcane-wizard-names");
export default function Page() { return <LandingPage slug="arcane-wizard-names" />; }
