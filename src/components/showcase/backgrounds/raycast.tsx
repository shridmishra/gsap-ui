"use client";

import React from "react";
import { cn } from "@/lib/utils";

export function RaycastBackground({ className }: { className?: string }) {
    return (
        <div
            className={cn(
                "relative min-h-screen w-full overflow-hidden bg-[#0B0B0E]",
                className
            )}
        >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] opacity-60 pointer-events-none">
                {/* Core Glow */}
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "radial-gradient(circle at 50% -20%, #FF2E54 0%, transparent 50%)",
                        filter: "blur(80px)",
                    }}
                />

                {/* Beam Shape */}
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "conic-gradient(from 150deg at 50% -20%, transparent 0deg, #FF2E54 30deg, transparent 60deg)",
                        filter: "blur(60px)",
                        opacity: 0.8,
                    }}
                />

                {/* Secondary Beam for depth */}
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "conic-gradient(from 165deg at 50% -20%, transparent 0deg, #FF6B8B 15deg, transparent 30deg)",
                        filter: "blur(40px)",
                        opacity: 0.6,
                    }}
                />
            </div>

            {/* Noise Overlay */}
            <div
                className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />
        </div>
    );
}
