"use client";

import React, { memo, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { sidebarVariants, springTransition } from "@/lib/animations";
import { componentRegistry } from "@/registry";
import { useActiveComponent, useSidebarOpen, componentActions } from "@/store";
import { useMediaPreloader, useMediaQuery } from "@/hooks";
import type { ComponentItem } from "@/types";
import { InfoIsland } from "./info-island";

// Memoized category section
const CategorySection = memo(function CategorySection({
  category,
  items,
  activeComponent,
  onItemClick,
  onItemHover,
}: {
  category: string;
  items: ComponentItem[];
  activeComponent: string;
  onItemClick: (id: string) => void;
  onItemHover: (id: string) => void;
}) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground/80 mb-3 px-2">
        {category}
      </h3>
      <ul className="space-y-1">
        {items.map((item) => (
          <SidebarItem
            key={item.id}
            item={item}
            isActive={activeComponent === item.id}
            onClick={() => onItemClick(item.id)}
            onHover={() => onItemHover(item.id)}
          />
        ))}
      </ul>
    </div>
  );
});

// Memoized sidebar item
const SidebarItem = memo(function SidebarItem({
  item,
  isActive,
  onClick,
  onHover,
}: {
  item: ComponentItem;
  isActive: boolean;
  onClick: () => void;
  onHover: () => void;
}) {
  return (
    <li>
      <button
        onClick={onClick}
        onMouseEnter={onHover}
        className={cn(
          "w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all",
          isActive
            ? "bg-foreground/10 text-foreground font-medium"
            : "text-foreground/60 hover:text-foreground hover:bg-foreground/5"
        )}
      >
        <span className="flex items-center gap-2">
          {isActive && (
            <motion.div
              layoutId="activeIndicator"
              className="w-1 h-4 bg-pink-500 rounded-full"
            />
          )}
          {item.name}
        </span>
      </button>
    </li>
  );
});

export const Sidebar = memo(function Sidebar() {
  const activeComponent = useActiveComponent();
  const isOpen = useSidebarOpen();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const { prefetchOnHover } = useMediaPreloader();

  const handleItemClick = useCallback(
    (id: string) => {
      componentActions.setActiveComponent(id);
      componentActions.closeSidebarOnMobile();
    },
    []
  );

  const handleItemHover = useCallback(
    (id: string) => {
      prefetchOnHover(id);
    },
    [prefetchOnHover]
  );

  return (
    <AnimatePresence mode="wait">
      {(isOpen || isDesktop) && (
        <>
          {/* Backdrop overlay - closes sidebar on click */}
          {!isDesktop && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-30 bg-black/20 lg:hidden"
              onClick={() => componentActions.setSidebarOpen(false)}
              aria-hidden="true"
            />
          )}
          <motion.aside
            initial={isDesktop ? false : { width: 0, x: -20, opacity: 0 }}
            animate={{
              width: 256,
              x: 0,
              opacity: 1,
              transition: {
                width: { type: "spring", stiffness: 300, damping: 30 },
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }
            }}
            exit={
              isDesktop
                ? undefined
                : {
                  width: 0,
                  x: -20,
                  opacity: 0,
                  transition: {
                    width: { duration: 0.2, ease: "easeInOut" },
                    x: { duration: 0.2, ease: "easeInOut" },
                    opacity: { duration: 0.1 }
                  }
                }
            }
            className={cn(
              "fixed inset-y-0 left-0 z-40 bg-background border-r border-border",
              "lg:static lg:block lg:h-screen lg:border-r lg:border-border lg:bg-background lg:shadow-none",
              "overflow-hidden"
            )}
          >
            <div className="w-64 h-full overflow-y-auto py-6 px-4 pt-20 lg:pt-6">
              <div className="flex items-center justify-between mb-6 px-2">
                <a href="https://gsap-ui.shrid.in" className="font-extralight text-2xl font-instrument-serif">GSAP UI </a>
              </div>

              <nav className="space-y-6">
                {componentRegistry.map((category) => (
                  <CategorySection
                    key={category.category}
                    category={category.category}
                    items={category.items}
                    activeComponent={activeComponent}
                    onItemClick={handleItemClick}
                    onItemHover={handleItemHover}
                  />
                ))}
              </nav>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
});
