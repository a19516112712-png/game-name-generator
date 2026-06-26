import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("storm-forest-names");
export default function Page() { return <LandingPage slug="storm-forest-names" />; }
