import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("legendary-knight-names");
export default function Page() { return <LandingPage slug="legendary-knight-names" />; }
