"use client";

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
