import MscComponentSnippet from "../../components/MscComponentSnippet/MscComponentSnippet";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout";
import { codeCheckbox } from "./constants";

const MscCheckboxPage = () => {
  return (
    <ComponentLayout>
      <MscComponentSnippet code={codeCheckbox}>
        <div className="msc-checkbox-container">
          <input
            type="checkbox"
            id="checkbox-id"
            value="checkbox-value"
            className="msc-checkbox"
          />
          <label htmlFor="checkbox-id" className="msc-checkbox-label">
            Checkbox label
          </label>
        </div>
      </MscComponentSnippet>
    </ComponentLayout>
  );
};

export default MscCheckboxPage;
