// Re-export the ComponentPageSkeleton as LoadingSkeleton to maintain backward compatibility
// and implementation consistency.
import { ComponentPageSkeleton } from "@/components/skeletons/component-page-skeleton";

export function LoadingSkeleton() {
  return <ComponentPageSkeleton />;
}
