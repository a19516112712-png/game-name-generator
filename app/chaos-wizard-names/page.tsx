import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("chaos-wizard-names");
export default function Page() { return <LandingPage slug="chaos-wizard-names" />; }
