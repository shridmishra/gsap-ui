# Adding a New Showcase Component

This guide outlines the process for adding a new component to the `shrid-ui` showcase.

## ⚠️ Code Conversion Rules & Best Practices

Before adding your component, ensure adherence to these rules:

1.  **Format Input Handling**:
    *   **HTML Input**: Show only HTML, CSS, and JS for the component. Do NOT convert to JSX or TSX.
    *   **JSX/TSX Input**: Show only the React (TSX/JSX) version. Do NOT convert to HTML/CSS/JS.
    *   **Separate Files**: If provided as HTML/CSS/JS, keep them organized as needed.

2.  **Syntax Validations**:
    *   Use `className` instead of `class`.
    *   Ensure all tags are self-closing where appropriate (e.g., `<img />`, `<input />`).
    *   Style attributes must be objects: `style={{ color: 'red' }}`.

3.  **Styling**:
    *   Use **Tailwind CSS** for all styling.
    *   Avoid raw CSS files unless absolutely necessary for complex animations.
    *   Use `clsx` and `tailwind-merge` for conditional class names.

4.  **Animations**:
    *   Preferred: **Framer Motion** (via `motion/react` import) or **GSAP** (`gsap`).
    *   **Import Rule**: Always use `import { ... } from "motion/react"` instead of `framer-motion`.
    *   Ensure animations are responsive and performant.

5.  **Dependencies**:
    *   **Strict Listing**: You MUST list every single package used in the component (e.g. `lucide-react`, `clsx`, `tailwind-merge`, `motion`) in the registry's `installation` field.

## 1. Create the Component

Create your component file in `src/registry/blocks/`.

- **Location**: `src/registry/blocks/<category>/<component-name>.tsx`
- **Naming**: `kebab-case` for files, `PascalCase` for components.
- **Complexity**: For multi-file components, use a folder: `src/registry/blocks/<category>/<component-name>/`.

```tsx
"use client";

import React from "react";
import { cn } from "@/lib/utils";
// ... imports

export const MyNewComponent = () => {
  return (
    <div className="relative w-full">
         {/* ... content */}
    </div>
  );
};
```

## 2. Managing Assets

1.  **Placement**: `public/assets/showcase/<category>/<component-name>/`.
2.  **Usage**: `/assets/showcase/...` (Absolute paths).
3.  **Stock Images**: Check `public/assets/stock/` before adding new generic images.

## 3. Registering the Component

This process involves three files.

### A. Export Component
In `src/registry/blocks/index.ts`:

```typescript
export { MyNewComponent } from "./<category>/<component-name>";
```

### B. Generate Code Strings
Run the generator script:
```bash
npm run generate-code
```
This populates `src/registry/code-strings.ts`.

### C. Update Registry Index
In `src/registry/index.ts`:

1.  **Import**:
    ```typescript
    import { MyNewComponent, myNewComponentCode } from "@/registry/blocks";
    ```

2.  **Add to `componentRegistry`**:
    ```typescript
    {
      category: "Category Name",
      items: [
        {
          name: "My New Component",
          id: "my-new-component", // Must match map keys below
          isFree: true,
          description: "Concise description affecting SEO.",
          url: "/components/<category>/my-new-component",
          installation: "npm install framer-motion lucide-react", // List ALL peer dependencies
          keywords: ["Tag1", "Tag2"], // For search
          previewBackground: "bg-black", // Optional: force background color
        },
      ],
    },
    ```

3.  **Update Maps**:
    ```typescript
    export const componentMap = {
      // ...
      "my-new-component": MyNewComponent,
    };

    export const codeMap = {
      // ...
      "my-new-component": myNewComponentCode,
    };
    ```

## 4. Verification

1.  Start dev server: `npm run dev`
2.  Visit: `http://localhost:3000/components/<category>/my-new-component`
3.  Check:
    *   Component renders correctly.
    *   Code tab shows correct source.
    *   Installation command lists all dependencies.
