"use client";

import React from "react";
import SmallHeading from "./shared/SmallHeading";
import BigHeading from "./shared/BigHeading";
import Image from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import One from "../../public/assets/10.svg";
import Two from "../../public/assets/20.svg";
import Three from "../../public/assets/30.svg";
import Four from "../../public/assets/40.svg";
import Five from "../../public/assets/50.svg";
import Six from "../../public/assets/60.svg";
import Seven from "../../public/assets/70.svg";
import Eight from "../../public/assets/80.svg";
import Nine from "../../public/assets/90.svg";
import Ten from "../../public/assets/100.svg";

import Road from "../../public/assets/ROAD.svg";

const roadmap = [
  {
    step: 1,
    title: "Platform Genesis",
    description:
      "Social media setup for the community and decent-paper presentation to see the vision for the future.",
    icon: One,
  },
  {
    step: 2,
    title: "Growing Together",
    description:
      "The launch our telegram mini app and airdrops to spread the word and reward early supporters.",
    icon: Two,
  },
  {
    step: 3,
    title: "Introducing Infinity Draw d-APP",
    description:
      "Get a feel for of an introductory decentralized application on the Electroneum Smart Chain.",
    icon: Three,
  },
  {
    step: 4,
    title: "Unveiling the decentralized NFT Platform",
    description:
      "Prepare to be amazed by the design and features of our upcoming NFT Marketplace, Panthart. Powered by the Eletroneum Smart Chain.",
    icon: Four,
  },

  {
    step: 5,
    title: "DECENT token launch",
    description:
      "The DECENT Token will be deployed to the blockchain and ready for adoption in the ecosytem",
    icon: Five,
  },

  {
    step: 6,
    title: "ITO Launch",
    description:
      "Participate in the DECENT Initial Token Offering to fuel the future decentroneum.",
    icon: Six,
  },

  {
    step: 7,
    title: "Claim Your Tokens",
    description:
      "After the ICO, we'll distribute airdrop tokens, ICO tokens, and any other planned allocations based on lock periods.",
    icon: Seven,
  },
  {
    step: 8,
    title: "Release another decentralized application",
    description:
      "Our second dApp will be a Platform ICO SaaS, allowing creators to launch their own ICOs on the Electroneum Smart Chain",
    icon: Eight,
  },

  {
    step: 9,
    title: "DECENT trading take-off",
    description:
      "We'll list our token on a Decentralized Exchange (DEX) for easy trading.",
    icon: Nine,
  },
  {
    step: 10,
    title: "Continuity in development and innovation",
    description:
      "Platform and smart contract audit, and then continous innovation in the decent space.",
    icon: Ten,
  },
];

export default function Roadmap() {
  return (
    <section className="flex flex-col lg:px-32 md:px-10 px-5 py-20">
      <div className="text-center lg:px-40 px-5">
        <SmallHeading title={"THE PLAN"} textColor="text-decentTextAlt" />
        <BigHeading fontSize={"lg:text-[2.5rem]"} title={"Roadmap"} />
      </div>

      {/* Render Roadmap */}
      <section className="w-full flex flex-col lg:flex-row justify-between items-start mt-10 lg:mt-20">
        {/* map list */}
        <div className="lg:w-[60%] w-full space-y-5">
          {roadmap.map((map) => (
            <div key={map.step} className="flex gap-10 items-center">
              <Image
                src={map.icon}
                alt={map.title}
                width={50}
                height={50}
                priority
              />

              <HoverCard>
                <HoverCardTrigger className=" cursor-pointer hover:underline">
                  <p className="text-passengerWhite tracking-wider font-medium text-[0.85rem] md:text-[1rem] uppercase">
                    {map.title}
                  </p>
                </HoverCardTrigger>
                <HoverCardContent className=" bg-decentCard text-white text-[0.85rem] w-[350px] border border-decentPrimary rounded-none">
                  <p>{map.description}</p>
                </HoverCardContent>
              </HoverCard>
            </div>
          ))}
        </div>

        {/* map image */}
        <div className="lg:w-[40%] w-full hidden lg:flex lg:justify-end justify-center">
          <Image
            src={Road}
            alt={"Road SVG"}
            width={200}
            height={200}
            priority
            unoptimized
          />
        </div>
      </section>
    </section>
  );
}
