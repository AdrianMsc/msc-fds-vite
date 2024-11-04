const MscSpinner = ({ loadText = "Loading", variant = "light" }) => {
  const variantColors = { light: "#212121", dark: "#717171" };

  return (
    <>
      <div
        className={
          variant === "dark"
            ? "msc-spinner-overlay-dark"
            : "msc-spinner-overlay"
        }
      >
        <div className="msc-spinner-wrapper">
          <svg
            className="msc-spinner"
            viewBox="0 0 62 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="31" cy="31" r="28" stroke="white" strokeWidth="6" />
            <circle
              opacity="0.38"
              cx="31"
              cy="31"
              r="28"
              stroke={variantColors[variant]}
              strokeWidth="6"
            />{" "}
            <path
              opacity="0.8"
              d="M3 31C3 15.536 15.536 3 31 3"
              stroke="#212121"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </svg>

          <label
            className={
              variant === "dark"
                ? "msc-spinner-label-dark"
                : "msc-spinner-label"
            }
          >
            {loadText}
          </label>
        </div>
      </div>
    </>
  );
};

export default MscSpinner;
