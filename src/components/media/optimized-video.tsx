"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

interface OptimizedVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
    /** Source URL for the video */
    src: string;
    /** Show a shimmer loading animation */
    shimmer?: boolean;
    /** Custom placeholder color */
    placeholderColor?: string;
    /** Fade in duration in ms */
    fadeInDuration?: number;
    /** Container className for the wrapper div */
    containerClassName?: string;
    /** Whether to use intersection observer for lazy loading */
    lazyLoad?: boolean;
    /** Root margin for intersection observer */
    rootMargin?: string;
    /** Poster image URL for instant visual */
    poster?: string;
    /** Whether to preload the video */
    preload?: "none" | "metadata" | "auto";
}

/**
 * OptimizedVideo - A wrapper for video elements with enhanced loading UX
 *
 * Features:
 * - Shimmer loading animation
 * - Smooth fade-in transition on load
 * - Intersection observer for lazy loading
 * - Poster frame support for instant visual
 * - Error state handling
 */
export function OptimizedVideo({
    src,
    className,
    containerClassName,
    shimmer = true,
    placeholderColor = "hsl(var(--muted))",
    fadeInDuration = 300,
    lazyLoad = true,
    rootMargin = "200px",
    poster,
    preload = "metadata",
    autoPlay,
    loop = true,
    muted = true,
    playsInline = true,
    ...props
}: OptimizedVideoProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(!lazyLoad);
    const [hasError, setHasError] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    // Intersection Observer for lazy loading
    useEffect(() => {
        if (!lazyLoad || isInView) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            { rootMargin }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, [lazyLoad, isInView, rootMargin]);

    // Handle autoPlay when in view
    useEffect(() => {
        if (isInView && isLoaded && autoPlay && videoRef.current) {
            videoRef.current.play().catch((e) => {
                if (e.name !== "AbortError") {
                    console.warn("Video autoplay failed:", e);
                }
            });
        }
    }, [isInView, isLoaded, autoPlay]);

    const handleLoadedData = useCallback(() => {
        setIsLoaded(true);
    }, []);

    const handleError = useCallback(() => {
        setHasError(true);
        setIsLoaded(true);
    }, []);

    const handlePlay = useCallback(() => {
        setIsPlaying(true);
    }, []);

    const handlePause = useCallback(() => {
        setIsPlaying(false);
    }, []);

    return (
        <div
            ref={containerRef}
            className={cn("relative overflow-hidden", containerClassName)}
        >
            {/* Shimmer placeholder */}
            {shimmer && !isLoaded && (
                <div
                    className="absolute inset-0 z-10 animate-pulse"
                    style={{
                        backgroundColor: placeholderColor,
                        backgroundImage: `linear-gradient(90deg, transparent, hsl(var(--muted-foreground) / 0.08), transparent)`,
                        backgroundSize: "200% 100%",
                        animation: "shimmer 1.5s ease-in-out infinite",
                    }}
                />
            )}

            {/* Error state */}
            {hasError && (
                <div className="absolute inset-0 z-20 flex items-center justify-center bg-muted">
                    <svg
                        className="w-8 h-8 text-muted-foreground"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                    </svg>
                </div>
            )}

            {/* Actual video */}
            {isInView && !hasError && (
                <video
                    ref={videoRef}
                    src={src}
                    poster={poster}
                    preload={preload}
                    autoPlay={autoPlay}
                    loop={loop}
                    muted={muted}
                    playsInline={playsInline}
                    className={cn(
                        className,
                        "transition-opacity",
                        isLoaded ? "opacity-100" : "opacity-0"
                    )}
                    style={{
                        transitionDuration: `${fadeInDuration}ms`,
                    }}
                    onLoadedData={handleLoadedData}
                    onError={handleError}
                    onPlay={handlePlay}
                    onPause={handlePause}
                    {...props}
                />
            )}

            {/* Keyframe animation style */}
            <style jsx global>{`
        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
      `}</style>
        </div>
    );
}

export default OptimizedVideo;
