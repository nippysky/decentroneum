import { Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import Error404 from "../../public/assets/Error404.svg";

export default function ErrorPage() {
  return (
    <section className="w-full h-screen bg-decentBG flex flex-col justify-center items-center text-decentPrimary">
      <Image
        src={Error404}
        alt={"Error 404 Icon"}
        width={250}
        height={250}
        priority
      />
      <Link
        href={"/"}
        className=" flex items-center gap-3 hover:text-white transition duration-300 ease-in-out mt-10"
      >
        <Home size={25} />
        Go back home
      </Link>
    </section>
  );
}
