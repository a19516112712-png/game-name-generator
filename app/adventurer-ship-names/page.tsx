import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("adventurer-ship-names");
export default function Page() { return <LandingPage slug="adventurer-ship-names" />; }
