import type { Metadata, Viewport } from "next";
import "./globals.css";

import MeshBackground from "@/components/common/MeshBackground";
import SmoothScroll from "@/components/common/SmoothScroll";
import CustomCursor from "@/components/common/CustomCursor";
import MouseSpotlight from "@/components/common/MouseSpotlight";
import ScrollProgress from "@/components/common/ScrollProgress";

import { nunito, kalam, jetbrainsMono, display, creative, caveat } from "@/lib/fonts";

export const viewport: Viewport = {
  themeColor: "#FFF8F6",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Pooja Daki — Full-Stack & Frontend Developer",
  description:
    "Portfolio of Pooja Daki — Full Stack & Frontend Developer showcasing full-stack applications, responsive UI, design-to-code workflows, and modern web development.",
  keywords: [
    "Pooja Daki",
    "Frontend Developer",
    "Full-Stack Developer",
    "React 19",
    "Next.js 15",
    "TypeScript",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${kalam.variable} ${display.variable} ${creative.variable} ${caveat.variable} ${jetbrainsMono.variable} ${nunito.className}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@600;700&family=Kalam:wght@400;700&family=Nunito:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400&family=Outfit:wght@500;600;700;800;900&family=Plus+Jakarta+Sans:wght@600;700;800;900&family=Syne:wght@700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#FFF8F6] text-[#2E2234] antialiased selection:bg-[#FF5E86]/20 selection:text-[#FF5E86] min-h-screen">
        <SmoothScroll>
          <ScrollProgress />
          <CustomCursor />
          <MouseSpotlight />
          <MeshBackground />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}