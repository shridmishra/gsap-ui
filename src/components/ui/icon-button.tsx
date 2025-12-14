"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "ghost" | "default";
  size?: "sm" | "md";
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant = "ghost", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "flex items-center justify-center rounded-md transition-colors",
          variant === "ghost" && "hover:bg-foreground/10",
          variant === "default" && "bg-foreground/5 hover:bg-foreground/10",
          size === "sm" && "w-7 h-7 sm:w-8 sm:h-8 rounded-md sm:rounded-lg",
          size === "md" && "w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

IconButton.displayName = "IconButton";
