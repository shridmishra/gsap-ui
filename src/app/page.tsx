"use client";

import { useEffect } from "react";
import { 
  Sidebar, 
  PreviewArea, 
  ToggleButton, 
  InfoIsland, 
  CodePanel, 
  SearchPalette,
  LoadingSkeleton 
} from "@/components/layout";
import { useMounted, componentActions } from "@/store";

export default function ComponentsPage() {
  const mounted = useMounted();

  // Initialize on mount
  useEffect(() => {
    componentActions.setMounted(true);

    // Set initial sidebar state based on screen size
    componentActions.setSidebarOpen(window.innerWidth >= 1024);

    const handleResize = () => {
      componentActions.setSidebarOpen(window.innerWidth >= 1024);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        componentActions.openSearch();
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

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
      <SearchPalette />
    </div>
  );
}
