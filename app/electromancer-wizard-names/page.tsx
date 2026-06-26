import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("electromancer-wizard-names");
export default function Page() { return <LandingPage slug="electromancer-wizard-names" />; }
