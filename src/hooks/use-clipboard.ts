"use client";

import { useState, useCallback } from "react";

interface ClipboardState {
  copied: boolean;
  copy: (text: string) => void;
}

/**
 * Hook for clipboard operations with auto-reset
 */
export function useClipboard(resetDelay = 2000): ClipboardState {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(
    (text: string) => {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), resetDelay);
    },
    [resetDelay]
  );

  return { copied, copy };
}
