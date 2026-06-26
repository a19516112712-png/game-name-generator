import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("mythical-tavern-names");
export default function Page() { return <LandingPage slug="mythical-tavern-names" />; }
