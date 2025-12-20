import React from "react";

const GenerateBillHeader = ({ name }) => {
  return (
    <div className="h-[3.5rem] shadow-sm flex items-center justify-between px-4">
      <p className="text-[1.2rem] font-semibold">{name}</p>
    </div>
  );
};

export default GenerateBillHeader;
