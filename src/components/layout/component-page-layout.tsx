"use client";

import { useEffect } from "react";
import { 
  Sidebar, 
  PreviewArea, 
  ToggleButton, 
  InfoIsland, 
  CodePanel, 
  CommandPalette,
  LoadingSkeleton 
} from "@/components/layout";
import { useMounted, componentActions } from "@/store";

interface ComponentPageLayoutProps {
  componentId?: string;
}

export function ComponentPageLayout({ componentId }: ComponentPageLayoutProps) {
  const mounted = useMounted();

  useEffect(() => {
    componentActions.setMounted(true);

    // Set the active component from URL or prop
    if (componentId) {
      componentActions.setActiveComponentFromUrl(componentId);
    } else {
      // Read component from URL on initial load (supports /category/component-id pattern)
      const path = window.location.pathname;
      const match = path.match(/^\/(?:hero|landing|cards|components)\/([^/]+)$/);
      if (match && match[1]) {
        componentActions.setActiveComponentFromUrl(match[1]);
      }
    }

    // Set initial sidebar state - closed by default
    componentActions.setSidebarOpen(false);

    const handleResize = () => {
      // Keep sidebar closed on resize
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        componentActions.openSearch();
      }
    };

    const handlePopState = () => {
      const path = window.location.pathname;
      const match = path.match(/^\/(?:hero|landing|cards|components)\/([^/]+)$/);
      if (match && match[1]) {
        componentActions.setActiveComponentFromUrl(match[1]);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [componentId]);

  if (!mounted) {
    return <LoadingSkeleton />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <ToggleButton />
      <InfoIsland />
      <Sidebar />
      <main className="h-screen">
        <PreviewArea />
      </main>
      <CodePanel />
      <CommandPalette />
    </div>
  );
}
