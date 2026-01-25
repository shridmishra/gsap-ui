import { componentRegistry } from "@/registry";
import { redirect } from "next/navigation";

export default function ComponentsIndexPage() {
    const firstCategory = componentRegistry[0];
    if (firstCategory && firstCategory.items.length > 0) {
        const firstItem = firstCategory.items[0];
        redirect(firstItem.url);
    }

    return <div>No components found.</div>;
}
