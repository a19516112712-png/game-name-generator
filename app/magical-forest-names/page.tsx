import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("magical-forest-names");
export default function Page() { return <LandingPage slug="magical-forest-names" />; }
