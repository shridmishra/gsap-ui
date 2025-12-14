"use client";

import React, { memo, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Copy, Check, X } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { codeMap } from "@/registry";
import { useActiveComponent as useActiveItem, useClipboard } from "@/hooks";
import { useActiveComponent, useCodePanelOpen, componentActions } from "@/store";
import { slidePanelVariants, fadeVariants, springTransition } from "@/lib/animations";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Memoized copy button
const CopyButton = memo(function CopyButton({
  text,
  label,
  size = "sm",
}: {
  text: string;
  label?: string;
  size?: "sm" | "md";
}) {
  const { copied, copy } = useClipboard();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={() => copy(text)}
            className={`flex items-center gap-2 rounded-md hover:bg-accent text-muted-foreground hover:text-foreground transition-colors ${size === "sm" ? "p-1.5" : "px-2 py-1"
              }`}
          >
            {copied ? (
              <>
                <Check className={size === "sm" ? "w-3.5 h-3.5 text-emerald-400" : "w-3 h-3 text-emerald-400"} />
                {label && <span className="text-emerald-400 text-xs">Copied!</span>}
              </>
            ) : (
              <>
                <Copy className={size === "sm" ? "w-3.5 h-3.5" : "w-3 h-3"} />
                {label && <span className="text-xs">{label}</span>}
              </>
            )}
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{label || "Copy"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
});

// Memoized syntax highlighter config
const syntaxHighlighterStyle = {
  margin: 0,
  padding: "1rem",
  background: "transparent",
  fontSize: "0.8rem",
  lineHeight: "1.6",
};

const codeTagStyle = { background: "transparent" };

export const CodePanel = memo(function CodePanel() {
  const activeComponent = useActiveComponent();
  const isOpen = useCodePanelOpen();
  const activeItem = useActiveItem(activeComponent);
  const code = useMemo(() => codeMap[activeComponent] || "// No code available", [activeComponent]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={fadeVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={componentActions.closeCodePanel}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Panel */}
          <motion.div
            variants={slidePanelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={springTransition}
            className="fixed right-0 top-0 bottom-0 w-full max-w-2xl bg-background border-l border-border z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-sm text-muted-foreground font-mono">
                  {activeComponent}.tsx
                </span>
              </div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      onClick={componentActions.closeCodePanel}
                      className="p-2 rounded-lg hover:bg-accent text-muted-foreground hover:text-foreground transition-colors"
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

            {/* Content */}
            <div className="flex-1 overflow-auto p-6 space-y-8">
              {/* Description */}
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Description</h3>
                <p className="text-foreground text-sm leading-relaxed">
                  {activeItem?.description || "No description available."}
                </p>
              </div>

              {/* Installation */}
              {activeItem?.installation && (
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">Installation</h3>
                  <div className="bg-muted rounded-lg p-3 font-mono text-xs text-foreground border border-border flex items-center justify-between group">
                    <span>{activeItem.installation}</span>
                    <CopyButton text={activeItem.installation} />
                  </div>
                </div>
              )}

              {/* Code */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-muted-foreground">Code</h3>
                  <CopyButton text={code} label="Copy code" size="md" />
                </div>
                <div className="rounded-lg overflow-hidden border border-zinc-800 bg-[#282c34]">
                  <SyntaxHighlighter
                    language="tsx"
                    style={oneDark}
                    customStyle={syntaxHighlighterStyle}
                    codeTagProps={{ style: codeTagStyle }}
                    showLineNumbers
                  >
                    {code}
                  </SyntaxHighlighter>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
});
