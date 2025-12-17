// Showcase components - demo components for the registry
export { BorderFrameDemo, BorderFrame } from "./cards/border-frame";
export { HoverIndicator } from "./cards/hover-indicator";
export { SimpleHero } from "./hero/simple-hero";
export { AuroraBars } from "./hero/aurora-bars";
export { MangoCards } from "./cards/mango-cards/mango-cards";
export { RaycastBackground } from "./backgrounds/raycast";
export { default as RaycastHero } from "./hero/raycast-hero/raycast-hero";
export { SpotlightGallery } from "./sections/spotlight-gallery";

// Re-export code strings from generated file
export {
  auroraBarsCode,
  simpleHeroCode,
  borderFrameCode,
  mangoCardsCode,
  raycastHeroCode,
  spotlightGalleryCode,
  stickyScrollCode,
} from "@/registry/code-strings";

export { StickyScroll } from "./sections/sticky-scroll";
