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
{ id: "component-id", file: "src/registry/blocks/<category>/<component>/<file>.tsx", type: "components:ui" },
```

### For HTML Components

```typescript
{ id: "component-id", file: "src/registry/blocks/<category>/<component>/<file>.html", type: "components:html", componentType: "html" },
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

## Step 9: Verify

1. Ensure dev server is running (`npm run dev`)
2. Visit: `http://localhost:3000/components/<category>/<component-id>`
3. Verify:
   - [ ] Component renders correctly (React in preview, HTML in iframe)
   - [ ] Code tab displays the correct source code
   - [ ] For HTML: HTML tab appears in code panel
   - [ ] Installation command lists ALL dependencies
   - [ ] No console errors
   - [ ] Animations work smoothly

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
| Dependencies | npm packages | npm packages | CDN links |
| Code panel tabs | TS/JS | JS | HTML only |

---

## Common Mistakes to Avoid

> [!CAUTION]
> - **Wrong Framer Motion import**: Use `motion/react`, NOT `framer-motion`
> - **Missing dependencies**: List ALL packages in `installation` field
> - **Mismatched IDs**: The `id` in registry MUST match keys in `componentMap` and `codeMap`
> - **Forgetting scripts**: Run both `npm run generate-code` AND `npm run build:registry`
> - **HTML in componentMap**: HTML components should NOT be added to componentMap
> - **Missing `type: "html"`** in generate-code-strings.ts for HTML files

> [!TIP]
> - Run `npm run generate-code && npm run build:registry` after ANY change
> - Check existing components in the same category for patterns
> - For HTML: Test the iframe scrolling behavior
