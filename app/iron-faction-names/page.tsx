import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("iron-faction-names");
export default function Page() { return <LandingPage slug="iron-faction-names" />; }
