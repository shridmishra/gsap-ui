import React from "react";
import type { ComponentCategory } from "@/types";
import { 
  BorderFrameDemo, borderFrameCode,
  SimpleHero, simpleHeroCode,
  FeatureSection, featureSectionCode,
  GlassCardDemo, glassCardCode
} from "@/components/showcase";

// Re-export showcase components for convenience
export { 
  BorderFrameDemo, borderFrameCode,
  SimpleHero, simpleHeroCode,
  FeatureSection, featureSectionCode,
  GlassCardDemo, glassCardCode
} from "@/components/showcase";

// Re-export types from centralized location
export type { ComponentItem, ComponentCategory } from "@/types";

export const componentRegistry: ComponentCategory[] = [
  {
    category: "Landing Page",
    items: [
      { 
        name: "Feature Section", 
        id: "feature-section", 
        isFree: true,
        description: "A responsive feature section with icons and grid layout.",
        installation: "npm install lucide-react",
      },
    ],
  },
  {
    category: "Hero Section",
    items: [
      { 
        name: "Simple Hero", 
        id: "simple-hero", 
        isFree: true,
        description: "A clean hero section with a title, description, and call-to-action buttons.",
        installation: "npm install lucide-react",
      },
    ],
  },
  {
    category: "Components",
    items: [
      { 
        name: "Glass Card", 
        id: "glass-card", 
        isFree: true,
        description: "A modern glassmorphism card with hover effects.",
        installation: "npm install clsx tailwind-merge",
      },
    ],
  },
  {
    category: "Cards",
    items: [
      { 
        name: "Border Frame", 
        id: "border-frame", 
        isFree: true,
        description: "A card with a glowing border effect that follows the mouse cursor.",
        installation: "npm install clsx tailwind-merge",
      },
    ],
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const componentMap: Record<string, React.ComponentType<any>> = {
  "border-frame": BorderFrameDemo,
  "simple-hero": SimpleHero,
  "feature-section": FeatureSection,
  "glass-card": GlassCardDemo,
};

export const codeMap: Record<string, string> = {
  "border-frame": borderFrameCode,
  "simple-hero": simpleHeroCode,
  "feature-section": featureSectionCode,
  "glass-card": glassCardCode,
};
