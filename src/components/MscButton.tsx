type Variant = "solid" | "outline" | "transparent";
type Size = "default" | "small";

interface MscButtonProps {
  label?: string;
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  icon?: string;
}

export const MscButton: React.FC<MscButtonProps> = ({
  label = "Button",
  variant = "solid",
  size = "default",
  loading = false,
  icon = "",
}) => {
  const variantClasses: Record<Variant, string> = {
    solid: "msc-btn msc-btn-blue-solid",
    outline: "msc-btn msc-btn-blue-outline",
    transparent: "msc-btn msc-btn-transparent",
  };

  const variantSizes: Record<Size, string> = {
    default: "",
    small: "msc-btn-sm",
  };

  const ico = <i className={`${icon} mr-2`}></i>;

  const className = `${variantClasses[variant]} ${variantSizes[size]}`;

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
