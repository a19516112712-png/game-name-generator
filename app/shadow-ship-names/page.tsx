import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("shadow-ship-names");
export default function Page() { return <LandingPage slug="shadow-ship-names" />; }
