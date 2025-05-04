"use client";
import { twMerge } from "tailwind-merge";

const Badge = ({ className, img }) => {
  return (
    <div>
      <div
        className={twMerge(
          "bg-background rounded-full px-4 py-2 w-fit",
          className
        )}
      >
        <img className="size-[15px]" src={img} />
      </div>
    </div>
  );
};

export default Badge;
