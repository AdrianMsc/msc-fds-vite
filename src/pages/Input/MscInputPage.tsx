import Codeblock from "../../layout/Codeblock";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout";

const MscInputPage = () => {
  return (
    <ComponentLayout
      title="Input"
      category="Form"
      description="The Input component enables users to enter and edit text. It supports various data types and states, such as focused, disabled, and error. Customizable to fit the design system, it includes options for size, color, placeholder text, and validation messages. Commonly used in forms and search bars, it enhances user interaction and data entry."
    >
      <h3 className="mb-2">Default</h3>
      <div className="msc-input-wrapper">
        <input
          id="default"
          type="text"
          placeholder="Default"
          className="msc-input peer"
        />
        <label htmlFor="default" className="msc-input-label">
          Default
          <span className="text-error-red">*</span>
        </label>
      </div>
      <div className="my-2">
        <Codeblock>
          {`
    <div class="msc-input-wrapper">
      <input id="default" type="text" placeholder="Default" class="msc-input peer"/>
      <label for="default" class="msc-input-label">
        Default
        <span class="text-error-red">*</span>
      </label>
    </div>
          `}
        </Codeblock>
      </div>

      <h3 className="pb-2">Disabled</h3>
      <div className="msc-input-wrapper">
        <input
          id="disabled"
          disabled
          type="text"
          placeholder="Default"
          className="msc-input peer"
        />
        <label htmlFor="disabled" className="msc-input-label">
          Default
          <span className="text-error-red">*</span>
        </label>
      </div>
      <Codeblock>
        {`
    <div class="msc-input-wrapper">
      <input id="disabled" disabled type="text" placeholder="Default" class="msc-input peer"/>
      <label for="disabled" class="msc-input-label">
        Default
        <span class="text-error-red">*</span>
      </label>
    </div>
          `}
      </Codeblock>

      <h3 className="pb-2">Error</h3>
      <div className="msc-input-wrapper">
        <input
          id="error-example"
          type="text"
          placeholder="Default"
          className="msc-input peer"
        />
        <label htmlFor="error-example" className="msc-input-label">
          Error Example
          <span className="text-error-red">*</span>
        </label>
        <small className="msc-error-message">This is a required field </small>
      </div>
      <Codeblock>
        {`
    <div class="msc-input-wrapper">
      <input id="error-example" type="text" placeholder="Default" class="msc-input peer"/>
      <label for="error-example" class="msc-input-label">
        Error Example
        <span class="text-error-red">*</span>
      </label>
      <small class="msc-error-message">This is a required field </small>
    </div>
          `}
      </Codeblock>

      <h3 className="pb-2">Unit Default</h3>
      <div className="msc-input-unit-wrapper">
        <input
          id="field"
          type="number"
          placeholder="1"
          className="msc-input-unit order-2 peer"
        />
        <label htmlFor="field" className="msc-input-unit-label order-1">
          Length (ft){" "}
        </label>
      </div>
      <Codeblock>
        {`
    <div class="msc-input-unit-wrapper">
      <input id="field" type="number" placeholder="1" class="msc-input-unit order-2 peer"/>
      <label for="field" class="msc-input-unit-label order-1">Length (ft) </label>
    </div>
          `}
      </Codeblock>

      <h3 className="pb-2">Unit Disabled</h3>
      <div className="msc-input-unit-wrapper">
        <input
          id="field"
          type="number"
          disabled
          placeholder="1"
          className="msc-input-unit order-2 peer"
        />
        <label htmlFor="field" className="msc-input-unit-label order-1">
          Length (ft){" "}
        </label>
      </div>
      <Codeblock>
        {`
    <div class="msc-input-unit-wrapper">
      <input id="field" type="number" disabled placeholder="1" class="msc-input-unit order-2 peer"/>
      <label for="field" class="msc-input-unit-label order-1">Length (ft) </label>
    </div>
          `}
      </Codeblock>

      <h3 className="pb-2">Unit Error</h3>
      <div className="msc-input-unit-wrapper">
        <input
          id="field"
          type="number"
          placeholder="1"
          className="msc-input-unit order-2 peer"
        />
        <label htmlFor="field" className="msc-input-unit-label order-1">
          Length (ft){" "}
        </label>
      </div>
      <small className="msc-error-message tw-order-3">Error message </small>
      <Codeblock>
        {`
    <div class="msc-input-unit-wrapper">
      <input id="field" type="number" placeholder="1" class="msc-input-unit order-2 peer"/>
      <label for="field" class="msc-input-unit-label order-1">Length (ft) </label>
      <small class="msc-error-message tw-order-3">Error message </small>
    </div>
          `}
      </Codeblock>
    </ComponentLayout>
  );
};

export default MscInputPage;
