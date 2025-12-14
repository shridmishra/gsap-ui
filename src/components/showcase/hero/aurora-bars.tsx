import React from "react";
import { cn } from "@/lib/utils";

interface AuroraBarsProps {
  className?: string;
}

export const AuroraBars = ({ className }: AuroraBarsProps) => {
  // Heights relative to the container, creating a V-shape
  const bars = [
    { height: "60%", opacity: 0.3 },
    { height: "50%", opacity: 0.4 },
    { height: "40%", opacity: 0.5 },
    { height: "30%", opacity: 0.6 },
    { height: "25%", opacity: 0.7 },
    { height: "20%", opacity: 0.8 },
    { height: "15%", opacity: 0.9 }, // Center
    { height: "20%", opacity: 0.8 },
    { height: "25%", opacity: 0.7 },
    { height: "30%", opacity: 0.6 },
    { height: "40%", opacity: 0.5 },
    { height: "50%", opacity: 0.4 },
    { height: "60%", opacity: 0.3 },
  ];

  return (
    <div
      className={cn(
        "relative w-full h-full bg-zinc-950 overflow-hidden flex items-end justify-center",
        className
      )}
    >
      {/* Bars Container */}
      <div className="flex items-end w-full h-full gap-1 justify-between pb-0">
        {bars.map((bar, index) => (
          <div
            key={index}
            className="w-full rounded-t-sm bg-gradient-to-t from-emerald-300 via-emerald-500/40 to-transparent"
            style={{
              height: bar.height,
              opacity: 1,
            }}
          />
        ))}
      </div>

     
      
      {/* Overlay for smoother fade at the top if needed, though gradient handles it */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-transparent to-transparent pointer-events-none h-1/2" />
    </div>
  );
};
