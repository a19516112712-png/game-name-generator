import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("hydra-monster-names");
export default function Page() { return <LandingPage slug="hydra-monster-names" />; }
