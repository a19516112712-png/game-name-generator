import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("enchanter-wizard-names");
export default function Page() { return <LandingPage slug="enchanter-wizard-names" />; }
