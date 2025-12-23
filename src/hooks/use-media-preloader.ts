"use client";

import { useCallback, useEffect, useRef } from "react";
import {
  getComponentMedia,
  getAllMediaUrls,
  getAdjacentComponentIds,
  getCriticalMedia,
} from "@/lib/media-registry";

// Track preloaded URLs to avoid duplicate requests
const preloadedUrls = new Set<string>();

/**
 * Preload an image by creating a new Image object
 */
function preloadImage(url: string): Promise<void> {
  if (preloadedUrls.has(url)) return Promise.resolve();
  
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      preloadedUrls.add(url);
      resolve();
    };
    img.onerror = reject;
    img.src = url;
  });
}

/**
 * Preload a video by fetching the first chunk
 * This loads enough data for instant playback start
 */
function preloadVideo(url: string): Promise<void> {
  if (preloadedUrls.has(url)) return Promise.resolve();
  
  return fetch(url, {
    method: "GET",
    headers: {
      Range: "bytes=0-500000", // First 500KB for fast start
    },
  })
    .then(() => {
      preloadedUrls.add(url);
    })
    .catch((err) => {
      console.warn(`Failed to preload video: ${url}`, err);
    });
}

/**
 * Hook for media preloading with various strategies
 */
export function useMediaPreloader() {
  const pendingPreloads = useRef<Map<string, Promise<void>>>(new Map());

  /**
   * Preload all media for a specific component
   */
  const preloadComponent = useCallback((componentId: string): void => {
    const config = getComponentMedia(componentId);
    if (!config) return;

    // Preload images
    config.images?.forEach((url) => {
      if (!pendingPreloads.current.has(url)) {
        pendingPreloads.current.set(url, preloadImage(url));
      }
    });

    // Preload videos
    config.videos?.forEach((url) => {
      if (!pendingPreloads.current.has(url)) {
        pendingPreloads.current.set(url, preloadVideo(url));
      }
    });
  }, []);

  /**
   * Prefetch media when hovering over a sidebar item
   * Uses requestIdleCallback for non-blocking preload
   */
  const prefetchOnHover = useCallback(
    (componentId: string): void => {
      if (typeof window !== "undefined" && "requestIdleCallback" in window) {
        window.requestIdleCallback(() => preloadComponent(componentId), {
          timeout: 500,
        });
      } else {
        // Fallback for Safari
        setTimeout(() => preloadComponent(componentId), 100);
      }
    },
    [preloadComponent]
  );

  /**
   * Preload adjacent components in the registry
   * Called when active component changes
   */
  const preloadAdjacent = useCallback(
    (currentId: string): void => {
      const adjacentIds = getAdjacentComponentIds(currentId, 2);
      
      if (typeof window !== "undefined" && "requestIdleCallback" in window) {
        adjacentIds.forEach((id, index) => {
          window.requestIdleCallback(
            () => preloadComponent(id),
            { timeout: 1000 + index * 500 }
          );
        });
      } else {
        adjacentIds.forEach((id, index) => {
          setTimeout(() => preloadComponent(id), 500 + index * 300);
        });
      }
    },
    [preloadComponent]
  );

  /**
   * Check if a media URL is already preloaded
   */
  const isPreloaded = useCallback((url: string): boolean => {
    return preloadedUrls.has(url);
  }, []);

  /**
   * Get all preloaded URLs for debugging
   */
  const getPreloadedUrls = useCallback((): string[] => {
    return Array.from(preloadedUrls);
  }, []);

  return {
    prefetchOnHover,
    preloadComponent,
    preloadAdjacent,
    isPreloaded,
    getPreloadedUrls,
  };
}

/**
 * Hook to preload critical media on app mount
 * Should be used in root layout or main app component
 */
export function useCriticalMediaPreloader() {
  useEffect(() => {
    const { images, videos } = getCriticalMedia();

    // Use requestIdleCallback to not block initial render
    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      window.requestIdleCallback(
        () => {
          images.forEach(preloadImage);
          videos.forEach(preloadVideo);
        },
        { timeout: 2000 }
      );
    } else {
      setTimeout(() => {
        images.forEach(preloadImage);
        videos.forEach(preloadVideo);
      }, 1000);
    }
  }, []);
}

/**
 * Get all media URLs for a component (for SSR preload hints)
 */
export function getPreloadHints(componentId: string): string[] {
  return getAllMediaUrls(componentId);
}
