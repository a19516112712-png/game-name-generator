import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("chevalier-knight-names");
export default function Page() { return <LandingPage slug="chevalier-knight-names" />; }
