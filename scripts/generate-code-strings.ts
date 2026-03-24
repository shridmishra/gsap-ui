import fs from "fs";
import path from "path";
import crypto from "crypto";

interface ComponentConfig {
  id: string;
  file: string;
  type?: "react" | "html"; // Default: "react"
}

const ROOT_DIR = path.resolve(__dirname, "..");
const OUTPUT_FILE = path.join(ROOT_DIR, "src/registry/code-strings.ts");
const HASH_FILE = path.join(ROOT_DIR, ".code-strings-hash");

// Component source files to extract
const COMPONENTS: ComponentConfig[] = [
  // React components (TSX)
  { id: "aurora-bars", file: "src/registry/blocks/hero/aurora-bars.tsx" },
  { id: "simple-hero", file: "src/registry/blocks/hero/simple-hero.tsx" },
  { id: "border-frame", file: "src/registry/blocks/hover-animations/border-frame.tsx" },
  { id: "mango-cards", file: "src/registry/blocks/cards/mango-cards/mango-cards.tsx" },
  { id: "media-player", file: "src/registry/blocks/cards/media-player.tsx" },
  { id: "raycast-hero", file: "src/registry/blocks/hero/raycast-hero/raycast-hero.tsx" },
  { id: "spotlight-gallery", file: "src/registry/blocks/scroll-animations/spotlight-gallery/spotlight-gallery.tsx" },
  { id: "sticky-scroll", file: "src/registry/blocks/scroll-animations/sticky-scroll/sticky-scroll.tsx" },
  { id: "illustrated-hero", file: "src/registry/blocks/hero/illustated-hero/illustrated.tsx" },
  { id: "hover-image", file: "src/registry/blocks/hover-animations/hover-image/hover-image.tsx" },

  // HTML-only components
  { id: "text-on-scroll", file: "src/registry/blocks/text-animations/text-on-scroll/text-on-scroll.html", type: "html" },
  { id: "mouse-image-trail", file: "src/registry/blocks/hover-animations/mouse-image-trail/mouse-image-trail.html", type: "html" },
  { id: "text-loader", file: "src/registry/blocks/loading-animations/text-loader/text-loader.html", type: "html" },
  { id: "color-palette-showcase", file: "src/registry/blocks/color-palette/color-palette-showcase/color-palette-showcase.html", type: "html" },
  { id: "mouse-image-mask", file: "src/registry/blocks/hover-animations/mouse-image-mask/mouse-image-mask.html", type: "html" },
  { id: "view-more-mouse", file: "src/registry/blocks/hover-animations/view-more-mouse/view-more-mouse.html", type: "html" },
  { id: "reverse-sticky-scroll", file: "src/registry/blocks/scroll-animations/reverse-sticky-scroll/reverse-sticky-scroll.html", type: "html" },
  { id: "guitar-string", file: "src/registry/blocks/just-for-fun/guitar-string/guitar-string.html", type: "html" },
];

const toVariableName = (id: string): string =>
  id.replace(/-([a-z])/g, (_, c) => c.toUpperCase()) + "Code";

const escapeTemplateString = (content: string): string =>
  content.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");

// Calculate hash of all source files
const calculateHash = (): string => {
  const hash = crypto.createHash("md5");

  for (const { file } of COMPONENTS) {
    const filePath = path.join(ROOT_DIR, file);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, "utf-8");
      hash.update(content);
    }
  }

  return hash.digest("hex");
};

// Check if regeneration is needed
const needsRegeneration = (): boolean => {
  // Always regenerate if output doesn't exist
  if (!fs.existsSync(OUTPUT_FILE)) return true;

  // Check hash file
  if (!fs.existsSync(HASH_FILE)) return true;

  const storedHash = fs.readFileSync(HASH_FILE, "utf-8").trim();
  const currentHash = calculateHash();

  return storedHash !== currentHash;
};

const generateCodeStrings = (): void => {
  if (!needsRegeneration()) {
    console.log("✓ Code strings up to date, skipping generation");
    return;
  }

  const lines: string[] = [
    "// Auto-generated file - DO NOT EDIT",
    "// Run `npm run generate-code` to regenerate",
    "",
  ];

  for (const { id, file, type = "react" } of COMPONENTS) {
    const filePath = path.join(ROOT_DIR, file);

    if (!fs.existsSync(filePath)) {
      console.warn(`⚠ File not found: ${file}`);
      continue;
    }

    const content = fs.readFileSync(filePath, "utf-8");
    const escaped = escapeTemplateString(content);
    const varName = toVariableName(id);

    if (type === "html") {
      // HTML components export an object with html property
      lines.push(`export const ${varName} = {`);
      lines.push(`  html: \`${escaped}\`,`);
      lines.push(`};`);
    } else {
      // React components export a plain string
      lines.push(`export const ${varName} = \`${escaped}\`;`);
    }
    lines.push("");
  }

  fs.writeFileSync(OUTPUT_FILE, lines.join("\n"));

  // Save current hash
  const currentHash = calculateHash();
  fs.writeFileSync(HASH_FILE, currentHash);

  console.log(`✓ Generated ${path.relative(ROOT_DIR, OUTPUT_FILE)}`);
};

generateCodeStrings();
