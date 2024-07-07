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
      <body>
        <Header />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
