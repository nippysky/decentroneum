import React from "react";
import { ScrollArea } from "./ui/scroll-area";
import { MdApps } from "react-icons/md";
import { TiDocumentText } from "react-icons/ti";
import { Hexagon } from "lucide-react";
import { socialMediums } from "./Community";
import DecentCard from "./shared/DecentCard";

const menuLinks = [
  {
    title: "Explore D-Apps",
    icon: <MdApps size={25} />,
    url: "/d-apps",
  },
  {
    title: "Decent Paper",
    icon: <TiDocumentText size={25} />,
    url: "/d-apps",
  },
  {
    title: "Decent Assets",
    icon: <Hexagon size={25} />,
    url: "/d-apps",
  },
];

export default function MenuContent() {
  return (
    <ScrollArea className="w-full h-screen text-decentBG">
      <section className="flex flex-col lg:px-32 md:px-10 px-5 py-20">
        {/* Decent Offer Banner */}
        <div className="w-full bg-decentBG lg:p-10 p-5 text-white">
          <div className=" flex flex-col justify-center items-center space-y-5">
            <h1 className="text-[1.5rem] md:text-[2rem] font-bold text-center">
              Join in the{" "}
              <span className="font-black text-decentPrimary">DECENT</span>{" "}
              offer
            </h1>

            <a
              href={"/decent-offer"}
              className="bg-decentPrimary py-2 px-10 text-decentBG border border-decentPrimary hover:bg-decentBG hover:text-decentPrimary font-semibold tracking-wide uppercase text-[0.85rem] transition duration-300 ease-in-out"
            >
              Partake in Offer
            </a>
          </div>
        </div>

        {/* /////////////////////////////// */}
        {/* LINKS */}
        <div className="lg:mt-14 mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
          {menuLinks.map((link, index) => (
            <a
              href={link.url}
              key={index}
              className={` bg-transparent hover:bg-decentBG border border-decentBG p-5 w-full flex items-center gap-5 hover:text-decentPrimary text-decentBG transition duration-300 ease-in-out
                
                ${index === menuLinks.length - 1 && "md:col-span-2 col-span-1"}
                `}
            >
              {link.icon}
              <p className=" text-[0.85rem] uppercase tracking-wide font-semibold">
                {link.title}
              </p>
            </a>
          ))}
        </div>

        {/* //////////////////// */}
        {/* COMMUNITY SOCIALS */}
        {/* SOCIAL CARDS*/}
        <section className="w-full mt-14 grid grid-cols-1 lg:grid-cols-3 gap-10">
          {socialMediums.map((media) => (
            <a href={media.url} key={media.name}>
              <DecentCard className="hover:bg-decentPrimary transition duration-300 ease-in-out group border border-decentCard">
                <div className="text-decentPrimary text-center items-center justify-center w-full flex flex-col group-hover:text-decentBG">
                  {media.icon}
                  <small className="mt-5 text-white group-hover:text-decentBG">
                    {media.desc}
                  </small>
                </div>
              </DecentCard>
            </a>
          ))}
        </section>
      </section>
    </ScrollArea>
  );
}
