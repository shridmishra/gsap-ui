import fs from "fs";
import path from "path";

const ROOT_DIR = path.resolve(__dirname, "..");
const SHOWCASE_DIR = path.join(ROOT_DIR, "src/components/showcase");
const STOCK_DIR = path.join(ROOT_DIR, "public/assets/stock");

// Regex patterns for validation
const EXTERNAL_IMAGE_REGEX = /https?:\/\/[^\s"'`]+\.(jpg|jpeg|png|gif|webp|svg)/gi;
const IMAGE_SRC_REGEX = /imageSrc[:\s]*["'`]([^"'`]+)["'`]/gi;

interface ValidationResult {
  component: string;
  issues: string[];
  passed: boolean;
}

function getComponentFiles(dir: string): string[] {
  const files: string[] = [];
  
  function walk(currentDir: string) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);
      
      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.name.endsWith(".tsx") && !entry.name.startsWith("index")) {
        files.push(fullPath);
      }
    }
  }
  
  walk(dir);
  return files;
}

function getStockImages(): Set<string> {
  if (!fs.existsSync(STOCK_DIR)) {
    return new Set();
  }
  
  return new Set(
    fs.readdirSync(STOCK_DIR)
      .filter(f => /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(f))
  );
}

function validateComponent(filePath: string, stockImages: Set<string>): ValidationResult {
  const relativePath = path.relative(SHOWCASE_DIR, filePath);
  const content = fs.readFileSync(filePath, "utf-8");
  const issues: string[] = [];
  
  // Rule 1: Check for external image URLs
  const externalUrls = content.match(EXTERNAL_IMAGE_REGEX);
  if (externalUrls && externalUrls.length > 0) {
    issues.push(`❌ Uses external image URLs (should use /assets/stock/): ${externalUrls.slice(0, 3).join(", ")}${externalUrls.length > 3 ? "..." : ""}`);
  }
  
  // Rule 2: Check for duplicate images within component
  const imageSrcMatches: string[] = [];
  let match;
  const srcRegex = /["'`](\/assets\/[^"'`]+)["'`]/g;
  
  while ((match = srcRegex.exec(content)) !== null) {
    imageSrcMatches.push(match[1]);
  }
  
  const duplicates = imageSrcMatches.filter((item, index) => imageSrcMatches.indexOf(item) !== index);
  if (duplicates.length > 0) {
    const uniqueDuplicates = [...new Set(duplicates)];
    issues.push(`❌ Uses same image multiple times: ${uniqueDuplicates.join(", ")}`);
  }
  
  // Rule 3: Multi-file components should be in a folder
  const dir = path.dirname(filePath);
  const filesInDir = fs.readdirSync(dir);
  const componentFiles = filesInDir.filter(f => 
    (f.endsWith(".tsx") || f.endsWith(".css")) && 
    !f.startsWith("index")
  );
  
  // Check if this is a component directly in a category folder (not its own folder)
  const parentDir = path.basename(path.dirname(filePath));
  const categories = ["gsap-section", "hero", "cards", "backgrounds"];
  
  if (categories.includes(parentDir) && componentFiles.length > 1) {
    // It's directly in a category folder with multiple related files
    const baseName = path.basename(filePath, ".tsx");
    const hasCss = filesInDir.includes(`${baseName}.css`);
    if (hasCss) {
      issues.push(`❌ Multi-file component should be in its own folder: ${baseName}/`);
    }
  }
  
  // Rule 4: Check if referenced stock images exist
  for (const imgPath of imageSrcMatches) {
    if (imgPath.startsWith("/assets/stock/")) {
      const imgName = path.basename(imgPath);
      if (!stockImages.has(imgName)) {
        issues.push(`❌ Stock image not found: ${imgPath}`);
      }
    }
  }
  
  return {
    component: relativePath,
    issues,
    passed: issues.length === 0,
  };
}

function main() {
  console.log("🔍 Validating showcase components against NEW_COMPONENT.md rules...\n");
  
  const componentFiles = getComponentFiles(SHOWCASE_DIR);
  const stockImages = getStockImages();
  
  let passedCount = 0;
  let failedCount = 0;
  
  for (const file of componentFiles) {
    const result = validateComponent(file, stockImages);
    
    if (result.passed) {
      console.log(`✅ ${result.component}`);
      passedCount++;
    } else {
      console.log(`\n❌ ${result.component}`);
      for (const issue of result.issues) {
        console.log(`   ${issue}`);
      }
      failedCount++;
    }
  }
  
  console.log("\n" + "=".repeat(50));
  console.log(`📊 Results: ${passedCount} passed, ${failedCount} failed`);
  
  if (failedCount > 0) {
    console.log("\n⚠️  Some components have issues. Please fix them according to NEW_COMPONENT.md rules.");
    process.exit(1);
  } else {
    console.log("\n✨ All components pass validation!");
  }
}

main();
