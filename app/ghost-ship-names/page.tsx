import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("ghost-ship-names");
export default function Page() { return <LandingPage slug="ghost-ship-names" />; }
