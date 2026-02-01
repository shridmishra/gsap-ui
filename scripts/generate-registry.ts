import fs from "fs";
import path from "path";

/**
 * Generate shadcn-compatible registry JSON files for CLI installation
 * 
 * Output: public/r/<component-id>.json for each component
 * Usage: npx shadcn add https://gsap-ui.shrid.in/r/text-on-scroll.json
 */

interface RegistryFile {
    path: string;
    type: "registry:component" | "registry:file";
    content: string;
    target?: string;
}

interface RegistryItem {
    $schema: string;
    name: string;
    type: "registry:component" | "registry:block";
    title: string;
    description: string;
    dependencies?: string[];
    files: RegistryFile[];
    categories?: string[];
}

interface ComponentConfig {
    id: string;
    file: string;
    type: "react" | "html";
    name: string;
    description: string;
    dependencies?: string[];
    categories?: string[];
}

const ROOT_DIR = path.resolve(__dirname, "..");
const OUTPUT_DIR = path.join(ROOT_DIR, "public/r");

// Component configurations
const COMPONENTS: ComponentConfig[] = [
    // React components
    {
        id: "aurora-bars",
        file: "src/registry/blocks/hero/aurora-bars.tsx",
        type: "react",
        name: "Aurora Bars",
        description: "A visual hero background with animated aurora-like bars.",
        dependencies: ["motion", "react-icons", "lucide-react", "next-themes", "clsx", "tailwind-merge"],
        categories: ["Hero"],
    },
    {
        id: "simple-hero",
        file: "src/registry/blocks/hero/simple-hero.tsx",
        type: "react",
        name: "Simple Hero",
        description: "A clean hero section with a title, description, and call-to-action buttons.",
        dependencies: ["lucide-react", "react-icons"],
        categories: ["Hero"],
    },
    {
        id: "border-frame",
        file: "src/registry/blocks/hover-animations/border-frame.tsx",
        type: "react",
        name: "Border Frame",
        description: "A card with a glowing border effect that follows the mouse cursor.",
        dependencies: ["clsx", "tailwind-merge"],
        categories: ["Hover Animations"],
    },
    {
        id: "mango-cards",
        file: "src/registry/blocks/cards/mango-cards/mango-cards.tsx",
        type: "react",
        name: "Mango Cards",
        description: "Two mango product cards: a compact preview and an expanded immersive version.",
        dependencies: ["motion"],
        categories: ["Cards"],
    },
    {
        id: "media-player",
        file: "src/registry/blocks/cards/media-player.tsx",
        type: "react",
        name: "Media Player",
        description: "A minimal, modern media player device with a soft rounded-square shape.",
        dependencies: ["lucide-react", "react-icons"],
        categories: ["Cards"],
    },
    {
        id: "raycast-hero",
        file: "src/registry/blocks/hero/raycast-hero/raycast-hero.tsx",
        type: "react",
        name: "Raycast Hero",
        description: "A Raycast-inspired hero section with a glowing arc and dashboard preview.",
        dependencies: ["motion", "lucide-react", "clsx", "tailwind-merge"],
        categories: ["Hero"],
    },
    {
        id: "spotlight-gallery",
        file: "src/registry/blocks/scroll-animations/spotlight-gallery/spotlight-gallery.tsx",
        type: "react",
        name: "Spotlight Gallery",
        description: "A scrolling spotlight gallery with GSAP animations.",
        dependencies: ["gsap", "lenis"],
        categories: ["Scroll Animations"],
    },
    {
        id: "sticky-scroll",
        file: "src/registry/blocks/scroll-animations/sticky-scroll/sticky-scroll.tsx",
        type: "react",
        name: "Sticky Scroll",
        description: "A sticky scroll section with transforming cards.",
        dependencies: ["gsap", "lenis"],
        categories: ["Scroll Animations"],
    },
    {
        id: "illustrated-hero",
        file: "src/registry/blocks/hero/illustated-hero/illustrated.tsx",
        type: "react",
        name: "Illustrated Hero",
        description: "A modern hero section with specific illustration.",
        dependencies: ["motion", "lucide-react"],
        categories: ["Hero"],
    },
    {
        id: "hover-image",
        file: "src/registry/blocks/hover-animations/hover-image/hover-image.tsx",
        type: "react",
        name: "Hover Image",
        description: "A project gallery with cursor-following image thumbnails.",
        dependencies: ["gsap"],
        categories: ["Hover Animations"],
    },

    // HTML-only components
    {
        id: "text-on-scroll",
        file: "src/registry/blocks/text-animations/text-on-scroll/text-on-scroll.html",
        type: "html",
        name: "Text On Scroll",
        description: "A scroll-triggered text reveal animation using GSAP ScrollTrigger. Uses CDN for dependencies.",
        dependencies: [],
        categories: ["Text Animations", "HTML"],
    },
];

const escapeJsonString = (str: string): string => {
    return str
        .replace(/\\/g, "\\\\")
        .replace(/"/g, '\\"')
        .replace(/\n/g, "\\n")
        .replace(/\r/g, "\\r")
        .replace(/\t/g, "\\t");
};

const generateRegistryJson = (config: ComponentConfig): RegistryItem | null => {
    const filePath = path.join(ROOT_DIR, config.file);

    if (!fs.existsSync(filePath)) {
        console.warn(`⚠ File not found: ${config.file}`);
        return null;
    }

    const content = fs.readFileSync(filePath, "utf-8");
    const fileExt = path.extname(config.file);
    const fileName = path.basename(config.file);

    // Determine file type based on extension
    const fileType: RegistryFile["type"] =
        config.type === "html" ? "registry:file" : "registry:component";

    // For HTML files, target goes to a specific location
    const target = config.type === "html"
        ? `~/components/html/${config.id}/${fileName}`
        : undefined;

    const registryItem: RegistryItem = {
        $schema: "https://ui.shadcn.com/schema.json",
        name: config.id,
        type: config.type === "html" ? "registry:block" : "registry:component",
        title: config.name,
        description: config.description,
        dependencies: config.dependencies?.length ? config.dependencies : undefined,
        files: [
            {
                path: config.file,
                type: fileType,
                content: content,
                ...(target && { target }),
            },
        ],
        categories: config.categories,
    };

    return registryItem;
};

const generateRegistry = (): void => {
    // Ensure output directory exists
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    let successCount = 0;

    for (const config of COMPONENTS) {
        const registryItem = generateRegistryJson(config);

        if (!registryItem) continue;

        const outputPath = path.join(OUTPUT_DIR, `${config.id}.json`);
        fs.writeFileSync(outputPath, JSON.stringify(registryItem, null, 2));
        successCount++;
    }

    console.log(`✓ Generated ${successCount} registry files in ${path.relative(ROOT_DIR, OUTPUT_DIR)}/`);
};

generateRegistry();
