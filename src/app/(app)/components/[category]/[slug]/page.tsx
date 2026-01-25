import { Metadata } from "next";
import { ComponentPageLayout } from "@/components/layout";
import { JsonLd } from "@/components/seo/json-ld";
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
        keywords: component.keywords,
        openGraph: {
            title: component.name,
            description: component.description,
            type: "article",
            url: `https://gsap-ui.shrid.in${component.url}`,
        },
        alternates: {
            canonical: `https://gsap-ui.shrid.in${component.url}`,
        },
        twitter: {
            card: "summary_large_image",
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

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Components",
                "item": "https://gsap-ui.shrid.in/components"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": component.name,
                "item": `https://gsap-ui.shrid.in${component.url}`
            }
        ]
    };

    const softwareSourceCode = {
        "@context": "https://schema.org",
        "@type": "SoftwareSourceCode",
        "name": component.name,
        "programmingLanguage": "TypeScript",
        "author": {
            "@type": "Person",
            "name": "Shrid"
        },
        "description": component.description,
        "codeRepository": "https://github.com/shridmishra/gsap-ui"
    };

    return (
        <>
            <JsonLd data={jsonLd} />
            <JsonLd data={softwareSourceCode} />
            <ComponentPageLayout componentId={slug} />
        </>
    );
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
