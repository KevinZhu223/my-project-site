import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import AnimatedBackground from "../components/AnimatedBackground";
import ScrollAnimations from "../components/ScrollAnimations";
import InteractiveElements from "../components/InteractiveElements";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kevin Zhu - Portfolio",
  description: "Software Engineer & Data Scientist Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}>
        <AnimatedBackground />
        <div className="relative z-10">
          {children}
        </div>
        <ScrollAnimations />
        <InteractiveElements />
        <Analytics />
      </body>
    </html>
  );
}
