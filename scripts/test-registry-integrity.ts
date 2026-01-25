
import fs from "fs";
import path from "path";

const REGISTRY_DIR = path.resolve(__dirname, "../public/registry");

const main = () => {
    console.log("🔍 Testing Registry Integrity...\n");

    const indexFile = path.join(REGISTRY_DIR, "index.json");
    if (!fs.existsSync(indexFile)) {
        console.error("❌ Registry index not found!");
        process.exit(1);
    }

    const index = JSON.parse(fs.readFileSync(indexFile, "utf-8"));
    console.log(`✓ Found index.json with ${index.length} components.`);

    let errors = 0;

    index.forEach((item: any) => {
        const itemFile = path.join(REGISTRY_DIR, `${item.name}.json`);
        if (!fs.existsSync(itemFile)) {
            console.error(`❌ Missing registry file for: ${item.name}`);
            errors++;
            return;
        }

        const definition = JSON.parse(fs.readFileSync(itemFile, "utf-8"));
        
        // basic schema check
        if (!definition.name || !definition.files || !definition.files.length) {
            console.error(`❌ Invalid schema for: ${item.name}`);
            errors++;
            return;
        }

        const fileContent = definition.files[0].content;

        // Check for local asset leakage
        if (fileContent.includes("/assets/stock") || fileContent.includes("/assets/showcase")) {
             console.error(`❌ ${item.name}: Contains local asset paths! (Failed replacement)`);
             // Print snippet
             const match = fileContent.match(/["'](\/assets\/.*?)["']/);
             if (match) console.log(`   Found: ${match[1]}`);
             errors++;
        }

        // Check for unspalsh presence (heuristics)
        // Some components might not have images, so this is a warning/info
        if (fileContent.includes("images.unsplash.com")) {
            // Good
        } else if (fileContent.includes("src=") || fileContent.includes("import .* from .*png")) {
             // If it looks like it has images but no unsplash, might be suspicious?
             // But valid if it uses lucide icons only.
        }

        // console.log(`✓ Checked ${item.name}`);
    });

    if (errors === 0) {
        console.log("\n✅ All registry files passed integrity checks.");
        console.log("   - JSON structure valid");
        console.log("   - Local assets replaced");
    } else {
        console.error(`\n❌ Found ${errors} errors.`);
        process.exit(1);
    }
};

main();
