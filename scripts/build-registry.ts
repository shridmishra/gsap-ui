
import fs from "fs";
import path from "path";

const ROOT_DIR = path.resolve(__dirname, "..");
const OUTPUT_DIR = path.join(ROOT_DIR, "public/registry");

// Generic Unsplash images to rotate through
const UNSPLASH_IMAGES = [
  "https://images.unsplash.com/photo-1517336714731-489689fd1ca4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
];

const SAMPLE_VIDEO = "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

interface ComponentConfig {
  id: string;
  file: string;
  type?: string;
}

// Reuse the component list - manually synced for now
const COMPONENTS: ComponentConfig[] = [
  { id: "aurora-bars", file: "src/registry/blocks/hero/aurora-bars.tsx", type: "components:ui" },
  { id: "simple-hero", file: "src/registry/blocks/hero/simple-hero.tsx", type: "components:ui" },
  { id: "border-frame", file: "src/registry/blocks/cards/border-frame.tsx", type: "components:ui" },
  { id: "mango-cards", file: "src/registry/blocks/cards/mango-cards/mango-cards.tsx", type: "components:ui" },
  { id: "media-player", file: "src/registry/blocks/cards/media-player.tsx", type: "components:ui" },
  { id: "raycast-hero", file: "src/registry/blocks/hero/raycast-hero/raycast-hero.tsx", type: "components:ui" },
  { id: "spotlight-gallery", file: "src/registry/blocks/gsap-section/spotlight-gallery/spotlight-gallery.tsx", type: "components:ui" },
  { id: "sticky-scroll", file: "src/registry/blocks/gsap-section/sticky-scroll/sticky-scroll.tsx", type: "components:ui" },
  { id: "illustrated-hero", file: "src/registry/blocks/hero/illustated-hero/illustrated.tsx", type: "components:ui" },
  { id: "hover-image", file: "src/registry/blocks/gsap-section/hover-image/hover-image.tsx", type: "components:ui" },
];

const detectDependencies = (content: string): string[] => {
  const dependencies = new Set<string>();
  
  // Common libraries used in the project
  const candidates = [
    "motion",
    "framer-motion",
    "lucide-react",
    "clsx",
    "tailwind-merge",
    "gsap",
    "@gsap/react",
    "zustand",
    "react-icons",
  ];

  candidates.forEach(dep => {
    if (content.includes(`"${dep}"`) || content.includes(`'${dep}'`)) {
      dependencies.add(dep);
    }
  });

  return Array.from(dependencies);
};

// Helper to replace local assets with Unsplash URLs
const processContent = (content: string): string => {
    let imageIndex = 0;
    
    // Helper to return appropriate replacement based on extension
    const getReplacement = (ext: string) => {
        if (ext === "mp4" || ext === "webm") return SAMPLE_VIDEO;
        const url = UNSPLASH_IMAGES[imageIndex % UNSPLASH_IMAGES.length];
        imageIndex++;
        return url;
    };

    // Replace import statements for images/videos
    let processed = content.replace(
      /import\s+(\w+)\s+from\s+["'](\/.*?\.(png|jpg|jpeg|webp|gif|svg|mp4|webm))["'];?/gi,
      (match, varName, path, ext) => {
        const url = getReplacement(ext);
        return `const ${varName} = "${url}";`;
      }
    );

    // Replace string literals referencing assets
    processed = processed.replace(
        /["'](\/assets\/.*?\.(png|jpg|jpeg|webp|gif|svg|mp4|webm))["']/gi,
        (match, path, ext) => {
            const url = getReplacement(ext);
            return `"${url}"`;
        }
    );

    return processed;
};

const buildRegistry = () => {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const registryIndex = [];

  for (const { id, file, type } of COMPONENTS) {
    const filePath = path.join(ROOT_DIR, file);

    if (!fs.existsSync(filePath)) {
      console.warn(`⚠ File not found: ${file}`);
      continue;
    }

    const rawContent = fs.readFileSync(filePath, "utf-8");
    const content = processContent(rawContent);
    const dependencies = detectDependencies(rawContent); // Use raw content for deps to be safe

    const payload = {
      name: id,
      type: type || "components:ui",
      dependencies,
      registryDependencies: [], // can be enhanced if we have internal deps
      files: [
        {
          path: file.replace("src/", ""), // relative path in user's project? actually shadcn usually just putting it in a single file
          content: content,
          type: type || "components:ui"
        }
      ]
    };

    // Write individual component definition
    fs.writeFileSync(
      path.join(OUTPUT_DIR, `${id}.json`),
      JSON.stringify(payload, null, 2)
    );

    registryIndex.push({
      name: id,
      dependencies,
      registryDependencies: [],
      files: [{ path: file.replace("src/", ""), type: "components:ui" }], // Simplified for index
      type: "components:ui",
    });

    console.log(`✓ Generated registry for ${id}`);
  }

  // Write index
  fs.writeFileSync(
    path.join(OUTPUT_DIR, "index.json"),
    JSON.stringify(registryIndex, null, 2)
  );
  
  console.log(`\n✓ Registry build complete. Output: ${OUTPUT_DIR}`);
};

buildRegistry();
