import React from "react";
import SmallHeading from "./shared/SmallHeading";
import BigHeading from "./shared/BigHeading";
import Link from "next/link";
import { TiDocumentText } from "react-icons/ti";
import DecentCard from "./shared/DecentCard";

const tokenAllocation = [
  {
    title: "Founders",
    percent: "10%",
    amount: "2, 100, 000, 000 DECENT",
  },
  {
    title: "Airdrop",
    percent: "5%",
    amount: "1, 050, 000, 000 DECENT",
  },
  {
    title: "Marketing",
    percent: "10%",
    amount: "2, 100, 000, 000 DECENT",
  },
  {
    title: "Treasury",
    percent: "10%",
    amount: "2, 100, 000, 000 DECENT",
  },
  {
    title: "ICO",
    percent: "10%",
    amount: "2, 100, 000, 000 DECENT",
  },
  {
    title: "DEX Liquidity",
    percent: "55%",
    amount: "11, 550, 000, 000 DECENT",
  },
];

export default function Tokenomics() {
  return (
    <section className="flex flex-col lg:px-32 md:px-10 px-5 py-20 ">
      <div className="text-center lg:px-40 px-5">
        <SmallHeading title={"OUR TOKENOMICS"} textColor="text-decentTextAlt" />
        <BigHeading
          fontSize={"lg:text-[2.5rem]"}
          title={"Fueling the Decentralized Ecosystem"}
        />
      </div>

      {/* TOKENOMICS */}
      <section className="w-full flex flex-col lg:flex-row gap-20 mt-10 py-10">
        {/* desc */}
        <div className="w-full lg:w-1/2 text-white">
          <h2 className="text-[1.85rem] font-black">21,000,000,000</h2>
          <p className="text-[0.85rem] tracking-wider font-medium">
            TOTAL SUPPLY
          </p>

          <p className="mt-7">
            The DECENT Token powers our ecosystem. It serves as the essential
            currency for all transactions within our platform, creating value
            and utility for everyone involved.
          </p>

          <div className="w-full">
            <Link
              href={"/"}
              className=" flex items-center gap-3 text-decentPrimary hover:text-white transition duration-300 ease-in-out mt-7 uppercase font-medium tracking-wider"
            >
              <TiDocumentText size={25} />
              Read more in our decent paper
            </Link>
          </div>
        </div>

        {/* allocation */}
        <div className="w-full lg:w-1/2 grid grid-col-1 md:grid-cols-2 gap-10">
          {tokenAllocation.map((item, index) => (
            <DecentCard
              key={index}
              className="border border-decentCard hover:border-decentPrimary transition duration-300 ease-in-out"
            >
              <div className=" space-y-2">
                <SmallHeading
                  title={item.title}
                  textColor={"text-decentPrimary"}
                />
                <p className=" font-semibold">{item.percent}</p>
                <p className="text-[0.85rem] text-decentTextAlt font-medium">
                  {item.amount}
                </p>
              </div>
            </DecentCard>
          ))}
        </div>
      </section>
    </section>
  );
}
