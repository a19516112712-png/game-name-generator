import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("fire-knight-names");
export default function Page() { return <LandingPage slug="fire-knight-names" />; }
