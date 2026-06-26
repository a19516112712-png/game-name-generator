import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("celestial-knight-names");
export default function Page() { return <LandingPage slug="celestial-knight-names" />; }
