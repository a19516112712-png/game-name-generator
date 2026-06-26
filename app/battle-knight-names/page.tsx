import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("battle-knight-names");
export default function Page() { return <LandingPage slug="battle-knight-names" />; }
