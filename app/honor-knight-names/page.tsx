import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("honor-knight-names");
export default function Page() { return <LandingPage slug="honor-knight-names" />; }
