import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("male-pirate-names");
export default function Page() { return <LandingPage slug="male-pirate-names" />; }
