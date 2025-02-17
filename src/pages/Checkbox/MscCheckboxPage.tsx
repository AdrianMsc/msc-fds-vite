import Codeblock from "../../layout/Codeblock";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout";

const MscCheckboxPage = () => {
  return (
    <ComponentLayout
      title="Checkbox"
      category="Form"
      description="The Checkbox component allows users to select one or more options from a set. It provides a simple and intuitive way to make multiple selections, with each checkbox representing a binary choice. This component is designed to be easily recognizable and accessible, supporting various states such as checked, unchecked, and indeterminate. It can be customized to fit the design system, including size, color, and label positioning. Checkboxes are commonly used in forms, settings, and filters to enhance user interaction and data input."
    >
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
