"use client"

import { SidebarSkeleton } from "./sidebar-skeleton"
import { Skeleton } from "@/components/ui/skeleton"

export function ComponentPageSkeleton() {
    return (
        <div className="flex min-h-screen bg-background text-foreground overflow-hidden">
            <SidebarSkeleton />
            <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
                {/* Header Skeleton */}
                <div className="flex-none px-2 pt-2 md:px-4 md:pt-3 bg-background/95 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60 z-10">
                    <div className="flex items-center justify-between mb-2 min-h-[40px]">
                        <div className="flex items-center gap-4">
                            <div className="flex gap-2">
                                <Skeleton className="h-9 w-24 rounded-full" />
                                <Skeleton className="h-9 w-20 rounded-full" />
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Skeleton className="h-8 w-24 rounded-md" />
                            <Skeleton className="h-8 w-8 rounded-full" />
                        </div>
                    </div>
                </div>

                {/* Main Content Skeleton */}
                <div className="flex-1 overflow-hidden relative bg-background">
                    <div className="w-full h-full px-4 py-2 overflow-hidden">
                        <Skeleton className="w-full h-full rounded-lg border border-border" />
                    </div>
                </div>
            </main>
        </div>
    )
}
