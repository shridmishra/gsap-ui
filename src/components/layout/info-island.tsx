"use client";

import React, { memo, useCallback } from "react";
import { motion } from "framer-motion";
import { Code2, Search, Home, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { flushSync } from "react-dom";
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
  const { theme, setTheme } = useTheme();
  const activeComponent = useActiveComponentFromStore();
  const activeItem = useActiveItem(activeComponent);

  const toggleTheme = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      const newTheme = theme === "light" ? "dark" : "light";

      if (
        !document.startViewTransition ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        setTheme(newTheme);
        return;
      }

      const transition = document.startViewTransition(() => {
        flushSync(() => {
          setTheme(newTheme);
        });
      });

      const x = e.clientX;
      const y = e.clientY;
      const endRadius = Math.hypot(
        Math.max(x, innerWidth - x),
        Math.max(y, innerHeight - y)
      );

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
    },
    [theme, setTheme]
  );

  return (
    <motion.div
      variants={fadeUpVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-4 sm:top-6 right-3 sm:right-4 z-50"
    >
      <div className="flex items-center gap-0.5 sm:gap-1 p-0.5 sm:p-1 rounded-lg sm:rounded-xl bg-background/80 backdrop-blur-xl border border-border shadow-lg h-9 sm:h-10">
        <a href="https://shrid.in" className={buttonStyles} title="Home">
          <Home className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
        </a>

        <Divider />

        <button onClick={toggleTheme} className={cn(buttonStyles, "relative")} title="Toggle theme">
          <Sun className="w-4 h-4 sm:w-[18px] sm:h-[18px] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="w-4 h-4 sm:w-[18px] sm:h-[18px] absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        </button>

        <Divider />

        <button onClick={componentActions.openSearch} className={buttonStyles} title="Search components">
          <Search className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
        </button>

        <Divider />

        <button onClick={componentActions.openCodePanel} className={buttonStyles} title="View source code">
          <Code2 className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
        </button>
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
