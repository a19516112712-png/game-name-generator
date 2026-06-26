import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("merchant-faction-names");
export default function Page() { return <LandingPage slug="merchant-faction-names" />; }
