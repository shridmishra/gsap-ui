// Auto-generated file - DO NOT EDIT
// Run `npm run generate-code` to regenerate

export const auroraBarsCode = `"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { SiZapier, SiWebflow, SiSlack, SiHubspot, SiFiverr } from "react-icons/si";
import { ArrowRight, Search, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

interface AuroraBarsProps {
  className?: string;
}

export const AuroraBars = ({ className }: AuroraBarsProps) => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : true;

  // Heights relative to the container, creating a V-shape
  const bars = [
    { height: "65%", opacity: 0.3 },
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
    { height: "65%", opacity: 0.3 },
  ];

  return (
    <div className={isDark ? "dark" : ""}>
      <div
        className={cn(
          "relative w-full min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white overflow-hidden font-sans selection:bg-emerald-500/30",
          className
        )}
      >
        {/* Navbar */}
        <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto w-full">
          {/* Logo */}
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="w-6 h-6 bg-black dark:bg-white rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white dark:bg-black rounded-full" />
            </div>
            Topflow
          </div>

          {/* Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500 dark:text-zinc-400">
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
              Find talent +
            </a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
              About
            </a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
              Customers
            </a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
              Pricing
            </a>
          </div>

          {/* Auth */}
          <div className="flex items-center gap-6 text-sm font-medium">
            <a
              href="#"
              className="hidden md:block hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
            >
              Log in ↗
            </a>
            <button className="bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white px-5 py-2 rounded-full transition-colors">
              Get started
            </button>
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white transition-colors"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Bars Background */}
        <div className="absolute inset-0 flex items-end w-full h-full gap-0 justify-between pb-0 pointer-events-none">
          {bars.map((bar, index) => (
            <motion.div
              key={index}
              className="w-full rounded-t-sm bg-gradient-to-t from-pink-400 via-pink-400/60 dark:from-pink-600 dark:via-pink-600/60 to-transparent"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: bar.height, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: Math.abs(index - Math.floor(bars.length / 2)) * 0.1,
                ease: "easeOut",
              }}
            />
          ))}
        </div>

        {/* Gradient Overlay to fade top and bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white/60 dark:from-zinc-950 dark:via-transparent dark:to-zinc-950/30 pointer-events-none" />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 pt-20">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 max-w-5xl leading-tight">
            Hire the top 1% of <br className="hidden md:block" /> Webflow
            freelancers
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
            Tell us your requirement and we&apos;ll match you with a vetted Webflow
            expert in less than <span className="text-zinc-900 dark:text-white font-semibold">48 hours</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 mb-24">
            <button
              className="flex items-center justify-start gap-3 bg-zinc-900 dark:bg-white text-white dark:text-black py-2 rounded-full font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95"
              style={{ paddingLeft: '4px', paddingRight: '24px' }}
            >
              <div className="bg-white dark:bg-black rounded-full p-2"><Search className="w-4 h-4 text-black dark:text-white" /></div>
              Find talent
            </button>
            <button className="flex items-center gap-2 text-zinc-900 dark:text-white font-medium hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors group">
              Learn more{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Trusted By */}
          <div className="flex flex-col items-center gap-8 w-full max-w-4xl mx-auto">
            <p className="text-zinc-500 dark:text-zinc-500 text-sm font-medium tracking-wide uppercase">
              Trusted by <span className="text-zinc-900 dark:text-white/80">400+</span> companies
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-zinc-900 dark:text-white w-full">
              <div className="flex items-center gap-2 text-xl font-bold">
                <SiZapier className="w-6 h-6" /> _zapier
              </div>
              <div className="flex items-center gap-2 text-xl font-bold">
                <SiWebflow className="w-6 h-6" /> Webflow
              </div>
              <div className="flex items-center gap-2 text-xl font-bold">
                <SiSlack className="w-6 h-6" /> slack
              </div>
              <div className="flex items-center gap-2 text-xl font-bold">
                <SiHubspot className="w-6 h-6" /> HubSpot
              </div>
              <div className="flex items-center gap-2 text-xl font-bold">
                <SiFiverr className="w-14 h-14" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
`;

export const simpleHeroCode = `"use client";

import { ArrowRight, Command, Github } from "lucide-react";
import { SiReact, SiTailwindcss, SiFramer, SiNextdotjs } from "react-icons/si";

export const SimpleHero = () => {
  return (
    <div className="relative overflow-hidden h-screen w-full font-sans">
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <img
          src="https://images.unsplash.com/photo-1635776063328-153b13e3c245?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Background"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-black">
          <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center">
            <Command className="w-5 h-5" />
          </div>
          Shrid UI
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-black/80">
          <a href="#" className="hover:text-black transition-colors">Components</a>
          <a href="#" className="hover:text-black transition-colors">Templates</a>
          <a href="#" className="hover:text-black transition-colors">Docs</a>
          <a href="#" className="hover:text-black transition-colors">Pricing</a>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="text-black/80 hover:text-black transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <button className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-black/80 transition-colors">
            Get Access
          </button>
        </div>
      </nav>

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 pt-20">
        <div className="mx-auto max-w-3xl text-center">
          {/* Announcement Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/40  backdrop-blur-sm border border-black text-sm font-medium text-black mb-8 animate-fade-in">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
            v2.0 is now available
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-black mb-8 leading-tight text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60">
            Build faster with <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60">Shrid UI</span>
          </h1>

          <p className="text-lg md:text-xl leading-relaxed text-black/80 max-w-2xl mx-auto mb-10">
            A collection of beautiful, reusable components built with React, Tailwind CSS, and Motion. Copy and paste into your apps.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="h-12 px-8 rounded-full bg-black text-white text-sm font-semibold shadow-lg hover:bg-black/90 hover:scale-105 transition-all flex items-center gap-2">
              Get started <ArrowRight className="w-4 h-4" />
            </button>
            <button className="h-12 px-8 rounded-full bg-white/80 backdrop-blur-sm border border-black/10 text-black text-sm font-semibold hover:bg-white/50 transition-all">
              View Components
            </button>
          </div>

          {/* Trusted By */}
          <div className="flex flex-col items-center gap-6">
            <p className="text-sm font-medium text-black/60 uppercase tracking-wider">Powered by modern stack</p>
            <div className="flex items-center gap-8 text-black/70">
              <SiReact className="w-8 h-8 hover:text-black transition-colors" />
              <SiNextdotjs className="w-8 h-8 hover:text-black transition-colors" />
              <SiTailwindcss className="w-8 h-8 hover:text-black transition-colors" />
              <SiFramer className="w-8 h-8 hover:text-black transition-colors" />
            </div>
          </div>
        </div>
      </div>
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

export const waveButtonCode = `"use client";

import React, { useRef } from "react";
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

export const mangoCardsCode = `"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import mango from "./mango.png";

const images = [mango.src, mango.src, mango.src];

const wrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
};

const variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? "100%" : "-100%",
        opacity: 1,
    }),
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => ({
        zIndex: 0,
        x: direction < 0 ? "100%" : "-100%",
        opacity: 1,
    }),
};

function Carousel({
    setIndex,
    className,
    imageClassName,
}: {
    setIndex: (index: number) => void;
    className?: string;
    imageClassName?: string;
}) {
    const [[page, direction], setPage] = useState([0, 0]);
    const imageIndex = wrap(0, images.length, page);

    const paginate = (newDirection: number) => {
        const newPage = page + newDirection;
        setPage([newPage, newDirection]);
        setIndex(wrap(0, images.length, newPage));
    };

    return (
        <div className={\`relative w-full h-full overflow-hidden \${className}\`}>
            <AnimatePresence initial={false} custom={direction}>
                <motion.img
                    key={page}
                    src={images[imageIndex]}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                        }
                    }}
                    className={\`absolute inset-0 w-full h-full object-cover \${imageClassName}\`}
                    alt="Alphonso Mango"
                />
            </AnimatePresence>
        </div>
    );
}

export function MangoCards() {
    const [index1, setIndex1] = useState(0);
    const [index2, setIndex2] = useState(0);

    return (
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center p-8 bg-zinc-100 dark:bg-zinc-900 min-h-[600px] h-full w-full">
            {/* Card 1: Compact Version */}
            <div className="relative w-[320px] h-[480px] bg-white dark:bg-zinc-900 dark:border dark:border-zinc-800 rounded-[32px] shadow-xl overflow-hidden flex flex-col group transition-transform hover:scale-[1.02] duration-300">
                {/* Image Section */}
                <div className="relative h-[320px] w-full overflow-hidden p-2">
                    <Carousel
                        setIndex={setIndex1}
                        imageClassName="rounded-[28px]"
                    />
                    <div className="absolute top-6 left-6 bg-black/20 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-full z-10">
                        20% off
                    </div>
                </div>

                {/* Pagination Dots */}
                <div className="absolute top-[54%] left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                    {images.map((_, i) => (
                        <div
                            key={i}
                            className={\`w-1.5 h-1.5 rounded-full transition-colors \${i === index1 ? "bg-white" : "bg-white/50"
                                }\`}
                        />
                    ))}
                </div>

                {/* Content Section */}
                <div className="flex-1 px-5 pt-2 pb-5 flex flex-col justify-between">
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-zinc-50">
                                Alphonso
                            </h3>
                            <span className="bg-gray-950 text-white dark:bg-white dark:text-black text-xs font-bold px-2 py-1 rounded-full">
                                ₹270
                            </span>
                        </div>
                        <p className="text-gray-500 dark:text-zinc-400 text-xs leading-relaxed mb-3">
                            Loved worldwide for their sweetness our Alphonso mangoes are a
                            delicious delight wherever you are.
                        </p>
                        <div className="flex gap-2 mb-4">
                            <span className="bg-gray-100 text-gray-600 dark:bg-zinc-800 dark:text-zinc-300 text-[10px] font-semibold px-2.5 py-1 rounded-full">
                                Best Seller
                            </span>
                            <span className="bg-gray-100 text-gray-600 dark:bg-zinc-800 dark:text-zinc-300 text-[10px] font-semibold px-2.5 py-1 rounded-full">
                                9 left
                            </span>
                        </div>
                    </div>

                    <button className="w-full bg-[#4A3427] hover:bg-[#3d2b20] text-white text-sm font-semibold py-3 rounded-2xl transition-colors flex items-center justify-center gap-2">
                        Add to cart
                    </button>
                </div>
            </div>

            {/* Card 2: Expanded/Immersive Version */}
            <div className="relative w-[320px] h-[480px] rounded-[32px] shadow-2xl overflow-hidden flex flex-col group transition-transform hover:scale-[1.02] duration-300">
                {/* Full Background Image */}
                <div className="absolute inset-0">
                    <Carousel setIndex={setIndex2} />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#D98808] via-[#D98808]/80 to-transparent pt-40 pointer-events-none z-10" />
                </div>

                <div className="absolute top-4 right-4 bg-black/10 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-full z-20">
                    20% off
                </div>

                {/* Pagination Dots */}
                <div className="absolute top-[44%] left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
                    {images.map((_, i) => (
                        <div
                            key={i}
                            className={\`w-1.5 h-1.5 rounded-full transition-colors \${i === index2 ? "bg-white" : "bg-white/50"
                                }\`}
                        />
                    ))}
                </div>

                {/* Content Section */}
                <div className="relative z-20 mt-auto px-6 pb-4 text-white">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-2xl font-bold">Alphonso</h3>
                        <span className="bg-black/20 backdrop-blur-sm text-white text-sm font-bold px-3 py-1 rounded-full ">
                            ₹270
                        </span>
                    </div>

                    <p className="text-white/90 text-sm leading-relaxed mb-4 font-medium">
                        Loved worldwide for their sweetness our Alphonso mangoes are a
                        delicious delight wherever you are.
                    </p>

                    <div className="flex gap-2 mb-6">
                        <span className="bg-white/20 backdrop-blur-sm text-white text-[10px] font-semibold px-3 py-1.5 rounded-full ">
                            Best Seller
                        </span>
                        <span className="bg-white/20 backdrop-blur-sm text-white text-[10px] font-semibold px-3 py-1.5 rounded-full ">
                            9 left
                        </span>
                    </div>

                    <button className="w-full bg-white text-black hover:bg-gray-50 text-sm font-bold py-4 rounded-full transition-colors shadow-lg ">
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
}
`;
