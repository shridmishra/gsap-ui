"use client";

import React, { memo, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, FileCode, CodeIcon } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark, oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { codeMap } from "@/registry";
import { useActiveComponent as useActiveItem } from "@/hooks";
import { useActiveComponent, useCodePanelOpen, componentActions } from "@/store";
import { slidePanelVariants, fadeVariants, springTransition } from "@/lib/animations";
import { useTheme } from "next-themes";
import { CopyButton } from "@/components/ui";



interface CodePanelContentProps {
  onClose?: () => void;
  showCloseButton?: boolean;
  hideInstall?: boolean;
}

export const CodePanelContent = memo(function CodePanelContent({ onClose, showCloseButton = true, hideInstall = false }: CodePanelContentProps) {
  const activeComponent = useActiveComponent();
  const activeItem = useActiveItem(activeComponent);
  const code = useMemo(() => codeMap[activeComponent] || "// No code available", [activeComponent]);
  const { theme } = useTheme();

  const syntaxStyle = useMemo(() => {
    return theme === "dark" ? oneDark : oneLight;
  }, [theme]);

  return (
    <div className="flex flex-col h-full bg-background relative">
      {/* Installation Section */}
      {!hideInstall && activeItem?.installation && (
        <div className="border-b border-border px-4 py-6 md:px-6">
          <div className="space-y-4">
            <h3 className="text-sm font-medium leading-none tracking-tight">Installation</h3>
            <div className="relative rounded-lg bg-code-bg border border-code-border p-4 font-mono text-sm text-code-fg">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2 overflow-hidden">
                  <span className="shrink-0 select-none text-code-muted">$</span>
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
        <div className="flex items-center justify-between px-4 py-3 md:px-6 border-b border-border bg-card/50 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-2.5">
           
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight">
                {activeComponent}.tsx
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <CopyButton text={code} label="Copy code" iconSize="sm" variant="outline" className="h-8 bg-background/50" />
            {showCloseButton && (
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-accent text-muted-foreground hover:text-foreground transition-all duration-200"
                aria-label="Close panel"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        <div className="flex-1 overflow-auto bg-code-bg relative">
          <SyntaxHighlighter
            language="tsx"
            style={syntaxStyle}
            customStyle={{
              margin: 0,
              padding: "1.5rem",
              background: "transparent",
              fontSize: "0.875rem",
              lineHeight: "1.7",
              minHeight: "100%",
              backgroundColor: "transparent",
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
