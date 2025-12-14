export function LoadingSkeleton() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="space-y-4 w-full max-w-2xl">
        <div className="flex gap-4">
          <div className="w-16 h-16 rounded-full bg-accent animate-pulse" />
          <div className="flex-1 space-y-2">
            <div className="h-6 w-1/2 bg-accent animate-pulse rounded" />
            <div className="h-4 w-1/3 bg-accent animate-pulse rounded" />
          </div>
        </div>
        <div className="h-10 w-full bg-accent animate-pulse rounded" />
        <div className="h-64 w-full bg-accent animate-pulse rounded" />
      </div>
    </div>
  );
}
