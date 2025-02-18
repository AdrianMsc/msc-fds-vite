import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

const MscToggle = ({ variant = "Default" }) => {
  const [selectedTolerance, setSelectedTolerance] = useState("allTolerance");
  const [selectedClass, setSelectedClass] = useState("allClass");

  useEffect(() => {
    const updateToleranceSliderPosition = () => {
      const slider = document.querySelector("#toleranceToggle");
      if (slider) {
        const positions = ["left-[4px]", "left-1/3", "left-[130px]"];
        const radioIndex = ["allTolerance", "plus", "minus"].indexOf(
          selectedTolerance
        );
        slider.className = `msc-triple-toggle-dot ${positions[radioIndex]}`;
      }
    };

    const updateClassSliderPosition = () => {
      const slider = document.querySelector("#classToggle");
      if (slider) {
        const positions = ["left-[4px]", "left-1/3", "left-[130px]"];
        const radioIndex = ["allClass", "X", "ZZ"].indexOf(selectedClass);
        slider.className = `msc-triple-toggle-dot ${positions[radioIndex]}`;
      }
    };

    updateToleranceSliderPosition();
    updateClassSliderPosition();
  }, [selectedTolerance, selectedClass]);

  switch (variant) {
    case "Default":
      return (
        <label htmlFor="toggleOne" className="msc-toggle">
          <div className="relative">
            <input
              type="checkbox"
              id="toggleOne"
              defaultChecked
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
              defaultChecked
              disabled
              className="peer sr-only"
            />
            <div className="msc-toggle-container-disabled disabled-before disabled-after"></div>
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
              defaultChecked
              className="peer sr-only"
            />
            <div className="msc-toggle-container-text text-before text-after"></div>
            <div className="msc-toggle-dot-text"></div>
          </div>
        </label>
      );
      break;

    case "Address":
      return (
        <label htmlFor="toggleAddress" className="msc-toggle">
          <div className="relative">
            <input
              type="checkbox"
              id="toggleAddress"
              className="peer sr-only"
              defaultChecked
            />
            <div className="msc-toggle-container-text-lg address-before address-after"></div>
            <div className="msc-toggle-dot-text-lg address-dot-before address-dot-after"></div>
          </div>
        </label>
      );
      break;

    case "Units":
      return (
        <label htmlFor="toggleUnits" className="msc-toggle">
          <div className="relative">
            <input type="checkbox" id="toggleUnits" className="peer sr-only" />
            <div className="msc-toggle-container-text-lg after:right-10 units-before units-after"></div>
            <div className="msc-toggle-dot-text-lg after:right-6 units-dot-before units-dot-after"></div>
          </div>
        </label>
      );
      break;

    case "Tolerance":
      return (
        <fieldset>
          <div className="msc-label-toggle-container">
            <p className="msc-label-triple-toggle">Tolerance</p>
            <FontAwesomeIcon
              icon={faQuestionCircle}
              className="msc-toggle-icon text-monochromes-grey_light"
            />
            <div className="msc-triple-toggle-container">
              <span
                id="toleranceToggle"
                className="msc-triple-toggle-dot"
              ></span>
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
            <FontAwesomeIcon
              icon={faQuestionCircle}
              className="msc-toggle-icon text-monochromes-grey_light"
            />
            <div className="msc-triple-toggle-container">
              <span id="classToggle" className="msc-triple-toggle-dot"></span>
              <label className="msc-triple-toggle-input-label">
                <input
                  type="radio"
                  name="class"
                  value="allClass"
                  className="peer sr-only"
                  checked={selectedClass === "allClass"}
                  onChange={() => setSelectedClass("allClass")}
                />
                <span className="msc-triple-toggle-text">All</span>
              </label>
              <label className="msc-triple-toggle-input-label">
                <input
                  type="radio"
                  name="class"
                  value="X"
                  className="peer sr-only"
                  checked={selectedClass === "X"}
                  onChange={() => setSelectedClass("X")}
                />
                <span className="msc-triple-toggle-text">X</span>
              </label>
              <label className="msc-triple-toggle-input-label">
                <input
                  type="radio"
                  name="class"
                  value="ZZ"
                  className="peer sr-only"
                  checked={selectedClass === "ZZ"}
                  onChange={() => setSelectedClass("ZZ")}
                />
                <span className="msc-triple-toggle-text">ZZ</span>
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
