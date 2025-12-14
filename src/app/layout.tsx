import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/context/provider";

export const metadata: Metadata = {
  title: "UI Components | shrid.in",
  description: "Beautiful, animated UI components for your next project",
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
