"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
import { Command, Code2, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { useActiveComponent as useActiveComponentFromStore, componentActions } from "@/store";
import { useActiveComponent as useActiveItem } from "@/hooks";
import { fadeUpVariants } from "@/lib/animations";

// Shared button styles
const buttonStyles = cn(
  "flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-md sm:rounded-lg transition-colors",
  "hover:bg-foreground/10"
);

// Memoized divider
const Divider = memo(function Divider() {
  return <div className="w-px h-4 sm:h-5 bg-border" />;
});

export const InfoIsland = memo(function InfoIsland() {
  const activeComponent = useActiveComponentFromStore();
  const activeItem = useActiveItem(activeComponent);

  return (
    <motion.div
      variants={fadeUpVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-4 sm:top-6 right-3 sm:right-4 z-50"
    >
      <div className="flex items-center gap-0.5 sm:gap-1 p-0.5 sm:p-1 rounded-lg sm:rounded-xl bg-background/80 backdrop-blur-xl border border-border shadow-lg h-9 sm:h-10">
        <button
          onClick={componentActions.openSearch}
          className={buttonStyles}
          title="Open command palette (⌘K)"
        >
          <Command className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
        </button>

        <Divider />

        <button onClick={componentActions.openCodePanel} className={buttonStyles} title="View source code">
          <Code2 className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
        </button>

        <Divider />

        <a
          href={`/preview/${activeComponent}`}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonStyles}
          title="Open in new tab"
        >
          <ExternalLink className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
        </a>
      </div>

      {/* Component name tooltip */}
      {activeItem && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-2 text-right"
        >
          <span className="text-xs text-foreground/40 font-medium">{activeItem.name}</span>
        </motion.div>
      )}
    </motion.div>
  );
});
