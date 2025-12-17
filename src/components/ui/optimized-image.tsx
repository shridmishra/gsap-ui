"use client";

import React, { useState, useRef, useEffect } from "react";
import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface OptimizedImageProps extends Omit<ImageProps, "onLoad" | "onError"> {
    /** Show a shimmer loading animation */
    shimmer?: boolean;
    /** Custom blur placeholder color */
    blurColor?: string;
    /** Fade in duration in ms */
    fadeInDuration?: number;
    /** Container className for the wrapper div */
    containerClassName?: string;
    /** Whether to use intersection observer for lazy loading */
    lazyLoad?: boolean;
    /** Root margin for intersection observer */
    rootMargin?: string;
}

/**
 * OptimizedImage - A wrapper around Next.js Image with enhanced loading UX
 *
 * Features:
 * - Shimmer loading animation
 * - Smooth fade-in transition on load
 * - Intersection observer for lazy loading
 * - Blur placeholder support
 * - Error state handling
 */
export function OptimizedImage({
    src,
    alt,
    className,
    containerClassName,
    shimmer = true,
    blurColor = "hsl(var(--muted))",
    fadeInDuration = 300,
    lazyLoad = true,
    rootMargin = "200px",
    fill,
    width,
    height,
    priority,
    ...props
}: OptimizedImageProps) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(!lazyLoad || priority);
    const [hasError, setHasError] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Intersection Observer for lazy loading
    useEffect(() => {
        if (!lazyLoad || priority || isInView) return;

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
    }, [lazyLoad, priority, isInView, rootMargin]);

    const handleLoad = () => {
        setIsLoaded(true);
    };

    const handleError = () => {
        setHasError(true);
        setIsLoaded(true);
    };

    // Generate shimmer SVG for placeholder
    const shimmerSvg = `
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shimmer" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:${blurColor};stop-opacity:1">
            <animate attributeName="offset" values="-2;1" dur="1.5s" repeatCount="indefinite" />
          </stop>
          <stop offset="50%" style="stop-color:hsl(var(--muted-foreground) / 0.1);stop-opacity:1">
            <animate attributeName="offset" values="-1;2" dur="1.5s" repeatCount="indefinite" />
          </stop>
          <stop offset="100%" style="stop-color:${blurColor};stop-opacity:1">
            <animate attributeName="offset" values="0;3" dur="1.5s" repeatCount="indefinite" />
          </stop>
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#shimmer)" />
    </svg>
  `;

    const shimmerDataUrl = `data:image/svg+xml;base64,${Buffer.from(shimmerSvg).toString("base64")}`;

    // Wrapper style for position and size
    const wrapperStyle: React.CSSProperties = fill
        ? { position: "relative", width: "100%", height: "100%" }
        : { position: "relative", width, height };

    return (
        <div
            ref={containerRef}
            className={cn("overflow-hidden", containerClassName)}
            style={wrapperStyle}
        >
            {/* Shimmer placeholder */}
            {shimmer && !isLoaded && (
                <div
                    className="absolute inset-0 z-10 animate-pulse"
                    style={{
                        backgroundColor: blurColor,
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
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                    </svg>
                </div>
            )}

            {/* Actual image */}
            {isInView && !hasError && (
                <Image
                    src={src}
                    alt={alt}
                    fill={fill}
                    width={!fill ? width : undefined}
                    height={!fill ? height : undefined}
                    priority={priority}
                    placeholder={shimmer ? "blur" : undefined}
                    blurDataURL={shimmer ? shimmerDataUrl : undefined}
                    className={cn(
                        className,
                        "transition-opacity duration-300",
                        isLoaded ? "opacity-100" : "opacity-0"
                    )}
                    style={{
                        transitionDuration: `${fadeInDuration}ms`,
                    }}
                    onLoad={handleLoad}
                    onError={handleError}
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

/**
 * LazyImage - A simpler lazy-loaded image using native browser features
 * Uses native loading="lazy" and decoding="async" for basic lazy loading
 */
export function LazyImage({
    src,
    alt,
    className,
    ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            className={cn(
                className,
                "transition-opacity duration-300",
                isLoaded ? "opacity-100" : "opacity-0"
            )}
            onLoad={() => setIsLoaded(true)}
            {...props}
        />
    );
}

export default OptimizedImage;
