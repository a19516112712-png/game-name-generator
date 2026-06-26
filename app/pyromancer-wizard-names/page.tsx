import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("pyromancer-wizard-names");
export default function Page() { return <LandingPage slug="pyromancer-wizard-names" />; }
