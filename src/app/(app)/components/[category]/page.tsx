import { componentRegistry } from "@/registry";
import { notFound, redirect } from "next/navigation";

interface PageProps {
    params: Promise<{
        category: string;
    }>;
}

export default async function CategoryPage({ params }: PageProps) {
    const { category } = await params;

    // Find category by matching loose naming or inspecting URLs of items
    // Since we don't store "slug" for category in the registry explicitely (it has "Hero Section"),
    // we can iterate to find which category contains items with this URL part.

    const targetCategory = componentRegistry.find(cat =>
        cat.items.some(item => item.url.includes(`/components/${category}/`))
    );

    if (!targetCategory || targetCategory.items.length === 0) {
        notFound();
    }

    const firstItem = targetCategory.items[0];
    redirect(firstItem.url);
}

export function generateStaticParams() {
    // Extract unique categories from item URLs
    const categories = new Set<string>();

    componentRegistry.forEach(cat => {
        cat.items.forEach(item => {
            const parts = item.url.split("/");
            if (parts.length >= 3) {
                categories.add(parts[2]);
            }
        });
    });

    return Array.from(categories).map(category => ({
        category,
    }));
}
