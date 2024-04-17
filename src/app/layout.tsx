import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PdfGPT",
  description: "Discute avec ton pdf et demande lui tout ce que tu veux",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="light">
      <body className={cn('min-h-screen font-sans antialiased', inter.className)}>{children}</body>
    </html>
  );
}
