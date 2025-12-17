"use client";

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
      imagePath: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      description:
        "Breaking a system into smaller, independent modules makes code easier to maintain, scale, and reuse.",
    },
    {
      index: "02",
      title: "Abstraction",
      imagePath: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2070&auto=format&fit=crop",
      description:
        "Abstraction hides unnecessary details and exposes only essential features, simplifying complex systems.",
    },
    {
      index: "03",
      title: "Scalability",
      imagePath: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
      description:
        "A scalable system can handle increasing workloads without a drop in performance or the need for major redesigns.",
    },
    {
      index: "04",
      title: "Concurrency",
      imagePath: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
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
}