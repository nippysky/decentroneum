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
    title: "The DECENT token deployment to the blockchain",
    description:
      "the DECENT token is created according to the defined specifications and deployed to the blockchain. This involves writing the smart contract and ensuring it meets the required standards and security protocols.",
    icon: Two,
  },
  {
    step: 3,
    title: "Airdrops & The Whatsapp Channel",
    description:
      "Decentronuem willl be breaking new grounds by officially hosting a whatsapp channel for community members. There will be airdrops accross our various social mediums in various forms.",
    icon: Three,
  },
  {
    step: 4,
    title: "The DECENT Token Offer",
    description:
      " The DECENT token offer is conducted to raise funds for the project. This involves marketing, and managing the sale process.",
    icon: Four,
  },

  {
    step: 5,
    title: "The DECENT Wallet",
    description:
      "Revealing and laucnching the decent wallet. The DECENT wallet will be powered by the electroneum smart chain by default and only for ETN-SC tokens.",
    icon: Five,
  },

  {
    step: 6,
    title: "Token Release and Distribution",
    description:
      "DECENT tokens are officially released and distributed to the decent offer participants, airdrop recipients, and other stakeholders. This step ensures that everyone who has a stake in decentroneum receives their tokens.",
    icon: Six,
  },

  {
    step: 7,
    title: "The DECENT Exchange",
    description:
      "This is the reveal and launch of the DECENT exchange (Decentralized exchange). Powered by electroenum smart chain for ETN-SC tokens only. At thsi stage the dECENT token will start trading live too.",
    icon: Seven,
  },
  {
    step: 8,
    title: "The Infinity Draw D-APP",
    description:
      "A smart contract for a lucky draw is launched to engage the community and incentivize participation. This step aims to attract more users and create excitement around decentronuem and electroneum",
    icon: Eight,
  },

  {
    step: 9,
    title: "Panthart: The NFT Platform",
    description:
      "The reveal and launch of the decent NFT platform. Panthart is a completety powered by the electronuem smart chain.",
    icon: Nine,
  },
  {
    step: 10,
    title: "Audit & Platform Project Continuuity",
    description:
      "A comprehensive audit of decentronuem. This step also involves planning for the future, including updates, new features, and continuous development.",
    icon: Ten,
  },
];

export default function Roadmap() {
  return (
    <section className="flex flex-col lg:px-32 md:px-10 px-5 py-20">
      <div className="text-center lg:px-40 px-5">
        <SmallHeading
          title={"THE INITIAL ROADMAP"}
          textColor="text-decentTextAlt"
        />
        <BigHeading
          fontSize={"lg:text-[2.5rem]"}
          title={"Here is how we hit the ground running"}
        />
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
