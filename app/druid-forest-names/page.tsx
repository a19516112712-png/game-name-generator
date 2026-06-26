import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("druid-forest-names");
export default function Page() { return <LandingPage slug="druid-forest-names" />; }
