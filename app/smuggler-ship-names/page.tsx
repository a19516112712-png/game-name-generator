import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("smuggler-ship-names");
export default function Page() { return <LandingPage slug="smuggler-ship-names" />; }
