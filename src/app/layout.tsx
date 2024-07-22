import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollUp from "@/components/shared/ScrollUp";

const FONT = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Decentroneum - Growing a decentralized ecosystem.",
  description:
    "Decentroneum is committed to total decentralization, building and supporting fully decentralized products. Decentroneum empowers users with transparency, security, and complete control over their digital interactions, making Web3 easy and fun.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={FONT.className}>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow max-w-7xl mx-auto">{children}</main>
        <Footer />
        <ScrollUp />
      </body>
    </html>
  );
}
