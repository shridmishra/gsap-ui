"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassCard = ({ children, className }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl",
        "before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-br before:from-white/10 before:to-transparent before:opacity-0 before:transition-opacity hover:before:opacity-100",
        className
      )}
    >
      {children}
    </div>
  );
};

export const GlassCardDemo = () => {
  return (
    <div className="p-10 bg-zinc-950 flex items-center justify-center min-h-[300px] w-full rounded-xl">
      <GlassCard className="max-w-sm text-white">
        <h3 className="text-xl font-bold mb-2">Glassmorphism</h3>
        <p className="text-zinc-300">
          A modern UI trend that mimics the look of frosted glass. It adds depth and visual interest to your designs.
        </p>
        <button className="mt-4 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium">
          Learn more
        </button>
      </GlassCard>
    </div>
  );
};

export const glassCardCode = `import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export const GlassCard = ({ children, className }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl",
        "before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-br before:from-white/10 before:to-transparent before:opacity-0 before:transition-opacity hover:before:opacity-100",
        className
      )}
    >
      {children}
    </div>
  );
};`;
