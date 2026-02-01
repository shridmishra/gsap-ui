"use client";

import { useEffect, useState, useMemo } from "react";
import { componentMap, componentRegistry, codeMap } from "@/registry";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

interface PreviewClientProps {
    componentId: string;
}

// Helper to get HTML code from a code entry
const getHtmlCode = (codeEntry: import("@/types").RegistryCodeEntry | undefined): string | null => {
    if (!codeEntry) return null;
    if (typeof codeEntry === "string") return null;
    if ("html" in codeEntry && codeEntry.html) return codeEntry.html;
    return null;
};

// Inject theme into HTML code
const injectThemeIntoHtml = (htmlCode: string, theme: string | undefined): string => {
    const isDark = theme === "dark";
    const themeScript = `
        <script>
            (function() {
                const isDark = ${isDark};
                document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
                document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
            })();
        </script>
    `;
    if (htmlCode.includes('<head>')) {
        return htmlCode.replace('<head>', '<head>' + themeScript);
    } else if (htmlCode.includes('<body>')) {
        return htmlCode.replace('<body>', '<body>' + themeScript);
    }
    return themeScript + htmlCode;
};

export function PreviewClient({ componentId }: PreviewClientProps) {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    const isFullWidth = useMemo(() => {
        const category = componentRegistry.find((cat) =>
            cat.items.some((item) => item.id === componentId)
        );
        return (
            category?.category === "Hero Section" ||
            category?.category === "Landing Page" ||
            category?.category === "Sections" ||
            category?.category === "GSAP Section" ||
            componentId === "mango-cards"
        );
    }, [componentId]);

    // Check if this is an HTML-only component
    const htmlCode = useMemo(() => {
        const Component = componentMap[componentId];
        if (Component) return null; // Has a React component, not HTML-only
        const rawHtml = getHtmlCode(codeMap[componentId]);
        if (!rawHtml) return null;
        return injectThemeIntoHtml(rawHtml, resolvedTheme);
    }, [componentId, resolvedTheme]);

    if (!mounted) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-foreground/20 border-t-foreground rounded-full animate-spin" />
            </div>
        );
    }

    // Render HTML-only component in iframe
    if (htmlCode) {
        return (
            <div className="w-full min-h-screen bg-background">
                <iframe
                    srcDoc={htmlCode}
                    title={componentId}
                    className="w-full h-screen border-0"
                    sandbox="allow-scripts allow-same-origin"
                    style={{ colorScheme: "light dark" }}
                />
            </div>
        );
    }

    const Component = componentMap[componentId];

    if (!Component) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <p className="text-muted-foreground">Component not found</p>
            </div>
        );
    }

    return (
        <div
            className={cn(
                "w-full bg-background",
                isFullWidth ? "min-h-screen" : "min-h-screen flex items-center justify-center"
            )}
        >
            {/* Subtle grid background */}
            <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{
                    backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px), 
                            linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
                    backgroundSize: "60px 60px",
                }}
            />

            <div
                className={cn(
                    "relative z-10 w-full",
                    !isFullWidth ? "max-w-4xl px-4 py-12" : "h-full"
                )}
            >
                <Component />
            </div>
        </div>
    );
}

