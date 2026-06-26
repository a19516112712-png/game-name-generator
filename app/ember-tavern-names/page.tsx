import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";
export const metadata: Metadata = getLandingMetadata("ember-tavern-names");
export default function Page() { return <LandingPage slug="ember-tavern-names" />; }
