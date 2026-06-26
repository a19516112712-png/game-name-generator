import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("harbor-tavern-names");
export default function Page() { return <LandingPage slug="harbor-tavern-names" />; }
