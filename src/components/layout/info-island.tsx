"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
import { Command, Code2, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { useActiveComponent as useActiveComponentFromStore, componentActions } from "@/store";
import { useActiveComponent as useActiveItem } from "@/hooks";
import { fadeUpVariants } from "@/lib/animations";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
      <div className="flex items-center gap-0.5 sm:gap-1 p-0.5 sm:p-1 rounded-lg sm:rounded-xl bg-background border border-border shadow-lg h-9 sm:h-10">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={componentActions.openSearch}
                className={buttonStyles}
              >
                <Command className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Open command palette (⌘K)</p>
            </TooltipContent>
          </Tooltip>

          <Divider />

          <Tooltip>
            <TooltipTrigger asChild>
              <button onClick={componentActions.openCodePanel} className={buttonStyles}>
                <Code2 className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>View source code</p>
            </TooltipContent>
          </Tooltip>

          <Divider />

          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href={`/preview/${activeComponent}`}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonStyles}
              >
                <ExternalLink className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>Full Preview</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
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
