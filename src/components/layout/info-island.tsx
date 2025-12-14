"use client";

import React, { memo, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Command, Code2, ExternalLink, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useActiveComponent as useActiveComponentFromStore, componentActions } from "@/store";
import { useActiveComponent as useActiveItem } from "@/hooks";
import { fadeUpVariants } from "@/lib/animations";
import { useTheme } from "next-themes";
import { flushSync } from "react-dom";
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
  const { theme, setTheme } = useTheme();

  const toggleTheme = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const newTheme = theme === "light" ? "dark" : "light";

    if (
      !document.startViewTransition ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setTheme(newTheme);
      return;
    }

    const x = e.clientX;
    const y = e.clientY;
    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    );

    const transition = document.startViewTransition(() => {
      flushSync(() => {
        setTheme(newTheme);
      });
    });

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 500,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    });
  }, [theme, setTheme]);

  return (
    <motion.div
      variants={fadeUpVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex items-center gap-0.5 sm:gap-1 p-0.5 sm:p-1 rounded-lg sm:rounded-xl bg-background border border-border shadow-sm h-9 sm:h-10">
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
              <button onClick={toggleTheme} className={buttonStyles}>
                {theme === "light" ? (
                  <Moon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                ) : (
                  <Sun className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                )}
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Switch to {theme === "light" ? "Dark" : "Light"} Mode</p>
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


    </motion.div>
  );
});
