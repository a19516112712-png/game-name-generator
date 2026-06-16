import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("pegasus-creature-names");
export default function Page() { return <LandingPage slug="pegasus-creature-names" />; }
