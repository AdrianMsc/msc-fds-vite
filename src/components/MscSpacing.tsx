import React from "react";

interface MscSpacingProps {
  size: number;
}

const MscSpacing: React.FC<MscSpacingProps> = ({ size }) => {
  return (
    <>
      <h2 className="mt-5">{size}px</h2>

      <div className="p-1 outline outline-slate-300 my-4 min-w-[200px]">
        <div
          className={`w-full`}
          style={{ height: `${size}px`, backgroundColor: "rgb(203 213 225)" }}
        ></div>
      </div>
    </>
  );
};

export default MscSpacing;
