import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const FONT = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "decentroneum - empowering the electroneum ecosystem",
  description:
    "Growing a decentralized ecosystem by leveraging the Electroneum Smart Chain.",
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
      <body>
        <Header />
        <main className="max-w-7xl flex flex-col mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
