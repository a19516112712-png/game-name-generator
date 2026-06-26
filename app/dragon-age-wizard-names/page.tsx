import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("dragon-age-wizard-names");
export default function Page() { return <LandingPage slug="dragon-age-wizard-names" />; }
