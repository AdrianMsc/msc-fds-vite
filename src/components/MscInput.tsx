interface Props {
  label?: string;
  errorMessage?: string;
  required?: boolean;
  disabled?: boolean;
}

const MscInput = ({
  label = "Placeholder text",
  errorMessage,
  required,
  disabled,
}: Props) => {
  return (
    <>
      <div className="msc-input-wrapper">
        <input
          id="default"
          type="text"
          placeholder={label}
          className={`msc-input peer ${
            errorMessage && errorMessage.trim()
              ? " !border-error-red !text-error-red hover:!border-error-red focus:!border-error-red"
              : ""
          } `}
          disabled={disabled}
        />
        <label
          htmlFor="default"
          className={`msc-input-label ${
            errorMessage && errorMessage.trim()
              ? " !text-error-red hover:!border-error-red focus:!border-error-red"
              : ""
          }`}
        >
          {label}
          <span
            className={`text-error-red ${required === true ? "" : "hidden"}`}
          >
            *
          </span>
        </label>
        <small
          className={`msc-error-message ${
            errorMessage && errorMessage.trim() ? "block" : ""
          }`}
        >
          {errorMessage}
        </small>
      </div>
    </>
  );
};

export default MscInput;
