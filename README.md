# GSAP UI

<div align="center">

**A collection of beautiful, animated components built with GSAP, Motion, and Radix UI.**
<br />
Tailored for modern **Next.js** applications and compatible with **shadcn/ui**.

[Explore Components](https://gsap-ui.shrid.in) · [Report Bug](https://github.com/shridmishra/gsap-ui/issues) · [Request Feature](https://github.com/shridmishra/gsap-ui/issues)

</div>

---

## Introduction

**GSAP UI** bridges the gap between high-performance animations and accessible, headless primitives. It provides a set of meaningful, copy-paste components that you can drop directly into your project.

Unlike traditional component libraries that lock you into an API, GSAP UI gives you the code. You own it, you customize it.

## Features

- **🎨 Beautiful Mutations**: Powered by [GSAP](https://gsap.com) for fluid, industry-standard animations.
- **♿ Accessible Primitives**: Built on [Radix UI](https://www.radix-ui.com) to ensure full accessibility and keyboard navigation.
- **🧱 Shadcn Compatible**: Designed to integrate seamlessly with standard shadcn/ui setups.
- **🛠️ Zero Lock-in**: Copy the code, own the component. No heavy monolith dependency.
- **⚡ Modern Stack**: Fully typed **TypeScript** components for **Next.js 15+**.

## Tech Stack

We stand on the shoulders of giants:

| Technology | Purpose |
|------------|---------|
| [Next.js 15](https://nextjs.org) | The React Framework for the Web |
| [Tailwind CSS](https://tailwindcss.com) | Utility-first CSS framework |
| [GSAP](https://gsap.com) | Professional-grade animation library |
| [Radix UI](https://www.radix-ui.com) | Unstyled, accessible components |
| [Lucide](https://lucide.dev) | Beautiful & consistent icons |

## Usage

This library is designed to work with the `shadcn` CLI. You can add components directly to your project using the remote registry.

### Installation

Ensure you have the necessary dependencies in your project:

```bash
npm install gsap @gsap/react motion clsx tailwind-merge lucide-react
```

### Adding Components

To add a component to your project, run the following command using the component's ID:

```bash
npx shadcn@latest add https://gsap-ui.shrid.in/registry/[component-name].json
```

For example, to add the `magnetic-button`:

```bash
npx shadcn@latest add https://gsap-ui.shrid.in/registry/magnetic-button.json
```

The component will be placed in your `components/ui` directory, ready to use and customize.

## Development

If you want to contribute or explore the components locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/shridmishra/gsap-ui.git
   cd gsap-ui
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the documentation site.

## Philosophy

We believe animations should be meaningful, performant, and delightful. By combining the declarative power of React with the imperative precision of GSAP, we create interfaces that feel alive without sacrificing accessibility or control.
