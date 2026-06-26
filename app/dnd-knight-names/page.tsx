import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("dnd-knight-names");
export default function Page() { return <LandingPage slug="dnd-knight-names" />; }
