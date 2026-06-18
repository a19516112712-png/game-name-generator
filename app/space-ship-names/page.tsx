import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("space-ship-names");
export default function Page() { return <LandingPage slug="space-ship-names" />; }
