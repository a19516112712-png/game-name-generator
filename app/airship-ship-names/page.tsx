import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("airship-ship-names");
export default function Page() { return <LandingPage slug="airship-ship-names" />; }
