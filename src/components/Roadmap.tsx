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
    title: "Decent Wallet Extension",
    description:
      "Develop and release the Decent Wallet extension to establish a user base and introduce the platform's vision.",
    icon: One,
  },
  {
    step: 2,
    title: "Decent Wallet D-App",
    description:
      "Launch the Decent Wallet D-App, providing users with a secure and convenient way to manage their digital assets.",
    icon: Two,
  },
  {
    step: 3,
    title: "Decent Mobile Wallet App",
    description:
      "Create and deploy the Decent Mobile Wallet App, offering a mobile solution for users to access their assets on the go.",
    icon: Three,
  },
  {
    step: 4,
    title: "Decent News D-App",
    description:
      "Introduce the Decent News D-App to keep the community informed with the latest updates and developments.",
    icon: Four,
  },
  {
    step: 5,
    title: "Decent Token Deployment",
    description:
      "Deploy the DECENT token to the blockchain, ensuring a secure and reliable token launch.",
    icon: Five,
  },
  {
    step: 6,
    title: "Decent Token Offering",
    description:
      "Conduct the DECENT token offering to raise funds and engage early investors in the platform.",
    icon: Six,
  },
  {
    step: 7,
    title: "Airdrop for Early Community",
    description:
      "Distribute DECENT tokens to early community members as part of an airdrop initiative to grow the user base.",
    icon: Seven,
  },
  {
    step: 8,
    title: "Decent Exchange",
    description:
      "Launch the Decent Exchange, a decentralized platform for trading ETN-SC Tokens.",
    icon: Eight,
  },
  {
    step: 9,
    title: "The ETN-SC Tokens Data Platform",
    description:
      "Introduce the ETN-SC Tokens Data Platform to provide comprehensive data and analytics for ETN-SC tokens.",
    icon: Nine,
  },
  {
    step: 10,
    title: "Launch of Roadmap V2",
    description:
      "Release the second version of the roadmap, outlining future plans and ongoing development efforts.",
    icon: Ten,
  },
];

export default function Roadmap() {
  return (
    <section className="flex flex-col lg:px-32 md:px-10 px-5 py-20">
      <div className="text-center lg:px-40 px-5">
        <SmallHeading title={"THE ROADMAP V1"} textColor="text-decentTextAlt" />
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
