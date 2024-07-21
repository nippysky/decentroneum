import Image from "next/image";
import React from "react";

import LogoIcon from "../../public/assets/DECENT-ICON.svg";

export default function Footer() {
  return (
    <footer className="py-20 bg-decentPrimary text-decentBG">
      <div className="lg:px-32 md:px-10 px-5 max-w-7xl mx-auto">
        <div className=" w-full flex flex-col justify-center items-center space-y-5 text-decentBG text-center">
          <Image
            src={LogoIcon}
            alt="DECENt ICON"
            width={100}
            height={100}
            priority
          />

          <p className="lg:px-40 px-5 font-medium">
            Growing a decentralized ecosystem by leveraging the Electroneum
            Smart Chain.
          </p>

          <small className="font-semibold tracking-wider">
            Powered by the Electroneum Smart Chain
          </small>
        </div>
      </div>
    </footer>
  );
}
