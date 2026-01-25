"use client";

import React, { memo } from "react";
import { Copy, Check } from "lucide-react";
import { useClipboard } from "@/hooks";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

interface CopyButtonProps {
    text: string;
    label?: string;
    className?: string;
    iconSize?: "sm" | "md";
    variant?: "ghost" | "outline" | "default";
}

export const CopyButton = memo(function CopyButton({
    text,
    label,
    className,
    iconSize = "md",
    variant = "ghost",
}: CopyButtonProps) {
    const { copied, copy } = useClipboard();

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        variant={variant}
                        size={label ? "sm" : "icon"}
                        className={cn(
                            "text-code-muted hover:text-code-fg hover:bg-code-muted/10 transition-colors",
                            label && "gap-2 px-3",
                            !label && (iconSize === "sm" ? "h-7 w-7" : "h-8 w-8"),
                            className
                        )}
                        onClick={() => copy(text)}
                    >
                        {copied ? (
                            <>
                                <Check className={cn(iconSize === "sm" ? "w-3.5 h-3.5" : "w-4 h-4", "text-emerald-500")} />
                                {label && <span className="text-xs text-emerald-500 font-medium">Copied!</span>}
                            </>
                        ) : (
                            <>
                                <Copy className={iconSize === "sm" ? "w-3.5 h-3.5" : "w-4 h-4"} />
                                {label && <span className="text-xs font-medium">{label}</span>}
                            </>
                        )}
                    </Button>
                </TooltipTrigger>
                <TooltipContent side="top">
                    <p>{label ? (copied ? "Copied!" : "Copy") : "Copy code"}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
});
