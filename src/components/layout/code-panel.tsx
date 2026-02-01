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
import { cn } from "@/lib/utils";
import { transformTsToJs } from "@/lib/transform-code";



interface CodePanelContentProps {
  onClose?: () => void;
  showCloseButton?: boolean;
  hideInstall?: boolean;
  framework?: "react" | "html";
  setFramework?: (f: "react" | "html") => void;
  language?: "typescript" | "javascript";
  setLanguage?: (l: "typescript" | "javascript") => void;
}

export const CodePanelContent = memo(function CodePanelContent({
  onClose,
  showCloseButton = true,
  hideInstall = false,
  framework: propFramework,
  setFramework: propSetFramework,
  language: propLanguage,
  setLanguage: propSetLanguage
}: CodePanelContentProps) {
  const activeComponent = useActiveComponent();
  const activeItem = useActiveItem(activeComponent);
  const codeEntry = useMemo(() => codeMap[activeComponent] || "// No code available", [activeComponent]);

  const [internalFramework, setInternalFramework] = React.useState<"react" | "html">("react");
  const [internalLanguage, setInternalLanguage] = React.useState<"typescript" | "javascript">("typescript");

  const framework = propFramework ?? internalFramework;
  const setFramework = propSetFramework ?? setInternalFramework;
  const language = propLanguage ?? internalLanguage;
  const setLanguage = propSetLanguage ?? setInternalLanguage;

  const { theme } = useTheme();

  // Parse the code entry
  const { currentCode, showFrameworkToggle, isHtmlOnly } = useMemo(() => {
    let parsedCode = { react: "", html: "" };
    let hasHtml = false;
    let htmlOnly = false;

    if (typeof codeEntry === "string") {
      parsedCode.react = codeEntry;
    } else {
      parsedCode.react = codeEntry.code || "";
      if (codeEntry.html) {
        parsedCode.html = codeEntry.html;
        hasHtml = true;
        // If there's HTML but no React code, it's HTML-only
        if (!codeEntry.code) {
          htmlOnly = true;
        }
      }
    }

    // If current framework is html but no html code, switch back to react
    if (framework === "html" && !hasHtml) {
      // safe fallback
    }

    // Transform if Javascript
    let displayCode = framework === "react" ? parsedCode.react : parsedCode.html;
    if (framework === "react" && language === "javascript") {
      displayCode = transformTsToJs(displayCode);
    }

    return {
      currentCode: displayCode || "// No code found",
      showFrameworkToggle: hasHtml,
      isHtmlOnly: htmlOnly
    };
  }, [codeEntry, framework, language]);

  // Adjust framework state if needed when activeComponent changes
  React.useEffect(() => {
    if (typeof codeEntry !== "string" && codeEntry.html && !codeEntry.code) {
      // HTML-only component, default to HTML
      setFramework("html");
    } else if (typeof codeEntry === "string" || !codeEntry.html) {
      setFramework("react");
    }
  }, [codeEntry, setFramework]);


  const syntaxStyle = useMemo(() => {
    return theme === "dark" ? oneDark : oneLight;
  }, [theme]);

  // Handle Copy
  const handleCopy = () => {
    navigator.clipboard.writeText(currentCode);
  }

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
        <div className="flex items-center justify-between px-4 sticky top-0 z-20 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
          <div className="flex items-center gap-6 relative">
            {/* Tabs */}
            {(isHtmlOnly ? ["HTML"] : showFrameworkToggle ? ["TypeScript", "JavaScript", "HTML"] : ["TypeScript", "JavaScript"]).map((tab) => {
              const isActive =
                (tab === "HTML" && framework === "html") ||
                (tab === "TypeScript" && framework === "react" && language === "typescript") ||
                (tab === "JavaScript" && framework === "react" && language === "javascript");

              return (
                <button
                  key={tab}
                  onClick={() => {
                    if (tab === "HTML") {
                      setFramework("html");
                    } else {
                      setFramework("react");
                      setLanguage(tab.toLowerCase() as "typescript" | "javascript");
                    }
                  }}
                  className={cn(
                    "relative py-3 px-1 text-sm font-medium transition-all duration-200",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <span className="relative z-10">{tab}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeCodeTab"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary z-0"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <CopyButton text={currentCode} label="Copy" iconSize="sm" variant="outline" className="h-7 text-xs gap-1.5 px-2 bg-background/50" />
            {showCloseButton && (
              <button
                onClick={onClose}
                className="p-1.5 rounded-md hover:bg-accent text-muted-foreground hover:text-foreground transition-all duration-200"
                aria-label="Close panel"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        <div className="flex-1 overflow-auto bg-code-bg relative">
          <SyntaxHighlighter
            language={framework === "html" ? "html" : (language === "typescript" ? "tsx" : "jsx")}
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
            {currentCode}
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
