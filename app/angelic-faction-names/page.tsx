import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("angelic-faction-names");
export default function Page() { return <LandingPage slug="angelic-faction-names" />; }
