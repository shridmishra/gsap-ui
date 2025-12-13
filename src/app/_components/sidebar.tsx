"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { flushSync } from "react-dom";
import { cn } from "@/lib/utils";
import { componentRegistry } from "@/app/_registry";

interface SidebarProps {
  activeComponent: string;
  setActiveComponent: (id: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}

export const Sidebar = ({
  activeComponent,
  setActiveComponent,
  isOpen,
  onToggle,
}: SidebarProps) => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newTheme = theme === "light" ? "dark" : "light";

    if (!document.startViewTransition || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
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
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={cn(
            "fixed z-40",
            "bg-background/95 lg:bg-background/80 backdrop-blur-xl",
            "border-r lg:border border-border lg:rounded-2xl shadow-2xl",
            "overflow-hidden",
            "inset-0 w-full h-full",
            "lg:inset-auto lg:left-4 lg:top-1/2 lg:-translate-y-1/2 lg:w-[280px] lg:min-h-[calc(100vh-10rem)] lg:h-auto"
          )}
        >
          <div className="w-full h-full overflow-y-auto py-6 px-4">
            {/* Header with home, theme toggle, and close button */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
              <div className="flex items-center gap-2">
                <a
                  href="https://shrid.in"
                  className="flex items-center justify-center w-9 h-9 rounded-lg hover:bg-foreground/10 transition-colors"
                  title="Go to home"
                >
                  <Home className="w-5 h-5" />
                </a>
                <button
                  onClick={toggleTheme}
                  className="flex items-center justify-center w-9 h-9 rounded-lg hover:bg-foreground/10 transition-colors relative"
                  title="Toggle theme"
                >
                  <Sun className="w-5 h-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                  <Moon className="w-5 h-5 absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                </button>
              </div>
              <button
                onClick={onToggle}
                className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg hover:bg-foreground/10 transition-colors"
                title="Close sidebar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
        
            {/* Navigation */}
            <nav className="space-y-6">
              {componentRegistry.map((category) => (
                <div key={category.category}>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground/80 mb-3 px-2">
                    {category.category}
                  </h3>
                  <ul className="space-y-1">
                    {category.items.map((item) => (
                      <li key={item.id}>
                        <button
                          onClick={() => setActiveComponent(item.id)}
                          className={cn(
                            "w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all",
                            activeComponent === item.id
                              ? "bg-foreground/10 text-foreground font-medium"
                              : "text-foreground/60 hover:text-foreground hover:bg-foreground/5"
                          )}
                        >
                          <span className="flex items-center gap-2">
                            {activeComponent === item.id && (
                              <motion.div
                                layoutId="activeIndicator"
                                className="w-1 h-4 bg-pink-500 rounded-full"
                              />
                            )}
                            {item.name}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};
