import type { Transition, Variants } from "motion/react";

// Shared spring transition for panels and modals
export const springTransition: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 30,
};

// Sidebar animation variants
export const sidebarVariants: Variants = {
  hidden: { x: -300, opacity: 0 },
  visible: { x: 0, opacity: 1 },
  exit: { x: -300, opacity: 0 },
};

// Slide-in panel variants (from right)
export const slidePanelVariants: Variants = {
  hidden: { x: "100%", opacity: 0 },
  visible: { x: 0, opacity: 1 },
  exit: { x: "100%", opacity: 0 },
};

// Modal/dialog variants
export const modalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: -20 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95, y: -20 },
};

// Fade in variants
export const fadeVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

// Fade in with slight upward movement
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
};

// Component preview scale animation
export const previewVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
};

export const previewTransition: Transition = {
  duration: 0.3,
  ease: "easeOut",
};

// Staggered list animations
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
};
