"use client";

import React, { memo, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { componentRegistry } from "@/registry";
import { useActiveComponent, useSidebarOpen, componentActions } from "@/store";
import { useMediaPreloader, useMediaQuery } from "@/hooks";
import type { ComponentItem } from "@/types";
import { InfoIsland } from "./info-island";
import { Heart } from "lucide-react";

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
      <h3 className="text-sm font-semibold text-foreground/80 mb-2 px-2">
        {category}
      </h3>
      <ul className="space-y-1 border-l border-zinc-800 ml-2">
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
          "relative w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all",
          isActive
            ? " text-foreground font-medium"
            : "text-foreground/60 hover:text-foreground hover:bg-foreground/5"
        )}
      >
        <span className="flex items-center">
          {isActive && (
            <motion.div
              layoutId="activeIndicator"
              className="absolute -left-[2px] top-1/2 -translate-y-1/2 w-0.75 h-4 bg-rose-500 rounded-full"
            />
          )}
          {item.name}
        </span>
      </button>
    </li >
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
              "fixed inset-y-0 left-0 z-40 bg-background border-r border-border flex flex-col",
              "lg:static lg:block lg:flex lg:h-screen lg:border-r lg:border-border lg:bg-background lg:shadow-none",
              "overflow-hidden"
            )}
          >
            <div className="flex-1 w-64 overflow-y-auto py-6 px-4 pt-20 lg:pt-6">
              <div className="flex items-center justify-between mb-6 px-2 py-2">
                <button
                  onClick={() => window.location.href = "https://gsap-ui.shrid.in"}
                  className="flex items-center gap-2.5 cursor-pointer"
                >
                  <div
                    className="size-6 bg-rose-500"
                    style={{
                      maskImage: 'url("/logo.png")',
                      maskSize: 'contain',
                      maskRepeat: 'no-repeat',
                      maskPosition: 'center',
                      WebkitMaskImage: 'url("/logo.png")',
                      WebkitMaskSize: 'contain',
                      WebkitMaskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'center',
                    }}
                  />
                  <div className="font-medium text-3xl -mt-2 ">gsap-ui</div>
                </button>
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

            <div className="p-4 border-t border-zinc-800/50">
              <button
                onClick={() => window.open("https://shrid.in", "_blank")}
                className="group flex w-full items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-medium text-foreground/40 hover:text-rose-500  transition-all duration-300 cursor-pointer"
              >
                <span>Created With</span>
                <Heart className="size-3.5 fill-rose-500/10 text-rose-500 group-hover:fill-rose-500 transition-colors duration-300" />
                <span>By</span>
                <span className="font-semibold text-foreground/80 tracking-tight">Shrid Studios</span>
              </button>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
});
