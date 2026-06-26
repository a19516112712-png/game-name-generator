import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("elemental-wizard-names");
export default function Page() { return <LandingPage slug="elemental-wizard-names" />; }
