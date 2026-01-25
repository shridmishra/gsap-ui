# Adding a New Showcase Component

This guide outlines the process for adding a new component to the `shrid-ui` showcase.

## 1. Create the Component

Create your component file in the appropriate subdirectory within `src/components/showcase/`.

- **Location**: `src/components/showcase/<category>/<component-name>.tsx`
- **Naming Convention**: Use kebab-case for filenames (e.g., `my-new-component.tsx`) and PascalCase for component names (e.g., `MyNewComponent`).
- **Multi-file Components**: If your component has more than one file (e.g., `.tsx` + `.css`), place them in a dedicated folder: `src/components/showcase/<category>/<component-name>/<component-name>.tsx`.

Example structure:
```tsx
"use client";

import React from "react";
// imports...

export const MyNewComponent = () => {
  return (
    <div className="relative w-full h-full">
      {/* Component content */}
    </div>
  );
};
```

## 2. Adding Assets (Optional)

If your component requires static assets (images, videos, etc.):

1. Place your assets in `public/assets/showcase/<category>/<component-name>/`.
2. Reference them in your component using absolute paths starting with `/assets/...`.

Example:
```tsx
const heroImage = "/assets/showcase/hero/my-new-component/hero-bg.png";

// inside component
<img src={heroImage} alt="Hero Background" />
```

**Rule**: Do not use the same stock image multiple times within the same component. Ensure variety in your visual data.

**Rule**: If a component uses external image links (URLs), replace them with images from the `public/assets/stock/` folder. Use absolute paths like `/assets/stock/<image-name>.png`.

Ensure you verify the path matches exactly to avoid 404 errors.

## 2. Export the Component

Add an export statement to `src/components/showcase/index.ts`.

```typescript
// src/components/showcase/index.ts
export { MyNewComponent } from "./<category>/<component-name>";
```

## 3. Generate Code Strings

The showcase displays the source code of components. You need to generate the code string for your new component.

Run the following command in your terminal:

```bash
npm run generate-code
```

This script will update `src/registry/code-strings.ts` with the source code of your new component.

## 4. Register the Component

You need to register your component in `src/registry/index.ts` to make it appear in the showcase and link it to its code string.

### A. Import Component and Code String

Update the import in `src/registry/index.ts` to include your component and its generated code string variable. Note: The code string variable is usually named `<componentName>Code` (lowerCamelCase).

```typescript
// src/registry/index.ts
import {
  // ... existing imports
  MyNewComponent, myNewComponentCode, // Add these
} from "@/components/showcase";
```

### B. Add to `componentRegistry`

Add an entry to the `componentRegistry` array in `src/registry/index.ts` under the appropriate category.

```typescript
{
  category: "Your Category",
  items: [
    // ... existing items
    {
      name: "My New Component",
      id: "my-new-component",
      isFree: true,
      description: "A brief description of your component.",
      url: "/<category>/my-new-component",
      installation: "npm install ...", // List dependencies here
    },
  ],
},
```

### C. Update Maps

Update both `componentMap` and `codeMap` in `src/registry/index.ts`.

```typescript
export const componentMap: Record<string, React.ComponentType<any>> = {
  // ... existing entries
  "my-new-component": MyNewComponent,
};

export const codeMap: Record<string, string> = {
  // ... existing entries
  "my-new-component": myNewComponentCode,
};
```

## 5. Verify

Start the development server:

```bash
npm run dev
```

Navigate to your component's URL (e.g., `http://localhost:3000/showcase/<category>/my-new-component`) to verify it renders correctly and that the code tab displays the source code.
