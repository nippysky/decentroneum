import React from "react";
import SmallHeading from "./shared/SmallHeading";
import BigHeading from "./shared/BigHeading";
import Link from "next/link";
import DecentCard from "./shared/DecentCard";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

export const socialMediums = [
  {
    name: "WhatsApp",
    icon: <FaWhatsapp size={50} />,
    desc: "Follow the channel for fast updates and web3 memes.",
    url: "/",
  },
  {
    name: "Telegram",
    icon: <FaTelegramPlane size={50} />,
    desc: "Stay updated and discuss all things Decentroneum.",
    url: "/",
  },
  {
    name: "X",
    icon: <FaXTwitter size={50} />,
    desc: "Follow for the latest announcements and discussions on ETN-SC discussions.",
    url: "/",
  },
];

export default function Community() {
  return (
    <section className="flex flex-col lg:px-32 md:px-10 px-5 py-20 ">
      <div className="text-center lg:px-40 px-5">
        <SmallHeading title={"JOIN US"} textColor="text-decentTextAlt" />
        <BigHeading fontSize={"lg:text-[2.5rem]"} title={"The Community"} />
        <p>
          Stay up-to-date on all things decentroneum and connect with the
          community
        </p>
      </div>

      {/* SOCIAL CARDS*/}
      <section className="w-full mt-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {socialMediums.map((media) => (
          <Link href={media.url} key={media.name}>
            <DecentCard className="hover:bg-decentPrimary transition duration-300 ease-in-out group">
              <div className="text-decentPrimary text-center items-center justify-center w-full flex flex-col group-hover:text-decentBG">
                {media.icon}
                <small className="mt-5 text-decentTextAlt group-hover:text-decentBG">
                  {media.desc}
                </small>
              </div>
            </DecentCard>
          </Link>
        ))}
      </section>
    </section>
  );
}
