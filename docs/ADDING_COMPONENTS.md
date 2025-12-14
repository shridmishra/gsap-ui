# Adding New Components to Shrid UI

This guide explains how to create and register new components in the Shrid UI library.

## Directory Structure

```
src/
├── components/
│   └── showcase/           # All showcase components live here
│       ├── buttons/        # Button components
│       ├── cards/          # Card components
│       ├── hero/           # Hero section components
│       ├── landing/        # Landing page components
│       ├── ui/             # General UI components
│       └── index.ts        # Exports all components
├── registry/
│   ├── index.ts            # Component registry configuration
│   └── code-strings.ts     # Auto-generated (DO NOT EDIT)
└── scripts/
    └── generate-code-strings.ts  # Code generation script
```

## Step-by-Step Workflow

### 1. Create the Component File

Create your component in the appropriate category folder under `src/components/showcase/`.

**Example:** `src/components/showcase/buttons/my-button.tsx`

```tsx
"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface MyButtonProps {
  children: React.ReactNode;
  className?: string;
}

export const MyButton = ({ children, className }: MyButtonProps) => {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-lg bg-primary text-primary-foreground",
        className
      )}
    >
      {children}
    </button>
  );
};
```

### 2. Export from Showcase Index

Add your component export to `src/components/showcase/index.ts`:

```ts
// Add this line with other exports
export { MyButton } from "./buttons/my-button";
```

### 3. Register in Code Generation Script

Add your component to `scripts/generate-code-strings.ts`:

```ts
const COMPONENTS: ComponentConfig[] = [
  // ... existing components
  { id: "my-button", file: "src/components/showcase/buttons/my-button.tsx" },
];
```

### 4. Generate Code Strings

Run the code generation script to create the code string for the code panel:

```bash
npm run generate-code
```

This will update `src/registry/code-strings.ts` with your component's source code.

### 5. Export Code String

Update `src/components/showcase/index.ts` to export the code string:

```ts
export {
  // ... existing exports
  myButtonCode,
} from "@/registry/code-strings";
```

### 6. Register in Component Registry

Update `src/registry/index.ts` to add your component to the registry:

```ts
// Add import
import { MyButton, myButtonCode } from "@/components/showcase";

// Add to componentRegistry array
export const componentRegistry: ComponentCategory[] = [
  // ... existing categories
  {
    category: "Buttons",
    items: [
      {
        name: "My Button",
        id: "my-button",
        isFree: true,
        description: "A simple customizable button component.",
        installation: "npm install clsx tailwind-merge",
      },
    ],
  },
];

// Add to componentMap
export const componentMap: Record<string, React.ComponentType<any>> = {
  // ... existing components
  "my-button": MyButton,
};

// Add to codeMap
export const codeMap: Record<string, string> = {
  // ... existing components
  "my-button": myButtonCode,
};
```

## Complete Checklist

- [ ] Create component file in `src/components/showcase/<category>/`
- [ ] Export component from `src/components/showcase/index.ts`
- [ ] Add to `scripts/generate-code-strings.ts` COMPONENTS array
- [ ] Run `npm run generate-code`
- [ ] Export code string from `src/components/showcase/index.ts`
- [ ] Add to `componentRegistry` in `src/registry/index.ts`
- [ ] Add to `componentMap` in `src/registry/index.ts`
- [ ] Add to `codeMap` in `src/registry/index.ts`

## Creating a Demo Wrapper (Optional)

If your component needs props or context to display properly, create a demo wrapper:

```tsx
// In the same file as your component

export const MyButtonDemo = () => {
  return (
    <div className="flex gap-4">
      <MyButton>Click me</MyButton>
      <MyButton className="bg-secondary">Secondary</MyButton>
    </div>
  );
};
```

Then use `MyButtonDemo` in `componentMap` instead of `MyButton`.

## Tips

1. **Use `"use client"`** - Add this directive at the top if your component uses hooks or event handlers.

2. **Use `cn()` utility** - Import from `@/lib/utils` for merging Tailwind classes.

3. **TypeScript interfaces** - Always define prop interfaces for type safety.

4. **Tailwind CSS variables** - Use semantic colors like `bg-primary`, `text-foreground` for theme support.

5. **Keep components self-contained** - Minimize external dependencies for easier copying.

## Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Component file | `kebab-case.tsx` | `wave-button.tsx` |
| Component name | `PascalCase` | `WaveButton` |
| Component ID | `kebab-case` | `wave-button` |
| Code variable | `camelCase` + `Code` | `waveButtonCode` |

## Testing Your Component

1. Run `npm run dev`
2. Navigate to your component in the sidebar
3. Verify the preview displays correctly
4. Check that the code panel shows the raw source code
5. Test the copy functionality
