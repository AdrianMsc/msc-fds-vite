export const codeDropDownDefault = `
<div id="dropdown" class="dropdown-container">
  <button class="dropdown-button">
    <p class="dropdown-placeholder">
      Select a Buyer <span class="text-red-600">*</span>
    </p>
    <img src="../assets/caret-down.svg" />
  </button>
  <div id="options" class="dropdown-options-container hidden">
    <div class="dropdown-option">Buyer 1</div>
    <div class="dropdown-option">Buyer 2</div>
    <div class="dropdown-option">Buyer 3</div>
  </div>
</div>
  <!-- JS -->
<script>
let numDropdown = document.getElementById("numDropdown");
let numOptions = document.getElementById("numOptions");

numDropdown.addEventListener("click", function () {
  numDropdown.classList.toggle("dropdown-active");
  numOptions.classList.toggle("hidden");
});
</script>
      `;
export const codeDropDownLabel = `
<div class="dropdown-label">
  <p>Label</p>
  <div id="dropdownTwo" class="dropdown-container">
    <button class="dropdown-button">
      <p class="dropdown-placeholder">
        Select a Buyer <span class="text-red-600">*</span>
      </p>
      <img src="../assets/caret-down.svg" />
    </button>
    <div id="dropdownTwoOptions" class="dropdown-options-container hidden">
      <div class="dropdown-option">Buyer 1</div>
      <div class="dropdown-option">Buyer 2</div>
      <div class="dropdown-option">Buyer 3</div>
    </div>
  </div>
</div>
<!-- JS -->
<script>
let dropdownTwo = document.getElementById("dropdownTwo");
let dropdownTwoOptions = document.getElementById("dropdownTwoOptions");

dropdownTwo.addEventListener("click", function () {
  dropdownTwo.classList.toggle("dropdown-active");
  dropdownTwoOptions.classList.toggle("hidden");
});
</script>
      `;

export const codeDrowDownLabelOnTop = `
<div id="dropdownThree" class="dropdown-container">
  <p id="labelTop" class="dropdown-label-top hidden">
    Select a Buyer
  </p>
  <button class="dropdown-button">
    <p id="dropPlaceholder" class="dropdown-placeholder">
      Select a Buyer
    </p>
    <img src="../assets/caret-down.svg" />
  </button>
  <div id="dropdownThreeOptions" class="dropdown-options-container hidden">
    <div id="dropOption" class="dropdown-option">Buyer 1</div>
  </div>
</div>
<!-- JS -->
<script>
let dropdownThree = document.getElementById("dropdownThree");
let dropdownThreeOptions = document.getElementById("dropdownThreeOptions");
let dropOption = document.getElementById("dropOption");
let labelTop = document.getElementById("labelTop");
let dropPlaceholder = document.getElementById("dropPlaceholder");

dropdownThree.addEventListener("click", function () {
  dropdownThree.classList.toggle("dropdown-active");
  dropdownThreeOptions.classList.toggle("hidden");
});
dropOption.addEventListener("click", function () {
  labelTop.classList.toggle("hidden");
  dropPlaceholder.classList.toggle("text-transparent");
});
</script>
      `;

export const codeDropDownDoubleLine = `
<div id="double-dropdown" class="msc-double-dropdown-container">
  <button class="dropdown-button">
    <div class="text-left">
      <p class="text-sm">Est. <b>Wed, Apr 03</b> from PA</p>
      <p class="text-xs">Standard UPS Ground</p>
    </div>
    <img src="../assets/caret-down.svg" />
  </button>
  <div
    id="double-options"
    class="double-dropdown-options-container hidden"
  >
    <div class="double-dropdown-option text-left">
      <p class="text-sm">Est. <b>Thu, Apr 04</b> from PA</p>
      <p class="text-xs">UPS Ground Freight Saver</p>
    </div>
  </div>
</div>
<!-- JS -->
<script>
  let doubleDropdown = document.getElementById("double-dropdown");
  let doubleOptions = document.getElementById("double-options");

  doubleDropdown.addEventListener("click", function () {
    doubleDropdown.classList.toggle("double-dropdown-active");
    doubleOptions.classList.toggle("hidden");
  });
</script>
      `;

export const codeDropDownNumeric = `
<div id="numDropdown" class="numeric-dropdown-container">
  <div class="numeric-dropdown">
    <input type="text" placeholder="25" class="numeric-dropdown-input" />
    <img src="../assets/caret-down.svg" />
  </div>
  <div id="numOptions" class="numeric-dropdown-options-container hidden">
    <div class="numeric-dropdown-options">25</div>
    <div class="numeric-dropdown-options">50</div>
    <div class="numeric-dropdown-options">75</div>
    <div class="numeric-dropdown-options">100</div>
  </div>
</div>
<!-- JS -->
<script>
let numDropdown = document.getElementById("numDropdown");
let numOptions = document.getElementById("numOptions");

numDropdown.addEventListener("click", function () {
  numDropdown.classList.toggle("dropdown-active");
  numOptions.classList.toggle("hidden");
});
</script>
      `;

export const codeDrowpDownError = `
<div>
  <div id="dropdownDisabled" class="dropdown-container dropdown-error">
    <button class="dropdown-button">
      <p class="dropdown-placeholder dropdown-error">Select a Buyer *</p>
      <img src="../assets/caret-down-error.svg" />
    </button>
  </div>
  <p class="dropdown-error-message">Error Message</p>
</div>
      `;

export const codeDropDownDisabled = `
<div class="dropdown-label">
  <p>Label</p>
  <div id="dropdownDisabled" class="dropdown-container">
    <button class="dropdown-button">
      <p class="dropdown-placeholder">
        Select a Buyer <span class="text-red-600">*</span>
      </p>
      <img src="../assets/caret-down.svg" />
    </button>
  </div>
</div>
      `;
