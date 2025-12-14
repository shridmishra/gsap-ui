// Auto-generated file - DO NOT EDIT
// Run `npm run generate-code` to regenerate

export const auroraBarsCode = `import React from "react";
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
`;

export const simpleHeroCode = `"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

export const SimpleHero = () => {
  return (
    <div className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Build faster with <span className="text-primary">Shrid UI</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            A collection of beautiful, reusable components built with React, Tailwind CSS, and Framer Motion.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary flex items-center gap-2">
              Get started <ArrowRight className="w-4 h-4" />
            </button>
            <button className="text-sm font-semibold leading-6 text-foreground">
              Learn more <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
    </div>
  );
};

`;

export const borderFrameCode = `"use client";

import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { HoverIndicator } from "./hover-indicator";

interface BorderFrameProps {
  children: ReactNode;
  className?: string;
}

export const BorderFrame = ({ children, className }: BorderFrameProps) => {
  return (
    <div className={cn("relative group p-1", className)}>
      <div className="w-full h-full overflow-hidden shadow-lg bg-card z-0 grayscale group-hover:grayscale-0 transition-all duration-300">
        {children}
      </div>

      <div
        className="absolute -inset-1 border-[1.5px] border-dashed z-10 border-flicker !border-accent-foreground/30"
        aria-hidden="true"
      />

      <div className="absolute -inset-[2px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
        <div className="absolute -top-0.5 -left-0.5 w-4 h-4">
          <div className="absolute top-0 left-0 w-2 h-[0.5px] bg-accent-foreground corner-flicker" />
          <div className="absolute top-0 left-0 w-[0.5px] h-2 bg-accent-foreground corner-flicker" />
        </div>
        <div className="absolute -top-0.5 -right-0.5 w-4 h-4">
          <div className="absolute top-0 right-0 w-2 h-[0.5px] bg-accent-foreground corner-flicker" />
          <div className="absolute top-0 right-0 w-[0.5px] h-2 bg-accent-foreground corner-flicker" />
        </div>
        <div className="absolute -bottom-0.5 -left-0.5 w-4 h-4">
          <div className="absolute bottom-0 left-0 w-2 h-[0.5px] bg-accent-foreground corner-flicker" />
          <div className="absolute bottom-0 left-0 w-[0.5px] h-2 bg-accent-foreground corner-flicker" />
        </div>
        <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4">
          <div className="absolute bottom-0 right-0 w-2 h-[0.5px] bg-accent-foreground corner-flicker" />
          <div className="absolute bottom-0 right-0 w-[0.5px] h-2 bg-accent-foreground corner-flicker" />
        </div>
      </div>
    </div>
  );
};

export const BorderFrameDemo = () => {
  return (
    <div className="relative">
      <HoverIndicator variant="right" />
      <BorderFrame className="w-72">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
          alt="Mountain landscape"
          className="w-full h-48 object-cover"
        />
      </BorderFrame>
    </div>
  );
};
`;

export const featureSectionCode = `"use client";

import React from "react";
import { Zap, Shield, Smartphone } from "lucide-react";

const features = [
  {
    name: 'Lightning Fast',
    description:
      'Optimized for speed and performance. Built with the latest technologies to ensure your app runs smoothly.',
    icon: Zap,
  },
  {
    name: 'Secure by Default',
    description:
      'Security is our top priority. We follow best practices to keep your data safe and secure.',
    icon: Shield,
  },
  {
    name: 'Mobile First',
    description:
      'Responsive design that looks great on any device. Your users will love the experience on mobile.',
    icon: Smartphone,
  },
];

export const FeatureSection = () => {
  return (
    <div className="py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">Deploy faster</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need to build your app
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-foreground">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <feature.icon className="h-6 w-6 text-primary-foreground" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted-foreground">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};
`;

export const waveButtonCode = `import React, { useRef } from "react";
import { cn } from "@/lib/utils";

interface WaveButtonProps {
  children: React.ReactNode;
  className?: string;
}

export const WaveButton = ({ children, className }: WaveButtonProps) => {
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    btn.style.setProperty("--wave-x", \`\${x}px\`);
    btn.style.setProperty("--wave-y", \`\${y}px\`);
  };

  return (
    <button
      ref={btnRef}
      className={cn(
        "relative overflow-hidden px-12 py-6 rounded-xl font-bold text-xl transition-colors duration-300 bg-foreground text-background group focus:outline-none",
        "before:content-[''] before:absolute before:inset-0 before:bg-transparent before:pointer-events-none",
        "after:content-[''] after:absolute after:rounded-full after:opacity-0 after:transition after:duration-700",
        className
      )}
      style={{
        position: "relative",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        const btn = btnRef.current;
        if (btn) {
          btn.style.setProperty("--wave-x", \`-100px\`);
          btn.style.setProperty("--wave-y", \`-100px\`);
        }
      }}
    >
      <span className="relative z-10">{children}</span>
      <span
        className="pointer-events-none absolute left-0 top-0 w-full h-full"
        aria-hidden="true"
        style={{
          zIndex: 1,
        }}
      >
        <span
          className="block w-0 h-0"
          style={{
            left: "var(--wave-x, -100px)",
            top: "var(--wave-y, -100px)",
            position: "absolute",
            pointerEvents: "none",
            zIndex: 2,
          }}
        >
          <svg width="200" height="200" viewBox="0 0 200 200" style={{
            position: "absolute",
            left: "-100px",
            top: "-100px",
            pointerEvents: "none",
            zIndex: 2,
          }}>
            <defs>
              <radialGradient id="wave-gradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#a5b4fc" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="100" cy="100" r="60" fill="url(#wave-gradient)" />
          </svg>
        </span>
      </span>
    </button>
  );
};
`;
