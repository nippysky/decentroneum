import React from "react";

export default function BigHeading({
  fontSize,
  title,
}: {
  fontSize: "lg:text-[3.2rem]" | "lg:text-[2.5rem]";
  title: string;
}) {
  return (
    <h1
      className={`big-text font-black text-center tracking-wide leading-normal bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 my-2 text-[1.75rem] ${fontSize}`}
    >
      {title}
    </h1>
  );
}
