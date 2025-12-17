"use client";

import React, { useState, useEffect, memo, useMemo } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { motion, AnimatePresence } from "motion/react";
import { componentMap, componentRegistry } from "@/registry";
import { useIsDesktop } from "@/hooks";
import { useActiveComponent } from "@/store";
import { previewVariants, previewTransition } from "@/lib/animations";
import { cn } from "@/lib/utils";

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

  const isFullWidth = useMemo(() => {
    const category = componentRegistry.find((cat) =>
      cat.items.some((item) => item.id === activeComponent)
    );
    return (
      category?.category === "Hero Section" ||
      category?.category === "Landing Page" ||
      category?.category === "Sections" ||
      activeComponent === "mango-cards"
    );
  }, [activeComponent]);

  return (
    <div
      className="h-full w-full overflow-auto scrollbar-hide preview-scroll-container"
    >
      <div
        className={cn(
          "min-h-full w-full relative",
          !isFullWidth && "flex items-center justify-center"
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
            !isFullWidth ? "max-w-4xl px-4 py-12" : "h-full"
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
                  !isFullWidth ? "flex items-center justify-center" : "h-full"
                )}
              >
                {ActiveComponentRender && <ActiveComponentRender />}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </div>
  );
});
