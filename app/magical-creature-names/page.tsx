import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("magical-creature-names");
export default function Page() { return <LandingPage slug="magical-creature-names" />; }
