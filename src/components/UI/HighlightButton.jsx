"use client";

import React, { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

const HighlightButton = ({ onClickHandler, text, icon, iconPos = "right" }) => {
  const ref = useRef(null);

  const xDistance = useMotionValue(0);
  const yDistance = useMotionValue(0);
  const mask = useMotionTemplate`radial-gradient(100px 100px at ${xDistance}px ${yDistance}px, #000, transparent)`;

  const handleMouseMovement = (e) => {
    // if triggered element is not the current element
    if (!ref.current) {
      return;
    }

    const clientRect = ref.current.getBoundingClientRect();

    xDistance.set(e.x - clientRect.x);
    yDistance.set(e.y - clientRect.y);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMovement);

    // Cleanup function
    return () => {
      window.removeEventListener("mousemove", handleMouseMovement);
    };
  }, []);

  return (
    <button
      className="cursor-pointer relative inline bg-background hover:bg-highlight ease-in-out duration-300 rounded-lg py-2 border border-transparent px-4 shadow-lg"
      onClick={onClickHandler}
    >
      <motion.div
        ref={ref}
        className="absolute inset-0 border-2 border-zinc-200 rounded-lg"
        style={{
          maskImage: mask,
          WebkitMaskImage: mask,
        }}
      ></motion.div>
      <div className="flex justify-center items-center gap-2 text-lg">
        {iconPos == "left" && icon}
        <span className="text-sm md:text-lg">{text}</span>
        {iconPos == "right" && icon}
      </div>
    </button>
  );
};

export default HighlightButton;
