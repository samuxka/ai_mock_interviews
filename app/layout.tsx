import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import {Toaster} from "@/components/ui/sonner";

const jetBrainsMono = JetBrains_Mono({
    subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Interview Platform",
  description: "An AI Interview App Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${jetBrainsMono.className} antialiased pattern`}
      >
        {children}

      <Toaster />
      </body>
    </html>
  );
}
