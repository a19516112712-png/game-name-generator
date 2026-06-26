import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("knight-tavern-names");
export default function Page() { return <LandingPage slug="knight-tavern-names" />; }
