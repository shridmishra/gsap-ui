import React from "react";
import type { ComponentCategory } from "@/types";
import { 
  BorderFrameDemo, borderFrameCode,
  SimpleHero, simpleHeroCode,
  AuroraBars, auroraBarsCode,
  MangoCards, mangoCardsCode,
  MediaPlayerDemo, mediaPlayerCode,

  RaycastHero, raycastHeroCode,
  IllustratedHero, illustratedHeroCode,
  SpotlightGallery, spotlightGalleryCode,
  StickyScroll, stickyScrollCode,
  HoverImage, hoverImageCode,
} from "@/registry/blocks";

// Re-export showcase components for convenience
export { 
  BorderFrameDemo, borderFrameCode,
  SimpleHero, simpleHeroCode,
  AuroraBars, auroraBarsCode,
 
  
  MangoCards, mangoCardsCode,
  MediaPlayerDemo, mediaPlayerCode,

  RaycastHero, raycastHeroCode,
  IllustratedHero, illustratedHeroCode,
  SpotlightGallery, spotlightGalleryCode,
  StickyScroll, stickyScrollCode,
  HoverImage, hoverImageCode,
} from "@/registry/blocks";

// Re-export types from centralized location
export type { ComponentItem, ComponentCategory } from "@/types";

export const componentRegistry: ComponentCategory[] = [
  {
    category: "GSAP Section",
    items: [
      { 
        name: "Spotlight Gallery", 
        id: "spotlight-gallery", 
        isFree: true,
        description: "A scrolling spotlight gallery with GSAP animations.",
        url: "/components/gsap-section/spotlight-gallery",
        installation: "npm install gsap lenis",
        keywords: ["GSAP", "Gallery", "Spotlight", "Scroll Animation", "React"],
      },
      { 
        name: "Sticky Scroll", 
        id: "sticky-scroll", 
        isFree: true,
        description: "A sticky scroll section with transforming cards.",
        url: "/components/gsap-section/sticky-scroll",
        installation: "npm install gsap lenis",
        keywords: ["GSAP", "Sticky", "Scroll", "Parallax", "React"],
      },
      { 
        name: "Hover Image", 
        id: "hover-image", 
        isFree: true,
        description: "A project gallery with cursor-following image thumbnails.",
        url: "/components/gsap-section/hover-image",
        installation: "npm install gsap",
        keywords: ["GSAP", "Hover", "Image", "Cursor", "React"],
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
        url: "/components/hero/simple-hero",
        installation: "npm install lucide-react react-icons",
        keywords: ["Hero", "Simple", "Clean", "React", "Tailwind CSS"],
      },
      { 
        name: "Aurora Bars", 
        id: "aurora-bars", 
        isFree: true,
        description: "A visual hero background with animated aurora-like bars.",
        url: "/components/hero/aurora-bars",
        installation: "npm install motion react-icons lucide-react next-themes clsx tailwind-merge",
        keywords: ["Hero", "Aurora", "Background", "Animation", "Framer Motion"],
      },
      { 
        name: "Raycast Hero", 
        id: "raycast-hero", 
        isFree: true,
        description: "A Raycast-inspired hero section with a glowing arc and dashboard preview.",
        url: "/components/hero/raycast-hero",
        installation: "npm install motion lucide-react clsx tailwind-merge",
        keywords: ["Hero", "Raycast", "Glow", "Dark Mode", "Framer Motion"],
      },
      { 
        name: "Illustrated Hero", 
        id: "illustrated-hero", 
        isFree: true,
        description: "A modern hero section with specific illustration.",
        url: "/components/hero/illustrated-hero",
        installation: "npm install motion lucide-react",
        keywords: ["Hero", "Illustration", "Modern", "React", "Framer Motion"],
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
        url: "/components/cards/border-frame",
        installation: "npm install clsx tailwind-merge",
        keywords: ["Card", "Border", "Glow", "Hover Effect", "Tailwind CSS"],
      },
      { 
        name: "Mango Cards", 
        id: "mango-cards", 
        isFree: true,
        description: "Two mango product cards: a compact preview and an expanded immersive version.",
        url: "/components/cards/mango-cards",
        installation: "npm install motion",
        keywords: ["Card", "Product", "Animation", "Transition", "Framer Motion"],
        
      },
      { 
        name: "Media Player", 
        id: "media-player", 
        isFree: true,
        description: "A minimal, modern media player device with a soft rounded-square shape.",
        url: "/components/cards/media-player",
        installation: "npm install lucide-react react-icons",
        previewBackground: "bg-foreground", 
        keywords: ["Card", "Media Player", "Audio", "UI", "React"], 
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

  "raycast-hero": RaycastHero,
  "illustrated-hero": IllustratedHero,
  "spotlight-gallery": SpotlightGallery,
  "sticky-scroll": StickyScroll,
  "hover-image": HoverImage,
};

export const codeMap: Record<string, import("@/types").RegistryCodeEntry> = {
  "border-frame": borderFrameCode,
  "simple-hero": simpleHeroCode,
  "aurora-bars": auroraBarsCode,

  "mango-cards": mangoCardsCode,
  "media-player": mediaPlayerCode,
  "raycast-hero": raycastHeroCode,

  "illustrated-hero": illustratedHeroCode,
  "spotlight-gallery": spotlightGalleryCode,
  "sticky-scroll": stickyScrollCode,
  "hover-image": hoverImageCode,
};
