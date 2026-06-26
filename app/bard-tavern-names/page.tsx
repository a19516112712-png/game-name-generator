import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("bard-tavern-names");
export default function Page() { return <LandingPage slug="bard-tavern-names" />; }
