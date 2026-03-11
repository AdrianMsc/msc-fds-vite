import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

type Variant = "solid" | "outline" | "transparent";
type Size = "default" | "small";

interface MscButtonProps {
  label?: string;
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  icon?: IconDefinition;
  disabled?: boolean;
}

export const MscButton: React.FC<MscButtonProps> = ({
  label = "",
  variant = "solid",
  size = "default",
  loading = false,
  icon,
  disabled = false,
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

  const className = `${variantClasses[variant]} ${variantSizes[size]}`;

  return (
    <button className={className} disabled={disabled}>
      {loading === false ? (
        icon && label ? (
          <>
            <FontAwesomeIcon icon={icon as import("@fortawesome/fontawesome-svg-core").IconProp} />
            <span className="ml-2">{label}</span>
          </>
        ) : label === "" && icon ? (
          <FontAwesomeIcon icon={icon as import("@fortawesome/fontawesome-svg-core").IconProp} />
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
