import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("haunted-forest-names");
export default function Page() { return <LandingPage slug="haunted-forest-names" />; }
