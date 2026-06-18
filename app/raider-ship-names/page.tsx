import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("raider-ship-names");
export default function Page() { return <LandingPage slug="raider-ship-names" />; }
