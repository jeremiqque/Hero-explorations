import type { Metadata } from "next";
import { Inter_Tight, Google_Sans_Flex } from "next/font/google";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
});

const googleSansFlex = Google_Sans_Flex({
  subsets: ["latin"],
  variable: "--font-google-sans-flex",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: "The Integration Layer for Modern Teams",
  description:
    "Connect apps, sync data, and automate workflows with the platform trusted by thousands of businesses worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${googleSansFlex.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
