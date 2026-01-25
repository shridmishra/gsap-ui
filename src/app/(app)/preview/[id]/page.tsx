import { Metadata } from "next";
import { componentRegistry } from "@/registry";
import { PreviewClient } from "./preview-client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const component = componentRegistry
    .flatMap((c) => c.items)
    .find((i) => i.id === id);

  if (!component) {
    return {
      title: "Preview - Component Not Found",
    };
  }

  return {
    title: `Preview: ${component.name}`,
    description: `Preview of ${component.name} component.`,
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function PreviewPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <PreviewClient componentId={id} />;
}
