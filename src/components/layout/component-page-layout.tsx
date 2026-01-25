"use client";

import { Eye, Code } from "lucide-react";


import { useEffect, useMemo, useState } from "react";
import {
  Sidebar,
  PreviewArea,
  InfoIsland,
  CodePanelContent,
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
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

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
                <div className="flex p-1 bg-muted/50 border border-border/50 rounded-lg">
                  <button
                    onClick={() => setActiveTab("preview")}
                    className={cn(
                      "flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200",
                      activeTab === "preview"
                        ? "bg-background text-foreground shadow-sm ring-1 ring-black/5 dark:ring-white/5"
                        : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                    )}
                  >
                    <Eye className="w-4 h-4" />
                    Preview
                  </button>
                  <button
                    onClick={() => setActiveTab("code")}
                    className={cn(
                      "flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200",
                      activeTab === "code"
                        ? "bg-background text-foreground shadow-sm ring-1 ring-black/5 dark:ring-white/5"
                        : "text-muted-foreground hover:text-foreground hover:bg-background/50"
                    )}
                  >
                    <Code className="w-4 h-4" />
                    Code
                  </button>
                </div>
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
              {activeTab === "preview" ? (
                <PreviewArea />
              ) : (
                <div className="w-full h-full overflow-hidden">
                  <CodePanelContent showCloseButton={false} />
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <CommandPalette />
    </div>
  );
}
