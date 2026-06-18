import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("galleon-ship-names");
export default function Page() { return <LandingPage slug="galleon-ship-names" />; }
