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

interface CodePanelContentProps {
  onClose?: () => void;
  showCloseButton?: boolean;
}

export const CodePanelContent = memo(function CodePanelContent({ onClose, showCloseButton = true }: CodePanelContentProps) {
  const activeComponent = useActiveComponent();
  const activeItem = useActiveItem(activeComponent);
  const code = useMemo(() => codeMap[activeComponent] || "// No code available", [activeComponent]);

  return (
    <div className="flex flex-col h-full bg-background relative">
      {/* Installation Section */}
      {activeItem?.installation && (
        <div className="border-b border-border px-4 py-6 md:px-6">
          <div className="space-y-4">
            <h3 className="text-sm font-medium leading-none tracking-tight">Installation</h3>
            <div className="relative rounded-lg bg-zinc-950 dark:bg-zinc-900 border border-border p-4 font-mono text-sm text-zinc-50 dark:text-zinc-50">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 overflow-hidden">
                  <span className="shrink-0 select-none text-zinc-500">$</span>
                  <span className="truncate">{activeItem.installation}</span>
                </div>
                <CopyButton text={activeItem.installation} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Code Section */}
      <div className="flex-1 overflow-hidden flex flex-col">
        <div className="flex items-center justify-between px-4 py-4 md:px-6 border-b border-border bg-muted/30">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-medium leading-none tracking-tight">Code</h3>
            <span className="text-xs text-muted-foreground font-mono bg-muted px-1.5 py-0.5 rounded">
              {activeComponent}.tsx
            </span>
          </div>
          <div className="flex items-center gap-2">
            <CopyButton text={code} label="Copy code" size="sm" />
            {showCloseButton && (
              <button
                onClick={onClose}
                className="p-1.5 rounded-md hover:bg-accent text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close panel"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        <div className="flex-1 overflow-auto bg-[#282c34] relative">
          <SyntaxHighlighter
            language="tsx"
            style={oneDark}
            customStyle={{
              margin: 0,
              padding: "1.5rem",
              background: "transparent",
              fontSize: "0.875rem",
              lineHeight: "1.7",
              minHeight: "100%",
            }}
            codeTagProps={{ style: { background: "transparent" } }}
            showLineNumbers={true}
            lineNumberStyle={{ minWidth: "2.5em", paddingRight: "1em", opacity: 0.3 }}
          >
            {code}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
});

export const CodePanel = memo(function CodePanel() {
  const isOpen = useCodePanelOpen();

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
            className="fixed right-0 top-0 bottom-0 w-full max-w-2xl bg-background border-l border-border z-50 overflow-hidden"
          >
            <CodePanelContent onClose={componentActions.closeCodePanel} showCloseButton={true} />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
});
