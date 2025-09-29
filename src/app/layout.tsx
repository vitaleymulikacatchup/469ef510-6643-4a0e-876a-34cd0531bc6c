import type { Metadata } from "next";
import { Inter_Tight, Playfair_Display } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "BrainRot Memecoin — chaotic memes, clear steps to buy",
  description: "BrainRot Memecoin blends meme energy with a simple buy path, transparent tokenomics, and a bold brain-bending vibe.",
  keywords: ["memecoin","brainrot","cryptocurrency","meme token","buy memecoin","tokenomics","roadmap","crypto landing","cryptocurrency"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BrainRot Memecoin — chaotic memes, clear steps to buy",
    description: "BrainRot Memecoin blends meme energy with a simple buy path, transparent tokenomics, and a bold brain-bending vibe.",
    type: "website",
    url: "/",
    siteName: "BrainRot Coin",
    images: [{ url: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/draw-a-cartoon-space-landscape-in-16-9-a-1759140960252-cb332a42.jpg", width: 1200, height: 630, alt: "BrainRot Memecoin vibrant illustration" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "BrainRot Memecoin — chaotic memes, clear steps to buy",
    description: "BrainRot Memecoin blends meme energy with a simple buy path, transparent tokenomics, and a bold brain-bending vibe.",
    images: ["https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/tmp/draw-a-cartoon-space-landscape-in-16-9-a-1759140960252-cb332a42.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} ${playfairDisplay.variable} antialiased`}>{children}</body>
    </html>
  );
}