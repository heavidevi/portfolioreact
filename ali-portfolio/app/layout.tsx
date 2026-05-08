import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Ali Adeel — Senior Creative Developer",
  description:
    "Full-stack engineer crafting immersive digital experiences. Next.js, React, AI/ML, Web3.",
  keywords: [
    "Muhammad Ali Adeel",
    "Senior Developer",
    "Next.js",
    "React",
    "AI",
    "Web3"
    
  ],
  authors: [{ name: "Muhammad Ali Adeel" }],
  openGraph: {
    title: "Muhammad Ali Adeel — Senior Creative Developer",
    description: "Full-stack engineer. AI/ML. Web3. Immersive experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Bebas+Neue&family=JetBrains+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
