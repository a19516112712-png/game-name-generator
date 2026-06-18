import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("futuristic-ship-names");
export default function Page() { return <LandingPage slug="futuristic-ship-names" />; }
