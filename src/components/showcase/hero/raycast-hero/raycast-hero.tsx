"use client";

import React from "react";
import { Play, Sparkles, ChevronDown, Search, Bell, Settings, Plus, LayoutGrid } from "lucide-react";
import { motion } from "motion/react";

import Image from "next/image";
import heroBg from "./image.png";

export default function RaycastHero() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-[#030616] text-white selection:bg-blue-500/30 font-sans">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={heroBg}
                    alt="Hero Background"
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
