const MscShadows = ({ size }) => {
  const shadowSizes = {
    small: "shadow-sm",
    default: "shadow",
    medium: "shadow-md",
    large: "shadow-lg",
    xLarge: "shadow-xl",
    xxLarge: "shadow-xl",
    inner: "shadow-inner",
  };

  return (
    <>
      <div
        className={`size-[128px] rounded-md ${shadowSizes[size]} text-fuchsia-600 text-center content-center font-bold`}
      >
        .{shadowSizes[size]}
      </div>
    </>
  );
};

export default MscShadows;
