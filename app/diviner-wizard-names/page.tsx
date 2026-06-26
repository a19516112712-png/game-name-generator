import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("diviner-wizard-names");
export default function Page() { return <LandingPage slug="diviner-wizard-names" />; }
