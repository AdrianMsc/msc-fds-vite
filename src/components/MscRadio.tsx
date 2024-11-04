const MscRadio = ({ variant = "default" }) => {
  if (variant === "default") {
    return (
      <div className="flex gap-2">
        <div className="msc-radio-container">
          <input
            id="radio-yes"
            type="radio"
            name="list-radio"
            className="msc-radio-input"
          />
          <label htmlFor="radio-yes" className="msc-radio-label">
            Yes{" "}
          </label>
        </div>
        <div className="msc-radio-container">
          <input
            id="radio-no"
            type="radio"
            value=""
            name="list-radio"
            className="msc-radio-input"
          />
          <label htmlFor="radio-no" className="msc-radio-label">
            No{" "}
          </label>
        </div>
      </div>
    );
  } else {
    return (
      <ul className="msc-radio-horizontal-main-container">
        <li className="msc-radio-horizontal-container">
          <div className="msc-input-horizontal-container">
            <input
              id="horizontal-list-radio-yes"
              type="radio"
              value=""
              name="list-radio"
              className="msc-input-horizontal"
            />
            <label
              htmlFor="horizontal-list-radio-yes"
              className="msc-input-horizontal-label"
            >
              Yes
            </label>
          </div>
        </li>
        <li className="msc-radio-horizontal-container">
          <div className="msc-input-horizontal-container">
            <input
              id="horizontal-list-radio-no"
              type="radio"
              value=""
              name="list-radio"
              className="msc-input-horizontal"
            />
            <label
              htmlFor="horizontal-list-radio-no"
              className="msc-input-horizontal-label"
            >
              No
            </label>
          </div>
        </li>
      </ul>
    );
  }
};

export default MscRadio;
