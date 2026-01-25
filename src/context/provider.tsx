"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import { MediaPreloadProvider } from "@/components/layout/media-preload-provider";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <MediaPreloadProvider>{children}</MediaPreloadProvider>
    </ThemeProvider>
  );
}

