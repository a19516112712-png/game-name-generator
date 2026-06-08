import type { Metadata } from "next";
import LandingPage, { getLandingMetadata } from "@/components/landing-page";

export const metadata: Metadata = getLandingMetadata("eternal-realm-names");

export default function Page() {
  return <LandingPage slug="eternal-realm-names" />;
}
