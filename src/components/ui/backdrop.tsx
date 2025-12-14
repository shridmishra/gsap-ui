"use client";

import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface BackdropProps {
  isOpen: boolean;
  onClose?: () => void;
  blur?: boolean;
  className?: string;
  zIndex?: number;
}

export function Backdrop({
  isOpen,
  onClose,
  blur = true,
  className,
  zIndex = 50,
}: BackdropProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className={cn(
            "fixed inset-0 bg-black/50",
            blur && "backdrop-blur-sm",
            className
          )}
          style={{ zIndex }}
        />
      )}
    </AnimatePresence>
  );
}
