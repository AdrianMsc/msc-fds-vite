interface Props {
  label?: string;
  variant?: "default" | "text" | "drop";
  size?: "default" | "small";
}

export const MscLink = ({
  label = "Link",
  variant = "default",
  size = "default",
}: Props) => {
  const variantClasses = {
    default: "msc-link",
    text: "msc-text-link",
    drop: "msc-dd-link",
  };

  const variantSizes = {
    default: "",
    small: "-sm",
  };

  const className = `${variantClasses[variant] || variantClasses.default}${
    variantSizes[size] || variantSizes.default
  }`;

  return (
    <a href="#" className={className}>
      {variant !== "drop" ? (
        <>{label}</>
      ) : (
        <>
          <span id="dd-text">{label}</span>
          <svg
            id="dd-image"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="msc-dd-link-icon"
          >
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
          </svg>
        </>
      )}
    </a>
  );
};

export default MscLink;
