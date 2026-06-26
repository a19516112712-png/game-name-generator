import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("magic-faction-names");
export default function Page() { return <LandingPage slug="magic-faction-names" />; }
