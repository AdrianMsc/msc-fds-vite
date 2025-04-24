import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import MscComponentSnippet from "../../components/MscComponentSnippet/MscComponentSnippet";
import { codeActiveFilter, codeFilter } from "./constants";

const MscFilterPage = () => {
  const filters = [
    "Drill Bit Material",
    "Drill Point Angle",
    "Coating/Finish",
    "Point Type",
    "Cutting Direction",
  ];

  return (
    <ComponentLayout>
      <MscComponentSnippet code={codeFilter} className="mb-4">
        <div className="msc-top-filters-section">
          <h4 className="msc-top-filters-title">Refine your search</h4>
          <div className="msc-top-filters-container">
            {filters.map((filter, index) => (
              <button key={index} className="msc-top-filter group">
                <p>{filter}</p>
                <FontAwesomeIcon icon={faPlus} />
              </button>
            ))}
          </div>
        </div>
      </MscComponentSnippet>

      <MscComponentSnippet title="Active" code={codeActiveFilter}>
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
      </MscComponentSnippet>
    </ComponentLayout>
  );
};

export default MscFilterPage;
