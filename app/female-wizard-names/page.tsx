import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("female-wizard-names");
export default function Page() { return <LandingPage slug="female-wizard-names" />; }
