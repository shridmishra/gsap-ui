"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { componentMap } from "@/registry";

export default function PreviewPage() {
  const params = useParams();
  const componentId = params.id as string;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-foreground/20 border-t-foreground rounded-full animate-spin" />
      </div>
    );
  }

  const Component = componentMap[componentId];

  if (!Component) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Component not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Component />
    </div>
  );
}
