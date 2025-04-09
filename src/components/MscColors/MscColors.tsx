import { colorPallete } from "./constants";
import showToast from "../../utils/showToast";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";

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
  const dispatch = useDispatch<AppDispatch>();

  const copyCodeSnippet = (copy: any) => {
    navigator.clipboard
      .writeText(selectedColors[copy])
      .then(() => {
        showToast(
          dispatch,
          "success",
          `${copy}: ${selectedColors[copy]} Color copied to the clipboard`
        );
      })
      .catch((err) => {
        showToast(dispatch, "error", "Something is wrong");
        console.error("Something is Wrong: ", err);
      });
  };

  return (
    <div className="flex">
      {Object.keys(selectedColors).map((key) => (
        <div className="flex flex-col" key={key}>
          <div
            onClick={() => copyCodeSnippet(key)}
            className={`h-16 flex items-center justify-center min-w-[120px] cursor-pointer transition-all hover:scale-110 mb-2 ${
              palette === "white" || palette === "off_white"
                ? "text-transparent border hover:text-black"
                : "text-transparent hover:text-white"
            }`}
            style={{
              backgroundColor: selectedColors[key],
            }}
          >
            Copy
          </div>
          <span className="font-semibold">{key}</span>
          <span className="font-semibold">{selectedColors[key]}</span>
        </div>
      ))}
    </div>
  );
};

export default MscColors;
