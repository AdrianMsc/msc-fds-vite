import MscComponentSnippet from "../../components/MscComponentSnippet/MscComponentSnippet";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout";
import {
  codeInputDefault,
  codeInputDisabled,
  codeInputError,
  codeInputUnitDefault,
  codeInputUnitDisabled,
  codeInputUnitError,
} from "./constants";

const MscInputPage = () => {
  return (
    <ComponentLayout>
      <MscComponentSnippet
        title="Default"
        code={codeInputDefault}
        className="mb-4"
      >
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
      </MscComponentSnippet>

      <MscComponentSnippet
        title="Disabled"
        code={codeInputDisabled}
        className="mb-4"
      >
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
      </MscComponentSnippet>

      <MscComponentSnippet title="Error" code={codeInputError} className="mb-4">
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
      </MscComponentSnippet>

      <MscComponentSnippet
        title="Unit Default"
        code={codeInputUnitDefault}
        className="mb-4"
      >
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
      </MscComponentSnippet>

      <MscComponentSnippet
        title="Unit Disabled"
        code={codeInputUnitDisabled}
        className="mb-4"
      >
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
      </MscComponentSnippet>

      <MscComponentSnippet
        title="Unit Error"
        code={codeInputUnitError}
        className="mb-4"
      >
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
          <small className="msc-error-message tw-order-3">Error message </small>
        </div>
      </MscComponentSnippet>
    </ComponentLayout>
  );
};

export default MscInputPage;
