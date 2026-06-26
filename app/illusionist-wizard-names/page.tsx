import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("illusionist-wizard-names");
export default function Page() { return <LandingPage slug="illusionist-wizard-names" />; }
