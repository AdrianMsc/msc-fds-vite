export const MscButton = ({
  label = "Button",
  variant = "solid",
  size = "default",
  loading = false,
  icon = "",
}) => {
  const variantClasses = {
    solid: "msc-btn msc-btn-blue-solid",
    outline: "msc-btn msc-btn-blue-outline",
    transparent: "msc-btn msc-btn-transparent",
  };

  const variantSizes = {
    default: "",
    small: "msc-btn-sm",
  };

  const ico = <i className={`${icon} mr-2`}></i>;

  const className = `${variantClasses[variant] || variantClasses.solid} ${
    variantSizes[size] || variantSizes.default
  }`;

  return (
    <button className={className}>
      {loading === false ? (
        icon && icon.trim() !== "" && !icon.includes("none") ? (
          <span>
            {ico}
            {label}
          </span>
        ) : (
          label
        )
      ) : (
        <div className="msc-btn-dots-container">
          {[1, 2, 3].map((e) => (
            <div key={e} className={`msc-btn-dot${e}`}></div>
          ))}
        </div>
      )}
    </button>
  );
};

export default MscButton;
