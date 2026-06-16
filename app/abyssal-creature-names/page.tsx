import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("abyssal-creature-names");
export default function Page() { return <LandingPage slug="abyssal-creature-names" />; }
