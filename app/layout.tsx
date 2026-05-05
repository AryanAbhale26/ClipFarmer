import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { GlobalCursor } from "@/components/ui/global-cursor";
import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";
import { ClerkProvider } from "@clerk/nextjs";
import { SyncUser } from "@/components/sync-user";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });

export const metadata: Metadata = {
  title: "ClipFarmer – AI Long to Short Video Generator",
  description:
    "Transform long-form videos into viral short clips using AI. Automatic transcription, highlight detection, captions, and social scheduling.",
  keywords: ["AI video", "short video", "video generator", "clip maker", "social media"],
  openGraph: {
    title: "ClipFarmer – AI Long to Short Video Generator",
    description: "Turn long videos into viral short clips with AI. Powered by Gemini, Deepgram & Remotion.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider afterSignOutUrl="/">
      <html
        lang="en"
        className={cn("dark", inter.variable, jetbrainsMono.variable)}
        suppressHydrationWarning
      >
        <body className="min-h-screen bg-background text-foreground antialiased selection:bg-violet-500/30">
          <GlobalCursor />
          <StarsBackground starColor="#ffffff">
            <SyncUser />
            {children}
          </StarsBackground>
        </body>
      </html>
    </ClerkProvider>
  );
}
