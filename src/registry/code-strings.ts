// Auto-generated file - DO NOT EDIT
// Run `npm run generate-code` to regenerate

export const auroraBarsCode = `"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { SiReact, SiTailwindcss, SiTypescript, SiNextdotjs } from "react-icons/si";
import { ArrowRight, Search, Sun, Moon, Github } from "lucide-react";
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
          "relative w-full min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white overflow-hidden font-sans selection:bg-pink-500/30",
          className
        )}
      >
        {/* Navbar */}
        <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto w-full">
          {/* Logo */}
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div
                    className="size-6 bg-rose-500 mt-2"
                    style={{
                      maskImage: 'url("/logo.png")',
                      maskSize: 'contain',
                      maskRepeat: 'no-repeat',
                      maskPosition: 'center',
                      WebkitMaskImage: 'url("/logo.png")',
                      WebkitMaskSize: 'contain',
                      WebkitMaskRepeat: 'no-repeat',
                      WebkitMaskPosition: 'center',
                    }}
                  />
            gsap-ui
          </div>

          {/* Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500 dark:text-zinc-400">
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
              Components
            </a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
              Documentation
            </a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
              Templates
            </a>
            <a href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
              Showcase
            </a>
          </div>

          {/* Auth */}
          <div className="flex items-center gap-6 text-sm font-medium">
            <a
              href="#"
              className="hidden md:flex items-center gap-2 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <button className="bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 text-white px-5 py-2 rounded-full transition-colors">
              Get Started
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
            Beautiful UI components <br className="hidden md:block" /> built with <span className="text-rose-500">GSAP</span>
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed">
            A collection of modern, animated components for your next project. Copy
            and paste, open source, and <span className="text-zinc-900 dark:text-white font-semibold">production ready</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 mb-24">
            <button
              className="flex items-center justify-start gap-3 bg-zinc-900 dark:bg-white text-white dark:text-black py-2 rounded-full font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95"
              style={{ paddingLeft: '4px', paddingRight: '24px' }}
            >
              <div className="bg-white dark:bg-black rounded-full p-2"><Search className="w-4 h-4 text-black dark:text-white" /></div>
              Browse Components
            </button>
            <button className="flex items-center gap-2 text-zinc-900 dark:text-white font-medium hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors group">
              View Documentation{" "}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Trusted By */}
          <div className="flex flex-col items-center gap-8 w-full max-w-4xl mx-auto">
            <p className="text-zinc-500 dark:text-zinc-500 text-sm font-medium tracking-wide uppercase">
              Powered by modern tech stack
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 text-zinc-900 dark:text-white w-full opacity-80">
              <div className="flex items-center gap-2 text-xl font-bold">
                <SiReact className="w-6 h-6" /> React
              </div>
              <div className="flex items-center gap-2 text-xl font-bold">
                <SiNextdotjs className="w-6 h-6" /> Next.js
              </div>
              <div className="flex items-center gap-2 text-xl font-bold">
                <SiTailwindcss className="w-6 h-6" /> Tailwind
              </div>
              <div className="flex items-center gap-2 text-xl font-bold">
                <SiTypescript className="w-6 h-6" /> TypeScript
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
          src="/assets/stock/Serene Green Hills.png"
          alt="Background"
          className="h-full w-full object-cover"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </div>

      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2 font-bold text-xl tracking-tight text-black">
          <div className="w-8 h-8 bg-black text-white rounded-lg flex items-center justify-center">
            <Command className="w-5 h-5" />
          </div>
          Gsap UI
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
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-black to-black/60">GSAP UI</span>
          </h1>


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
          src="/assets/stock/Serene Green Hills.png"
          alt="Mountain landscape"
          className="w-full h-48 object-cover"
          loading="lazy"
          decoding="async"
        />
      </BorderFrame>
    </div>
  );
};
`;

export const mangoCardsCode = `"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
// import mango from "/public/assets/showcase/cards/mango.png";

const mango = "/assets/showcase/cards/mango.png";
const images = [mango, mango, mango];

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
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center p-8 bg-zinc-100 dark:bg-zinc-900 min-h-screen w-full">
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

export const mediaPlayerCode = `"use client";

import React, { useState, useRef, useEffect } from "react";
import { StepForward, StepBack, ListMusic } from "lucide-react";
import { HiOutlinePause, HiOutlinePlay, } from "react-icons/hi2";
import { cn } from "@/lib/utils";


interface MediaPlayerProps {
    className?: string;
}

export function MediaPlayer({ className }: MediaPlayerProps) {
    const videos = [
        { src: "/assets/showcase/cards/vhs.mp4", title: "Retro VHS", duration: "0:15" },
        { src: "/assets/showcase/cards/rose.mp4", title: "Rose Garden", duration: "0:12" }
    ];

    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isPlaylistOpen, setIsPlaylistOpen] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleNext = () => {
        setCurrentVideoIndex((prev) => (prev + 1) % videos.length);
    };

    const togglePlaylist = () => {
        setIsPlaylistOpen(!isPlaylistOpen);
    };

    const selectVideo = (index: number) => {
        setCurrentVideoIndex(index);
        setIsPlaylistOpen(false);
        setIsPlaying(true);
    };

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;


        const playVideo = async () => {
            try {
                video.load();
                if (isPlaying) {
                    await video.play();
                }
            } catch (error) {
                if (error instanceof Error && error.name !== "AbortError") {
                    console.error("Video playback error:", error);
                }
            }
        };

        playVideo();

        return () => {
            // Optional: pause on cleanup if needed, but mainly we just want to avoid 
            // updating state on an unmounted component. 
        };
    }, [currentVideoIndex]);

    // Separate effect for play/pause toggling to avoid reloading the video
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        if (isPlaying) {
            video.play().catch((e) => {
                if (e.name !== "AbortError") console.error(e);
            });
        } else {
            video.pause();
        }
    }, [isPlaying]);

    return (
        <div className={cn("relative group", className)}>
            {/* Device Body */}
            <div className="relative w-80 h-80 bg-white dark:bg-[#1e1e21] rounded-[4rem] p-6 flex flex-col gap-5 shadow-2xl overflow-hidden mx-auto ring-1 ring-black/5 dark:ring-white/10 z-10 transition-colors duration-300">
                {/* Matte Texture Overlay */}
                <div className="absolute inset-0 opacity-20 pointer-events-none "
                    style={{
                        backgroundImage: \`url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E")\`,
                        filter: 'contrast(120%)'
                    }}
                />
                <div className="absolute inset-0 bg-linear-to-br from-white/5 via-transparent to-black/20 pointer-events-none" />



                {/* Screen Area */}
                <div className="relative w-full h-44 -mt-1 bg-black rounded-t-[2.5rem] rounded-b-xl overflow-hidden shadow-[inset_0_2px_4px_rgba(0,0,0,0.8)] ring-1 ring-white/5 border border-white/5 mx-auto shrink-0 group/screen">
                    {/* Screen Content */}
                    <div className="absolute inset-0 bg-sky-500/20">
                        {/* Background Gradient */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#374151,#111827)] opacity-70" />

                        <video
                            ref={videoRef}
                            className="absolute inset-0 w-full h-full object-cover opacity-60"
                            autoPlay={isPlaying}
                            loop
                            muted
                            playsInline
                            onEnded={handleNext}
                        >
                            <source src={videos[currentVideoIndex].src} type="video/mp4" />
                        </video>

                        {/* Playlist Overlay */}
                        <div className={cn(
                            "absolute inset-4 bg-white/80 dark:bg-black/80 backdrop-blur-md border border-black/5 dark:border-white/10 rounded-xl shadow-2xl transition-all duration-300 z-20 flex flex-col p-3 overflow-y-auto",
                            isPlaylistOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                        )}>
                            <h3 className="text-zinc-500 dark:text-white/60 text-xs font-medium uppercase tracking-wider mb-3">Playlist</h3>
                            <div className="space-y-2">
                                {videos.map((video, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => selectVideo(idx)}
                                        className={cn(
                                            "w-full flex items-center justify-between p-2 rounded-lg text-left transition-all",
                                            currentVideoIndex === idx
                                                ? "bg-black/5 dark:bg-white/10 text-zinc-900 dark:text-white shadow-sm ring-1 ring-black/5 dark:ring-white/5"
                                                : "text-zinc-500 dark:text-white/50 hover:bg-black/5 dark:hover:bg-white/5 hover:text-zinc-800 dark:hover:text-white/80"
                                        )}
                                    >
                                        <span className="text-sm font-medium truncate">{video.title}</span>
                                        <span className="text-xs opacity-50">{video.duration}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>

                {/* Controls Area - The "Island" */}
                <div className="flex-1 bg-zinc-200 dark:bg-[#18181b] rounded-md rounded-b-[2.5rem] border border-black/5 dark:border-white/5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.5)] p-1 grid grid-cols-3 gap-1">
                    <ControlButton
                        onClick={togglePlaylist}
                        className="rounded-md rounded-bl-[2.25rem]"
                        icon={<ListMusic className="w-6 h-6" />}
                        aria-label="Playlist"
                        isActive={isPlaylistOpen}
                    />
                    <ControlButton onClick={togglePlay} className="rounded-md" icon={isPlaying ? <HiOutlinePause className="w-8 h-8" /> : <HiOutlinePlay className="w-8 h-8" />} aria-label={isPlaying ? "Pause" : "Play"} isActive={isPlaying} />
                    <ControlButton onClick={handleNext} className="rounded-md rounded-br-[2.25rem]" icon={<StepForward className="w-7 h-7" />} aria-label="Next Video" />
                </div>
            </div>

            {/* Soft shadow underneath */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] h-16 bg-black/50 blur-3xl rounded-full -z-10" />
        </div>
    );
}

function ControlButton({ icon, isActive, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { icon: React.ReactNode, isActive?: boolean }) {
    return (
        <button
            className={cn(
                "group/btn relative w-full h-full flex items-center justify-center transition-all cursor-pointer",
                "bg-zinc-100 dark:bg-[#27272a] shadow-[0_4px_6px_rgba(0,0,0,0.4),0_1px_2px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.05)]",
                "border-t border-b border-black/10 dark:border-black/40",
                "active:translate-y-[2px] active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]",
                "hover:bg-zinc-200 dark:hover:bg-[#27272a]",
                className
            )}
            type="button"
            {...props}
        >
            <span className={cn(
                "relative z-10 transition-all text-zinc-900 dark:text-gray-200",
                isActive
                    ? "opacity-100 text-zinc-600 dark:text-white dark:drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]"
                    : "opacity-60 drop-shadow-sm group-hover/btn:opacity-90"
            )}>
                {icon}
            </span>
        </button >
    );
}

export function MediaPlayerDemo() {
    return (
        <>
            <MediaPlayer />

        </>

    );
}
`;

export const raycastHeroCode = `"use client";

import React from "react";
import { Play, Sparkles, ChevronDown, Search, Bell, Settings, Plus, LayoutGrid } from "lucide-react";
import { motion } from "motion/react";

import Image from "next/image";
// import heroBg from "/public/assets/showcase/hero/raycast-hero.png";
const heroBg = "/assets/showcase/hero/raycast-hero.png";

export default function RaycastHero() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-[#030616] text-white selection:bg-blue-500/30 font-sans">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={heroBg}
                    alt="Hero Background"
                    width={1920}
                    height={1080}
                    className="w-full h-auto opacity-100"
                    priority
                />
            </div>

            {/* Navbar */}
            <nav className="relative z-50 flex items-center justify-between px-6 py-6 md:px-12 max-w-7xl mx-auto">
                <div className="flex items-center gap-2">
                    <div className="relative flex items-center justify-center w-8 h-8">
                        {/* Logo Icon */}
                        <Sparkles className="w-6 h-6 text-blue-400 fill-blue-400/20" />
                    </div>
                    <span className="text-lg font-bold tracking-tight text-white">NEONE</span>
                </div>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
                    <a href="#" className="hover:text-white transition-colors">Features</a>
                    <button className="flex items-center gap-1 hover:text-white transition-colors">
                        Templates <ChevronDown className="w-3 h-3" />
                    </button>
                    <button className="flex items-center gap-1 hover:text-white transition-colors">
                        Docs <ChevronDown className="w-3 h-3" />
                    </button>
                    <button className="flex items-center gap-1 hover:text-white transition-colors">
                        Pricing <ChevronDown className="w-3 h-3" />
                    </button>
                </div>

                <div className="flex items-center gap-6 text-sm font-medium">
                    <a href="#" className="hidden md:block text-gray-400 hover:text-white transition-colors">Sign in</a>
                    <button className="bg-white text-black px-5 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                        Get Started
                    </button>
                </div>
            </nav>

            {/* Hero Content */}
            <main className="relative z-10 flex flex-col items-center justify-center px-4 pt-32 pb-32 text-center max-w-5xl mx-auto">

                {/* Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]"
                >
                    Build Faster <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-500 to-indigo-500">
                        With Lumine Insights
                    </span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-2xl text-lg text-gray-400 mb-10 leading-relaxed"
                >
                    A minimal AI-powered system that transforms complex workflows
                    into clear, glowing, effortless structures — helping you ship ideas faster.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center gap-4"
                >
                    <button className="h-12 px-8 rounded-full bg-gradient-to-b from-white to-gray-200 text-black font-semibold shadow-[0_4px_20px_rgba(59,130,246,0.4)] hover:shadow-[0_4px_25px_rgba(59,130,246,0.6)] hover:scale-105 transition-all duration-300">
                        Get Started
                    </button>
                    <button className="h-12 px-8 rounded-full border border-gray-700 bg-gray-900/50 text-white font-medium hover:bg-gray-800 transition-colors backdrop-blur-sm flex items-center gap-2 group">
                        Watch Demo
                        <Play className="w-4 h-4 fill-white group-hover:scale-110 transition-transform" />
                    </button>
                </motion.div>

                {/* Dashboard Preview */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-24 w-full max-w-6xl relative"
                >
                    {/* Glow behind dashboard */}
                    <div className="absolute -inset-1 bg-gradient-to-b from-blue-500/20 to-transparent blur-2xl opacity-50 rounded-t-3xl" />

                    {/* Dashboard Container */}
                    <div className="relative rounded-t-3xl border border-white/10 bg-[#0A0F1E]/90 backdrop-blur-xl shadow-2xl overflow-hidden">
                        {/* Window Controls */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-white/5">
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <Sparkles className="w-4 h-4 text-blue-400" />
                                    <span className="text-sm font-semibold text-gray-300">NEONE</span>
                                </div>
                                <div className="h-4 w-[1px] bg-white/10" />
                                <div className="flex items-center gap-4 text-xs font-medium text-gray-500">
                                    <span className="text-gray-300">Overview</span>
                                    <span className="hover:text-gray-300 cursor-pointer">Projects</span>
                                    <span className="hover:text-gray-300 cursor-pointer">Dashboards</span>
                                </div>
                            </div>

                            {/* Search Bar Placeholder */}
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-black/20 border border-white/5 text-xs text-gray-500 w-64">
                                <Search className="w-3.5 h-3.5" />
                                <span>Search...</span>
                                <span className="ml-auto text-[10px] opacity-50">⌘K</span>
                            </div>

                            <div className="flex items-center gap-3 text-gray-500">
                                <Bell className="w-4 h-4 hover:text-gray-300 cursor-pointer" />
                                <Settings className="w-4 h-4 hover:text-gray-300 cursor-pointer" />
                            </div>
                        </div>

                        {/* Dashboard Content */}
                        <div className="p-6 md:p-8 min-h-[400px] flex flex-col gap-6">
                            {/* Header */}
                            <div className="flex items-center justify-between">
                                <h3 className="text-xl font-semibold text-white">Order List</h3>
                                <div className="flex gap-2">
                                    <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-gray-400">
                                        <Plus className="w-4 h-4" />
                                    </button>
                                    <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-gray-400">
                                        <LayoutGrid className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>

                            {/* Table Placeholder */}
                            <div className="w-full overflow-hidden rounded-xl border border-white/5 bg-white/[0.02]">
                                <div className="grid grid-cols-6 gap-4 p-4 border-b border-white/5 text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    <div className="col-span-1">Order ID</div>
                                    <div className="col-span-1">User</div>
                                    <div className="col-span-1">Project</div>
                                    <div className="col-span-1">Address</div>
                                    <div className="col-span-1">Date</div>
                                    <div className="col-span-1">Status</div>
                                </div>
                                {/* Rows */}
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="grid grid-cols-6 gap-4 p-4 border-b border-white/5 text-sm text-gray-300 items-center hover:bg-white/[0.02] transition-colors">
                                        <div className="col-span-1 font-mono text-xs text-gray-500">#CM980{i}</div>
                                        <div className="col-span-1 flex items-center gap-2">
                                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500" />
                                            <span>Natal Craig</span>
                                        </div>
                                        <div className="col-span-1">Landing Page</div>
                                        <div className="col-span-1 text-gray-500 truncate">Meadow Lane Oakland</div>
                                        <div className="col-span-1 text-gray-500">Just now</div>
                                        <div className="col-span-1">
                                            <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-medium">
                                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                                                In Progress
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </main>
        </div>
    );
}
`;

export const spotlightGalleryCode = `"use client";
/* eslint-disable @next/next/no-img-element */

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import "./spotlight-gallery.css";

gsap.registerPlugin(ScrollTrigger);

const spotlightItems = [
    { name: "Silent Arc", img: "/assets/stock/Mystical Portal Landscape.png" },
    { name: "Bloom", img: "/assets/stock/Serene Daisy Meadow.png" },
    { name: "Dark Sky", img: "/assets/stock/Serene Landscape with Solitary Figure.png" },
    { name: "Moon Glow", img: "/assets/stock/Pastoral Monolith Scene.png" },
    { name: "Star Dust", img: "/assets/stock/Vintage TV on Hill.png" },
    { name: "Night Wave", img: "/assets/stock/Serene Green Hills.png" },
    { name: "Frost", img: "/assets/stock/Floral Fusion Figure.png" },
    { name: "Dawn Light", img: "/assets/stock/Serene Landscape of Rolling Hills.png" },
    { name: "Mist", img: "/assets/stock/Ethereal Cavern Scene.png" },
    { name: "Sun Spark", img: "/assets/stock/Surreal Landscape with Geometric Structures and Lone Figure.png" },
];

export function SpotlightGallery() {
    const containerRef = useRef<HTMLDivElement>(null);
    const spotlightRef = useRef<HTMLElement>(null);
    const titlesContainerRef = useRef<HTMLDivElement>(null);
    const titlesRef = useRef<HTMLDivElement>(null);
    const imagesContainerRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const bgImageRef = useRef<HTMLDivElement>(null);
    const bgImgElementRef = useRef<HTMLImageElement>(null);
    const introTextRefs = useRef<(HTMLDivElement | null)[]>([]);
    const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
    const titleRefs = useRef<(HTMLHeadingElement | null)[]>([]);

    useEffect(() => {
        const scrollContainer = containerRef.current?.closest(".preview-scroll-container") as HTMLElement;

        // Initialize Lenis
        const lenis = new Lenis({
            wrapper: scrollContainer || window,
            content: scrollContainer ? containerRef.current! : undefined,
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });

        // Integrate Lenis with GSAP ScrollTrigger
        if (scrollContainer) {
            ScrollTrigger.defaults({ scroller: scrollContainer });

            ScrollTrigger.scrollerProxy(scrollContainer, {
                scrollTop(value) {
                    if (arguments.length && value !== undefined) {
                        lenis.scrollTo(value, { immediate: true });
                    }
                    return lenis.scroll;
                },
                getBoundingClientRect() {
                    return {
                        top: 0,
                        left: 0,
                        width: scrollContainer.clientWidth,
                        height: scrollContainer.clientHeight,
                    };
                },
                pinType: "transform"
            });
        }

        lenis.on("scroll", ScrollTrigger.update);
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);

        ScrollTrigger.refresh();

        // However, if we want the exact effect from the snippet which pins the body/window
        // we should just use standard ScrollTrigger.

        const config = {
            gap: 0.08,
            speed: 0.3,
            arcRadius: 500,
        };

        let currentActiveIndex = 0;

        const containerWidth = window.innerWidth * 0.3;
        const containerHeight = window.innerHeight;
        const arcStartX = containerWidth - 200;
        const arcStartY = -200;
        const arcEndX = containerWidth + 200;
        const arcEndY = containerHeight + 200;
        const arcControlPointX = arcStartX + config.arcRadius;
        const arcControlPointY = containerHeight / 2;

        function getBezierPosition(t: number) {
            const x =
                (1 - t) * (1 - t) * arcStartX +
                2 * (1 - t) * t * arcControlPointX +
                t * t * arcEndX;

            const y =
                (1 - t) * (1 - t) * arcStartY +
                2 * (1 - t) * t * arcControlPointY +
                t * t * arcEndY;

            return { x, y };
        }

        function getImgProgressState(index: number, overallProgress: number) {
            const startTime = index * config.gap;
            const endTime = startTime + config.speed;
            if (overallProgress < startTime) return -1;
            if (overallProgress > endTime) return 2;
            return (overallProgress - startTime) / config.speed;
        }

        // Initial states
        imageRefs.current.forEach((img) => {
            if (img) gsap.set(img, { opacity: 0 });
        });

        const ctx = gsap.context(() => {
            const scrollContainer = containerRef.current?.closest(".preview-scroll-container") as HTMLElement;

            ScrollTrigger.create({
                trigger: spotlightRef.current,
                scroller: scrollContainer || window,
                start: "top top",
                end: \`+=\${window.innerHeight * 10}px\`,
                pin: true,
                pinType: scrollContainer ? "transform" : "fixed",
                pinSpacing: true,
                scrub: 1,
                onUpdate: (self) => {
                    const progress = self.progress;

                    if (progress <= 0.2) {
                        const animationProgress = progress / 0.2;
                        const moveDistance = window.innerWidth * 0.6;

                        if (introTextRefs.current[0]) {
                            gsap.set(introTextRefs.current[0], {
                                x: -animationProgress * moveDistance,
                                opacity: 1 - animationProgress,
                            });
                        }

                        if (introTextRefs.current[1]) {
                            gsap.set(introTextRefs.current[1], {
                                x: animationProgress * moveDistance,
                                opacity: 1 - animationProgress,
                            });
                        }

                        if (bgImageRef.current) {
                            gsap.set(bgImageRef.current, {
                                transform: \`scale(\${animationProgress})\`,
                            });
                        }

                        if (bgImgElementRef.current) {
                            gsap.set(bgImgElementRef.current, {
                                transform: \`scale(\${1.5 - animationProgress * 0.5})\`,
                            });
                        }

                        imageRefs.current.forEach((img) => {
                            if (img) gsap.set(img, { opacity: 0 });
                        });

                        if (headerRef.current) headerRef.current.style.opacity = "0";

                        if (titlesContainerRef.current) {
                            gsap.set(titlesContainerRef.current, {
                                "--before-opacity": "0",
                                "--after-opacity": "0",
                            });
                        }
                    } else if (progress > 0.2 && progress <= 0.25) {
                        if (bgImageRef.current) gsap.set(bgImageRef.current, { transform: "scale(1)" });
                        if (bgImgElementRef.current) gsap.set(bgImgElementRef.current, { transform: "scale(1)" });

                        introTextRefs.current.forEach(el => {
                            if (el) gsap.set(el, { opacity: 0 });
                        });

                        imageRefs.current.forEach((img) => {
                            if (img) gsap.set(img, { opacity: 0 });
                        });

                        if (headerRef.current) headerRef.current.style.opacity = "1";

                        if (titlesContainerRef.current) {
                            gsap.set(titlesContainerRef.current, {
                                "--before-opacity": "1",
                                "--after-opacity": "1",
                            });
                        }
                    } else if (progress > 0.25 && progress <= 0.95) {
                        if (bgImageRef.current) gsap.set(bgImageRef.current, { transform: "scale(1)" });
                        if (bgImgElementRef.current) gsap.set(bgImgElementRef.current, { transform: "scale(1)" });

                        introTextRefs.current.forEach(el => {
                            if (el) gsap.set(el, { opacity: 0 });
                        });

                        if (headerRef.current) headerRef.current.style.opacity = "1";

                        if (titlesContainerRef.current) {
                            gsap.set(titlesContainerRef.current, {
                                "--before-opacity": "1",
                                "--after-opacity": "1",
                            });
                        }

                        const switchProgress = (progress - 0.25) / 0.7;
                        const viewportHeight = window.innerHeight;
                        const titlesContainerHeight = titlesRef.current?.scrollHeight || 0;
                        const startPosition = viewportHeight;
                        const targetPosition = -titlesContainerHeight;
                        const totalDistance = startPosition - targetPosition;
                        const currentY = startPosition - switchProgress * totalDistance;

                        if (titlesRef.current) {
                            gsap.set(titlesRef.current, {
                                y: currentY,
                            });
                        }

                        imageRefs.current.forEach((img, index) => {
                            if (!img) return;
                            const imageProgress = getImgProgressState(index, switchProgress);

                            // Remove active class from all images
                            img.classList.remove("active");

                            if (imageProgress < 0 || imageProgress > 1) {
                                gsap.set(img, { opacity: 0 });
                            } else {
                                const pos = getBezierPosition(imageProgress);
                                gsap.set(img, {
                                    x: pos.x - 100,
                                    y: pos.y - 75,
                                    opacity: index === currentActiveIndex ? 1 : imageProgress,
                                });
                                if (index === currentActiveIndex) {
                                    img.classList.add("active");
                                }
                            }
                        });

                        // Fixed title activation logic
                        const viewportMiddle = viewportHeight / 2;
                        const activationThreshold = 150; // Distance threshold for activation
                        let closestIndex = 0;
                        let closestDistance = Infinity;

                        titleRefs.current.forEach((title, index) => {
                            if (!title) return;
                            const titleRect = title.getBoundingClientRect();
                            const titleCenter = titleRect.top + titleRect.height / 2;
                            const distanceFromCenter = Math.abs(titleCenter - viewportMiddle);

                            if (distanceFromCenter < closestDistance) {
                                closestDistance = distanceFromCenter;
                                closestIndex = index;
                            }
                        });

                        // Only activate if within threshold and different from current
                        if (
                            closestDistance < activationThreshold &&
                            closestIndex !== currentActiveIndex
                        ) {
                            // Remove active class from current title
                            if (titleRefs.current[currentActiveIndex]) {
                                titleRefs.current[currentActiveIndex]?.classList.remove("active");
                            }

                            // Add active class to new title
                            if (titleRefs.current[closestIndex]) {
                                titleRefs.current[closestIndex]?.classList.add("active");
                            }

                            // Update background image
                            if (bgImgElementRef.current) {
                                bgImgElementRef.current.src = spotlightItems[closestIndex].img;
                            }

                            currentActiveIndex = closestIndex;
                        }
                    } else if (progress > 0.95) {
                        if (headerRef.current) headerRef.current.style.opacity = "0";
                        if (titlesContainerRef.current) {
                            gsap.set(titlesContainerRef.current, {
                                "--before-opacity": "0",
                                "--after-opacity": "0",
                            });
                        }
                        imageRefs.current.forEach((img) => {
                            if (img) gsap.set(img, { opacity: 0 });
                        });
                    }
                },
            });
        }, containerRef);

        const handleResize = () => {
            ScrollTrigger.refresh();
        };
        window.addEventListener("resize", handleResize);

        return () => {
            ctx.revert();
            lenis.destroy();
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="spotlight-gallery" ref={containerRef}>
            <section className="intro">
                <h1>A curated series of surreal frames.</h1>
            </section>
            <section className="spotlight" ref={spotlightRef}>
                <div className="spotlight-intro-text-wrapper">
                    <div className="spotlight-intro-text" ref={(el) => { introTextRefs.current[0] = el; }}>
                        <p>Beneath</p>
                    </div>
                    <div className="spotlight-intro-text" ref={(el) => { introTextRefs.current[1] = el; }}>
                        <p>Beyond</p>
                    </div>
                </div>
                <div className="spotlight-bg-image" ref={bgImageRef}>
                    <img
                        src={spotlightItems[0].img}
                        alt="bg"
                        ref={bgImgElementRef}
                        loading="eager"
                        decoding="async"
                        fetchPriority="high"
                    />
                </div>
                <div className="spotlight-titles-container" ref={titlesContainerRef}>
                    <div className="spotlight-titles" ref={titlesRef}>
                        {spotlightItems.map((item, index) => (
                            <h1
                                key={index}
                                ref={(el) => { titleRefs.current[index] = el; }}
                                className={index === 0 ? "active" : ""}
                            >
                                {item.name}
                            </h1>
                        ))}
                    </div>
                </div>
                <div className="spotlight-images" ref={imagesContainerRef}>
                    {spotlightItems.map((item, index) => (
                        <div
                            key={index}
                            className="spotlight-img"
                            ref={(el) => { imageRefs.current[index] = el; }}
                        >
                            <img
                                src={item.img}
                                alt={item.name}
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                    ))}
                </div>
                <div className="spotlight-header" ref={headerRef}>
                    <p>Discover</p>
                </div>
            </section>
            <section className="outro">
                <h1>Moments still in motion.</h1>
            </section>
        </div>
    );
}
`;

export const stickyScrollCode = `"use client";

import "./sticky-scroll.css";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export function StickyScroll() {
  const cards = [
    {
      index: "01",
      title: "Modularity",
      imagePath: "/assets/stock/Mystical Portal Landscape.png",
      description:
        "Breaking a system into smaller, independent modules makes code easier to maintain, scale, and reuse.",
    },
    {
      index: "02",
      title: "Abstraction",
      imagePath: "/assets/stock/Floral Fusion Figure.png",
      description:
        "Abstraction hides unnecessary details and exposes only essential features, simplifying complex systems.",
    },
    {
      index: "03",
      title: "Scalability",
      imagePath: "/assets/stock/Pastoral Monolith Scene.png",
      description:
        "A scalable system can handle increasing workloads without a drop in performance or the need for major redesigns.",
    },
    {
      index: "04",
      title: "Concurrency",
      imagePath: "/assets/stock/Serene Landscape with Solitary Figure.png",
      description:
        "Concurrency allows multiple tasks to run at the same time, improving efficiency and responsiveness.",
    },
  ];

  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = document.querySelector(".preview-scroll-container") as HTMLElement;

    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      wrapper: scrollContainer || window,
      content: scrollContainer ? container.current! : undefined,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // Integrate Lenis with GSAP ScrollTrigger
    if (scrollContainer) {
      ScrollTrigger.defaults({ scroller: scrollContainer });

      ScrollTrigger.scrollerProxy(scrollContainer, {
        scrollTop(value) {
          if (arguments.length && value !== undefined) {
            lenis.scrollTo(value, { immediate: true });
          }
          return lenis.scroll;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: scrollContainer.clientWidth,
            height: scrollContainer.clientHeight,
          };
        },
        pinType: "transform"
      });
    }

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);

    ScrollTrigger.refresh();

    const ctx = gsap.context(() => {
      const stickyCards = gsap.utils.toArray(".sticky-card") as HTMLElement[];

      stickyCards.forEach((card, index) => {
        if (index < stickyCards.length - 1) {
          ScrollTrigger.create({
            trigger: card,
            start: "top top",
            endTrigger: stickyCards[stickyCards.length - 1],
            end: "top top",
            pin: true,
            pinSpacing: false,
          });
        }

        if (index < stickyCards.length - 1) {
          ScrollTrigger.create({
            trigger: stickyCards[index + 1],
            start: "top bottom",
            end: "top top",
            onUpdate: (self) => {
              const progress = self.progress;
              const scale = 1 - progress * 0.25;
              const rotation = (index % 2 === 0 ? 5 : -5) * progress;
              const afterOpacity = progress;

              gsap.set(card, {
                scale: scale,
                rotation: rotation,
                "--after-opacity": afterOpacity,
              });
            },
          });
        }
      });
    }, container);

    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      ctx.revert();
      lenis.destroy();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="sticky-cards" ref={container}>
      {cards.map((card) => (
        <div className="sticky-card" key={card.index}>
          <div className="sticky-card-index">
            <h1>{card.index}</h1>
          </div>
          <div className="sticky-card-content">
            <div className="sticky-card-content-wrapper">
              <h1 className="sticky-card-header">{card.title}</h1>
              <div className="sticky-card-img">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={card.imagePath}
                  alt={card.title}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="sticky-card-copy">
                <div className="sticky-card-copy-title">
                  <p>(About the concept)</p>
                </div>
                <div className="sticky-card-copy-description">
                  <p>{card.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}`;

export const illustratedHeroCode = `"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function IllustratedHero() {
    return (
        <div className="relative min-h-screen w-full bg-white font-sans text-black overflow-hidden flex flex-col">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 -mt-24 select-none pointer-events-none">
                <Image
                    src="/assets/showcase/hero/illustrated.png"
                    alt="Hero Background"
                    fill
                    className="w-full h-screen object-cover opacity-40 md:opacity-100" // Adjust opacity for mobile readability if needed, or keeping it clean
                    priority
                />
            </div>

            {/* Navbar */}
            <nav className="relative z-50 w-full max-w-7xl mx-auto px-6 pt-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="font-bold text-2xl tracking-tight text-gray-900">Stravo</span>
                </div>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
                    <a href="#" className="hover:text-black transition-colors">Demos</a>
                    <a href="#" className="hover:text-black transition-colors">About</a>
                    <a href="#" className="hover:text-black transition-colors">Blog</a>
                    <a href="#" className="hover:text-black transition-colors">Pages</a>
                    <a href="#" className="hover:text-black transition-colors">Contact</a>
                </div>

                <button className="bg-gray-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
                    Get started
                </button>
            </nav>

            {/* Main Content */}
            <div className="flex-1 flex flex-col  items-center justify-center -mt-24 relative z-10 pb-20">
                <div className="container mx-auto px-6 text-center max-w-4xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6"
                    >
                        Smarter teams <br />
                        start with Stravo
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto font-medium"
                    >
                        A modern platform to manage projects & boost productivity.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <button className="h-12 px-8 rounded-full bg-gray-900 text-white font-semibold flex items-center gap-2 hover:bg-gray-800 transition-all duration-200 shadow-xl shadow-gray-200/50">
                            Get started <ArrowRight className="w-4 h-4" />
                        </button>
                        <button className="h-12 px-8 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-900 font-semibold flex items-center gap-2 hover:bg-white hover:border-gray-300 transition-all duration-200 shadow-sm">
                            Learn more <ArrowRight className="w-4 h-4" />
                        </button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
`;

export const hoverImageCode = `"use client";

import "./hover-image.css";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";

interface ProjectItem {
    title: string;
    label: string;
    imageSrc: string;
}

const defaultProjects: ProjectItem[] = [
    {
        title: "Luminara",
        label: "Interactive Experience",
        imageSrc: "/assets/stock/Ethereal Cavern Scene.png",
    },
    {
        title: "Velocity",
        label: "Motion Design Studio",
        imageSrc: "/assets/stock/Ethereal Motion Scene.png",
    },
    {
        title: "Botanical",
        label: "Nature & Wellness",
        imageSrc: "/assets/stock/Serene Daisy Meadow.png",
    },
    {
        title: "Horizon",
        label: "Landscape Architecture",
        imageSrc: "/assets/stock/Serene Green Hills.png",
    },
];

interface HoverImageProps {
    projects?: ProjectItem[];
}

export function HoverImage({ projects = defaultProjects }: HoverImageProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const thumbnailRef = useRef<HTMLDivElement>(null);
    const xToRef = useRef<gsap.QuickToFunc | null>(null);
    const yToRef = useRef<gsap.QuickToFunc | null>(null);

    useEffect(() => {
        const projectThumbnail = thumbnailRef.current;
        const projectsContainer = containerRef.current?.querySelector(
            ".projects"
        ) as HTMLElement | null;

        if (!projectThumbnail || !projectsContainer) return;

        const projectElements = gsap.utils.toArray(
            ".project",
            projectsContainer
        ) as HTMLElement[];
        const thumbnails = gsap.utils.toArray(
            ".thumbnail",
            projectThumbnail
        ) as HTMLElement[];

        gsap.set(projectThumbnail, { scale: 0, xPercent: -50, yPercent: -50 });

        xToRef.current = gsap.quickTo(projectThumbnail, "x", {
            duration: 0.4,
            ease: "power3.out",
        });
        yToRef.current = gsap.quickTo(projectThumbnail, "y", {
            duration: 0.4,
            ease: "power3.out",
        });

        const handleMouseMove = (e: MouseEvent) => {
            xToRef.current?.(e.clientX);
            yToRef.current?.(e.clientY);
        };

        const handleMouseLeave = () => {
            gsap.to(projectThumbnail, {
                scale: 0,
                duration: 0.3,
                ease: "power2.out",
                overwrite: "auto",
            });
        };

        projectsContainer.addEventListener("mousemove", handleMouseMove);
        projectsContainer.addEventListener("mouseleave", handleMouseLeave);

        const projectListeners: Array<() => void> = [];

        projectElements.forEach((project, index) => {
            const handleMouseEnter = () => {
                gsap.to(projectThumbnail, {
                    scale: 1,
                    duration: 0.4,
                    ease: "power2.out",
                    overwrite: "auto",
                });

                gsap.to(thumbnails, {
                    yPercent: -100 * index,
                    duration: 0.4,
                    ease: "power2.out",
                    overwrite: "auto",
                });
            };

            project.addEventListener("mouseenter", handleMouseEnter);
            projectListeners.push(() =>
                project.removeEventListener("mouseenter", handleMouseEnter)
            );
        });

        return () => {
            projectsContainer.removeEventListener("mousemove", handleMouseMove);
            projectsContainer.removeEventListener("mouseleave", handleMouseLeave);
            projectListeners.forEach((cleanup) => cleanup());
        };
    }, [projects]);

    return (
        <div className="hover-image-container" ref={containerRef}>
            {/* eslint-disable-next-line @next/next/no-page-custom-font */}
            <link
                href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700&display=swap"
                rel="stylesheet"
            />
            <div className="projects">
                {projects.map((project, index) => (
                    <div className="project" key={index}>
                        <h2>{project.title}</h2>
                        <p>{project.label}</p>
                    </div>
                ))}
            </div>

            <div className="project-thumbnail" ref={thumbnailRef}>
                {projects.map((project, index) => (
                    <div className="thumbnail" key={index}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={project.imageSrc} alt={project.title} />
                    </div>
                ))}
            </div>
        </div>
    );
}
`;

export const textOnScrollCode = {
  html: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Text on scroll</title>
    <link rel="stylesheet" href="https://unpkg.com/splitting/dist/splitting.css" />
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700;800;900&display=swap');

        :root {
            --primary: #0c0c0c;
            --secondary: #f4f4f4
        }

        ::-webkit-scrollbar {
            display: none;
        }

        /* lenis settings */
        html.lenis,
        html.lenis body {
            height: auto;
        }

        .lenis.lenis-smooth {
            scroll-behavior: auto !important;
        }

        .lenis.lenis-smooth [data-lenis-prevent] {
            overscroll-behavior: contain;
        }

        .lenis.lennis-stopped {
            overflow: hidden;
        }

        .lenis.lenis-scrolling iframe {
            pointer-events: none;
        }

        html {
            font-size: calc(100vw/ 1920 * 10);
        }

        body {
            font-family: 'Work Sans', sans-serif;
            font-weight: normal;
            font-style: normal;
            font-display: swap;
            background-color: var(--primary);
            color: var(--secondary);
        }

        h3 {
            font-size: 8rem;
            text-transform: uppercase;
        }

        p,
        li,
        span {
            font-size: 2.4rem;
        }

        li {
            list-style: none;
        }

        /* Splitting.js word styles */
        .word {
            display: inline-block;
            will-change: opacity;
        }

        /* nav-section */
        .nav {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 999;
        }

        .nav_wrapper {
            display: grid;
            grid-template-columns: repeat(3, 1fr) 2fr;
            grid-template-rows: 1fr;
            padding: 6.4rem;
        }

        .nav_item:nth-child(1) {
            grid-area: 1/1/2/2;
        }

        .nav_item:nth-child(2) {
            grid-area: 1/2/2/3;
        }

        .nav_item:nth-child(3) {
            grid-area: 1/3/2/4;
        }

        .nav_item:nth-child(4) {
            grid-area: 1/4/2/5;
            display: inline-flex;
            width: fit-content;
            justify-self: end;
            gap: 4rem;
        }

        .nav span {
            display: block;
        }

        /* hero */
        .hero {
            position: relative;
            width: 100%;
            height: 300vh;
        }

        .hero_wrapper {
            padding: 6.4rem;
        }

        .hero_paragraph {
            padding-top: 80vh;
            padding-left: 80rem;
            padding-bottom: 40rem;
        }

        .hero_paragraph_text,
        .hero_paragraph_text span {
            font-size: 8rem;
            line-height: 1.2;
        }

        .hero_paragraph_text::before {
            content: 'Info';
            border: 1px solid var(--secondary);
            border-radius: 20rem;
            padding: 0.4rem 1.2rem;
            margin-right: 1.6rem;
            font-size: 4rem;
        }

        .hero_background {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
        }

        .hero_background_img {
            width: 100%;
            height: 120%;
            object-fit: cover;
            scale: 1.1;
        }

        @media screen and (max-width: 768px) {
            html {
                font-size: calc(100vw / 768 * 10);
            }

            h3 {
                font-size: 2.4rem;
            }

            p,
            li,
            span {
                font-size: 3.4rem;
            }

            .nav_wrapper {
                display: flex;
                justify-content: space-between;
            }

            .nav_item:nth-child(3) {
                display: none;
            }

            .nav_item:nth-child(4) {
                display: none;
            }

            .hero_paragraph {
                padding-left: 0;
            }

            .hero_background_img {
                height: 100%;
            }
        }
    </style>
</head>

<body>

    <main class="app">
        <div class="nav">
            <div class="nav_wrapper">
                <div class="nav_item">
                    <span>SR</span>
                </div>
                <div class="nav_item">
                    <span>Motion Developer</span>
                </div>
                <div class="nav_item">
                    <span>Based in
                    Mumbai (IN)</span>
                </div>
                <div class="nav_item">
                    <li>Index</li>
                    <li>Works</li>
                    <li>Gallery</li>
                    <li>Contacts</li>
                </div>
            </div>
        </div>

        <section class="hero">
            <div class="hero_wrapper">
                <div class="hero_paragraph">
                    <p class="hero_paragraph_text">
                        Shrid Mishra, a motion developer based in Mumbai, specializes in creating captivating
                        visual narratives with GSAP that blend creativity and technology.
                        His innovative style allows him to craft unique experiences that resonate with audiences
                        worldwide.
                    </p>
                </div>
            </div>
            <div class="hero_background">
                <img src="/assets/stock/Black and White.png" alt="Background" class="hero_background_img">
            </div>
        </section>
    </main>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollTrigger.min.js"></script>
    <script src="https://unpkg.com/lenis@1.0.42/dist/lenis.min.js"></script>
    <script src="https://unpkg.com/splitting/dist/splitting.min.js"></script>

    <script>
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        // Wait for DOM to load
        window.addEventListener('DOMContentLoaded', () => {
            // Initialize Splitting to break text into words
            Splitting({
                target: '.hero_paragraph_text',
                by: 'words'
            });

            // Get references after Splitting has created word spans
            const words = document.querySelectorAll('.hero_paragraph_text .word');
            const image = document.querySelector('.hero_background');
            const navItems = document.querySelectorAll(".nav_item");

            // Set initial styles for words (dim)
            gsap.set(words, { opacity: 0.3 });

            // Create a timeline for word-by-word reveal
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.hero',
                    start: 'top top',
                    end: 'bottom bottom',
                    scrub: 0.5,
                }
            });

            // Add each word to timeline with its own position
            // This ensures word-by-word sequential animation
            words.forEach((word, index) => {
                const startPosition = index / words.length;
                const endPosition = (index + 1) / words.length;

                tl.to(word, {
                    opacity: 1,
                    duration: endPosition - startPosition,
                    ease: 'none'
                }, startPosition);
            });

            // Background image animation - starts immediately and fades throughout
            tl.to(image, {
                scale: 0.95,
                opacity: 0,
                yPercent: -5,
                duration: 0.6,
                ease: 'power2.out'
            }, 0);

            // Nav items animation - starts at 70% scroll
            tl.to([navItems[1], navItems[2]], {
                yPercent: -100,
                opacity: 0,
                duration: 0.3,
                ease: 'power2.out'
            }, 0.7);
        });
    </script>
</body>

</html>`,
};

export const mouseImageTrailCode = {
  html: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>GSAP Mouse Image Trail</title>
    <!-- GSAP CDN -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js" defer></script>
    <style>
        /* Dark/Light Mode CSS Variables */
        /* Light mode (default) */
        :root {
            --bg-primary: #f5f5f5;
            --bg-secondary: #e2e2e2;
            --shadow-color: rgba(0, 0, 0, 0.1);
        }

        /* Dark mode via data-theme attribute (injected by parent) */
        :root[data-theme="dark"],
        html[data-theme="dark"] {
            --bg-primary: #0a0a0a;
            --bg-secondary: #1a1a1a;
            --shadow-color: rgba(255, 255, 255, 0.05);
        }

        /* Fallback: Dark mode via system preference (for standalone viewing) */
        @media (prefers-color-scheme: dark) {
            :root:not([data-theme="light"]) {
                --bg-primary: #0a0a0a;
                --bg-secondary: #1a1a1a;
                --shadow-color: rgba(255, 255, 255, 0.05);
            }
        }

        /* Reset & base layout */
        *,
        *::before,
        *::after {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html,
        body {
            width: 100%;
            height: 100%;
            min-height: 100vh;
            background: var(--bg-primary);
            overflow: hidden;
        }

        .img {
            position: absolute;
            width: 100px;
            height: 150px;
            transform: translate(-50%, -50%);
            pointer-events: none;
        }

        .img img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
            border-radius: 10px;
            box-shadow: 0 2px 10px var(--shadow-color);
        }
    </style>
</head>

<body>
    <div class="img">
        <img src="/assets/stock/Ethereal Cavern Scene.png">
    </div>
    <div class="img">
        <img src="/assets/stock/Ethereal Motion Scene.png">
    </div>
    <div class="img">
        <img src="/assets/stock/Floral Fusion Figure.png">
    </div>
    <div class="img">
        <img src="/assets/stock/Mystical Portal Landscape.png">
    </div>

    <div class="img">
        <img src="/assets/stock/Pastoral Monolith Scene.png">
    </div>

    <div class="img">
        <img src="/assets/stock/Serene Daisy Meadow.png">
    </div>

    <div class="img">
        <img src="/assets/stock/Serene Green Hills.png">
    </div>

    <div class="img">
        <img src="/assets/stock/Serene Landscape of Rolling Hills.png">
    </div>

    <div class="img">
        <img src="/assets/stock/Solitude Amidst Grandeur.png">
    </div>

    <script>
        document.addEventListener('mousemove', e => {
            gsap.to(".img", {
                x: e.clientX,
                y: e.clientY,
                stagger: -0.1,
            });


        })

    </script>
</body>

</html>`,
};

export const textLoaderCode = {
  html: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Text Loader</title>
    <style>
        /* Light mode (default) */
        :root {
            --bg-primary: #ffffff;
            --bg-secondary: #f5f5f5;
            --text-primary: #1a1a1a;
            --text-secondary: rgba(26, 26, 26, 0.2);
            --accent-color: #f43f5e;
        }

        /* Dark mode via data-theme attribute (synced from parent website) */
        :root[data-theme="dark"],
        html[data-theme="dark"] {
            --bg-primary: #0a0a0a;
            --bg-secondary: #1a1a1a;
            --text-primary: #f5f5f5;
            --text-secondary: rgba(245, 245, 245, 0.2);
            --accent-color: #f43f5e;
        }

        /* Fallback: Dark mode via system preference (for standalone viewing) */
        @media (prefers-color-scheme: dark) {
            :root:not([data-theme="light"]) {
                --bg-primary: #0a0a0a;
                --bg-secondary: #1a1a1a;
                --text-primary: #f5f5f5;
                --text-secondary: rgba(245, 245, 245, 0.2);
                --accent-color: #f43f5e;
            }
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html,
        body {
            width: 100%;
            height: 100%;
        }

        body {
            font-family: "Oswald", "Bebas Neue", sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: var(--bg-primary);
            overflow: hidden;
        }

        .loader {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;
        }

        .text {
            display: flex;
            font-size: 6.5rem;
            font-weight: 700;
            position: relative;
            overflow: hidden;
        }

        @media (max-width: 768px) {
            .text {
                font-size: 3.5rem;
            }
        }

        @media (max-width: 480px) {
            .text {
                font-size: 2.5rem;
            }
        }

        .text span {
            display: inline-block;
            position: relative;
            color: var(--text-secondary);
            line-height: 1;
            transform: translateY(100px);
            --clipPath: inset(100% 0 0 0);
        }

        .text span::before {
            content: attr(data-text);
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            color: var(--accent-color);
            clip-path: var(--clipPath);
            -webkit-clip-path: var(--clipPath);
            transition: clip-path 0s;
        }
    </style>
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap" rel="stylesheet" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
</head>

<body>
    <div class="loader">
        <div class="text">
            <span data-text="S">S</span>
            <span data-text="H">H</span>
            <span data-text="R">R</span>
            <span data-text="I">I</span>
            <span data-text="D">D</span>
            <span data-text="S">S</span>
            <span data-text="T">T</span>
            <span data-text="U">U</span>
            <span data-text="D">D</span>
            <span data-text="I">I</span>
            <span data-text="O">O</span>
            <span data-text="S">S</span>
        </div>
    </div>

    <script>
        document.addEventListener("DOMContentLoaded", function () {
            const letters = document.querySelectorAll(".text span");
            const tl = gsap.timeline();
            tl.to(letters, {
                duration: 0.6,
                y: 0,
                stagger: 0.05,
                ease: "power2.out",
            })
                .to(letters, {
                    "--clipPath": "inset(0% 0 0 0)",
                    duration: 0.8,
                    delay: 0.3,
                    ease: "power1.inOut",
                })
                .to(letters, {
                    duration: 0.6,
                    y: 100,
                    stagger: 0.05,
                    delay: 0.5,
                });
        });
    </script>
</body>

</html>`,
};

export const mergeAtCenterCode = {
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Merge At Center</title>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700;900&display=swap" rel="stylesheet" />
  <style>
    :root {
      --bg-primary: #ffffff;
      --bg-secondary: #f5f5f5;
      --text-primary: #111111;
      --text-secondary: #404040;
      --accent-color: #3b82f6;
    }

    :root[data-theme="dark"],
    html[data-theme="dark"] {
      --bg-primary: #0a0a0a;
      --bg-secondary: #1a1a1a;
      --text-primary: #f5f5f5;
      --text-secondary: #b0b0b0;
      --accent-color: #60a5fa;
    }

    @media (prefers-color-scheme: dark) {
      :root:not([data-theme="light"]) {
        --bg-primary: #0a0a0a;
        --bg-secondary: #1a1a1a;
        --text-primary: #f5f5f5;
        --text-secondary: #b0b0b0;
        --accent-color: #60a5fa;
      }
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      color: var(--text-primary);
    }

    html,
    body {
      width: 100%;
      height: 100%;
    }

    body {
      font-family: "DM Sans", sans-serif;
      background: radial-gradient(circle at 30% 20%, var(--bg-secondary), var(--bg-primary));
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      padding: 1.5rem;
    }

    h1 {
      font-size: clamp(2.5rem, 10vw, 6.25rem);
      overflow: hidden;
      line-height: 1;
      letter-spacing: -0.03em;
      text-transform: lowercase;
    }

    h1 span {
      display: inline-block;
      will-change: transform, opacity;
    }
  </style>
  <script defer src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/gsap.min.js" integrity="sha512-NcZdtrT77bJr4STcmsGAESr06BYGE8woZdSdEgqnpyqac7sugNO+Tr4bGwGF3MsnEkGKhU2KL2xh6Ec+BqsaHA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</head>
<body>
  <h1>shridstudios</h1>

  <script>
    window.addEventListener("DOMContentLoaded", () => {
      function breakText() {
        const h1 = document.querySelector("h1");
        const h1Text = h1.textContent;
        const splitText = h1Text.split("");
        let clutter = "";
        const halfValue = splitText.length / 2;

        splitText.forEach((char, idx) => {
          if (idx < halfValue) {
            clutter += \`<span class="a">\${char}</span>\`;
          } else {
            clutter += \`<span class="b">\${char}</span>\`;
          }
        });

        h1.innerHTML = clutter;
      }

      breakText();

      gsap.from("h1 .a", {
        y: 50,
        opacity: 0,
        duration: 0.6,
        delay: 0.5,
        stagger: 0.15,
        ease: "power2.out",
      });

      gsap.from("h1 .b", {
        y: 50,
        opacity: 0,
        duration: 0.6,
        delay: 0.5,
        stagger: -0.15,
        ease: "power2.out",
      });
    });
  </script>
</body>
</html>
`,
};

export const colorPaletteShowcaseCode = {
  html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Color Palette Showcase</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;700&display=swap" rel="stylesheet">
    <style>
        /* Light mode (default) */
        :root {
            --bg-primary: #ffffff;
            --bg-secondary: #f5f5f5;
            --text-primary: #1a1a1a;
            --text-secondary: #666666;
            --border-color: #e0e0e0;
            --accent-color: #3b82f6;
        }

        /* Dark mode via data-theme attribute */
        :root[data-theme="dark"],
        html[data-theme="dark"] {
            --bg-primary: #0a0a0a;
            --bg-secondary: #1a1a1a;
            --text-primary: #f5f5f5;
            --text-secondary: #a0a0a0;
            --border-color: #333333;
            --accent-color: #60a5fa;
        }

        /* Fallback: Dark mode via system preference */
        @media (prefers-color-scheme: dark) {
            :root:not([data-theme="light"]) {
                --bg-primary: #0a0a0a;
                --bg-secondary: #1a1a1a;
                --text-primary: #f5f5f5;
                --text-secondary: #a0a0a0;
                --border-color: #333333;
                --accent-color: #60a5fa;
            }
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            height: 100vh;
            display: flex;
            overflow: hidden;
            font-family: 'Inter', sans-serif;
            justify-items: center;
            background: var(--bg-primary);
            color: var(--text-primary);
            transition: background-color 0.3s, color 0.3s;
        }

        .card-container {
            position: relative;
            width: 0px;
            height: 300px;
            perspective: 1000px;
            perspective-origin: 50% -229%;
            cursor: pointer;
            padding-bottom: 100px;
        }

        .card {
            --card-rgb: 255, 255, 255;
            height: 300px;
            width: 300px;
            border-radius: 20px;
            overflow: hidden;

            /* Vivid glass: keep the true color while still feeling frosted/glassy */
            background:
                radial-gradient(140% 120% at 15% 10%, rgba(255,255,255,0.35), rgba(255,255,255,0) 55%),
                linear-gradient(
                    180deg,
                    rgba(var(--card-rgb), 0.98),
                    rgba(var(--card-rgb), 0.88)
                );
            backdrop-filter: blur(18px) saturate(200%);
            -webkit-backdrop-filter: blur(18px) saturate(200%);
            border: 1px solid rgba(255, 255, 255, 0.28);
            box-shadow:
                0 18px 48px rgba(0, 0, 0, 0.55),
                inset 0 1px 0 rgba(255, 255, 255, 0.35);

            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-end;
            padding: 25px;
            position: relative;
            isolation: isolate;
        }

        .card::before {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(
                120deg,
                rgba(255,255,255,0.55),
                rgba(255,255,255,0.10) 45%,
                rgba(255,255,255,0.32)
            );
            opacity: 0.6;
            mix-blend-mode: soft-light;
            pointer-events: none;
        }

        .card::after {
            content: '';
            position: absolute;
            inset: 0;
            background:
                radial-gradient(90% 70% at 80% 0%, rgba(255,255,255,0.38), rgba(255,255,255,0) 60%),
                radial-gradient(110% 90% at 90% 12%, rgba(0,0,0,0.26), rgba(0,0,0,0) 55%);
            opacity: 0.9;
            pointer-events: none;
        }

        .color-name {
            color: #fff;
            font-size: 18px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 1px;
            position: relative;
            z-index: 1;
            margin-bottom: 8px;
            text-align: right;
            text-shadow: 0 1px 14px rgba(0,0,0,0.6);
        }

        .color-hex {
            color: #fff;
            font-size: 14px;
            font-weight: 500;
            position: relative;
            z-index: 1;
            letter-spacing: 0.5px;
            text-align: right;
            text-shadow: 0 1px 14px rgba(0,0,0,0.6);
        }

        .container {
            display: flex;
            gap: 30px;
            transform: translateX(-100px);
        }

        @media (max-width: 900px) {
            .container {
                transform: scale(0.85) translateX(-80px);
                transform-origin: left center;
            }
        }

        @media (max-width: 600px) {
            .container {
                transform: scale(0.7) translateX(-60px);
                transform-origin: left center;
            }
        }

        @media (max-width: 420px) {
            .container {
                transform: scale(0.6) translateX(-40px);
                transform-origin: left center;
            }
        }
    </style>
</head> 
<body>
    <div class="container"></div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        const container = document.querySelector('.container');
        const cards = [];
        const colorPalette = [
            // ===== RED SHADES =====
            { hex: '#880808', name: 'Blood Red' },
            { hex: '#DC143C', name: 'Crimson Red' },
            { hex: '#8B0000', name: 'Dark Red' },
            { hex: '#800020', name: 'Burgundy' },
            { hex: '#FF2400', name: 'Scarlet' },
            { hex: '#CC0000', name: 'Fire Engine Red' },
            { hex: '#E0115F', name: 'Ruby Red' },
            { hex: '#800000', name: 'Maroon' },
            { hex: '#AA4A44', name: 'Brick Red' },
            { hex: '#FF6347', name: 'Tomato Red' },
            { hex: '#FF3131', name: 'Neon Red' },
            { hex: '#D2042D', name: 'Cherry Red' },
            { hex: '#722F37', name: 'Wine Red' },
            { hex: '#ED2939', name: 'Imperial Red' },
            { hex: '#FF4040', name: 'Coral Red' },

            // ===== ORANGE SHADES =====
            { hex: '#FF7F00', name: 'Orange' },
            { hex: '#FFA500', name: 'Pure Orange' },
            { hex: '#FF8C00', name: 'Dark Orange' },
            { hex: '#FF4500', name: 'Orange Red' },
            { hex: '#FFB347', name: 'Pastel Orange' },
            { hex: '#FF5E0E', name: 'Vivid Orange' },
            { hex: '#E25822', name: 'Flame Orange' },
            { hex: '#FF9F00', name: 'Amber Orange' },
            { hex: '#D2691E', name: 'Chocolate Orange' },
            { hex: '#F28500', name: 'Tangerine' },

            // ===== GREEN SHADES =====
            { hex: '#00FF00', name: 'Lime Green' },
            { hex: '#32CD32', name: 'Leaf Green' },
            { hex: '#228B22', name: 'Forest Green' },
            { hex: '#006400', name: 'Dark Green' },
            { hex: '#2E8B57', name: 'Sea Green' },
            { hex: '#66CDAA', name: 'Medium Aquamarine' },
            { hex: '#7FFF00', name: 'Chartreuse' },
            { hex: '#00FA9A', name: 'Medium Spring Green' },
            { hex: '#00FF7F', name: 'Spring Green' },
            { hex: '#98FB98', name: 'Pale Green' },

            // ===== BLUE SHADES =====
            { hex: '#0000FF', name: 'Blue' },
            { hex: '#0000CD', name: 'Medium Blue' },
            { hex: '#4169E1', name: 'Royal Blue' },
            { hex: '#1E90FF', name: 'Dodger Blue' },
            { hex: '#4682B4', name: 'Steel Blue' },
            { hex: '#5F9EA0', name: 'Cadet Blue' },
            { hex: '#00BFFF', name: 'Deep Sky Blue' },
            { hex: '#87CEEB', name: 'Sky Blue' },
            { hex: '#6495ED', name: 'Cornflower Blue' },
            { hex: '#7DF9FF', name: 'Electric Blue' },
            { hex: '#191970', name: 'Midnight Blue' },
            { hex: '#003366', name: 'Dark Navy' },

            // ===== PURPLE / VIOLET SHADES =====
            { hex: '#800080', name: 'Purple' },
            { hex: '#8A2BE2', name: 'Blue Violet' },
            { hex: '#9370DB', name: 'Medium Purple' },
            { hex: '#DA70D6', name: 'Orchid' },
            { hex: '#BA55D3', name: 'Medium Orchid' },
            { hex: '#9400D3', name: 'Dark Violet' },
            { hex: '#9932CC', name: 'Dark Orchid' },
            { hex: '#D8BFD8', name: 'Thistle' },
            { hex: '#E6E6FA', name: 'Lavender' },
            { hex: '#4B0082', name: 'Indigo' },

            // ===== PINK SHADES =====
            { hex: '#FFC0CB', name: 'Pink' },
            { hex: '#FF69B4', name: 'Hot Pink' },
            { hex: '#FF1493', name: 'Deep Pink' },
            { hex: '#DB7093', name: 'Pale Violet Red' },
            { hex: '#FFB6C1', name: 'Light Pink' },
            { hex: '#C71585', name: 'Medium Violet Red' },
            { hex: '#F08080', name: 'Light Coral' },
            { hex: '#E75480', name: 'Dark Pink' },
            { hex: '#FF007F', name: 'Bright Pink' },
            { hex: '#FC0FC0', name: 'Neon Pink' },

            // ===== BROWN SHADES =====
            { hex: '#A52A2A', name: 'Brown' },
            { hex: '#8B4513', name: 'Saddle Brown' },
            { hex: '#D2691E', name: 'Chocolate' },
            { hex: '#CD853F', name: 'Peru' },
            { hex: '#F4A460', name: 'Sandy Brown' },
            { hex: '#DEB887', name: 'Burly Wood' },
            { hex: '#C19A6B', name: 'Camel' },
            { hex: '#704214', name: 'Sepia' },
            { hex: '#8B0000', name: 'Rust Brown' },
            { hex: '#FFE4C4', name: 'Bisque' },

            // ===== GREY / BLACK / WHITE =====
            { hex: '#000000', name: 'Black' },
            { hex: '#1C1C1C', name: 'Very Dark Grey' },
            { hex: '#2F4F4F', name: 'Dark Slate Grey' },
            { hex: '#696969', name: 'Dim Grey' },
            { hex: '#808080', name: 'Grey' },
            { hex: '#A9A9A9', name: 'Dark Grey' },
            { hex: '#C0C0C0', name: 'Silver' },
            { hex: '#D3D3D3', name: 'Light Grey' },
            { hex: '#F5F5F5', name: 'White Smoke' },
            { hex: '#FFFFFF', name: 'White' },
        ];
 
         const cardCount = colorPalette.length;

         const getTransform = (index, yOffset = 0) => {
          return  \`rotateY(25deg) translateY(\${index * 10 + yOffset}px) translateZ(\${index * 0.5}px) skewY(-1deg)\`
         }

         const animateCards = (index, yOffset, ease="power2.out") =>{
            const positions = [index -1, index, index+1]
            positions.forEach((pos,i)=>{
                if(cards[pos]){
                     gsap.to(cards[pos],{
                        duration:0.3,
                        ease:ease,
                        transform: getTransform(pos,yOffset[i])
                     })
                }
            })
         }

         for(let i = 0; i < cardCount; i++){
            const cardContainer = document.createElement('div');
            cardContainer.className = 'card-container'

            const card = document.createElement('div')
            card.className = 'card'
            card.style.transform = getTransform(i)
            const r = parseInt(colorPalette[i].hex.slice(1,3), 16);
            const g = parseInt(colorPalette[i].hex.slice(3,5), 16);
            const b = parseInt(colorPalette[i].hex.slice(5,7), 16);
            card.style.setProperty('--card-rgb', \`\${r}, \${g}, \${b}\`);


            const colorName = document.createElement('div')
            colorName.className = 'color-name'; 
            colorName.textContent = colorPalette[i].hex.toUpperCase();

            const colorHex = document.createElement('div');
            colorHex.className = 'color-hex';
            colorHex.textContent = colorPalette[i].name

            card.appendChild(colorName);
            card.appendChild(colorHex);
            cardContainer.appendChild(card)
            container.appendChild(cardContainer)
            cards.push(card);

            cardContainer.addEventListener('mouseenter',()=> animateCards(i,[-80,-150,-80]))
            cardContainer.addEventListener('mouseleave',()=> animateCards(i,[0,0,0],"back.out(1.5)"))
         }
    </script>
</body>
</html>
`,
};

export const mouseImageMaskCode = {
  html: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mouse Image Mask</title>
    <!-- Use CDN for GSAP -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
</head>

<style>
    /* CSS Variables for Theming */
    :root {
        --bg-primary: #111111;
        --mask-bg: #DDFC3E;
    }

    [data-theme="light"] {
        --bg-primary: #ffffff;
    }

    body, .mask, .og {
        height: 100vh;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        margin: 0;
        background: var(--bg-primary);
    }

    /* Fallback for standalone viewing */
    @media (prefers-color-scheme: light) {
        body {
            background: #ffffff;
        }
    }

    img {
        width: 300px;
        height: 500px;
        object-fit: cover;
    }

    .og {
        position: absolute;
    }

    .mask {
        position: absolute;
        /* Use relative path to assets */
        mask-image: url(/assets/showcase/hover-animations/mouse-image-mask/circle.png);
        background: var(--mask-bg);
        mask-repeat: no-repeat;
        mask-size: var(--mask-size, 20px);
        mask-position: var(--mask-x, -50px) var(--mask-y, -50px);
        pointer-events: none;
    }

</style>

<body>
   
    <div class="og">
        <!-- Stock Image 1 -->
        <img src="/assets/stock/Black and White.png" alt="Original Image">
    </div>
    <div class="mask">
        <!-- Stock Image 2 -->
        <img src="/assets/stock/Floral Fusion Figure.png" alt="Masked Image">
    </div>

    <script>
        const mask = document.querySelector('.mask');
        const og = document.querySelector('.og');

        const maskSizeSmall = 20;
        const maskSizeLarge = 300; // Increased for better visibility

        let currentSize = maskSizeSmall;
        
        // Add event listener to window or body to ensure tracking works across the whole area
        document.addEventListener('mousemove', (e) => {
            gsap.to(mask, {
                '--mask-x': \`\${e.clientX - currentSize / 2}px\`,    
                '--mask-y': \`\${e.clientY - currentSize / 2}px\`, 
                '--mask-size': \`\${currentSize}px\`,
                duration: 0.6,
                ease: "back.out(1.7)"
             });
        });

        const img = og.querySelector("img");
        
        img.addEventListener("mouseenter", () => {
            currentSize = maskSizeLarge;
        });
           
        img.addEventListener("mouseleave", () => {
            currentSize = maskSizeSmall;
        });
    </script>
</body>
</html>
`,
};

export const viewMoreMouseCode = {
  html: `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>View More Mouse</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-primary: #f6f6f6;
      --bg-secondary: #ededed;
      --text-primary: #1a1a1a;
      --text-secondary: #5f5f5f;
      --border-color: #d8d8d8;
      --accent-color: #3b82f6;
      --cursor-bg: #ffffff;
      --cursor-hover-bg: #ffffff8a;
      --cursor-text: #111111;
      --image-shadow: #00000033;
    }

    :root[data-theme="dark"],
    html[data-theme="dark"] {
      --bg-primary: #0f0f10;
      --bg-secondary: #1a1a1c;
      --text-primary: #f5f5f5;
      --text-secondary: #a0a0a0;
      --border-color: #313136;
      --accent-color: #60a5fa;
      --cursor-bg: #f5f5f5;
      --cursor-hover-bg: #f5f5f58a;
      --cursor-text: #111111;
      --image-shadow: #00000052;
    }

    @media (prefers-color-scheme: dark) {
      :root:not([data-theme="light"]) {
        --bg-primary: #0f0f10;
        --bg-secondary: #1a1a1c;
        --text-primary: #f5f5f5;
        --text-secondary: #a0a0a0;
        --border-color: #313136;
        --accent-color: #60a5fa;
        --cursor-bg: #f5f5f5;
        --cursor-hover-bg: #f5f5f5;
        --cursor-text: #111111;
        --image-shadow: #00000052;
      }
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html,
    body {
      width: 100%;
      height: 100%;
    }

    body {
      font-family: "DM Sans", sans-serif;
      background: var(--bg-primary);
      color: var(--text-primary);
      overflow: hidden;
    }

    .main {
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at 25% 20%, var(--bg-secondary), var(--bg-primary));
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2rem;
    }

    .cursor {
      width: 20px;
      height: 20px;
      background: var(--cursor-bg);
      color: var(--cursor-text);
      border-radius: 9999px;
      position: fixed;
      font-size: 0.25rem;
      font-weight: 450;
      letter-spacing: 0.03em;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      z-index: 99;
      pointer-events: none;
      transform: translate(-50%, -50%);
      text-transform: uppercase;
    }

    .image {
      width: min(40vw, 540px);
      height: min(62vw, 400px);
      position: relative;
      border-radius: 1rem;
      overflow: hidden;
      border: 1px solid var(--border-color);
      box-shadow: 0 20px 60px var(--image-shadow);
    }

    .image img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      display: block;
    }

    .overlay {
      background: transparent;
      height: 100%;
      width: 100%;
      position: absolute;
      inset: 0;
      z-index: 10;
    }

    @media (max-width: 768px) {
      .image {
        width: 92vw;
        height: 58vw;
      }
    }
  </style>
</head>

<body>
  <div class="cursor"></div>

  <div class="main">
    <div class="image">
      <div class="overlay"></div>
      <img src="/assets/stock/Solitude Amidst Grandeur.png" alt="Landscape preview" />
    </div>
  </div>

  <script defer src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/gsap.min.js"
    integrity="sha512-NcZdtrT77bJr4STcmsGAESr06BYGE8woZdSdEgqnpyqac7sugNO+Tr4bGwGF3MsnEkGKhU2KL2xh6Ec+BqsaHA=="
    crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    window.addEventListener("DOMContentLoaded", () => {
      const main = document.querySelector(".main");
      const cursor = document.querySelector(".cursor");
      const imageDiv = document.querySelector(".image");

      main.addEventListener("mousemove", (event) => {
        gsap.to(cursor, {
          x: event.clientX,
          y: event.clientY,
          duration: 0.45,
          ease: "power3.out",
        });
      });

      imageDiv.addEventListener("mouseenter", () => {
        cursor.textContent = "VIEW MORE";
        gsap.to(cursor, {
          scale: 4,
          backgroundColor: "var(--cursor-hover-bg)",
          duration: 0.25,
          ease: "power2.out",
        });
      });

      imageDiv.addEventListener("mouseleave", () => {
        cursor.textContent = "";
        gsap.to(cursor, {
          scale: 1,
          backgroundColor: "var(--cursor-bg)",
          duration: 0.25,
          ease: "power2.out",
        });
      });
    });
  </script>
</body>

</html>`,
};

export const reverseStickyScrollCode = {
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Reverse Sticky Scroll</title>
  <link
    href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Bricolage+Grotesque:wght@400;600;700&display=swap"
    rel="stylesheet"
  />
  <style>
    :root {
      --bg-primary: #ffffff;
      --bg-secondary: #f5f5f5;
      --text-primary: #1a1a1a;
      --text-secondary: #666666;
      --border-color: #e0e0e0;
      --accent-color: #3b82f6;

      --s1-bg: #e85a2b;
      --s1-text: #111111;
      --s2-bg: #111111;
      --s2-text: #f5f5f5;
      --s3-bg: #f5f0e8;
      --s3-text: #111111;
      --s4-bg: #1a3de8;
      --s4-text: #f5f5f5;
      --s4-hr: #89a0ff;
      --s5-bg: #e8e02b;
      --s5-text: #111111;
    }

    :root[data-theme="dark"],
    html[data-theme="dark"] {
      --bg-primary: #0a0a0a;
      --bg-secondary: #1a1a1a;
      --text-primary: #f5f5f5;
      --text-secondary: #a0a0a0;
      --border-color: #333333;
      --accent-color: #60a5fa;

      --s1-bg: #a63b1a;
      --s1-text: #f5f5f5;
      --s2-bg: #080808;
      --s2-text: #f5f5f5;
      --s3-bg: #2f2a24;
      --s3-text: #f5f5f5;
      --s4-bg: #112391;
      --s4-text: #f5f5f5;
      --s4-hr: #7c97ff;
      --s5-bg: #8d861c;
      --s5-text: #f5f5f5;
    }

    @media (prefers-color-scheme: dark) {
      :root:not([data-theme="light"]) {
        --bg-primary: #0a0a0a;
        --bg-secondary: #1a1a1a;
        --text-primary: #f5f5f5;
        --text-secondary: #a0a0a0;
        --border-color: #333333;
        --accent-color: #60a5fa;

        --s1-bg: #a63b1a;
        --s1-text: #f5f5f5;
        --s2-bg: #080808;
        --s2-text: #f5f5f5;
        --s3-bg: #2f2a24;
        --s3-text: #f5f5f5;
        --s4-bg: #112391;
        --s4-text: #f5f5f5;
        --s4-hr: #7c97ff;
        --s5-bg: #8d861c;
        --s5-text: #f5f5f5;
      }
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    ::-webkit-scrollbar {
      display: none;
    }

    html {
      scrollbar-width: none;
      background: var(--bg-primary);
      color: var(--text-primary);
    }

    body {
      font-family: "Bricolage Grotesque", sans-serif;
      background: var(--bg-primary);
      color: var(--text-primary);
    }

    section {
      position: relative;
      width: 100%;
      min-height: 100vh;
      overflow: hidden;
    }

    .container {
      position: relative;
      width: 100%;
      min-height: 100vh;
      padding: 4vw;
      padding-top: clamp(2rem, 8vw, 4vw);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 1.5rem;
      transform-origin: bottom left;
      will-change: transform;
    }

    .big {
      font-family: "Bebas Neue", sans-serif;
      font-size: clamp(3.5rem, 12vw, 14rem);
      font-weight: 400;
      line-height: 0.85;
      text-transform: uppercase;
      letter-spacing: -0.02em;
    }

    .sub {
      font-size: clamp(1rem, 2.5vw, 2rem);
      max-width: 50ch;
      line-height: 1.4;
      font-weight: 400;
    }

    .tag {
      font-size: 0.8rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.2em;
    }

    .right {
      text-align: right;
      align-self: flex-end;
    }

    .bottom {
      margin-top: auto;
    }

    hr {
      border: none;
      border-top: 1px solid currentColor;
      opacity: 0.6;
      margin: 2vw 0;
    }

    .cols {
      display: flex;
      gap: 3vw;
      flex-wrap: wrap;
    }

    .cols > div {
      flex: 1;
      min-width: 180px;
    }

    .label {
      font-weight: 700;
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 0.5rem;
    }

    .detail {
      font-size: clamp(0.85rem, 1.3vw, 1.05rem);
      line-height: 1.5;
      opacity: 0.75;
    }

    .s1 .container {
      background: var(--s1-bg);
      color: var(--s1-text);
    }

    .s1 hr {
      border-color: var(--s1-text);
      opacity: 1;
    }

    .s2 .container {
      background: var(--s2-bg);
      color: var(--s2-text);
    }

    .s3 .container {
      background: var(--s3-bg);
      color: var(--s3-text);
    }

    .s4 .container {
      background: var(--s4-bg);
      color: var(--s4-text);
    }

    .s4 hr {
      border-color: var(--s4-hr);
    }

    .s5 .container {
      background: var(--s5-bg);
      color: var(--s5-text);
    }
  </style>
</head>
<body>
  <main>
    <section class="s1">
      <div class="container">
        <p class="tag">01 - Who we are</p>
        <hr />
        <div>
          <h1 class="big">Create<br />Without<br />Limits</h1>
        </div>
        <hr />
        <p class="sub bottom">
          We believe every artist deserves a platform that puts creativity first. No algorithms, no noise - just pure art and the people who make it.
        </p>
      </div>
    </section>

    <section class="s2">
      <div class="container">
        <p class="tag">02 - The mission</p>
        <hr />
        <div>
          <h2 class="big">Art<br />First<br />Always</h2>
        </div>
        <hr />
        <div>
          <p class="sub">
            A global community built for artists, by artists. We're rewriting the rules of how creative work gets seen, shared, and valued.
          </p>
        </div>
        <hr />
        <div class="cols">
          <div>
            <p class="label">Discovery</p>
            <p class="detail">
              Human-curated collections that put real eyes on real art. No algorithms deciding your fate. We believe the best work rises when real people champion it.
            </p>
          </div>
          <div>
            <p class="label">Community</p>
            <p class="detail">
              Find collaborators, mentors, and fellow creatives who push your work forward. Build lasting relationships that fuel your practice for years to come.
            </p>
          </div>
          <div>
            <p class="label">Value</p>
            <p class="detail">
              Fair pricing. Transparent commissions. Artists keep what they earn. Always. No hidden platform fees, no surprise deductions, no middlemen.
            </p>
          </div>
        </div>
        <hr />
        <div class="cols">
          <div>
            <p class="label">Exhibitions</p>
            <p class="detail">
              Virtual and physical showcases curated from our global network. Get your work in front of the right audiences without gallery gatekeeping.
            </p>
          </div>
          <div>
            <p class="label">Mentorship</p>
            <p class="detail">
              Paired guidance from established artists who've walked the path. Learn the business of art from people who actually live it.
            </p>
          </div>
          <div>
            <p class="label">Residencies</p>
            <p class="detail">
              Access funded creative retreats around the world. Dedicated time and space to experiment, create, and grow without distraction.
            </p>
          </div>
        </div>
        <hr />
        <p class="sub bottom right">
          Every feature we build starts with one question - does this serve the artist?
        </p>
      </div>
    </section>

    <section class="s3">
      <div class="container">
        <p class="tag">03 - How it works</p>
        <hr />
        <div>
          <h2 class="big">Show<br />Up.<br />Stand<br />Out.</h2>
        </div>
        <hr />
        <p class="sub">Three steps. Zero complexity. Your creative career starts moving the moment you sign up.</p>
        <hr />
        <div class="cols">
          <div>
            <p class="label">01 - Upload</p>
            <p class="detail">
              Drag, drop, done. Your portfolio goes live in seconds with full creative control. Organize by series, medium, or timeline. Present your work exactly how you want it seen.
            </p>
          </div>
          <div>
            <p class="label">02 - Connect</p>
            <p class="detail">
              Match with collectors, galleries, and brands actively looking for your style. Our network spans 80+ countries and every creative discipline you can think of.
            </p>
          </div>
          <div>
            <p class="label">03 - Grow</p>
            <p class="detail">
              Track engagement, manage commissions, and scale your practice - all in one place. Real analytics that help you understand your audience and make smarter decisions.
            </p>
          </div>
        </div>
        <hr />
        <div class="cols">
          <div>
            <p class="label">04 - Sell</p>
            <p class="detail">
              Set your prices, manage editions, handle licensing. Built-in commerce tools that let you sell directly - no third-party marketplace needed.
            </p>
          </div>
          <div>
            <p class="label">05 - Collaborate</p>
            <p class="detail">
              Find your people. Joint projects, split commissions, shared studios. Creative partnerships made effortless through built-in collaboration tools.
            </p>
          </div>
          <div>
            <p class="label">06 - Evolve</p>
            <p class="detail">
              Your practice changes. Your platform should too. Flexible tools that adapt as your work grows, shifts, and finds new directions over time.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="s4">
      <div class="container">
        <p class="tag">04 - The vision</p>
        <hr />
        <div>
          <h2 class="big">Future<br />Of<br />Art</h2>
        </div>
        <hr />
        <div>
          <p class="sub">
            We're not just building a platform. We're building a movement - one where emerging voices are amplified and every brushstroke matters.
          </p>
        </div>
        <hr />
        <div class="cols">
          <div>
            <p class="label">10K+</p>
            <p class="detail">
              Artists from 80 countries already shaping the future with us. Painters, sculptors, digital creators, photographers - every medium represented.
            </p>
          </div>
          <div>
            <p class="label">$2M+</p>
            <p class="detail">
              Paid directly to creators in our first year. Zero hidden fees. Money flows from collectors to artists - we just make the connection happen.
            </p>
          </div>
          <div>
            <p class="label">100%</p>
            <p class="detail">
              Artist-owned. Every decision we make starts with the creator. Our advisory board is made entirely of working artists.
            </p>
          </div>
        </div>
        <hr />
        <div>
          <p class="sub">
            The art world has been broken for decades. Galleries take 50%. Algorithms bury talent. We're here to change that - permanently.
          </p>
        </div>
        <hr />
        <div class="cols">
          <div>
            <p class="label">Open access</p>
            <p class="detail">
              No invite codes. No waiting lists. If you make art, you belong here. Period. We don't gatekeep creativity.
            </p>
          </div>
          <div>
            <p class="label">Global reach</p>
            <p class="detail">
              Your work seen in 120+ countries from day one. Built-in translation, multi-currency support, and worldwide shipping partnerships.
            </p>
          </div>
          <div>
            <p class="label">Artist-first economics</p>
            <p class="detail">
              You keep 90% of every sale. The remaining 10% funds the platform, the community, and the mission. Nothing goes to shareholders.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="s5">
      <div class="container">
        <p class="tag">05 - Join us</p>
        <hr />
        <div>
          <h2 class="big">Ready<br />To<br />Begin?</h2>
        </div>
        <hr />
        <p class="sub bottom">
          Take control of your creative journey. Join now and let's shape the future of the art world together.
        </p>
      </div>
    </section>
  </main>

  <script defer src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/gsap.min.js" integrity="sha512-NcZdtrT77bJr4STcmsGAESr06BYGE8woZdSdEgqnpyqac7sugNO+Tr4bGwGF3MsnEkGKhU2KL2xh6Ec+BqsaHA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script defer src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/ScrollTrigger.min.js" integrity="sha512-P2IDYZfqSwjcSjX0BKeNhwRUH8zRPGlgcWl5n6gBLzdi4Y5/0O4zaXrtO4K9TZK6Hn1BenYpKowuCavNandERg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script defer src="https://unpkg.com/lenis@1.3.17/dist/lenis.min.js"></script>
  <script>
    window.addEventListener("DOMContentLoaded", () => {
      gsap.registerPlugin(ScrollTrigger);

      const lenis = new Lenis();
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);

      const sections = gsap.utils.toArray("section");

      sections.forEach((section, i) => {
        const container = section.querySelector(".container");

        if (i > 0) {
          gsap.set(container, {
            rotation: 30,
          });

          gsap.to(container, {
            rotation: 0,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "top 25%",
              scrub: true,
            },
          });
        }

        if (i < sections.length - 1) {
          ScrollTrigger.create({
            trigger: section,
            start: "bottom bottom",
            end: "bottom top",
            pin: true,
            pinSpacing: false,
          });
        }
      });
    });
  </script>
</body>
</html>
`,
};

export const marqueScrollCode = {
  html: `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html,
        body {
            height: 100%;
            width: 100%;
        }

        body {
            font-family: "DM Sans", sans-serif;
            background-color: black;
        }

        .page1,
        .page2,
        .page3 {
            width: 100%;
            height: 100vh;
        }

        .move {
            background-color: lawngreen;
            display: flex;
            padding: 3vw 0;
            overflow-x: hidden;
        }

        .marque h1 {
            font-size: 70px;
            font-weight: 500;
            color: black;
        }

        .marque img {
            height: 4vw;
        }

        .marque {
            flex-shrink: 0;
            display: flex;
            align-items: center;
            gap: 3vw;
            padding: 0 1.5vw;
            transform: translateX(-100%);
        }
    </style>
</head>

<body>

    <div class="page1"></div>

    <div class="page2">
        <div class="move">
            <div class="marque">
                <h1>THRIVE BEYOND LIMITS</h1>
                <img src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" alt="">
            </div>
            <div class="marque">
                <h1>THRIVE BEYOND LIMITS</h1>
                <img src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" alt="">
            </div>
            <div class="marque">
                <h1>THRIVE BEYOND LIMITS</h1>
                <img src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" alt="">
            </div>
            <div class="marque">
                <h1>THRIVE BEYOND LIMITS</h1>
                <img src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" alt="">
            </div>
            <div class="marque">
                <h1>THRIVE BEYOND LIMITS</h1>
                <img src="https://www.brandium.nl/wp-content/uploads/2023/07/arrow-br.svg" alt="">
            </div>

        </div>

    </div>

    <div class="page3"></div>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script>
        window.addEventListener("wheel", function (dets) {
            if (dets.deltaY > 0) {
                gsap.to(".marque", {
                    transform: "translateX(-200%)",
                    repeat: -1,
                    duration: 3,
                    ease: "none"
                })

                gsap.to(".marque img", {
                    rotate: 180
                })

            } else {
                gsap.to(".marque", {
                    transform: "translateX(0%)",
                    repeat: -1,
                    duration: 3,
                    ease: "none"
                })

                gsap.to(".marque img", {
                    rotate: 0
                })


            }
        })
    </script>
</body>

</html>
`,
};

export const guitarStringCode = {
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Guitar String</title>
  <style>
    :root {
      --bg-primary: #f7f7f7;
      --bg-secondary: #ececec;
      --text-primary: #1a1a1a;
      --text-secondary: #666666;
      --border-color: #d7d7d7;
      --accent-color: #2563eb;
      --string-color: #111111;
    }

    :root[data-theme="dark"],
    html[data-theme="dark"] {
      --bg-primary: #0f0f10;
      --bg-secondary: #1b1b1d;
      --text-primary: #f5f5f5;
      --text-secondary: #a0a0a0;
      --border-color: #2f2f33;
      --accent-color: #60a5fa;
      --string-color: #f5f5f5;
    }

    @media (prefers-color-scheme: dark) {
      :root:not([data-theme="light"]) {
        --bg-primary: #0f0f10;
        --bg-secondary: #1b1b1d;
        --text-primary: #f5f5f5;
        --text-secondary: #a0a0a0;
        --border-color: #2f2f33;
        --accent-color: #60a5fa;
        --string-color: #f5f5f5;
      }
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html,
    body {
      width: 100%;
      height: 100%;
    }

    body {
      font-family: sans-serif;
      display: grid;
      place-items: center;
      background: radial-gradient(circle at 20% 20%, var(--bg-secondary), var(--bg-primary));
      color: var(--text-primary);
      overflow: hidden;
      padding: 2rem;
    }

    .string {
      width: min(1000px, 100%);
      height: 500px;
      border: 1px solid var(--border-color);
      border-radius: 1rem;
      background: color-mix(in srgb, var(--bg-secondary) 70%, transparent);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: crosshair;
      position: relative;
    }

    .label {
      position: absolute;
      top: 1.5rem;
      left: 1.5rem;
      font-size: 0.75rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--text-secondary);
    }

    svg {
      width: min(1000px, 96%);
      height: 180px;
      overflow: visible;
    }

    path {
      stroke: var(--string-color);
      stroke-width: 2;
      fill: transparent;
    }
  </style>
</head>
<body>
  <div class="string">
    <p class="label">Drag across the string</p>
    <svg viewBox="0 0 1000 300" aria-label="Guitar string animation">
      <path d="M 10 100 Q 500 100 990 100"></path>
    </svg>
  </div>

  <script defer src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/gsap.min.js" integrity="sha512-NcZdtrT77bJr4STcmsGAESr06BYGE8woZdSdEgqnpyqac7sugNO+Tr4bGwGF3MsnEkGKhU2KL2xh6Ec+BqsaHA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script>
    window.addEventListener("DOMContentLoaded", () => {
      let path = "M 10 100 Q 500 100 990 100";
      const finalPath = "M 10 100 Q 500 100 990 100";
      const string = document.querySelector(".string");

      string.addEventListener("mousemove", (event) => {
        const bounds = string.getBoundingClientRect();
        const x = ((event.clientX - bounds.left) / bounds.width) * 1000;
        const y = ((event.clientY - bounds.top) / bounds.height) * 300;

        path = \`M 10 100 Q \${x} \${y} 990 100\`;

        gsap.to("svg path", {
          attr: { d: path },
          duration: 0.3,
          ease: "power3.out",
        });
      });

      string.addEventListener("mouseleave", () => {
        gsap.to("svg path", {
          attr: { d: finalPath },
          duration: 1.5,
          ease: "elastic.out(1,0.2)",
        });
      });
    });
  </script>
</body>
</html>
`,
};
