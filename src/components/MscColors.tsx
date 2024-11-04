const MscColors = ({ palette }) => {
  const colors = {
    monochromes: {
      main: "#212121",
      grey_xdark: "#2D2D2D",
      grey_dark: "#3E3E3E",
      grey: "#717171",
      grey_light: "#A6A6A6",
      grey_xlight: "#DBDBDB",
    },
    white: { white: "#FFFFFF" },
    off_white: { off_white: "#F2F2F2" },
    primary: {
      blue_xdark: "#0A2C7F",
      blue_dark: "#0D3AA9",
      blue: "#1C58EE",
      blue_light: "#B3C7F9",
      blue_xlight: "#F1F5FE",
    },
    brand_blue: {
      dark: "#012169",
      bold: "#0057BB",
      bright: "#00A3E0",
    },
    success: {
      green_xdark: "#084B2F",
      green_dark: "#0E754A",
      green: "#24E594",
      green_light: "#B6F6DB",
      green_xlight: "#F1FDF8",
    },
    warning: {
      orange_xdark: "#6C3E00",
      orange_dark: "#A66000",
      orange: "#FF980A",
      orange_light: "#FFDDAD",
      orange_xlight: "#FFF9F0",
    },
    error: {
      red_xdark: "#6C1400",
      red_dark: "#A61E00",
      red: "#CC2500",
      red_light: "#FFBCAD",
      red_xlight: "#FFF3F0",
    },
  };

  const selectedColors = colors[palette] || colors.primary;

  return (
    <>
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
    </>
  );
};

export default MscColors;
