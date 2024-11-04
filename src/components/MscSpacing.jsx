const MscSpacing = ({ size }) => {
  return (
    <>
      <h2 className="mt-5">{size}px</h2>

      <div className="p-1 outline outline-slate-300 my-4 min-w-[200px]">
        <div className={`w-full h-[${size}px] bg-slate-300`}></div>
      </div>
    </>
  );
};

export default MscSpacing;
