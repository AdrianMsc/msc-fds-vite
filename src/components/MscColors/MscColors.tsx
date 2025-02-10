import { colorPallete } from "./constants";

type ColorPalette = {
  [key: string]: string;
};

type Colors = {
  monochromes: ColorPalette;
  white: ColorPalette;
  off_white: ColorPalette;
  primary: ColorPalette;
  brand_blue: ColorPalette;
  success: ColorPalette;
  warning: ColorPalette;
  error: ColorPalette;
};
interface MscColorsProps {
  palette: keyof Colors;
}

const MscColors: React.FC<MscColorsProps> = ({ palette }) => {
  const colors: Colors = colorPallete;

  const selectedColors = colors[palette];

  return (
    <div className="flex">
      {Object.keys(selectedColors).map((key) => (
        <div
          key={key}
          className={`w-16 h-16 flex items-center justify-center text-[12px] ${
            palette === "white" || palette === "off_white"
              ? "text-black border"
              : "text-white"
          }`}
          style={{ backgroundColor: selectedColors[key] }}
        >
          {selectedColors[key]}
        </div>
      ))}
    </div>
  );
};

export default MscColors;
