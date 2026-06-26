import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("political-faction-names");
export default function Page() { return <LandingPage slug="political-faction-names" />; }
