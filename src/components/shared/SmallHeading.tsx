import React from "react";

export default function SmallHeading({
  title,
  textColor,
}: {
  title: string;
  textColor: "text-decentTextAlt" | "text-decentPrimary";
}) {
  return (
    <h5
      className={`text-[0.85rem] tracking-wider font-medium uppercase ${textColor}`}
    >
      {title}
    </h5>
  );
}
