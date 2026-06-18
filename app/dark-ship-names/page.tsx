import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("dark-ship-names");
export default function Page() { return <LandingPage slug="dark-ship-names" />; }
