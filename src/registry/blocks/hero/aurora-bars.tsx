"use client";

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
