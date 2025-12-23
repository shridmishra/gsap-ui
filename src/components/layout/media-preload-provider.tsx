"use client";

import { useCriticalMediaPreloader, useMediaPreloader } from "@/hooks";
import { useActiveComponent } from "@/store";
import { useEffect, useRef } from "react";

/**
 * MediaPreloadProvider - Handles app-level media preloading
 * 
 * Features:
 * - Preloads critical media on mount
 * - Preloads adjacent components when active component changes
 */
export function MediaPreloadProvider({ children }: { children: React.ReactNode }) {
    // Preload critical media on app mount
    useCriticalMediaPreloader();

    // Preload adjacent components when active component changes
    const activeComponent = useActiveComponent();
    const { preloadAdjacent } = useMediaPreloader();
    const previousComponent = useRef<string | null>(null);

    useEffect(() => {
        // Only preload if component actually changed
        if (previousComponent.current !== activeComponent) {
            preloadAdjacent(activeComponent);
            previousComponent.current = activeComponent;
        }
    }, [activeComponent, preloadAdjacent]);

    return <>{children}</>;
}
