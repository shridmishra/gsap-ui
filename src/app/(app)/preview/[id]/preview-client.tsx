"use client";

import { useEffect, useState, useMemo } from "react";
import { componentMap, componentRegistry } from "@/registry";
import { cn } from "@/lib/utils";

interface PreviewClientProps {
    componentId: string;
}

export function PreviewClient({ componentId }: PreviewClientProps) {
    const [mounted, setMounted] = useState(false);

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

    if (!mounted) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-foreground/20 border-t-foreground rounded-full animate-spin" />
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
