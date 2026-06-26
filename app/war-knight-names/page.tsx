import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("war-knight-names");
export default function Page() { return <LandingPage slug="war-knight-names" />; }
