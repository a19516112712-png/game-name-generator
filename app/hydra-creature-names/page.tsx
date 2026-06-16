import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("hydra-creature-names");
export default function Page() { return <LandingPage slug="hydra-creature-names" />; }
