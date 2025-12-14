"use client";

import React, { useState, useEffect, memo, useMemo } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { motion, AnimatePresence } from "framer-motion";
import { componentMap } from "@/registry";
import { useIsDesktop } from "@/hooks";
import { useActiveComponent, useSidebarOpen } from "@/store";
import { previewVariants, previewTransition } from "@/lib/animations";

export const PreviewArea = memo(function PreviewArea() {
  const activeComponent = useActiveComponent();
  const sidebarOpen = useSidebarOpen();
  const isDesktop = useIsDesktop();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timeout);
  }, [activeComponent]);

  const ActiveComponentRender = componentMap[activeComponent];

  const containerStyle = useMemo(
    () => ({
      marginLeft: sidebarOpen && isDesktop ? 300 : 0,
      width: sidebarOpen && isDesktop ? "calc(100% - 300px)" : "100%",
    }),
    [sidebarOpen, isDesktop]
  );

  return (
    <div
      className="h-screen w-full flex items-center justify-center transition-all duration-300 ease-out"
      style={containerStyle}
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
      <div className="relative z-10 w-full max-w-4xl px-4">
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
              className="flex items-center justify-center"
            >
              {ActiveComponentRender && <ActiveComponentRender />}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
});
