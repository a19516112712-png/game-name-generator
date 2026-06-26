import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("warhammer-faction-names");
export default function Page() { return <LandingPage slug="warhammer-faction-names" />; }
