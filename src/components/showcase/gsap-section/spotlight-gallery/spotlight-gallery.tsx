"use client";
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
                end: `+=${window.innerHeight * 10}px`,
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
                                transform: `scale(${animationProgress})`,
                            });
                        }

                        if (bgImgElementRef.current) {
                            gsap.set(bgImgElementRef.current, {
                                transform: `scale(${1.5 - animationProgress * 0.5})`,
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
