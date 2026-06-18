import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("warship-ship-names");
export default function Page() { return <LandingPage slug="warship-ship-names" />; }
