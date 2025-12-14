import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/context/provider";

export const metadata: Metadata = {
  metadataBase: new URL("https://shrid.in"),
  title: {
    default: "Shrid UI | ui.shrid.in",
    template: "%s | shrid.in",
  },
  description:
    "Beautiful, animated UI components for your next project. Built with React, Tailwind CSS, and Framer Motion.",
  keywords: [
    "UI components",
    "React",
    "Tailwind CSS",
    "Framer Motion",
    "Web Design",
    "Frontend",
    "Animation",
    "Design System",
  ],
  authors: [{ name: "Shrid", url: "https://shrid.in" }],
  creator: "Shrid",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shrid.in",
    title: "UI Components | shrid.in",
    description:
      "Beautiful, animated UI components for your next project. Built with React, Tailwind CSS, and Framer Motion.",
    siteName: "shrid.in",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "UI Components | shrid.in",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UI Components | shrid.in",
    description:
      "Beautiful, animated UI components for your next project. Built with React, Tailwind CSS, and Framer Motion.",
    images: ["/logo.png"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased" suppressHydrationWarning>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
