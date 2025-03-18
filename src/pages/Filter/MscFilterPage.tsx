import Codeblock from "../../layout/Codeblock";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout";

const MscFilterPage = () => {
  const filters = [
    "Drill Bit Material",
    "Drill Point Angle",
    "Coating/Finish",
    "Point Type",
    "Cutting Direction",
  ];

  return (
    <ComponentLayout
      name="Filter"
      category="Action"
      description="The Filter component allows users to refine and narrow down data sets based on specific criteria. It provides a user-friendly interface for selecting and applying filters, ensuring that users can quickly find the information they need. This component typically includes options such as dropdowns, checkboxes, and sliders to accommodate various filtering needs. It is designed to be highly customizable and easily integrated into different parts of the application."
    >
      <div className="msc-top-filters-section">
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
      <div className="py-5">
        <Codeblock>
          {`
  <div class="msc-top-filters-section">
    <h4 class="msc-top-filters-title">Refine your search</h4>
    <div class="msc-top-filters-container">
      <button class="msc-top-filter group">
        <p>Drill Bit Material</p>
        <i class="fa-solid fa-plus group-hover:text-black"></i>
      </button>
      <button class="msc-top-filter group">
        <p>Drill Point Angle</p>
        <i class="fa-solid fa-plus group-hover:text-black"></i>
      </button>
      <button class="msc-top-filter group">
        <p>Coating/Finish</p>
        <i class="fa-solid fa-plus group-hover:text-black"></i>
      </button>
      <button class="msc-top-filter group">
        <p>Point Type</p>
        <i class="fa-solid fa-plus group-hover:text-black"></i>
      </button>
      <button class="msc-top-filter group">
        <p>Cutting Direction</p>
        <i class="fa-solid fa-plus group-hover:text-black"></i>
      </button>
    </div>
  </div>
          `}
        </Codeblock>
      </div>

      <h3 className="mb-2">Active</h3>
      <div className="msc-top-filters-section">
        <h4 className="msc-top-filters-title">Refine your search</h4>
        <div className="msc-top-filters-container">
          <button className="msc-top-filter">
            <p>Drill Bit Material</p>
            <span className="msc-top-filter-badge">3</span>
          </button>
          <button className="msc-top-filter">
            <p>Drill Point Angle</p>
            <span className="msc-top-filter-badge">3</span>
          </button>
          <button className="msc-top-filter">
            <p>Coating/Finish</p>
            <span className="msc-top-filter-badge">3</span>
          </button>
          <button className="msc-top-filter">
            <p>Point Type</p>
            <span className="msc-top-filter-badge">3</span>
          </button>
          <button className="msc-top-filter">
            <p>Cutting Direction</p>
            <span className="msc-top-filter-badge">3</span>
          </button>
        </div>
      </div>

      <div className="py-5">
        <Codeblock>
          {`
  <div class="msc-top-filters-section">
    <h4 class="msc-top-filters-title">Refine your search</h4>
    <div class="msc-top-filters-container">
      <button class="msc-top-filter">
        <p>Drill Bit Material</p>
        <span class="msc-top-filter-badge">3</span>
      </button>
      <button class="msc-top-filter">
        <p>Drill Point Angle</p>
        <span class="msc-top-filter-badge">3</span>
      </button>
      <button class="msc-top-filter">
        <p>Coating/Finish</p>
        <span class="msc-top-filter-badge">3</span>
      </button>
      <button class="msc-top-filter">
        <p>Point Type</p>
        <span class="msc-top-filter-badge">3</span>
      </button>
      <button class="msc-top-filter">
        <p>Cutting Direction</p>
        <span class="msc-top-filter-badge">3</span>
      </button>
    </div>
  </div>
          `}
        </Codeblock>
      </div>
    </ComponentLayout>
  );
};

export default MscFilterPage;
