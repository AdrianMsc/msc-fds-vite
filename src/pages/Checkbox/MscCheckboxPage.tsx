import Codeblock from "../../layout/Codeblock";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout";

const MscCheckboxPage = () => {
  return (
    <ComponentLayout>
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
      <div className="py-5">
        <Codeblock>
          {`
    <div class="msc-checkbox-container">
      <input
        type="checkbox"
        id="checkbox-id"
        value="checkbox-value"
        class="msc-checkbox"/>
      <label for="checkbox-id" class="msc-checkbox-label">
        Checkbox label
      </label>
    </div>
          `}
        </Codeblock>
      </div>
    </ComponentLayout>
  );
};

export default MscCheckboxPage;
