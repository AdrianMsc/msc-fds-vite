import { useState } from "react";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import MscComponentSnippet from "../../components/MscComponentSnippet/MscComponentSnippet";
import {
  codeDropDownDefault,
  codeDropDownDisabled,
  codeDropDownDoubleLine,
  codeDropDownLabel,
  codeDropDownNumeric,
  codeDrowDownLabelOnTop,
  codeDrowpDownError,
} from "./constants";

const MscDropdownPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedDoubleValue, setSelectedDoubleValue] = useState({
    p1: "Est. Wed, Apr 03 from PA",
    p2: "Standard UPS Ground",
  });
  const [selectedNumericValue, setSelectedNumericValue] = useState();
  const options = ["Buyer 1", "Buyer 2", "Buyer 3"];
  const numericOptions = ["25", "50", "75", "100"];
  const doubleOptions = [
    {
      p1: "Est. Thu, Apr 04 from PA",
      p2: "UPS Ground Freight Saver",
    },
    {
      p1: "Est. Wed, Apr 03 from PA",
      p2: "1 Day UPS Air (Red)",
    },
    {
      p1: "Est. Thu, Apr 03 from PA",
      p2: "1 Day UPS (Early AM)",
    },
  ];
  const placeholder = "Placeholder";

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleNumericOptionClick = (value: any) => {
    setSelectedNumericValue(value);
    setIsOpen(false);
  };

  const handleNumericInput = (e: any) => {
    e.preventDefault();
    setIsOpen(false);
    setSelectedNumericValue(e.target.value);
  };

  const handleOptionClick = (option: any) => {
    setSelectedValue(option);
    setIsOpen(!isOpen);
    setIsOptionSelected(true);
  };
  const handleDoubleOptionClick = (option: any) => {
    setSelectedDoubleValue(option);
    setIsOpen(!isOpen);
    setIsOptionSelected(true);
  };

  return (
    <ComponentLayout>
      <MscComponentSnippet
        title="Default"
        code={codeDropDownDefault}
        className="mb-4"
      >
        <div
          className={`dropdown-container ${
            isOpen ? "dropdown-active" : ""
          } !w-[400px]`}
          onClick={toggleDropdown}
        >
          <button className="dropdown-button">
            <p className="dropdown-placeholder">
              {selectedValue ?? placeholder}{" "}
              <span className="text-red-600">*</span>
            </p>
            <FontAwesomeIcon icon={faCaretDown} />
          </button>
          <div
            className={`dropdown-options-container ${isOpen ? "" : "hidden"}`}
          >
            {options.map((option, index) => (
              <div
                key={index}
                className="dropdown-option"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      </MscComponentSnippet>

      <MscComponentSnippet
        title="With Label"
        code={codeDropDownLabel}
        className="mb-4"
      >
        <div>
          <div className="dropdown-label">
            <p>Label</p>
            <div
              className={`dropdown-container ${
                isOpen ? "dropdown-active" : ""
              } !w-[400px]`}
              onClick={toggleDropdown}
            >
              <button className="dropdown-button">
                <p className="dropdown-placeholder">
                  {selectedValue ?? placeholder}{" "}
                  <span className="text-red-600">*</span>
                </p>
                <FontAwesomeIcon icon={faCaretDown} />
              </button>
              <div
                className={`dropdown-options-container ${
                  isOpen ? "" : "hidden"
                }`}
              >
                {options.map((option, index) => (
                  <div
                    key={index}
                    className="dropdown-option"
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </MscComponentSnippet>

      <MscComponentSnippet
        title="With Label on top"
        code={codeDrowDownLabelOnTop}
        className="mb-4"
      >
        <div
          className={`dropdown-container ${
            isOpen ? "dropdown-active" : ""
          } !w-[400px]`}
          onClick={toggleDropdown}
        >
          <p
            className={`dropdown-label-top ${isOptionSelected ? "" : "hidden"}`}
          >
            {placeholder}
          </p>
          <button className="dropdown-button">
            <p className={`dropdown-placeholder `}>
              {selectedValue ?? placeholder}
            </p>
            <FontAwesomeIcon icon={faCaretDown} />
          </button>
          <div
            className={`dropdown-options-container ${isOpen ? "" : "hidden"}`}
          >
            {options.map((option, index) => (
              <div
                key={index}
                className="dropdown-option"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      </MscComponentSnippet>

      <MscComponentSnippet
        title="With Double Line"
        code={codeDropDownDoubleLine}
        className="mb-4"
      >
        <div
          className={`msc-double-dropdown-container ${
            isOpen ? "double-dropdown-active" : ""
          } !w-[400px]`}
          onClick={toggleDropdown}
        >
          <button className="dropdown-button">
            <div className="text-left">
              {selectedDoubleValue ? (
                <>
                  <p className="text-sm">
                    {selectedDoubleValue.p1.slice(0, 5)}
                    <b>{selectedDoubleValue.p1.slice(5, 16)}</b>
                    {selectedDoubleValue.p1.slice(16, 24)}
                  </p>
                  <p className="text-xs">{selectedDoubleValue.p2}</p>
                </>
              ) : (
                <>
                  <p className="text-sm">
                    Est. <b>Wed, Apr 03</b> from PA
                  </p>
                  <p className="text-xs">Standard UPS Ground</p>
                </>
              )}
            </div>
            <FontAwesomeIcon icon={faCaretDown} />
          </button>
          <div
            className={`double-dropdown-options-container ${
              isOpen ? "" : "hidden"
            }`}
          >
            {doubleOptions.map((option, index) => (
              <div
                key={index}
                className="double-dropdown-option text-left"
                onClick={() => handleDoubleOptionClick(option)}
              >
                <p className="text-sm">
                  {option.p1.slice(0, 5)}
                  <b>{option.p1.slice(5, 16)}</b>
                  {option.p1.slice(16, 24)}
                </p>
                <p className="text-xs">{option.p2}</p>
              </div>
            ))}
          </div>
        </div>
      </MscComponentSnippet>

      <MscComponentSnippet
        title="Numeric"
        code={codeDropDownNumeric}
        className="mb-4"
      >
        <div
          className={`numeric-dropdown-container ${
            isOpen ? "dropdown-active" : ""
          }`}
          onClick={toggleDropdown}
        >
          <div className="numeric-dropdown">
            <input
              type="number"
              placeholder="25"
              className="numeric-dropdown-input"
              onChange={handleNumericInput}
              value={selectedNumericValue || ""}
            />
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
          {isOpen && (
            <div className="numeric-dropdown-options-container !relative !right-[75px] top-1">
              {numericOptions.map((option) => (
                <div
                  key={option}
                  className="numeric-dropdown-options"
                  onClick={() => handleNumericOptionClick(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </MscComponentSnippet>

      <MscComponentSnippet
        title="Error"
        code={codeDrowpDownError}
        className="mb-4"
      >
        <div>
          <div className="dropdown-container dropdown-error !w-[400px]">
            <button className="dropdown-button">
              <p className="dropdown-placeholder dropdown-error">
                {placeholder} *
              </p>
              <FontAwesomeIcon icon={faCaretDown} />
            </button>
          </div>
          <p className="dropdown-error-message">Error Message</p>
        </div>
      </MscComponentSnippet>

      <MscComponentSnippet
        title="Disabled"
        code={codeDropDownDisabled}
        className="mb-4"
      >
        <div className="dropdown-label dropdown-disabled">
          <p>Label</p>
          <div className="dropdown-container dropdown-disabled !w-[400px]">
            <button className="dropdown-button dropdown-disabled" disabled>
              <p className="dropdown-pla ceholder dropdown-disabled">
                {placeholder} <span className="text-red-600">*</span>
              </p>
              <FontAwesomeIcon icon={faCaretDown} />
            </button>
          </div>
        </div>
      </MscComponentSnippet>
    </ComponentLayout>
  );
};

export default MscDropdownPage;
