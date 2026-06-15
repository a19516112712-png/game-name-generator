import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("wizard-npc-names");

export default function Page() { return <LandingPage slug="wizard-npc-names" />; }
