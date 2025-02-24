import React from "react";

interface Stats {
  guidelines: string;
  figma: string;
  storybook: string;
  cdn: string;
}

interface MscStatusComponentBarProps {
  stats: Stats[];
}

const MscStatusComponentBar: React.FC<MscStatusComponentBarProps> = ({
  stats,
}) => {
  const currentStats = stats[0];

  return (
    <ul className=" w-fit  rounded flex space-x-3 mb-4">
      <li>
        <b>Guidelines:</b> {currentStats.guidelines}
      </li>
      <li>
        <b>Figma:</b> {currentStats.figma}
      </li>
      <li>
        <b>Storybook:</b> {currentStats.storybook}
      </li>
      <li>
        <b>CDN:</b> {currentStats.cdn}
      </li>
    </ul>
  );
};

export default MscStatusComponentBar;
