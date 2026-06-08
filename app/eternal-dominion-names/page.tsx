import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("eternal-dominion-names");

export default function Page() {
  return <LandingPage slug="eternal-dominion-names" />;
}
