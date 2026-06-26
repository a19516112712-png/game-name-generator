import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("crimson-faction-names");
export default function Page() { return <LandingPage slug="crimson-faction-names" />; }
