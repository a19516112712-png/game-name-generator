import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("imperial-knight-names");
export default function Page() { return <LandingPage slug="imperial-knight-names" />; }
