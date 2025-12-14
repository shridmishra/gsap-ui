"use client";

import React, { memo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { sidebarVariants, springTransition } from "@/lib/animations";
import { componentRegistry } from "@/registry";
import { useActiveComponent, useSidebarOpen, componentActions } from "@/store";
import type { ComponentItem } from "@/types";

// Memoized category section
const CategorySection = memo(function CategorySection({
  category,
  items,
  activeComponent,
  onItemClick,
}: {
  category: string;
  items: ComponentItem[];
  activeComponent: string;
  onItemClick: (id: string) => void;
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
}: {
  item: ComponentItem;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <li>
      <button
        onClick={onClick}
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

  const handleItemClick = useCallback(
    (id: string) => {
      componentActions.setActiveComponent(id);
      componentActions.closeSidebarOnMobile();
    },
    []
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop overlay - closes sidebar on click */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 bg-black/20"
            onClick={() => componentActions.setSidebarOpen(false)}
            aria-hidden="true"
          />
          <motion.aside
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={springTransition}
            className={cn(
              "fixed z-40",
              "bg-background",
              "border-r lg:border border-border lg:rounded-2xl shadow-2xl",
              "overflow-hidden",
              "inset-0 w-full h-full",
              "lg:inset-auto lg:left-4 lg:top-1/2 lg:-translate-y-1/2 lg:w-[280px] lg:min-h-[calc(100vh-10rem)] lg:h-auto"
            )}
          >
          <div className="w-full h-full overflow-y-auto py-6 px-4 pt-20 lg:pt-6">
            <button
              onClick={componentActions.toggleSidebar}
              className="lg:hidden absolute top-6 right-4 p-2 rounded-lg hover:bg-foreground/10 transition-colors"
              aria-label="Close sidebar"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>

            <nav className="space-y-6">
              {componentRegistry.map((category) => (
                <CategorySection
                  key={category.category}
                  category={category.category}
                  items={category.items}
                  activeComponent={activeComponent}
                  onItemClick={handleItemClick}
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
