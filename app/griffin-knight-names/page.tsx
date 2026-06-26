import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("griffin-knight-names");
export default function Page() { return <LandingPage slug="griffin-knight-names" />; }
