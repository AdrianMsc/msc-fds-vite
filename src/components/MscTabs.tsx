import React, { useState } from "react";

export const MscTabs = ({ labels = ["Tab 1", "Tab 2", "Tab 3"] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (labels.length > 3) {
    console.error(
      "The MscTabs component only supports 3 tabs. Only the first 3 tabs will be displayed."
    );
    labels = labels.slice(0, 3);
  }

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <>
      <ul className="msc-tabs grid-cols-6">
        {labels.map((label, index) => (
          <li
            key={index}
            className={`col-span-6 md:col-span-2 ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => handleTabClick(index)}
          >
            <a>{label}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MscTabs;
