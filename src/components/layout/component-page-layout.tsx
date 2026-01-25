"use client";

import { useEffect, useMemo } from "react";
import {
  Sidebar,
  PreviewArea,
  ToggleButton,
  InfoIsland,
  CodePanel,
  CommandPalette,
  LoadingSkeleton
} from "@/components/layout";
import { SponsorButton } from "@/components/ui/sponsor-button";
import { useMounted, componentActions, useSidebarOpen, useActiveComponent } from "@/store";
import { componentRegistry } from "@/registry";
import { cn } from "@/lib/utils";

interface ComponentPageLayoutProps {
  componentId?: string;
}

export function ComponentPageLayout({ componentId }: ComponentPageLayoutProps) {
  const mounted = useMounted();
  const isOpen = useSidebarOpen();
  const activeComponentId = useActiveComponent();

  const activeComponent = useMemo(() => {
    return componentRegistry
      .flatMap((c) => c.items)
      .find((i) => i.id === activeComponentId);
  }, [activeComponentId]);



  useEffect(() => {
    componentActions.setMounted(true);

    // Set the active component from URL or prop
    if (componentId) {
      componentActions.setActiveComponentFromUrl(componentId);
    } else {
      // Read component from URL on initial load (supports /category/component-id pattern)
      const path = window.location.pathname;
      const match = path.match(/^\/(?:hero|landing|cards|components|sections)\/([^/]+)$/);
      if (match && match[1]) {
        componentActions.setActiveComponentFromUrl(match[1]);
      }
    }

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
      const match = path.match(/^\/(?:hero|landing|cards|components|sections)\/([^/]+)$/);
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
    <div className="flex min-h-screen bg-background text-foreground overflow-hidden">
      <Sidebar />
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        <div className="flex-1 overflow-hidden bg-muted/20 flex flex-col">
          <div className="px-4 pt-4 md:px-6 md:pt-6">
            <header className="flex items-center justify-between mb-4 min-h-[40px]">
              <div className="flex items-center gap-4">
                {!isOpen && <ToggleButton />}
                <h1 className="text-xl font-semibold tracking-tight">
                  {activeComponent?.name || "UI Components Library"}
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <SponsorButton />
                <InfoIsland />
              </div>
            </header>
          </div>
          <div className={cn(
            "flex-1 w-full overflow-hidden relative",
            "px-4 pb-4 md:px-6 md:pb-6"
          )}>
            <div className={cn(
              "w-full h-full overflow-hidden relative",
              "rounded-xl border border-border bg-background shadow-sm"
            )}>
              <PreviewArea />
            </div>
          </div>
        </div>
      </main>
      <CodePanel />
      <CommandPalette />
    </div>
  );
}
