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
    title: "Platform Launch & Vision",
    description:
      "Establish a social media presence and present the DECENT paper, outlining the future vision of Decentroneum.",
    icon: One,
  },
  {
    step: 2,
    title: "DECENT Token Deployment",
    description:
      "Create and deploy the DECENT token to the blockchain according to defined specifications. This involves writing a secure smart contract that meets industry standards.",
    icon: Two,
  },
  {
    step: 3,
    title: "DECENT Token Offering",
    description:
      "Conduct a DECENT token offering to raise funds from early investors. This includes marketing and managing the sale process.",
    icon: Three,
  },
  {
    step: 4,
    title: "Airdrop for Early Investors",
    description:
      "Distribute DECENT tokens via airdrop to participants in the DECENT token offering. The amount received will be proportional to their allocation in the offering.",
    icon: Four,
  },
  {
    step: 5,
    title: "Public Airdrop",
    description:
      "Conduct a public airdrop as a marketing strategy to attract new community members.",
    icon: Five,
  },
  {
    step: 6,
    title: "Token Release and Distribution",
    description:
      "Officially release and distribute DECENT tokens to DECENT token offering participants, airdrop recipients, and other stakeholders. This ensures everyone with a stake in Decentroneum receives their tokens.",
    icon: Six,
  },
  {
    step: 7,
    title: "DECENT Exchange Launch",
    description:
      "Launch the DECENT exchange, a decentralized exchange powered by the Electroneum Smart Chain (ETN-SC) tokens. The DECENT token will also begin trading here.",
    icon: Seven,
  },
  {
    step: 8,
    title: "Infinity Draw DApp Launch",
    description:
      "Launch a smart contract for a lucky draw DApp (decentralized application) to engage the community and incentivize participation. This aims to attract more users and generate excitement around Decentroneum and Electroneum.",
    icon: Eight,
  },
  {
    step: 9,
    title: "DECENT Wallet Launch",
    description:
      "Launch the DECENT wallet, initially powered by the Electroneum Smart Chain and supporting ETN-SC tokens only.",
    icon: Nine,
  },
  {
    step: 10,
    title: "Audit & Ongoing Development",
    description:
      "Conduct a comprehensive audit of Decentroneum. This stage also involves continuous development, addressing any identified issues, and incorporating updates and new features.",
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
