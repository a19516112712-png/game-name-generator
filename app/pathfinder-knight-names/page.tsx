import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("pathfinder-knight-names");
export default function Page() { return <LandingPage slug="pathfinder-knight-names" />; }
