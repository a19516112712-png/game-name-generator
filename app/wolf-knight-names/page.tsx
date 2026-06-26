import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("wolf-knight-names");
export default function Page() { return <LandingPage slug="wolf-knight-names" />; }
