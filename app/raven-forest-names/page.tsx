import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("raven-forest-names");
export default function Page() { return <LandingPage slug="raven-forest-names" />; }
