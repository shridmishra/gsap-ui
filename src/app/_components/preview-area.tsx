"use client";

import React, { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, Expand, Minimize, Menu } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Separator } from "@/components/ui/separator";
import { componentRegistry, componentMap, codeMap } from "@/app/_registry";
import { cn } from "@/lib/utils";

interface PreviewAreaProps {
  activeComponent: string;
  sidebarOpen: boolean;
  onSidebarToggle: () => void;
}

export const PreviewArea = ({ activeComponent, sidebarOpen, onSidebarToggle }: PreviewAreaProps) => {
  const [copied, setCopied] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timeout);
  }, [activeComponent]);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 1024);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeMap[activeComponent] || "");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const ActiveComponentRender = componentMap[activeComponent];
  const activeItem = componentRegistry
    .flatMap((c) => c.items)
    .find((item) => item.id === activeComponent);

  return (
    <div 
      className="p-4 sm:p-6 lg:p-8 transition-all duration-300 ease-out"
      style={{ marginLeft: sidebarOpen && isDesktop ? 300 : 0 }}
    >
      {/* Mobile menu button */}
      {!sidebarOpen && !isDesktop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={onSidebarToggle}
          className="fixed top-4 left-4 z-30 flex items-center justify-center w-10 h-10 rounded-xl bg-background/80 backdrop-blur-xl border border-border shadow-lg hover:bg-foreground/5 transition-colors lg:hidden"
        >
          <Menu className="w-5 h-5" />
        </motion.button>
      )}

      <div className={cn("max-w-5xl mx-auto transition-all duration-300", isFullscreen ? "max-w-full" : "")}> 
        {/* Component preview area */}
        <div className={cn("relative rounded-2xl border border-border bg-foreground/[0.02] flex items-center justify-center overflow-hidden transition-all duration-300", isFullscreen ? "h-screen" : "h-[300px] sm:h-[350px] lg:h-[400px]")}> 
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), 
                                linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
          {loading ? (
            <div className="w-full h-full flex flex-col items-center justify-center gap-6">
              <Skeleton className="h-10 w-1/2 rounded-lg" />
              <Skeleton className="h-32 w-full rounded-xl" />
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeComponent}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                {ActiveComponentRender && <ActiveComponentRender />}
              </motion.div>
            </AnimatePresence>
          )}
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="absolute top-3 right-3 p-2 rounded-lg bg-background/80 backdrop-blur-sm border border-border hover:bg-foreground/5 transition-colors"
            title={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
          >
            {isFullscreen ? <Minimize size={16} /> : <Expand size={16} />}
          </button>
        </div>

        {/* Component info */}
        <div className="mt-8 space-y-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">
              {activeItem?.name || "Component"}
            </h1>
            <p className="text-sm sm:text-base text-foreground/60">
              A beautiful {activeItem?.name.toLowerCase()} component with smooth animations.
            </p>
          </div>

          <Separator />

          {/* Code section - minimal floating island */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Source Code</h2>
            <div className="relative rounded-xl bg-background border border-border overflow-hidden shadow-sm">
              <div className="flex items-center justify-between px-4 py-3 border-b border-border">
                <span className="text-xs text-foreground/60 font-mono">{activeItem?.id || "component"}.tsx</span>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-foreground/5 hover:bg-foreground/10 text-foreground/70 hover:text-foreground transition-all text-xs font-medium"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <div className="relative bg-foreground/[0.02]">
                <SyntaxHighlighter
                  language="tsx"
                  style={oneDark}
                  customStyle={{
                    margin: 0,
                    padding: "1rem",
                    background: "transparent",
                    fontSize: "0.75rem",
                    lineHeight: "1.6",
                    maxHeight: "400px",
                    overflow: "auto",
                  }}
                  codeTagProps={{
                    style: {
                      background: "transparent",
                    },
                  }}
                  showLineNumbers={false}
                >
                  {codeMap[activeComponent] || "// No code available"}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>

          {/* Dependencies */}
          <div>
            <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Dependencies</h2>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-foreground/5 border border-border text-xs sm:text-sm text-foreground/70">
                framer-motion
              </span>
              <span className="px-3 py-1 rounded-full bg-foreground/5 border border-border text-xs sm:text-sm text-foreground/70">
                tailwindcss
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
