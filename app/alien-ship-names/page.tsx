import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("alien-ship-names");
export default function Page() { return <LandingPage slug="alien-ship-names" />; }
