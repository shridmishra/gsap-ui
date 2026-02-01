"use client";

import React, { useState, useEffect, memo, useMemo } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { motion, AnimatePresence } from "motion/react";
import { componentMap, componentRegistry, codeMap } from "@/registry";
import { useIsDesktop } from "@/hooks";
import { useActiveComponent } from "@/store";
import { previewVariants, previewTransition } from "@/lib/animations";
import { cn } from "@/lib/utils";

const NO_SCALE_CATEGORIES: string[] = [];
const NO_SCALE_IDS = ["spotlight-gallery"];

// Helper to get HTML code from a code entry
const getHtmlCode = (codeEntry: import("@/types").RegistryCodeEntry | undefined): string | null => {
  if (!codeEntry) return null;
  if (typeof codeEntry === "string") return null;
  if ("html" in codeEntry && codeEntry.html) return codeEntry.html;
  return null;
};

export const PreviewArea = memo(function PreviewArea() {
  const activeComponent = useActiveComponent();
  const isDesktop = useIsDesktop();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timeout);
  }, [activeComponent]);

  const ActiveComponentRender = componentMap[activeComponent];

  const activeItem = useMemo(() => {
    for (const cat of componentRegistry) {
      const item = cat.items.find((item) => item.id === activeComponent);
      if (item) return { item, category: cat.category };
    }
    return null;
  }, [activeComponent]);

  // Check if this is an HTML-only component
  const isHtmlOnly = useMemo(() => {
    if (ActiveComponentRender) return false; // Has a React component
    const codeEntry = codeMap[activeComponent];
    return !!getHtmlCode(codeEntry);
  }, [activeComponent, ActiveComponentRender]);

  const htmlCode = useMemo(() => {
    if (!isHtmlOnly) return null;
    return getHtmlCode(codeMap[activeComponent]);
  }, [activeComponent, isHtmlOnly]);

  const isFullWidth = useMemo(() => {
    if (!activeItem) return false;
    const { category, item } = activeItem;

    // HTML-only components are always full width for iframe
    if (isHtmlOnly) return true;

    // Components that should always be centered/not full width
    // border-frame: A small card component that looks best centered
    if (item.id === "border-frame") {
      return false;
    }

    return (
      category === "Hero Section" ||
      category === "Landing Page" ||
      category === "Sections" ||
      category === "GSAP Section" ||
      category.includes("Animations") ||
      item.id === "mango-cards"
    );
  }, [activeItem, isHtmlOnly]);

  const shouldScale = useMemo(() => {
    if (!activeItem) return false;
    const { category, item } = activeItem;

    // HTML components use iframe, no scaling needed
    if (isHtmlOnly) return false;

    // Check if the component should NOT be scaled
    // 1. Check strict no-scale categories
    if (NO_SCALE_CATEGORIES.includes(category)) return false;
    // 2. Check specific component IDs
    if (NO_SCALE_IDS.includes(item.id)) return false;

    return isFullWidth;
  }, [activeItem, isFullWidth, isHtmlOnly]);

  const containerRef = React.useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (!shouldScale || !containerRef.current) {
      setScale(1);
      return;
    }

    const updateScale = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // We want to scale the component (which is min-h-screen)
      // so it fits into the current container height.
      if (viewportHeight > 0) {
        const newScale = Math.min(1, rect.height / viewportHeight);
        setScale(newScale);
      }
    };

    updateScale();
    window.addEventListener("resize", updateScale);

    // Also use ResizeObserver for more accurate container size tracking
    const observer = new ResizeObserver(updateScale);
    observer.observe(containerRef.current);

    return () => {
      window.removeEventListener("resize", updateScale);
      observer.disconnect();
    };
  }, [shouldScale, activeComponent]);

  // Render content based on component type
  const renderContent = () => {
    if (isHtmlOnly && htmlCode) {
      // Render HTML-only component in iframe
      return (
        <iframe
          srcDoc={htmlCode}
          title={activeItem?.item.name || "HTML Preview"}
          className="w-full h-full min-h-[600px] border-0 rounded-lg bg-white"
          sandbox="allow-scripts allow-same-origin"
          style={{ colorScheme: "light dark" }}
        />
      );
    }

    if (shouldScale) {
      return (
        <div
          style={{
            transformOrigin: "top center",
            width: `${(1 / scale) * 100}%`,
            height: `${(1 / scale) * 100}%`,
            position: "absolute",
            top: 0,
            left: "50%",
            transform: `translateX(-50%) scale(${scale})`,
          }}
        >
          {ActiveComponentRender && <ActiveComponentRender />}
        </div>
      );
    }

    return ActiveComponentRender && <ActiveComponentRender />;
  };

  return (
    <div
      ref={containerRef}
      className="h-full w-full overflow-hidden preview-scroll-container"
    >
      <div
        className={cn(
          "min-h-full w-full relative transition-colors duration-300 bg-background",
          !isFullWidth && "flex items-center justify-center",
          activeItem?.item.previewBackground
        )}
      >
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), 
                              linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Centered component preview */}
        <div
          className={cn(
            "relative z-10 w-full",
            !isFullWidth ? "max-w-4xl px-2 py-4" : "h-full"
          )}
        >
          {loading ? (
            <div className="flex flex-col items-center justify-center gap-4">
              <Skeleton className="h-8 w-48 rounded-lg" />
              <Skeleton className="h-24 w-64 rounded-xl" />
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeComponent}
                variants={previewVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={previewTransition}
                className={cn(
                  "w-full",
                  !isFullWidth ? "flex items-center justify-center" : "h-full",
                  isHtmlOnly && "min-h-[600px]"
                )}
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </div>
  );
});
