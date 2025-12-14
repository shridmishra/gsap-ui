"use client";

import { useMemo } from "react";
import { componentRegistry } from "@/registry";
import type { ComponentItem } from "@/types";

/**
 * Flattened list of all component items with their category
 */
export type FlatComponentItem = ComponentItem & { category: string };

/**
 * Returns a flattened, memoized list of all components
 */
export function useComponentList(): FlatComponentItem[] {
  return useMemo(
    () =>
      componentRegistry.flatMap((cat) =>
        cat.items.map((item) => ({ ...item, category: cat.category }))
      ),
    []
  );
}

/**
 * Returns the active component item based on the ID
 */
export function useActiveComponent(activeId: string): FlatComponentItem | undefined {
  const components = useComponentList();
  return useMemo(
    () => components.find((item) => item.id === activeId),
    [components, activeId]
  );
}

/**
 * Returns filtered components based on a search query
 */
export function useFilteredComponents(query: string): FlatComponentItem[] {
  const components = useComponentList();
  
  return useMemo(() => {
    if (!query.trim()) return components;
    
    const lowerQuery = query.toLowerCase();
    return components.filter(
      (item) =>
        item.name.toLowerCase().includes(lowerQuery) ||
        item.description.toLowerCase().includes(lowerQuery)
    );
  }, [components, query]);
}
