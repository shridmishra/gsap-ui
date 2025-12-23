import React from "react";
import type { ComponentCategory } from "@/types";
import { 
  BorderFrameDemo, borderFrameCode,
  SimpleHero, simpleHeroCode,
  AuroraBars, auroraBarsCode,
  MangoCards, mangoCardsCode,
  MediaPlayerDemo, mediaPlayerCode,
  RaycastBackground,

  RaycastHero, raycastHeroCode,
  IllustratedHero, illustratedHeroCode,
  SpotlightGallery, spotlightGalleryCode,
  StickyScroll, stickyScrollCode,
} from "@/components/showcase";

// Re-export showcase components for convenience
export { 
  BorderFrameDemo, borderFrameCode,
  SimpleHero, simpleHeroCode,
  AuroraBars, auroraBarsCode,
 
  
  MangoCards, mangoCardsCode,
  MediaPlayerDemo, mediaPlayerCode,
  RaycastBackground,

  RaycastHero, raycastHeroCode,
  IllustratedHero, illustratedHeroCode,
  SpotlightGallery, spotlightGalleryCode,
  StickyScroll, stickyScrollCode,
} from "@/components/showcase";

// Re-export types from centralized location
export type { ComponentItem, ComponentCategory } from "@/types";

export const componentRegistry: ComponentCategory[] = [
  {
    category: "Sections",
    items: [
      { 
        name: "Spotlight Gallery", 
        id: "spotlight-gallery", 
        isFree: true,
        description: "A scrolling spotlight gallery with GSAP animations.",
        url: "/sections/spotlight-gallery",
        installation: "npm install gsap lenis",
      },
      { 
        name: "Sticky Scroll", 
        id: "sticky-scroll", 
        isFree: true,
        description: "A sticky scroll section with transforming cards.",
        url: "/sections/sticky-scroll",
        installation: "npm install gsap lenis",
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
      { 
        name: "Raycast Hero", 
        id: "raycast-hero", 
        isFree: true,
        description: "A Raycast-inspired hero section with a glowing arc and dashboard preview.",
        url: "/hero/raycast-hero",
        installation: "npm install motion lucide-react clsx tailwind-merge",
      },
      { 
        name: "Illustrated Hero", 
        id: "illustrated-hero", 
        isFree: true,
        description: "A modern hero section with specific illustration.",
        url: "/hero/illustrated-hero",
        installation: "npm install motion lucide-react",
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
        installation: "npm install motion",
        
      },
      { 
        name: "Media Player", 
        id: "media-player", 
        isFree: true,
        description: "A minimal, modern media player device with a soft rounded-square shape.",
        url: "/cards/media-player",
        installation: "npm install lucide-react react-icons",
        previewBackground: "bg-foreground", 
      },
    ],
  },
  {
    category: "Backgrounds",
    items: [
      { 
        name: "Raycast Background", 
        id: "raycast-background", 
        isFree: true,
        description: "A glowing beam background effect inspired by Raycast.",
        url: "/backgrounds/raycast-background",
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
  "mango-cards": MangoCards,
  "media-player": MediaPlayerDemo,
  "raycast-background": RaycastBackground,

  "raycast-hero": RaycastHero,
  "illustrated-hero": IllustratedHero,
  "spotlight-gallery": SpotlightGallery,
  "sticky-scroll": StickyScroll,
};

export const codeMap: Record<string, string> = {
  "border-frame": borderFrameCode,
  "simple-hero": simpleHeroCode,
  "aurora-bars": auroraBarsCode,

  "mango-cards": mangoCardsCode,
  "media-player": mediaPlayerCode,
  "raycast-hero": raycastHeroCode,

  "illustrated-hero": illustratedHeroCode,
  "spotlight-gallery": spotlightGalleryCode,
  "sticky-scroll": stickyScrollCode,
};
