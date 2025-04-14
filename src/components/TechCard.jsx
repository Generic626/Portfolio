import React from "react";

const TechCard = ({ src }) => {
  return (
    <div className="bg-foreground-light flex justify-center items-center h-[100px] rounded-md">
      <img src={src} className="w-[40px]" />
    </div>
  );
};

export default TechCard;
