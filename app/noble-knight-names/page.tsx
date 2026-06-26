import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("noble-knight-names");
export default function Page() { return <LandingPage slug="noble-knight-names" />; }
