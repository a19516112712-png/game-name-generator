import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("roadside-tavern-names");
export default function Page() { return <LandingPage slug="roadside-tavern-names" />; }
