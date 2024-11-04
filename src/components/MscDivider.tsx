interface Props {
  variant?: string;
}

const MscDivider = ({ variant = "horizontal_gray" }: Props) => {
  const variantClasses = {
    horizontal_gray: "msc-h-divider-gray",
    horizontal_blue: "msc-h-divider-blue",
    vertical_gray: "msc-v-divider-gray",
    vertical_blue: "msc-v-divider-blue",
  };

  const className = `${variantClasses[variant]}`;

  return (
    <div className="flex size-[400px] items-center justify-center py-3 px-4">
      <div className={className}></div>
    </div>
  );
};

export default MscDivider;
