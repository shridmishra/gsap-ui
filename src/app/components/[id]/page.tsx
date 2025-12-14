"use client";

import { useParams } from "next/navigation";
import { ComponentPageLayout } from "@/components/layout";

export default function ComponentPage() {
  const params = useParams();
  return <ComponentPageLayout componentId={params.id as string} />;
}
