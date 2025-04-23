import MscComponentSnippet from "../../components/MscComponentSnippet/MscComponentSnippet";
import Codeblock from "../../layout/Codeblock";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout";
import { codeRadioDefault, codeRadioSet } from "./constants";

const MscRadioPage = () => {
  return (
    <ComponentLayout>
      <MscComponentSnippet
        title="Default"
        code={codeRadioDefault}
        className="mb-4"
      >
        <div className="flex gap-2">
          <div className="msc-radio-container">
            <input
              id="radio-yes"
              type="radio"
              name="list-radio"
              className="msc-radio-input"
            />
            <label htmlFor="radio-yes" className="msc-radio-label">
              Yes{" "}
            </label>
          </div>
          <div className="msc-radio-container">
            <input
              id="radio-no"
              type="radio"
              value=""
              name="list-radio"
              className="msc-radio-input"
            />
            <label htmlFor="radio-no" className="msc-radio-label">
              No{" "}
            </label>
          </div>
        </div>
      </MscComponentSnippet>

      <MscComponentSnippet
        title="Radio Button Set"
        code={codeRadioSet}
        className="mb-4"
      >
        <ul className="msc-radio-horizontal-main-container">
          <li className="msc-radio-horizontal-container">
            <div className="msc-input-horizontal-container">
              <input
                id="horizontal-list-radio-license"
                type="radio"
                value=""
                name="list-radio"
                className="msc-input-horizontal"
              />
              <label
                htmlFor="horizontal-list-radio-license"
                className="msc-input-horizontal-label"
              >
                Yes
              </label>
            </div>
          </li>
          <li className="msc-radio-horizontal-container">
            <div className="msc-input-horizontal-container">
              <input
                id="horizontal-list-radio-license"
                type="radio"
                value=""
                name="list-radio"
                className="msc-input-horizontal"
              />
              <label
                htmlFor="horizontal-list-radio-license"
                className="msc-input-horizontal-label"
              >
                No
              </label>
            </div>
          </li>
        </ul>
      </MscComponentSnippet>
    </ComponentLayout>
  );
};

export default MscRadioPage;
