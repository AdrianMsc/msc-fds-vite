const filters = [
  "Drill Bit Material",
  "Drill Point Angle",
  "Coating/Finish",
  "Point Type",
  "Cutting Direction",
];

const MscTopFilter = () => {
  return (
    <div className="msc-top-filters-section !w-screen">
      <h4 className="msc-top-filters-title">Refine your search</h4>
      <div className="msc-top-filters-container">
        {filters.map((filter, index) => (
          <button key={index} className="msc-top-filter group">
            <p>{filter}</p>
            <i className="fa-solid fa-plus group-hover:text-black"></i>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MscTopFilter;
