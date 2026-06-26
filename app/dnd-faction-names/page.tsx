import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("dnd-faction-names");
export default function Page() { return <LandingPage slug="dnd-faction-names" />; }
