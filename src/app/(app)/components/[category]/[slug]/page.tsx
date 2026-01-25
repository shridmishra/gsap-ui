import { Metadata } from "next";
import { ComponentPageLayout } from "@/components/layout";
import { componentRegistry } from "@/registry";
import { notFound } from "next/navigation";

interface PageProps {
    params: Promise<{
        category: string;
        slug: string;
    }>;
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const component = componentRegistry
        .flatMap((c) => c.items)
        .find((i) => i.id === slug);

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

export default async function ComponentPage({ params }: PageProps) {
    const { category, slug } = await params;

    const component = componentRegistry
        .flatMap((c) => c.items)
        .find((i) => i.id === slug);

    if (!component) {
        notFound();
    }

    // Optional: Verify category matches if strict URL structure holds
    // const expectedUrl = `/components/${category}/${slug}`;
    // if (component.url !== expectedUrl) { ... }

    return <ComponentPageLayout componentId={slug} />;
}

export function generateStaticParams() {
    return componentRegistry.flatMap((category) =>
        category.items.map((item) => {
            // url is like /components/hero/simple-hero
            // split to get category and slug
            const parts = item.url.split("/");
            // parts[0] = ""
            // parts[1] = "components"
            // parts[2] = category
            // parts[3] = slug
            return {
                category: parts[2],
                slug: parts[3],
            };
        })
    );
}
