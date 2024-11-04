import { useEffect, useState } from "react";

const MscToggle = ({ variant = "Default" }) => {
  const [selectedTolerance, setSelectedTolerance] = useState("allTolerance");

  useEffect(() => {
    const updateSliderPosition = () => {
      const slider = document.querySelector(".msc-triple-toggle-dot");
      if (slider) {
        const positions = ["left-[4px]", "left-1/3", "left-[130px]"];
        const radioIndex = ["allTolerance", "plus", "minus"].indexOf(
          selectedTolerance
        );
        slider.className = `msc-triple-toggle-dot ${positions[radioIndex]}`;
      }
    };
    updateSliderPosition();
  }, [selectedTolerance]);

  switch (variant) {
    case "Default":
      return (
        <label htmlFor="toggleOne" className="msc-toggle">
          <div className="relative">
            <input
              type="checkbox"
              id="toggleOne"
              defaultChecked={true}
              className="peer sr-only"
            />
            <div className="msc-toggle-container"></div>
            <div className="msc-toggle-dot"></div>
          </div>
        </label>
      );
      break;

    case "Disabled":
      return (
        <label htmlFor="toggleDisabled" className="msc-toggle">
          <div className="relative">
            <input
              type="checkbox"
              id="toggleDisabled"
              defaultChecked={true}
              disabled
              className="peer sr-only"
            />
            <div
              before="Yes"
              after="No"
              className="msc-toggle-container-disabled"
            ></div>
            <div className="msc-toggle-dot-disabled"></div>
          </div>
        </label>
      );
      break;

    case "With Text":
      return (
        <label htmlFor="toggleTwo" className="msc-toggle">
          <div className="relative">
            <input
              type="checkbox"
              id="toggleTwo"
              defaultChecked={true}
              className="peer sr-only"
            />
            <div
              before="Yes"
              after="No"
              className="msc-toggle-container-text"
            ></div>
            <div className="msc-toggle-dot-text"></div>
          </div>
        </label>
      );
      break;

    case "Address Type":
      return (
        <label htmlFor="toggleAddress" className="msc-toggle">
          <div className="relative">
            <input
              type="checkbox"
              id="toggleAddress"
              className="peer sr-only"
            />
            <div
              before="Residential"
              after="Commercial"
              className="msc-toggle-container-text-lg"
            ></div>
            <div
              before="Residential"
              after="Commercial"
              className="msc-toggle-dot-text-lg"
            ></div>
          </div>
        </label>
      );
      break;

    case "Units":
      return (
        <label htmlFor="toggleAddress" className="msc-toggle">
          <div className="relative">
            <input
              type="checkbox"
              id="toggleAddress"
              className="peer sr-only"
            />
            <div
              before="Decimal Inch"
              after="MM"
              className="msc-toggle-container-text-lg after:right-10"
            ></div>
            <div
              before="Decimal Inch"
              after="MM"
              className="msc-toggle-dot-text-lg after:right-6"
            ></div>
          </div>
        </label>
      );
      break;

    case "Tolerance":
      return (
        <fieldset>
          <div className="msc-label-toggle-container">
            <p className="msc-label-triple-toggle">Tolerance</p>
            <i className="fa-solid fa-circle-question msc-toggle-icon"></i>
            <div className="msc-triple-toggle-container">
              <span className="msc-triple-toggle-dot"></span>
              <label className="msc-triple-toggle-input-label">
                <input
                  type="radio"
                  name="tolerance"
                  value="allTolerance"
                  className="peer sr-only"
                  checked={selectedTolerance === "allTolerance"}
                  onChange={() => setSelectedTolerance("allTolerance")}
                />
                <span className="msc-triple-toggle-text">All</span>
              </label>
              <label className="msc-triple-toggle-input-label">
                <input
                  type="radio"
                  name="tolerance"
                  value="plus"
                  className="peer sr-only"
                  checked={selectedTolerance === "plus"}
                  onChange={() => setSelectedTolerance("plus")}
                />
                <span className="msc-triple-toggle-text">Super</span>
              </label>
              <label className="msc-triple-toggle-input-label">
                <input
                  type="radio"
                  name="tolerance"
                  value="minus"
                  className="peer sr-only"
                  checked={selectedTolerance === "minus"}
                  onChange={() => setSelectedTolerance("minus")}
                />
                <span className="msc-triple-toggle-text">Minus</span>
              </label>
            </div>
          </div>
        </fieldset>
      );
      break;

    case "Class":
      return (
        <fieldset>
          <div className="msc-label-toggle-container">
            <p className="msc-label-triple-toggle">Class</p>
            <i className="fa-solid fa-circle-question msc-toggle-icon"></i>
            <div className="msc-triple-toggle-container">
              <span className="msc-triple-toggle-dot"></span>
              <label className="msc-triple-toggle-input-label">
                <input
                  type="radio"
                  name="class"
                  value="allTolerance"
                  className="peer sr-only"
                  checked={selectedTolerance === "allTolerance"}
                  onChange={() => setSelectedTolerance("allTolerance")}
                />
                <span className="msc-triple-toggle-text">All</span>
              </label>
              <label className="msc-triple-toggle-input-label">
                <input
                  type="radio"
                  name="class"
                  value="plus"
                  className="peer sr-only"
                  checked={selectedTolerance === "plus"}
                  onChange={() => setSelectedTolerance("plus")}
                />
                <span className="msc-triple-toggle-text">Super</span>
              </label>
              <label className="msc-triple-toggle-input-label">
                <input
                  type="radio"
                  name="class"
                  value="minus"
                  className="peer sr-only"
                  checked={selectedTolerance === "minus"}
                  onChange={() => setSelectedTolerance("minus")}
                />
                <span className="msc-triple-toggle-text">Minus</span>
              </label>
            </div>
          </div>
        </fieldset>
      );
      break;

    default:
      break;
  }
};

export default MscToggle;
