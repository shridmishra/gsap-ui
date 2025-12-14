"use client";

import { useState, useEffect } from "react";

/**
 * Hook to check if we're on desktop (lg breakpoint)
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    
    const updateMatch = () => setMatches(media.matches);
    updateMatch();
    
    media.addEventListener("change", updateMatch);
    return () => media.removeEventListener("change", updateMatch);
  }, [query]);

  return matches;
}

/**
 * Convenience hook for desktop detection
 */
export function useIsDesktop(): boolean {
  return useMediaQuery("(min-width: 1024px)");
}
