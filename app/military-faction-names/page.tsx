import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("military-faction-names");
export default function Page() { return <LandingPage slug="military-faction-names" />; }
