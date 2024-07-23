import React from "react";
import SmallHeading from "./shared/SmallHeading";
import BigHeading from "./shared/BigHeading";
import Image from "next/image";

import DecentIcon from "../../public/assets/DECENT3D.svg";
import DecentFlame from "../../public/assets/DECENTFLAME.svg";
import DecentBrand from "../../public/assets//BRANDTAG.svg";

export default function Insight() {
  return (
    <section className="flex flex-col lg:px-32 md:px-10 px-5 py-20">
      <div className="text-center lg:px-40 px-5">
        <SmallHeading title={"INSIGHT"} textColor="text-decentTextAlt" />
        <BigHeading
          fontSize={"lg:text-[2.5rem]"}
          title={"Few things to keep in mind"}
        />
      </div>

      {/* Main Insights */}
      <section className="w-full mt-10 py-5 lg:space-y-[7rem] space-y-[3rem]">
        {/* THE NAME GAME */}
        <div className="w-full flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <h5 className="big-text font-black tracking-wide leading-normal bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-500 my-2 text-[1.2rem]">
              THE BRAND NAME
            </h5>
            <p>
              The name <span className=" font-bold">Decentroneum</span> combines
              two fundamental concepts: Decentralization and Electroneum.
              Decentralization is a core principle in cryptocurrency, and our
              name reflects our unwavering commitment to both the principles of
              decentralization and the Electroneum ecosystem.
            </p>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 hidden md:flex">
            <Image
              src={DecentIcon}
              alt={"Decent 3D"}
              width={300}
              height={300}
              priority
              unoptimized
              className=" animate-pulse"
            />
          </div>
        </div>

        {/* THE DECENT TREND*/}
        <div className="w-full flex flex-col md:flex-row items-center gap-10">
          {/* Image */}
          <div className="w-full md:w-1/2 hidden md:flex">
            <Image
              src={DecentFlame}
              alt={"Decent Flame"}
              width={200}
              height={150}
              priority
              unoptimized
              className=" animate-pulse"
            />
          </div>

          <div className="w-full md:w-1/2 ">
            <h5 className="big-text font-black tracking-wide leading-normal bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-500 my-2 text-[1.2rem]">
              THE DECENT TREND
            </h5>
            <p>
              Being "decent" refers to actively participating in and supporting
              the Decentroneum ecosystem. We've redefined "decent" to mean
              embracing and promoting decentralization. We encourage you to be
              "decent" by getting involved and contributing to our community.
            </p>
          </div>
        </div>

        {/* THE BRAND */}
        <div className="w-full flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <h5 className="big-text font-black tracking-wide leading-normal bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-500 my-2 text-[1.2rem]">
              THE BRAND INTEGRITY
            </h5>
            <p>
              As a "decent" platform, all 210,000,000 DECENT tokens will
              initially be available for trade on a decentralized exchange.
            </p>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 hidden md:flex">
            <Image
              src={DecentIcon}
              alt={"Decent 3D"}
              width={300}
              height={300}
              priority
              unoptimized
              className=" animate-pulse"
            />
          </div>
        </div>

        {/* THE INTEGRITY*/}
        <div className="w-full flex flex-col md:flex-row items-center gap-10">
          {/* Image */}
          <div className="w-full md:w-1/2 hidden md:flex">
            <Image
              src={DecentBrand}
              alt={"Decent Brand"}
              width={200}
              height={150}
              priority
              unoptimized
              className=" animate-pulse"
            />
          </div>

          <div className="w-full md:w-1/2 ">
            <h5 className="big-text font-black tracking-wide leading-normal bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-500 my-2 text-[1.2rem]">
              THE BRAND LOYALTY
            </h5>
            <p>
              In the past, present, and future, Decentroneum will always adhere
              to our brand guidelines. Our colors and branding are consistently
              applied in everything we do. If you don't see an authentic
              representation of the Decent brand, then it is not Decentroneum.
              It is not being "decent."
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
