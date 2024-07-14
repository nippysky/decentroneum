import Image from "next/image";
import React from "react";
import Logo from "../../public/assets/DECENT-ICON.svg";
import LogoWord from "../../public/assets/DECENT-PRIMARY-WORD.svg";
import { AlignJustify } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  return (
    <header className="flex justify-between items-center lg:px-32 md:px-10 px-5 max-w-7xl mx-auto pt-3">
      {/* Logo */}
      <div className="w-1/2 flex items-center gap-5">
        <Image src={Logo} alt="Decent Icon" width={50} height={50} priority />
        <Image
          src={LogoWord}
          alt="Decent Primary Word"
          width={180}
          height={50}
          priority
          className="hidden lg:flex"
        />
      </div>

      {/* Menu */}
      <Sheet>
        <SheetTrigger>
          <AlignJustify
            size={30}
            className=" text-decentPrimary cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className=" bg-decentPrimary"></SheetContent>
      </Sheet>
    </header>
  );
}
