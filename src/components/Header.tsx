import Image from "next/image";
import React from "react";
import Logo from "../../public/assets/DECENT-ICON.svg";
import LogoWord from "../../public/assets/DECENT-PRIMARY-WORD.svg";
import { AlignJustify } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import MenuContent from "./MenuContent";

const getRandomSide = (): "right" | "left" => {
  return Math.random() < 0.5 ? "right" : "left";
};

const socialMediums = [
  {
    name: "WhatsApp",
    icon: <FaWhatsapp size={20} />,
    url: "/",
  },
  {
    name: "Telegram",
    icon: <FaTelegramPlane size={20} />,
    url: "/",
  },
  {
    name: "X",
    icon: <FaXTwitter size={20} />,
    url: "/",
  },
];

export default function Header() {
  const randomSide = getRandomSide();

  return (
    <header className="flex justify-between items-center lg:px-32 md:px-10 px-5 max-w-7xl mx-auto pt-3">
      {/* Logo */}
      <Link className=" flex items-center gap-5 w-auto" href={"/"}>
        <Image src={Logo} alt="Decent Icon" width={50} height={50} priority />
        <Image
          src={LogoWord}
          alt="Decent Primary Word"
          width={180}
          height={50}
          priority
          className="hidden lg:flex"
        />
      </Link>

      {/* ////////////////////////////// */}
      {/* SOCIALS AND MENU */}
      <div className="flex justify-end gap-14 items-center">
        <div className="flex space-x-5">
          {socialMediums.map((social) => (
            <Link
              href={social.url}
              key={social.name}
              className="text-decentPrimary hover:text-white"
            >
              {social.icon}
            </Link>
          ))}
        </div>

        {/* Menu */}
        <Sheet>
          <SheetTrigger>
            <AlignJustify
              size={30}
              className=" text-decentPrimary cursor-pointer hover:text-white"
            />
          </SheetTrigger>
          <SheetContent side={randomSide} className=" bg-decentPrimary w-full">
            <MenuContent />
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
