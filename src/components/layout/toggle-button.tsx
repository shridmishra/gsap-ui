"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
import { TbLayoutSidebarFilled } from "react-icons/tb";
import { cn } from "@/lib/utils";
import { useSidebarOpen, componentActions } from "@/store";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const ToggleButton = memo(function ToggleButton() {
  const isOpen = useSidebarOpen();

  return (
    <div
      className={cn(
        "fixed top-4 sm:top-6 left-3 sm:left-4 z-50 flex items-center gap-1.5 sm:gap-2",
        isOpen && "hidden lg:flex"
      )}
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <motion.button
              onClick={componentActions.toggleSidebar}
              className={cn(
                "flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-background border border-border shadow-lg",
                "hover:bg-foreground/5 transition-colors"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
            >
              <TbLayoutSidebarFilled
                className={cn(
                  "w-4 h-4 sm:w-[18px] sm:h-[18px] transition-transform duration-300",
                  isOpen && "rotate-180"
                )}
              />
            </motion.button>
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>{isOpen ? "Close sidebar" : "Open sidebar"}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
});
