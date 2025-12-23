"use client";

import { componentRegistry } from "@/registry";

/**
 * Media configuration for a component
 */
export interface MediaConfig {
  /** Video URLs to preload */
  videos?: string[];
  /** Image URLs to preload */
  images?: string[];
  /** Priority level for preloading */
  priority: "critical" | "high" | "medium" | "low";
}

/**
 * Central registry mapping component IDs to their media assets
 * Used for preloading media before component mounts
 */
export const componentMediaMap: Record<string, MediaConfig> = {
  "media-player": {
    videos: ["/card/vhs.mp4", "/card/rose.mp4"],
    images: ["/card/retro.png"],
    priority: "high",
  },
  "illustrated-hero": {
    images: ["/hero/illustrated.png"],
    priority: "high",
  },
  "raycast-hero": {
    images: ["/raycast-bg.png"],
    priority: "medium",
  },
  // External images cannot be preloaded via document hints due to CORS
  // They use OptimizedImage with intersection observer instead
  "simple-hero": {
    images: [], // Uses external Unsplash URL
    priority: "low",
  },
  "sticky-scroll": {
    images: [], // Uses external Unsplash URLs
    priority: "low",
  },
  "border-frame": {
    images: [], // Uses external Unsplash URL
    priority: "low",
  },
};

/**
 * Get media config for a specific component
 */
export function getComponentMedia(componentId: string): MediaConfig | null {
  return componentMediaMap[componentId] || null;
}

/**
 * Get all media URLs for a component
 */
export function getAllMediaUrls(componentId: string): string[] {
  const config = getComponentMedia(componentId);
  if (!config) return [];
  return [...(config.images || []), ...(config.videos || [])];
}

/**
 * Get critical and high priority media for initial preloading
 */
export function getCriticalMedia(): { images: string[]; videos: string[] } {
  const images: string[] = [];
  const videos: string[] = [];

  Object.values(componentMediaMap).forEach((config) => {
    if (config.priority === "critical" || config.priority === "high") {
      images.push(...(config.images || []));
      videos.push(...(config.videos || []));
    }
  });

  return { images, videos };
}

/**
 * Get adjacent component IDs in the registry for predictive preloading
 */
export function getAdjacentComponentIds(currentId: string, count = 2): string[] {
  const allIds: string[] = [];
  
  for (const category of componentRegistry) {
    for (const item of category.items) {
      allIds.push(item.id);
    }
  }

  const currentIndex = allIds.indexOf(currentId);
  if (currentIndex === -1) return [];

  const adjacent: string[] = [];
  
  // Get previous and next components
  for (let i = 1; i <= count; i++) {
    if (currentIndex - i >= 0) {
      adjacent.push(allIds[currentIndex - i]);
    }
    if (currentIndex + i < allIds.length) {
      adjacent.push(allIds[currentIndex + i]);
    }
  }

  return adjacent;
}
