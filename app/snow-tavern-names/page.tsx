import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("snow-tavern-names");
export default function Page() { return <LandingPage slug="snow-tavern-names" />; }
