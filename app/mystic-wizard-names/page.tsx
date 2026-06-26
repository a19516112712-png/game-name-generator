import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("mystic-wizard-names");
export default function Page() { return <LandingPage slug="mystic-wizard-names" />; }
