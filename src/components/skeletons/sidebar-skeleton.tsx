import { Skeleton } from "@/components/ui/skeleton"

export function SidebarSkeleton() {
    return (
        <aside className="w-64 border-r border-border bg-background h-screen hidden lg:block overflow-hidden sticky top-0">
            <div className="h-full overflow-y-auto py-6 px-4">
                {/* Logo */}
                <div className="flex items-center gap-2.5 mb-8 px-2">
                    <Skeleton className="size-6 rounded-md" />
                    <Skeleton className="h-8 w-24" />
                </div>

                {/* Categories */}
                <div className="space-y-6">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i}>
                            <Skeleton className="h-4 w-24 mb-3 ml-2" />
                            <div className="space-y-1">
                                {[1, 2, 3].map((j) => (
                                    <Skeleton key={j} className="h-9 w-full rounded-lg" />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </aside>
    )
}
