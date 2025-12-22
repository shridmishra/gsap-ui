"use client";

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
                    src="/hero/illustrated.png"
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
