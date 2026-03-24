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
  textOnScrollCode,
  mouseImageTrailCode,
  textLoaderCode,
  mergeAtCenterCode,
  colorPaletteShowcaseCode,
  mouseImageMaskCode,
  viewMoreMouseCode,
  reverseStickyScrollCode,
  guitarStringCode,
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
    category: "Hover Animations",
    items: [
      {
        name: "Hover Image",
        id: "hover-image",
        isFree: true,
        description: "A project gallery with cursor-following image thumbnails.",
        url: "/components/hover-animations/hover-image",
        installation: "npm install gsap",
        keywords: ["GSAP", "Hover", "Image", "Cursor", "React"],
      },
      {
        name: "Border Frame",
        id: "border-frame",
        isFree: true,
        description: "A card with a glowing border effect that follows the mouse cursor.",
        url: "/components/hover-animations/border-frame",
        installation: "npm install clsx tailwind-merge",
        keywords: ["Card", "Border", "Glow", "Hover Effect", "Tailwind CSS"],
      },
      {
        name: "Mouse Image Trail",
        id: "mouse-image-trail",
        isFree: true,
        description: "A mouse-following image trail effect with GSAP stagger animations.",
        url: "/components/hover-animations/mouse-image-trail",
        installation: "Uses CDN - no npm install required",
        keywords: ["GSAP", "Mouse", "Trail", "Image", "Animation", "Cursor"],
        componentType: "html",
      },
      {
        name: "Mouse Image Mask",
        id: "mouse-image-mask",
        isFree: true,
        description: "A masking effect where a second image is revealed on hover using GSAP.",
        url: "/components/hover-animations/mouse-image-mask",
        installation: "Uses CDN - no npm install required",
        keywords: ["GSAP", "Mask", "Hover", "Image", "Animation"],
        componentType: "html",
      },
      {
        name: "View More Mouse",
        id: "view-more-mouse",
        isFree: true,
        description: "An interactive hover preview with a custom mouse cursor that expands to show view-more text.",
        url: "/components/hover-animations/view-more-mouse",
        installation: "Uses CDN - no npm install required",
        keywords: ["GSAP", "Cursor", "Hover", "Image", "Overlay", "HTML"],
        componentType: "html",
      },
    ],
  },
  {
    category: "Scroll Animations",
    items: [
      {
        name: "Spotlight Gallery",
        id: "spotlight-gallery",
        isFree: true,
        description: "A scrolling spotlight gallery with GSAP animations.",
        url: "/components/scroll-animations/spotlight-gallery",
        installation: "npm install gsap lenis",
        keywords: ["GSAP", "Gallery", "Spotlight", "Scroll Animation", "React"],
      },
      {
        name: "Sticky Scroll",
        id: "sticky-scroll",
        isFree: true,
        description: "A sticky scroll section with transforming cards.",
        url: "/components/scroll-animations/sticky-scroll",
        installation: "npm install gsap lenis",
        keywords: ["GSAP", "Sticky", "Scroll", "Parallax", "React"],
      },
      {
        name: "Reverse Sticky Scroll",
        id: "reverse-sticky-scroll",
        isFree: true,
        description: "A full-page reverse sticky scroll narrative with rotating section transitions.",
        url: "/components/scroll-animations/reverse-sticky-scroll",
        installation: "Uses CDN - no npm install required",
        keywords: ["GSAP", "ScrollTrigger", "Lenis", "Sticky", "Scroll", "HTML"],
        componentType: "html",
      },
    ],
  },
  {
    category: "Text Animations",
    items: [
      {
        name: "Text On Scroll",
        id: "text-on-scroll",
        isFree: true,
        description: "A scroll-triggered text reveal animation using GSAP ScrollTrigger.",
        url: "/components/text-animations/text-on-scroll",
        installation: "Uses CDN - no npm install required",
        keywords: ["GSAP", "ScrollTrigger", "Text", "Animation", "HTML"],
        componentType: "html",
      },
    ],
  },
  {
    category: "Loading Animations",
    items: [
      {
        name: "Text Loader",
        id: "text-loader",
        isFree: true,
        description: "A stunning text reveal loader animation with GSAP-powered staggered letter animations.",
        url: "/components/loading-animations/text-loader",
        installation: "Uses CDN - no npm install required",
        keywords: ["GSAP", "Loader", "Text", "Animation", "Loading", "HTML"],
        componentType: "html",
        needsReload: true,
      },
      {
        name: "Merge At Center",
        id: "merge-at-center",
        isFree: true,
        description: "A center-merge letter animation where text halves animate inward using GSAP.",
        url: "/components/loading-animations/merge-at-center",
        installation: "Uses CDN - no npm install required",
        keywords: ["GSAP", "Text", "Loading", "Center", "Letter Animation", "HTML"],
        componentType: "html",
        needsReload: true,
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
        needsReload: true,
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
    category: "Just for Fun",
    items: [
      {
        name: "Mango Cards",
        id: "mango-cards",
        isFree: true,
        description: "Two mango product cards: a compact preview and an expanded immersive version.",
        url: "/components/just-for-fun/mango-cards",
        installation: "npm install motion",
        keywords: ["Card", "Product", "Animation", "Transition", "Framer Motion"],

      },
      {
        name: "Media Player",
        id: "media-player",
        isFree: true,
        description: "A minimal, modern media player device with a soft rounded-square shape.",
        url: "/components/just-for-fun/media-player",
        installation: "npm install lucide-react react-icons",
        previewBackground: "bg-foreground",
        keywords: ["Card", "Media Player", "Audio", "UI", "React"],
      },
      {
        name: "Color Palette Showcase",
        id: "color-palette-showcase",
        isFree: true,
        description: "A 3D card-based color palette showcase with hover animations.",
        url: "/components/just-for-fun/color-palette-showcase",
        installation: "Uses CDN - no npm install required",
        keywords: ["GSAP", "3D", "Cards", "Color Palette", "Animation", "HTML"],
        componentType: "html",
      },
      {
        name: "Guitar String",
        id: "guitar-string",
        isFree: true,
        description: "An interactive guitar-string curve that bends on mouse move and rebounds with GSAP.",
        url: "/components/just-for-fun/guitar-string",
        installation: "Uses CDN - no npm install required",
        keywords: ["GSAP", "SVG", "Interactive", "Mouse", "String", "HTML"],
        componentType: "html",
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
  "text-on-scroll": textOnScrollCode,
  "mouse-image-trail": mouseImageTrailCode,
  "text-loader": textLoaderCode,
  "merge-at-center": mergeAtCenterCode,
  "color-palette-showcase": colorPaletteShowcaseCode,
  "mouse-image-mask": mouseImageMaskCode,
  "view-more-mouse": viewMoreMouseCode,
  "reverse-sticky-scroll": reverseStickyScrollCode,
  "guitar-string": guitarStringCode,
};
