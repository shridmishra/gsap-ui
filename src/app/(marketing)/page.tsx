import { Metadata } from "next";
import MarketingPageClient from "./marketing-page-client";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  title: "GSAP UI - Animated UI Components for GSAP & React",
  description: "A collection of free, open-source animated UI components built with GSAP, React, and Tailwind CSS. Copy and paste into your project.",
  alternates: {
    canonical: "https://gsap-ui.shrid.in",
  },
};

export default function ComponentsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "GSAP UI",
    "url": "https://gsap-ui.shrid.in",
    "description": "Animated UI Components For GSAP",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://gsap-ui.shrid.in/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <MarketingPageClient />
    </>
  );
}
