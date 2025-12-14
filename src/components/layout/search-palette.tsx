"use client";

import React, { useState, useEffect, useRef, memo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowRight } from "lucide-react";
import { useFilteredComponents, type FlatComponentItem } from "@/hooks";
import { useSearchOpen, componentActions } from "@/store";
import { modalVariants, fadeVariants, springTransition } from "@/lib/animations";

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
      className="w-full flex items-center justify-between px-3 py-2 rounded-lg hover:bg-zinc-800 group transition-colors text-left"
    >
      <div className="flex flex-col gap-0.5">
        <span className="text-sm text-zinc-200 font-medium group-hover:text-white">
          {item.name}
        </span>
        <span className="text-xs text-zinc-500 group-hover:text-zinc-400">
          {item.category}
        </span>
      </div>
      <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
    </button>
  );
});

export const SearchPalette = memo(function SearchPalette() {
  const isOpen = useSearchOpen();
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const filteredComponents = useFilteredComponents(query);

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

  const handleSelect = useCallback(
    (id: string) => {
      componentActions.setActiveComponent(id);
      componentActions.closeSearch();
    },
    []
  );

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
            className="fixed left-1/2 top-[20%] -translate-x-1/2 w-full max-w-lg z-[70] px-4"
          >
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[60vh]">
              <div className="flex items-center px-4 py-3 border-b border-zinc-800 gap-3">
                <Search className="w-5 h-5 text-zinc-500" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search components..."
                  className="flex-1 bg-transparent border-none outline-none text-zinc-200 placeholder:text-zinc-600 text-sm h-6"
                />
                <button
                  onClick={componentActions.closeSearch}
                  className="p-1 rounded hover:bg-zinc-800 text-zinc-500 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="overflow-y-auto p-2">
                {filteredComponents.length > 0 ? (
                  <div className="space-y-1">
                    {filteredComponents.map((item) => (
                      <SearchResultItem
                        key={item.id}
                        item={item}
                        onSelect={handleSelect}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="py-8 text-center text-zinc-500 text-sm">
                    No results found for &quot;{query}&quot;
                  </div>
                )}
              </div>

              <div className="px-4 py-2 bg-zinc-950/50 border-t border-zinc-800 text-[10px] text-zinc-600 flex justify-between">
                <span>Select to navigate</span>
                <span>ESC to close</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
});
