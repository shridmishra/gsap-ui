import React from "react";
import type { ComponentCategory } from "@/types";
import { 
  BorderFrameDemo, borderFrameCode,
  SimpleHero, simpleHeroCode,
  AuroraBars, auroraBarsCode,
  FeatureSection, featureSectionCode,
  WaveButton, waveButtonCode,
  MangoCards, mangoCardsCode
} from "@/components/showcase";

// Re-export showcase components for convenience
export { 
  BorderFrameDemo, borderFrameCode,
  SimpleHero, simpleHeroCode,
  AuroraBars, auroraBarsCode,
  FeatureSection, featureSectionCode,
  WaveButton, waveButtonCode,
  MangoCards, mangoCardsCode
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
        url: "/landing/feature-section",
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
        url: "/hero/simple-hero",
        installation: "npm install lucide-react react-icons",
      },
      { 
        name: "Aurora Bars", 
        id: "aurora-bars", 
        isFree: true,
        description: "A visual hero background with animated aurora-like bars.",
        url: "/hero/aurora-bars",
        installation: "npm install motion react-icons lucide-react next-themes clsx tailwind-merge",
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
        url: "/cards/border-frame",
        installation: "npm install clsx tailwind-merge",
      },
      { 
        name: "Mango Cards", 
        id: "mango-cards", 
        isFree: true,
        description: "Two mango product cards: a compact preview and an expanded immersive version.",
        url: "/cards/mango-cards",
        installation: "npm install lucide-react",
      },
    ],
  },
  {
    category: "Buttons",
    items: [
      { 
        name: "Wave Button", 
        id: "wave-button", 
        isFree: true,
        description: "A button with a wave effect that follows the mouse cursor.",
        url: "/buttons/wave-button",
        installation: "npm install clsx tailwind-merge",
      },
    ],
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const componentMap: Record<string, React.ComponentType<any>> = {
  "border-frame": BorderFrameDemo,
  "simple-hero": SimpleHero,
  "aurora-bars": AuroraBars,
  "feature-section": FeatureSection,
  "wave-button": WaveButton,
  "mango-cards": MangoCards,
};

export const codeMap: Record<string, string> = {
  "border-frame": borderFrameCode,
  "simple-hero": simpleHeroCode,
  "aurora-bars": auroraBarsCode,
  "feature-section": featureSectionCode,
  "wave-button": waveButtonCode,
  "mango-cards": mangoCardsCode,
};
