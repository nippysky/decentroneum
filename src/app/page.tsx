import About from "@/components/About";
import Community from "@/components/Community";
import Hero from "@/components/Hero";
import Insight from "@/components/Insight";
import Roadmap from "@/components/Roadmap";
import Tokenomics from "@/components/Tokenomics";

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
