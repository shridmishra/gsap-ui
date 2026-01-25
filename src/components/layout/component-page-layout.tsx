"use client";

import { Eye, Code } from "lucide-react";


import { useEffect, useMemo, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  Sidebar,
  PreviewArea,
  InfoIsland,
  CodePanelContent,
  CommandPalette,
  LoadingSkeleton
} from "@/components/layout";
import { CopyButton, SponsorButton, CodeBlock } from "@/components/ui";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useMounted, componentActions, useActiveComponent } from "@/store";
import { componentRegistry } from "@/registry";
import { cn } from "@/lib/utils";

interface ComponentPageLayoutProps {
  componentId?: string;
}

export function ComponentPageLayout({ componentId }: ComponentPageLayoutProps) {
  const mounted = useMounted();
  const activeComponentId = useActiveComponent();
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

  const [packageManager, setPackageManager] = useState<"npm" | "pnpm" | "yarn" | "bun">("npm");

  // Hoisted state
  const [framework, setFramework] = useState<"react" | "html">("react");
  const [language, setLanguage] = useState<"typescript" | "javascript">("typescript");

  const scrollViewportRef = useRef<HTMLDivElement>(null);

  const activeItem = useMemo(() => {
    return componentRegistry
      .flatMap((c) => c.items)
      .find((i) => i.id === activeComponentId);
  }, [activeComponentId]);

  useEffect(() => {
    componentActions.setMounted(true);
    if (componentId) {
      componentActions.setActiveComponentFromUrl(componentId);
    } else {
      const path = window.location.pathname;
      const match = path.match(/^\/components\/[^/]+\/([^/]+)$/);
      if (match && match[1]) {
        componentActions.setActiveComponentFromUrl(match[1]);
      }
    }

    const handleResize = () => { };
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        componentActions.openSearch();
      }
    };
    const handlePopState = () => {
      const path = window.location.pathname;
      const match = path.match(/^\/components\/[^/]+\/([^/]+)$/);
      if (match && match[1]) {
        componentActions.setActiveComponentFromUrl(match[1]);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("popstate", handlePopState);
    };
  }, [componentId]);

  // Reset framework when component changes
  useEffect(() => {
    setFramework("react");
    setLanguage("typescript");
  }, [activeComponentId]);

  if (!mounted) {
    return <LoadingSkeleton />;
  }

  const installCommands = {
    npm: `npx shadcn@latest add https://gsap-ui.shrid.in/registry/${activeComponentId}.json`,
    pnpm: `pnpm dlx shadcn@latest add https://gsap-ui.shrid.in/registry/${activeComponentId}.json`,
    yarn: `npx shadcn@latest add https://gsap-ui.shrid.in/registry/${activeComponentId}.json`,
    bun: `bunx shadcn@latest add https://gsap-ui.shrid.in/registry/${activeComponentId}.json`,
  };

  const usageCode = `import { ${activeItem?.name.replace(/\s+/g, '') || "Component"} } from "@/components/ui/${activeComponentId}";\n\nexport default function App() {\n  return <${activeItem?.name.replace(/\s+/g, '') || "Component"} />\n}`;

  return (
    <div className="flex min-h-screen bg-background text-foreground overflow-hidden">
      <Sidebar />
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        {/* Header Section */}
        <div className="flex-none px-2 pt-2 md:px-4 md:pt-3 bg-background/95 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60 z-10">
          <header className="flex items-center justify-between mb-2 min-h-[40px]">
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveTab("preview")}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full border transition-all duration-200",
                    activeTab === "preview"
                      ? "bg-muted text-foreground border-border"
                      : "text-muted-foreground border-transparent hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  <Eye className="w-4 h-4" />
                  Preview
                </button>
                <button
                  onClick={() => setActiveTab("code")}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full border transition-all duration-200",
                    activeTab === "code"
                      ? "bg-muted text-foreground border-border"
                      : "text-muted-foreground border-transparent hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  <Code className="w-4 h-4" />
                  Code
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <SponsorButton />
              <InfoIsland />
            </div>
          </header>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-hidden relative bg-background">
          {activeTab === "preview" ? (
            <div className="w-full h-full px-4 py-2 overflow-hidden">
              <div className="w-full h-full overflow-hidden relative rounded-lg border border-border bg-background shadow-sm">
                <PreviewArea />
              </div>
            </div>
          ) : (
            <ScrollArea ref={scrollViewportRef} className="h-full w-full">
              <div className="container max-w-5xl mx-auto px-4 py-8 md:px-6 md:py-8 space-y-12 pb-24">

                {/* Install Section */}
                <section className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold tracking-tight">Install</h2>
                  </div>
                  <Tabs defaultValue="cli" className="w-full">
                    <TabsList className="bg-transparent p-0 h-auto gap-2 mb-4">
                      <TabsTrigger
                        value="cli"
                        className="data-[state=active]:bg-muted data-[state=active]:text-foreground rounded-full border border-transparent data-[state=active]:border-border px-4 py-2 text-muted-foreground transition-all"
                      >
                        CLI
                      </TabsTrigger>
                      <TabsTrigger
                        value="manual"
                        className="data-[state=active]:bg-muted data-[state=active]:text-foreground rounded-full border border-transparent data-[state=active]:border-border px-4 py-2 text-muted-foreground transition-all"
                      >
                        Manual
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="cli" className="mt-0 space-y-4">
                      <div className="relative rounded-lg bg-code-bg border border-code-border overflow-hidden">
                        <div className="flex items-center gap-6 border-b border-code-border/50 px-4 bg-code-header-bg relative min-h-[44px]">
                          {(["npm", "pnpm", "yarn", "bun"] as const).map((pm) => (
                            <button
                              key={pm}
                              onClick={() => setPackageManager(pm)}
                              className={cn(
                                "relative py-3 px-2 text-xs font-medium transition-all duration-200",
                                packageManager === pm
                                  ? "text-code-fg"
                                  : "text-code-muted hover:text-code-fg"
                              )}
                            >
                              <span className="relative z-10">{pm}</span>
                              {packageManager === pm && (
                                <motion.div
                                  layoutId="activePackageManager"
                                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-foreground z-0 shadow-[0_0_15px_rgba(255,255,255,0.5)] dark:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                              )}
                            </button>
                          ))}
                        </div>
                        <CodeBlock
                          code={installCommands[packageManager]}
                          language="bash"
                          className="border-t border-code-border/50"
                        />
                        <div className="absolute top-[52px] right-2 z-10">
                          <CopyButton text={installCommands[packageManager]} />
                        </div>
                      </div>
                    </TabsContent>
                    <TabsContent value="manual" className="mt-6">
                      <ManualInstallation
                        activeItem={activeItem}
                        activeComponentId={activeComponentId}
                        usageCode={usageCode}
                        scrollViewportRef={scrollViewportRef}
                        framework={framework}
                        language={language}
                      />
                    </TabsContent>
                  </Tabs>
                </section>


                {/* Code Section */}
                <section className="space-y-4">
                  <div className="flex items-center justify-between pb-2">
                    <div className="space-y-1">
                      <h2 className="text-2xl font-semibold tracking-tight">Code</h2>
                    </div>
                    <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-muted/40 rounded-lg border border-border/40 text-xs font-mono text-muted-foreground">
                      <Code className="w-3.5 h-3.5" />
                      <span>
                        src/components/ui/
                        <span className="text-foreground font-medium">
                          {activeComponentId}.{framework === "html" ? "html" : (language === "typescript" ? "tsx" : "jsx")}
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="rounded-xl border border-code-border bg-code-bg shadow-sm overflow-hidden h-[600px] relative">
                    <CodePanelContent
                      hideInstall={true}
                      showCloseButton={false}
                      framework={framework}
                      setFramework={setFramework}
                      language={language}
                      setLanguage={setLanguage}
                    />
                  </div>
                </section>

              </div>
            </ScrollArea>
          )}
        </div>
      </main>
      <CommandPalette />
    </div>
  );
}

function ManualInstallation({
  activeItem,
  activeComponentId,
  usageCode,
  scrollViewportRef,
  framework = "react",
  language = "typescript"
}: {
  activeItem: any,
  activeComponentId: string | null,
  usageCode: string,
  scrollViewportRef: React.RefObject<HTMLDivElement | null>,
  framework?: "react" | "html",
  language?: "typescript" | "javascript"
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: scrollViewportRef,
    target: containerRef,
    offset: ["start 30%", "end 40%"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  if (framework === "html") {
    return (
      <motion.div
        ref={containerRef}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="space-y-10 relative"
      >
        <div className="absolute left-[15px] top-4 bottom-4 w-[2px] z-0">
          <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
            <line x1="1" y1="0" x2="1" y2="100%" className="stroke-border/40" strokeWidth="2" />
            <motion.line x1="1" y1="0" x2="1" y2="100%" style={{ pathLength }} className="stroke-primary/40" strokeWidth="2" />
          </svg>
        </div>

        <motion.div variants={staggerItem} className="relative pl-12">
          <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10">
            <span className="text-sm font-bold">1</span>
          </div>
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-foreground">Create HTML file</h3>
            <p className="text-sm text-muted-foreground">Create an <code className="bg-muted px-1 py-0.5 rounded">index.html</code> file and copy the code from the Code tab.</p>
          </div>
        </motion.div>

        {/* We could add more steps like "Open in browser" but for now this is enough for simple HTML */}
      </motion.div>
    )
  }

  return (
    <motion.div
      ref={containerRef}
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="space-y-10 relative"
    >
      {/* Connecting Line SVG */}
      <div className="absolute left-[15px] top-4 bottom-4 w-[2px] z-0">
        <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
          <line
            x1="1" y1="0" x2="1" y2="112%"
            className="stroke-border/40"
            strokeWidth="2"
          />
          <motion.line
            x1="1"
            y1="0"
            x2="1"
            y2="112%"
            style={{ pathLength }}
            className="stroke-primary/40"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Step 1 */}
      <motion.div variants={staggerItem} className="relative pl-12">
        <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10">
          <span className="text-sm font-bold">1</span>
        </div>
        <div className="space-y-3">
          <div>
            <h3 className="text-base font-semibold text-foreground">Install dependencies</h3>
          </div>
          <div className="relative rounded-lg bg-code-bg border border-code-border overflow-hidden">
            <CodeBlock
              code={activeItem?.installation || "npm install"}
              language="bash"
              fontSize="0.9375rem"
            />
            <div className="absolute top-2.5 right-2 z-10">
              <CopyButton text={activeItem?.installation || ""} />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Step 2 */}
      <motion.div variants={staggerItem} className="relative pl-12">
        <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10">
          <span className="text-sm font-bold">2</span>
        </div>
        <div className="space-y-3">
          <div>
            <h3 className="text-base font-semibold text-foreground"> Copy the source code below into</h3>
          </div>
          <div className="rounded-lg border border-border/60 bg-muted/5 p-4 text-sm">
            <div className="flex items-center gap-2">
              <code className="flex-1 px-2 py-1 rounded bg-code-bg text-code-fg font-mono text-sm">
                components/ui/{activeComponentId}.{language === "typescript" ? "tsx" : "jsx"}
              </code>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Step 3 */}
      <motion.div variants={staggerItem} className="relative pl-12">
        <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10">
          <span className="text-sm font-bold">3</span>
        </div>
        <div className="space-y-3">
          <div>
            <h3 className="text-base font-semibold text-foreground">Import and use</h3>
          </div>
          <div className="relative rounded-lg border border-code-border bg-code-bg/50 overflow-hidden text-sm">
            <CodeBlock
              code={usageCode} // We might want to transform this usage code too if JS is selected
              language={language === "typescript" ? "tsx" : "jsx"}
              fontSize="0.9375rem"
            />
            <div className="absolute top-2 right-2 z-10">
              <CopyButton text={usageCode} />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
