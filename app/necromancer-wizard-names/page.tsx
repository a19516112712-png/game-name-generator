import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("necromancer-wizard-names");
export default function Page() { return <LandingPage slug="necromancer-wizard-names" />; }
