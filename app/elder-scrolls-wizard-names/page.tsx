import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("elder-scrolls-wizard-names");
export default function Page() { return <LandingPage slug="elder-scrolls-wizard-names" />; }
