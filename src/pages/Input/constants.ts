export const codeInputDefault = `
    <div class="msc-input-wrapper">
      <input id="default" type="text" placeholder="Default" class="msc-input peer"/>
      <label for="default" class="msc-input-label">
        Default
        <span class="text-error-red">*</span>
      </label>
    </div>
          `;

export const codeInputDisabled = `
        <div class="msc-input-wrapper">
          <input id="disabled" disabled type="text" placeholder="Default" class="msc-input peer"/>
          <label for="disabled" class="msc-input-label">
            Default
            <span class="text-error-red">*</span>
          </label>
        </div>
`;

export const codeInputError = `
        <div class="msc-input-wrapper">
          <input id="error-example" type="text" placeholder="Default" class="msc-input peer"/>
          <label for="error-example" class="msc-input-label">
            Error Example
            <span class="text-error-red">*</span>
          </label>
          <small class="msc-error-message">This is a required field </small>
        </div>
      `;

export const codeInputUnitDefault = `
        <div class="msc-input-unit-wrapper">
          <input id="field" type="number" placeholder="1" class="msc-input-unit order-2 peer"/>
          <label for="field" class="msc-input-unit-label order-1">Length (ft) </label>
        </div>
      `;

export const codeInputUnitDisabled = `
        <div class="msc-input-unit-wrapper">
          <input id="field" type="number" disabled placeholder="1" class="msc-input-unit order-2 peer"/>
          <label for="field" class="msc-input-unit-label order-1">Length (ft) </label>
        </div>
      `;

export const codeInputUnitError = `
        <div class="msc-input-unit-wrapper">
          <input id="field" type="number" placeholder="1" class="msc-input-unit order-2 peer"/>
          <label for="field" class="msc-input-unit-label order-1">Length (ft) </label>
          <small class="msc-error-message tw-order-3">Error message </small>
        </div>
      `;
