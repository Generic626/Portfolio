import React from "react";

const ExperienceLabel = ({ years, qualification }) => {
  return (
    <div className="w-[155px] flex items-center gap-2">
      <span className="text-[56px] text-highlight">{years}</span>
      <span className="text-wrap">{qualification}</span>
    </div>
  );
};

export default ExperienceLabel;
