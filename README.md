This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## shrid-ui

A beautiful, animated UI component library showcasing various React components with smooth animations built with Framer Motion and Tailwind CSS.

## Project Structure

The app has been restructured for simplicity and better understanding:

### Main Components

- **`src/app/page.tsx`** - Main page component that manages state and layout
  - Manages sidebar visibility (always open on desktop, toggle on mobile)
  - Handles active component selection
  - Renders Sidebar and PreviewArea components

- **`src/app/_components/sidebar.tsx`** - Navigation sidebar
  - Contains home link and theme toggle in the header
  - Displays component categories and items
  - Always visible on desktop (lg+)
  - Can be toggled on mobile with close button inside
  
- **`src/app/_components/preview-area.tsx`** - Component preview and code display
  - Shows the selected component with live preview
  - Displays source code in a minimal, clean code block
  - Includes mobile menu button to open sidebar
  - Fullscreen mode for component preview
  - Lists component dependencies

- **`src/app/_registry/`** - Component registry
  - Contains all UI components organized by category
  - Exports component map and code snippets

### Key Features

- **Responsive Design**: Sidebar always open on desktop, collapsible on mobile
- **Theme Switching**: Integrated theme toggle in sidebar with smooth transitions
- **Code Display**: Clean, minimal code blocks with copy functionality
- **Navigation**: Easy component browsing with visual active indicators

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
