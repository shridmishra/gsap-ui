---
description: How to add a new showcase component to shrid-ui
---

# Add New Showcase Component Workflow

This workflow guides you through adding a new component to the `shrid-ui` showcase. Follow each step precisely.

---

## Pre-Flight Checks

Before starting, validate the input code:

### Format Detection
- **If input is HTML/CSS/JS**: Keep as a **single HTML file** containing CSS (in `<style>`) and JS (in `<script>`). **Do NOT convert to JSX/TSX**.
- **If input is JSX**: Keep as `.jsx` file. **Do NOT convert to TSX**.
- **If input is TSX**: Keep as `.tsx` file.

### Component Types Summary

| Type | Extension | Preview Method | Dependencies |
|------|-----------|----------------|--------------|
| React TypeScript | `.tsx` | Direct render | npm packages |
| React JavaScript | `.jsx` | Direct render | npm packages |
| HTML (standalone) | `.html` | Iframe | CDN links |

### Syntax Requirements (for React components)
- [ ] Use `className` instead of `class`
- [ ] Self-close appropriate tags: `<img />`, `<input />`, `<br />`
- [ ] Style attributes as objects: `style={{ color: 'red' }}`

### Styling Requirements
- [ ] Use **Tailwind CSS** for all styling (React components)
- [ ] Use `clsx` and `tailwind-merge` for conditional class names
- [ ] Avoid raw CSS files unless absolutely necessary for complex animations

### Animation Requirements
- [ ] Use **Framer Motion** or **GSAP** for animations
- [ ] **CRITICAL**: Import Framer Motion as `import { ... } from "motion/react"` — NOT `framer-motion`
- [ ] Ensure animations are responsive and performant

---

## Mandatory Validation Tests

> [!IMPORTANT]
> **You MUST run these validation checks before and after creating a component.** Fix any issues found.

### 1. Asset & Image Validation

**RULE: All images MUST use local assets. NEVER download external images.**

> [!CAUTION]
> **NEVER download images from external URLs.** Always use existing stock images from `public/assets/stock/`.

**Step 1: Check for external image URLs:**
```bash
grep -E "(https?://|http://)" <component-file> | grep -iE "\.(jpg|jpeg|png|gif|webp|svg)"
```

**Step 2: If external images are found, list available stock images:**
```bash
ls public/assets/stock/
```

**Step 3: Replace external URLs with stock images:**
- Use images from `public/assets/stock/` folder
- Path format: `/assets/stock/Image Name.png`

**Available Stock Images (use these):**
```
public/assets/stock/
├── Black and White.png
├── Ethereal Cavern Scene.png
├── Ethereal Motion Scene.png
├── Floral Fusion Figure.png
├── Mystical Portal Landscape.png
├── Pastoral Monolith Scene.png
├── Serene Daisy Meadow.png
├── Serene Green Hills.png
├── Serene Landscape of Rolling Hills.png
├── Serene Landscape with Solitary Figure.png
├── Silhouetted Figure Between Red Walls Facing the Sea.png
├── Solitude Amidst Grandeur.png
├── Surreal Landscape with Geometric Structures and Lone Figure.png
└── Vintage TV on Hill.png
```

**Allowed image sources:**
- ✅ `/assets/stock/...` (existing stock images - **PREFERRED**)
- ✅ `/assets/showcase/...` (component-specific assets if already exist)
- ✅ Inline SVG
- ✅ Data URLs for small icons
- ❌ `https://images.pexels.com/...` - **NEVER USE**
- ❌ `https://images.unsplash.com/...` - **NEVER USE**
- ❌ Any external CDN image URLs - **NEVER USE**
- ❌ Downloading new images - **NEVER DO THIS**

### 2. Dark/Light Mode & Color Rules

**RULE: All components MUST support dark and light mode using CSS variables.**

> [!IMPORTANT]
> **NEVER use hardcoded colors.** Always use CSS variables that adapt to dark/light mode.

**For React components (TSX/JSX):**
- Use Tailwind's dark mode classes: `bg-white dark:bg-black`
- Or use CSS variables defined in the global stylesheet

**For HTML components:**
Must include this CSS variable setup in the `<style>` tag:

```css
/* Light mode (default) */
:root {
  --bg-primary: #ffffff;
  --bg-secondary: #f5f5f5;
  --text-primary: #1a1a1a;
  --text-secondary: #666666;
  --border-color: #e0e0e0;
  --accent-color: #3b82f6;
}

/* Dark mode via data-theme attribute (synced from parent website) */
:root[data-theme="dark"],
html[data-theme="dark"] {
  --bg-primary: #0a0a0a;
  --bg-secondary: #1a1a1a;
  --text-primary: #f5f5f5;
  --text-secondary: #a0a0a0;
  --border-color: #333333;
  --accent-color: #60a5fa;
}

/* Fallback: Dark mode via system preference (for standalone viewing) */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --bg-primary: #0a0a0a;
    --bg-secondary: #1a1a1a;
    --text-primary: #f5f5f5;
    --text-secondary: #a0a0a0;
    --border-color: #333333;
    --accent-color: #60a5fa;
  }
}

/* Usage: */
body {
  background: var(--bg-primary);
  color: var(--text-primary);
}
```

> [!NOTE]
> The preview system automatically injects `data-theme="dark"` or `data-theme="light"` into HTML components based on the website's current theme. The `prefers-color-scheme` media query serves as a fallback for standalone viewing.

**Color Validation Check:**
```bash
# Find hardcoded colors (these should be replaced with CSS variables)
grep -E "#[0-9a-fA-F]{3,8}|rgb\(|rgba\(|hsl\(" <component-file>
```

**Allowed colors:**
- ✅ CSS variables: `var(--bg-primary)`
- ✅ Tailwind classes: `bg-white dark:bg-black`
- ✅ `currentColor` and `inherit`
- ❌ Hardcoded hex: `#ffffff`, `#000`
- ❌ Hardcoded rgb/hsl: `rgb(255, 255, 255)`

### 3. Code Quality Checks

Run these checks on the component code:

| Check | Description | Fix Required |
|-------|-------------|--------------|
| **No console.log** | Remove debug statements | `grep "console.log"` |
| **No TODO comments** | Complete or remove TODOs | `grep -i "TODO\|FIXME"` |
| **Dark/light mode** | Must support both themes | See section above |
| **Proper event cleanup** | useEffect must clean up listeners | Manual review |
| **No memory leaks** | GSAP/animations must be killed on unmount | Manual review |

### 3. Dependency Validation

**For React components:**
- [ ] Verify ALL imports exist in `package.json`
- [ ] No unused imports
- [ ] Motion imports use `motion/react` NOT `framer-motion`

**For HTML components:**
- [ ] All CDN scripts are loaded before usage
- [ ] Use `defer` attribute on non-critical scripts
- [ ] CDN URLs are from reliable sources (cdnjs, jsdelivr, unpkg)

### 4. ID Consistency Check

After adding the component, verify these all match:

```
Component ID: "my-component"
├── generate-code-strings.ts → id: "my-component" ✓
├── build-registry.ts → id: "my-component" ✓
├── registry/index.ts → id: "my-component" ✓
├── codeMap → "my-component": myComponentCode ✓
└── componentMap → "my-component": MyComponent ✓ (React only)
```

// turbo
Run this grep to verify ID consistency:
```bash
grep -r "my-component" scripts/ src/registry/
```

### 5. File Structure Validation

Verify the component folder structure:

```
src/registry/blocks/<category>/<component-name>/
├── <component-name>.tsx (or .jsx or .html)
└── (optional assets in public/assets/showcase/<category>/<component-name>/)
```

// turbo
```bash
ls -la src/registry/blocks/<category>/<component-name>/
```

### 6. Registry Output Validation

After running `npm run build:registry`, verify:

// turbo
```bash
# Check the generated registry file exists
ls -la public/registry/<component-id>.json

# Verify the JSON is valid
cat public/registry/<component-id>.json | head -20
```

---

## Step 1: Determine Component Details

Ask the user for or determine from context:
1. **Component Name** (PascalCase): e.g., `MyNewComponent`
2. **File Name** (kebab-case): e.g., `my-new-component.tsx`
3. **Component Type**: `tsx`, `jsx`, or `html`
4. **Category**: e.g., `buttons`, `cards`, `hero`, `text-animations`
5. **Description**: A concise SEO-friendly description
6. **Keywords**: Tags for search (e.g., `["animation", "button", "hover"]`)
7. **Dependencies**: List ALL packages used (or "Uses CDN" for HTML)
8. **Is Free**: `true` or `false`
9. **Preview Background** (optional): e.g., `bg-black`, `bg-white`

---

## Step 2: Create Component File

Create the component at: `src/registry/blocks/<category>/<component-name>/`

### Option A: React TypeScript Component (.tsx)

**Path**: `src/registry/blocks/<category>/<component-name>/<component-name>.tsx`

```tsx
"use client";

import React from "react";
import { cn } from "@/lib/utils";
// Add other imports as needed

export const ComponentName = () => {
  return (
    <div className="relative w-full">
      {/* Component content */}
    </div>
  );
};
```

### Option B: React JavaScript Component (.jsx)

**Path**: `src/registry/blocks/<category>/<component-name>/<component-name>.jsx`

```jsx
"use client";

import React from "react";
import { cn } from "@/lib/utils";

export const ComponentName = () => {
  return (
    <div className="relative w-full">
      {/* Component content */}
    </div>
  );
};
```

### Option C: HTML Component (.html)

**Path**: `src/registry/blocks/<category>/<component-name>/<component-name>.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Component Name</title>
  <style>
    /* CSS Styles - Self-contained */
  </style>
</head>
<body>
  <!-- HTML Content -->

  <!-- CDN dependencies (e.g., GSAP) -->
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
  <script>
    // JS Logic
  </script>
</body>
</html>
```

> [!IMPORTANT]
> HTML components must be **self-contained** with all CSS in `<style>` tags and JS in `<script>` tags. Use CDN links for external libraries.

---

## Step 3: Update generate-code-strings.ts

Edit `scripts/generate-code-strings.ts` and add the component to the `COMPONENTS` array:

### For React Components (.tsx or .jsx)

```typescript
{ id: "component-id", file: "src/registry/blocks/<category>/<component-name>/<file>.tsx" },
// or for jsx:
{ id: "component-id", file: "src/registry/blocks/<category>/<component-name>/<file>.jsx" },
```

### For HTML Components

```typescript
{ id: "component-id", file: "src/registry/blocks/<category>/<component-name>/<file>.html", type: "html" },
```

The `type: "html"` flag tells the generator to output `{ html: string }` instead of a plain string.

---

## Step 4: Update build-registry.ts

Edit `scripts/build-registry.ts` and add the component to the `COMPONENTS` array:

### For React Components

```typescript
{ id: "component-id", file: "src/registry/blocks/<category>/<component>/<file>.tsx", type: "registry:ui" },
```

### For HTML Components

```typescript
{ id: "component-id", file: "src/registry/blocks/<category>/<component>/<file>.html", type: "registry:block", componentType: "html" },
```

---

## Step 5: Generate Code Strings

// turbo
Run the code generator:
```bash
npm run generate-code
```

This auto-populates `src/registry/code-strings.ts` with the component's source code.

---

## Step 6: Export Component (React only)

Edit `src/registry/blocks/index.ts`:

> [!NOTE]
> **Skip this step for HTML components** - they don't have React exports.

### For .tsx components
```typescript
export { ComponentName } from "./<category>/<component-name>/<file>";
```

### For .jsx components
```typescript
// JSX files may need explicit type annotation or separate handling
export { ComponentName } from "./<category>/<component-name>/<file>";
```

Also add the code string export:
```typescript
export { componentNameCode } from "@/registry/code-strings";
```

---

## Step 7: Register in Component Registry

Edit `src/registry/index.ts`:

### 7.1 Add Imports (React components only)

```typescript
import { ComponentName, componentNameCode } from "@/registry/blocks";
```

For HTML components, only import the code:
```typescript
import { componentNameCode } from "@/registry/blocks";
```

### 7.2 Add to componentRegistry Array

Find the appropriate category or create a new one:

```typescript
{
  category: "Category Name",
  items: [
    {
      name: "Component Display Name",
      id: "component-id", // kebab-case, must match all map keys
      isFree: true,
      description: "Concise, SEO-friendly description.",
      url: "/components/<category>/component-id",
      installation: "npm install <pkg1> <pkg2>", // or "Uses CDN - no npm install required"
      keywords: ["keyword1", "keyword2"],
      previewBackground: "bg-black", // Optional
      componentType: "html", // ADD THIS FOR HTML COMPONENTS ONLY
      needsReload: true, // ADD THIS for components with one-time animations (e.g., loaders, intros)
    },
  ],
},
```

### 7.3 Update componentMap (React only)

> [!NOTE]
> **Skip this for HTML components** - they render via iframe, not React.

```typescript
export const componentMap = {
  // ... existing entries
  "component-id": ComponentName,
};
```

### 7.4 Update codeMap (All components)

```typescript
export const codeMap = {
  // ... existing entries
  "component-id": componentNameCode,
};
```

---

## Step 8: Build Registry

// turbo
Build the shadcn CLI registry:
```bash
npm run build:registry
```

This generates `public/registry/<component-id>.json` for CLI installation.

---

## Step 9: Final Verification Checklist

Run through this checklist before marking the component as complete:

### Build & Runtime Checks
// turbo
```bash
# Verify TypeScript compilation (for React components)
npm run build 2>&1 | grep -i error || echo "No build errors"
```

### Asset Verification
// turbo
```bash
# Verify no external image URLs remain in HTML components
grep -rE "https?://.*\.(jpg|jpeg|png|gif|webp)" src/registry/blocks/<category>/<component-name>/ || echo "No external images found ✓"
```

### Manual Verification
1. Ensure dev server is running (`npm run dev`)
2. Visit: `http://localhost:3000/components/<category>/<component-id>`
3. Verify:
   - [ ] Component renders correctly (React in preview, HTML in iframe)
   - [ ] Code tab displays the correct source code
   - [ ] For HTML-only components: Only HTML tab appears (no TypeScript/JavaScript tabs)
   - [ ] For components with both React & HTML: All tabs (TypeScript, JavaScript, HTML) appear
   - [ ] Installation command lists ALL dependencies
   - [ ] No console errors
   - [ ] Animations work smoothly
   - [ ] Images load correctly (no broken images)
   - [ ] No CORS errors in console

---

## Quick Reference: File Locations

| Purpose | Path |
|---------|------|
| Component file | `src/registry/blocks/<category>/<component-name>/<file>.<ext>` |
| Component exports | `src/registry/blocks/index.ts` |
| Code generation config | `scripts/generate-code-strings.ts` |
| Registry build config | `scripts/build-registry.ts` |
| Generated code strings | `src/registry/code-strings.ts` |
| Component registry | `src/registry/index.ts` |
| CLI registry output | `public/registry/<component-id>.json` |
| Assets | `public/assets/showcase/<category>/<component-name>/` |

---

## Component Type Comparison

| Feature | TSX | JSX | HTML |
|---------|-----|-----|------|
| File extension | `.tsx` | `.jsx` | `.html` |
| Preview method | Direct React render | Direct React render | Iframe with `srcDoc` |
| In componentMap | ✅ Yes | ✅ Yes | ❌ No |
| In codeMap | ✅ Yes | ✅ Yes | ✅ Yes |
| Has componentType field | ❌ No (default) | ❌ No (default) | ✅ `"html"` |
| needsReload (reload button) | ❌ Usually not | ❌ Usually not | ✅ For one-time animations |
| Dependencies | npm packages | npm packages | CDN links |
| Code panel tabs | TS/JS/HTML (if HTML exists) | JS/HTML (if HTML exists) | **HTML only** |

---

## Common Mistakes to Avoid

> [!CAUTION]
> - **External images**: Always download and use local assets from `public/assets/`
> - **Wrong Framer Motion import**: Use `motion/react`, NOT `framer-motion`
> - **Missing dependencies**: List ALL packages in `installation` field
> - **Mismatched IDs**: The `id` in registry MUST match keys in `componentMap` and `codeMap`
> - **Forgetting scripts**: Run both `npm run generate-code` AND `npm run build:registry`
> - **HTML in componentMap**: HTML components should NOT be added to componentMap
> - **Missing `type: "html"`** in generate-code-strings.ts for HTML files
> - **Uncleaned animations**: GSAP/Framer Motion animations must be cleaned up on unmount

> [!TIP]
> - Run `npm run generate-code && npm run build:registry` after ANY change
> - Check existing components in the same category for patterns
> - For HTML: Test the iframe scrolling behavior
> - Use the validation tests section to catch issues early

