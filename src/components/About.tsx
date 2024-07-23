import React from "react";
import SmallHeading from "./shared/SmallHeading";
import BigHeading from "./shared/BigHeading";
import DecentCard from "./shared/DecentCard";

export default function About() {
  return (
    <section className="flex flex-col lg:px-32 md:px-10 px-5 py-20">
      <div className="text-center lg:px-40 px-5">
        <SmallHeading
          title={"WE DON’T DO CENTRALIZATION HERE"}
          textColor="text-decentTextAlt"
        />
        <BigHeading
          fontSize={"lg:text-[2.5rem]"}
          title={"Enter a universe of total decentralization"}
        />
      </div>

      <div className=" w-full mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <DecentCard className="md:col-span-2">
          <div className="w-full flex flex-col lg:text-center justify-center">
            <SmallHeading
              title={"ABOUT DECENTRONEUM"}
              textColor={"text-decentPrimary"}
            />
          </div>

          <p className="text-[0.85rem] lg:text-center lg:px-32 mt-5">
            Decentroneum is a cutting-edge Web3 platform dedicated to the
            principles of decentralization and the tokenization of real-world
            experiences. The mission is to transform various aspects of everyday
            life by leveraging the power of blockchain technology. Whether it's
            finance, entertainment, education, or beyond, Decentroneum empowers
            users to take control of their digital interactions and assets in a
            truly decentralized manner. Join in the journey to create a more
            open, transparent, and equitable world.
          </p>
        </DecentCard>

        <DecentCard>
          <SmallHeading title={"MISSION"} textColor={"text-decentPrimary"} />

          <p className="text-[0.85rem]  mt-5">
            Empowering users to own their digital future.
          </p>
        </DecentCard>

        <DecentCard>
          <SmallHeading title={"VISION"} textColor={"text-decentPrimary"} />

          <p className="text-[0.85rem]  mt-5">
            Building a seamless and accessible Web3 for all.
          </p>
        </DecentCard>
      </div>
    </section>
  );
}
