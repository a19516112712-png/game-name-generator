import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("ancient-wizard-names");
export default function Page() { return <LandingPage slug="ancient-wizard-names" />; }
