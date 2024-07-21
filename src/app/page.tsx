import About from "@/components/About";
import Community from "@/components/Community";
import Hero from "@/components/Hero";
import Insight from "@/components/Insight";
import Roadmap from "@/components/Roadmap";
import Tokenomics from "@/components/Tokenomics";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Decentroneum - Growing a decentralized ecosystem.",
  description:
    "Decentroneum is committed to total decentralization, building and supporting fully decentralized products. Decentroneum empowers users with transparency, security, and complete control over their digital interactions, making Web3 easy and fun.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Insight />
      <Tokenomics />
      <Roadmap />
      <Community />
    </>
  );
}
