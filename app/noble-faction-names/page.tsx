import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("noble-faction-names");
export default function Page() { return <LandingPage slug="noble-faction-names" />; }
