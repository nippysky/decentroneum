import React from "react";
import SmallHeading from "./shared/SmallHeading";
import BigHeading from "./shared/BigHeading";

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
      <section className="w-full mt-10 py-5">
        {/* THE NAME GAME */}
        <div className="w-full flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <h5 className="big-text font-black tracking-wide leading-normal bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-500 my-2 text-[1.2rem]">
              THE NAME GAME
            </h5>
            <p>
              The name <span className=" font-bold">decentroneum</span> combines
              two key words: Decentralization and Electroneum. Decentralization
              is a core principle in cryptocurrency, and our name reflects our
              commitment to the Electroneum ecosystem.
            </p>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 hidden md:flex"></div>
        </div>

        {/* THE DECENT TREND*/}
        <div className="w-full flex flex-col md:flex-row items-center gap-10">
          {/* Image */}
          <div className="w-full md:w-1/2 hidden md:flex"></div>

          <div className="w-full md:w-1/2 mt-10">
            <h5 className="big-text font-black tracking-wide leading-normal bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-500 my-2 text-[1.2rem]">
              THE DECENT TREND
            </h5>
            <p>
              Being DECENT refers to actively participating in and supporting
              the decentroneum ecosystem. In short, if you're encouraged to be
              DECENT, it means to get involved.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
