import { Metadata } from "next";
import { ComponentPageLayout } from "@/components/layout";
import { componentRegistry } from "@/registry";

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
      title: "Component Not Found",
    };
  }

  return {
    title: component.name,
    description: component.description,
    openGraph: {
      title: component.name,
      description: component.description,
    },
  };
}

export default async function HeroComponentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <ComponentPageLayout componentId={id} />;
}
