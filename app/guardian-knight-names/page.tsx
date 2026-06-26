import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("guardian-knight-names");
export default function Page() { return <LandingPage slug="guardian-knight-names" />; }
