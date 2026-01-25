import fs from "fs";
import path from "path";
import crypto from "crypto";

interface ComponentConfig {
  id: string;
  file: string;
}

const ROOT_DIR = path.resolve(__dirname, "..");
const OUTPUT_FILE = path.join(ROOT_DIR, "src/registry/code-strings.ts");
const HASH_FILE = path.join(ROOT_DIR, ".code-strings-hash");

// Component source files to extract
const COMPONENTS: ComponentConfig[] = [
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

  for (const { id, file } of COMPONENTS) {
    const filePath = path.join(ROOT_DIR, file);

    if (!fs.existsSync(filePath)) {
      console.warn(`⚠ File not found: ${file}`);
      continue;
    }

    const content = fs.readFileSync(filePath, "utf-8");
    const escaped = escapeTemplateString(content);
    const varName = toVariableName(id);

    lines.push(`export const ${varName} = \`${escaped}\`;`);
    lines.push("");
  }

  fs.writeFileSync(OUTPUT_FILE, lines.join("\n"));
  
  // Save current hash
  const currentHash = calculateHash();
  fs.writeFileSync(HASH_FILE, currentHash);
  
  console.log(`✓ Generated ${path.relative(ROOT_DIR, OUTPUT_FILE)}`);
};

generateCodeStrings();
