import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import "./globals.css";
import { Providers } from "@/context/provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://gsap-ui.shrid.in"),
  title: {
    default: "gsap-ui - Animated UI Components For GSAP",
    template: "%s | gsap-ui.shrid.in",
  },
  description:
    "A collection of beautiful, animated UI components for your next project. Built with GSAP, Framer Motion, and Tailwind CSS. Open source and ready to use.",
  keywords: [
    "UI components",
    "React",
    "Tailwind CSS",
    "Framer Motion",
    "GSAP",
    "Web Design",
    "Frontend",
    "Animation",
    "Design System",
    "Next.js",
    "React Components",
    "Copy Paste UI",
  ],
  authors: [{ name: "Shrid", url: "https://gsap-ui.shrid.in" }],
  creator: "Shrid",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gsap-ui.shrid.in",
    title: "UI Components | gsap-ui.shrid.in",
    description:
      "A collection of beautiful, animated UI components for your next project. Built with GSAP, Framer Motion, and Tailwind CSS. Open source and ready to use.",
    siteName: "gsap-ui.shrid.in",
    images: [
      {
        url: "/assets/brand/logo.png",
        width: 1200,
        height: 630,
        alt: "UI Components | gsap-ui.shrid.in",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UI Components | gsap-ui.shrid.in",
    description:
      "A collection of beautiful, animated UI components for your next project. Built with GSAP, Framer Motion, and Tailwind CSS. Open source and ready to use.",
    images: ["/assets/brand/logo.png"],
    creator: "@shridmishra",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon/favicon.ico",
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        url: "/favicon/android-chrome-192x192.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        url: "/favicon/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <Providers>
          <JsonLd
            data={{
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "GSAP UI",
              "url": "https://gsap-ui.shrid.in",
              "logo": "https://gsap-ui.shrid.in/assets/brand/logo.png",
              "sameAs": [
                "https://twitter.com/shridmishra",
                "https://github.com/shridmishra/gsap-ui"
              ]
            }}
          />
          {children}
        </Providers>
      </body>
    </html>
  );
}
