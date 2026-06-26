import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("mmorpg-wizard-names");
export default function Page() { return <LandingPage slug="mmorpg-wizard-names" />; }
