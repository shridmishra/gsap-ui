"use client";

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

