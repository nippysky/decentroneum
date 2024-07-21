"use client";

import { useState, useEffect } from "react";
import { ArrowUpFromDot } from "lucide-react";

export default function ScrollUp() {
  const [backToTheTop, setBackToTheTop] = useState(false);
  const [mounted, setIsMounted] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setBackToTheTop(true);
      } else {
        setBackToTheTop(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => setIsMounted(true), []);
  if (!mounted) return null;

  return (
    <div className="z-50">
      {backToTheTop && (
        <div
          className=" bg-decentBG text-decentPrimary flex justify-center items-center rounded-full"
          onClick={scrollUp}
          style={{
            position: "fixed",
            zIndex: 10,
            bottom: "10px",
            right: "5px",
            height: "50px",
            width: "50px",
            cursor: "pointer",
          }}
        >
          <ArrowUpFromDot />
        </div>
      )}
    </div>
  );
}
