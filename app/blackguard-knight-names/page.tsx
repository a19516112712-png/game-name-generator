import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("blackguard-knight-names");
export default function Page() { return <LandingPage slug="blackguard-knight-names" />; }
