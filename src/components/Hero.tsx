import React from "react";
import SmallHeading from "./shared/SmallHeading";
import BigHeading from "./shared/BigHeading";
import Link from "next/link";
import { MdApps } from "react-icons/md";
import { TiDocumentText } from "react-icons/ti";

export default function Hero() {
  return (
    <section className="min-h-screen flex justify-center items-center lg:px-32 md:px-10 px-5">
      <div className="text-center lg:px-40 px-5">
        <SmallHeading
          title={"Welcome to Decentroneum"}
          textColor="text-decentTextAlt"
        />
        <BigHeading
          fontSize={"lg:text-[3.2rem]"}
          title={"Empowering the Electroneum Ecosystem."}
        />
        <p>
          Growing a decentralized ecosystem by building a seamless and
          accessible Web3 for all.
        </p>

        <div className=" flex items-center gap-5 md:gap-10 text-decentPrimary font-medium uppercase mt-10 tracking-wider w-full justify-center flex-col md:flex-row">
          <Link
            href={"/"}
            className=" flex items-center gap-3 hover:text-white transition duration-300 ease-in-out"
          >
            <MdApps size={25} />
            Explore d-apps
          </Link>
          <Link
            href={"/"}
            className=" flex items-center gap-3 hover:text-white transition duration-300 ease-in-out"
          >
            <TiDocumentText size={25} />
            Decent paper
          </Link>
        </div>
      </div>
    </section>
  );
}
