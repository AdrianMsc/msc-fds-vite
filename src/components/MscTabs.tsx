import { useState } from "react";

interface MscTabsProps {
  labels?: string[];
  background: string;
  onTabClick?: (label: string, index: number) => void;
}

export const MscTabs: React.FC<MscTabsProps> = ({
  labels = ["Tab 1", "Tab 2", "Tab 3"],
  onTabClick,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Limitar a 5 tabs
  if (labels.length > 5) {
    console.error(
      "El componente MscTabs solo soporta hasta 5 tabs. Solo se mostrarán las primeras 5 tabs."
    );
    labels = labels.slice(0, 5);
  }

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    if (onTabClick) {
      onTabClick(labels[index].toLowerCase(), index);
    }
  };

  const tabClasses = [
    "md:col-span-12",
    "md:col-span-6",
    "md:col-span-4",
    "md:col-span-3",
    "md:col-span-2.4",
  ];

  return (
    <>
      <div className={`bg-white sticky top-0`}>
        <ul className="msc-tabs grid-cols-12">
          {labels.map((label, index) => (
            <li
              key={index}
              className={`col-span-12 ${tabClasses[labels.length - 1]} ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => handleTabClick(index)}
            >
              <a>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MscTabs;
