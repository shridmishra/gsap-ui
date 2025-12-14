"use client";

import React, { useState, useEffect, useRef, memo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowRight, Home, Moon, Sun, Sidebar, Code2, ExternalLink } from "lucide-react";
import { useTheme } from "next-themes";
import { flushSync } from "react-dom";
import { useFilteredComponents, type FlatComponentItem } from "@/hooks";
import { useSearchOpen, useActiveComponent, componentActions } from "@/store";
import { modalVariants, fadeVariants, springTransition } from "@/lib/animations";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Quick action item
interface QuickAction {
  id: string;
  name: string;
  icon: React.ReactNode;
  shortcut?: string;
  action: () => void;
}

// Memoized quick action item
const QuickActionItem = memo(function QuickActionItem({
  action,
  onExecute,
}: {
  action: QuickAction;
  onExecute: () => void;
}) {
  return (
    <button
      onClick={() => {
        action.action();
        onExecute();
      }}
      className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-accent group transition-colors text-left"
    >
      <div className="flex items-center gap-3">
        <div className="text-muted-foreground group-hover:text-foreground">
          {action.icon}
        </div>
        <span className="text-sm text-foreground font-medium">
          {action.name}
        </span>
      </div>
      {action.shortcut && (
        <span className="text-xs text-muted-foreground bg-muted px-1.5 py-0.5 rounded">
          {action.shortcut}
        </span>
      )}
    </button>
  );
});

// Memoized search result item
const SearchResultItem = memo(function SearchResultItem({
  item,
  onSelect,
}: {
  item: FlatComponentItem;
  onSelect: (id: string) => void;
}) {
  return (
    <button
      onClick={() => onSelect(item.id)}
      className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-accent group transition-colors text-left"
    >
      <div className="flex flex-col gap-0.5">
        <span className="text-sm text-foreground font-medium">
          {item.name}
        </span>
        <span className="text-xs text-muted-foreground group-hover:text-foreground/80">
          {item.category}
        </span>
      </div>
      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
    </button>
  );
});

// Section header
const SectionHeader = memo(function SectionHeader({ title }: { title: string }) {
  return (
    <div className="px-3 py-1.5 text-[10px] uppercase tracking-wider text-muted-foreground font-medium">
      {title}
    </div>
  );
});

export const CommandPalette = memo(function CommandPalette() {
  const isOpen = useSearchOpen();
  const activeComponent = useActiveComponent();
  const { theme, setTheme } = useTheme();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const filteredComponents = useFilteredComponents(query);

  const toggleTheme = useCallback(() => {
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

    const x = window.innerWidth / 2;
    const y = window.innerHeight / 2;
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
  }, [theme, setTheme]);

  const quickActions: QuickAction[] = [
    {
      id: "home",
      name: "Go to Home",
      icon: <Home className="w-4 h-4" />,
      action: () => {
        window.location.href = "https://shrid.in";
      },
    },
    {
      id: "theme",
      name: theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode",
      icon: theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />,
      action: toggleTheme,
    },
    {
      id: "sidebar",
      name: "Toggle Sidebar",
      icon: <Sidebar className="w-4 h-4" />,
      action: componentActions.toggleSidebar,
    },
    {
      id: "code",
      name: "View Source Code",
      icon: <Code2 className="w-4 h-4" />,
      action: componentActions.openCodePanel,
    },
    {
      id: "preview",
      name: "Open in New Tab",
      icon: <ExternalLink className="w-4 h-4" />,
      action: () => {
        window.open(`/preview/${activeComponent}`, "_blank");
      },
    },
  ];

  // Filter quick actions based on query
  const filteredActions = query.trim()
    ? quickActions.filter((action) =>
        action.name.toLowerCase().includes(query.toLowerCase())
      )
    : quickActions;

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") componentActions.closeSearch();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSelect = useCallback((id: string) => {
    componentActions.setActiveComponent(id);
    componentActions.closeSearch();
  }, []);

  const handleActionExecute = useCallback(() => {
    componentActions.closeSearch();
  }, []);

  const showActions = !query.trim() || filteredActions.length > 0;
  const showComponents = query.trim() ? filteredComponents.length > 0 : true;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            variants={fadeVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={componentActions.closeSearch}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
          />
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={springTransition}
            className="fixed left-1/2 top-[15%] -translate-x-1/2 w-full max-w-lg z-[70] px-4"
          >
            <div className="bg-popover border border-border rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[70vh]">
              {/* Search Input */}
              <div className="flex items-center px-4 py-3 border-b border-border gap-3">
                <Search className="w-5 h-5 text-muted-foreground" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search components or actions..."
                  className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground text-sm h-6"
                />
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button
                        onClick={componentActions.closeSearch}
                        className="p-1 rounded hover:bg-accent text-muted-foreground transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Close</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>

              {/* Results */}
              <div className="overflow-y-auto p-2 space-y-2">
                {/* Quick Actions */}
                {showActions && filteredActions.length > 0 && (
                  <div>
                    <SectionHeader title="Quick Actions" />
                    <div className="space-y-0.5">
                      {filteredActions.map((action) => (
                        <QuickActionItem
                          key={action.id}
                          action={action}
                          onExecute={handleActionExecute}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Components */}
                {showComponents && (
                  <div>
                    <SectionHeader title="Components" />
                    {filteredComponents.length > 0 ? (
                      <div className="space-y-0.5">
                        {filteredComponents.map((item) => (
                          <SearchResultItem
                            key={item.id}
                            item={item}
                            onSelect={handleSelect}
                          />
                        ))}
                      </div>
                    ) : query.trim() ? (
                      <div className="py-4 text-center text-muted-foreground text-sm">
                        No components found for &quot;{query}&quot;
                      </div>
                    ) : null}
                  </div>
                )}

                {/* No results at all */}
                {query.trim() && filteredActions.length === 0 && filteredComponents.length === 0 && (
                  <div className="py-8 text-center text-muted-foreground text-sm">
                    No results found for &quot;{query}&quot;
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="px-4 py-2 bg-muted/50 border-t border-border text-[10px] text-muted-foreground flex justify-between">
                <span>↵ Select</span>
                <span>ESC to close</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
});
