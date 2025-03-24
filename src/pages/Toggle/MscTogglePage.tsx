import { MscToggle } from "../../components";
import Codeblock from "../../layout/Codeblock";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout";

const MscTogglePage = () => {
  return (
    <ComponentLayout>
      <h3 className="mb-2">Default</h3>
      <MscToggle variant="Default" />
      <div className="py-2">
        <Codeblock>
          {`
  <label for="toggleOne" class="msc-toggle">
    <div class="relative">
      <input 
        type="checkbox" 
        id="toggleOne" 
        checked 
        class="peer sr-only"/>
      <div class="msc-toggle-container"></div>
      <div class="msc-toggle-dot"></div>
    </div>
  </label>
          `}
        </Codeblock>
      </div>

      <h3 className="mb-2">With Text</h3>
      <MscToggle variant="With Text" />
      <div className="py-2">
        <Codeblock>
          {`
  <label for="toggleTwo" class="msc-toggle">
    <div class="relative">
      <input 
        type="checkbox" 
        id="toggleTwo" 
        checked 
        class="peer sr-only"/>
      <div
        before="Yes"
        after="No"
        class="msc-toggle-container-text"></div>
      <div class="msc-toggle-dot-text"></div>
    </div>
  </label>
          `}
        </Codeblock>
      </div>

      <h3 className="mb-2">With Text Disabled</h3>
      <MscToggle variant="Disabled" />
      <div className="py-2">
        <Codeblock>
          {`
  <label for="toggleDisabled" class="msc-toggle">
    <div class="relative">
      <input 
        type="checkbox" 
        id="toggleDisabled" 
        checked 
        disabled
        class="peer sr-only"/>
      <div
        before="Yes"
        after="No"
        class="msc-toggle-container-disabled"></div>
      <div class="msc-toggle-dot-disabled"></div>
    </div>
  </label>
          `}
        </Codeblock>
      </div>

      <h3 className="mb-2">Address Type</h3>
      <MscToggle variant="Address" />
      <div className="py-2">
        <Codeblock>
          {`
  <label for="toggleAddress" class="msc-toggle">
    <div class="relative">
      <input 
        type="checkbox" 
        id="toggleAddress"
        class="peer sr-only"/>
      <div
        before="Residential"
        after="Commercial"
        class="msc-toggle-container-text-lg"></div>
      <div
        before="Residential"
        after="Commercial"
        class="msc-toggle-dot-text-lg"></div>
    </div>
  </label>
          `}
        </Codeblock>
      </div>

      <h3 className="mb-2">Units</h3>
      <MscToggle variant="Units" />
      <div className="py-2">
        <Codeblock>
          {`
  <label for="toggleAddress" class="msc-toggle">
    <div class="relative">
      <input 
        type="checkbox" 
        id="toggleAddress"
        class="peer sr-only"/>
      <div
        before="Decimal Inch"
        after="MM"
        class="msc-toggle-container-text-lg after:right-10"></div>
      <div
        before="Decimal Inch"
        after="MM"
        class="msc-toggle-dot-text-lg after:right-6"></div>
    </div>
  </label>
          `}
        </Codeblock>
      </div>

      <h3 className="mb-2">Tolerance</h3>
      <MscToggle variant="Tolerance" />
      <div className="py-2">
        <Codeblock>
          {`
  <fieldset>
    <div class="msc-label-toggle-container">
      <p class="msc-label-triple-toggle">Tolerance</p>
      <img src="..." class="msc-toggle-icon" />
      <div class="msc-triple-toggle-container">
        <span id="toleranceDot" class="msc-triple-toggle-dot"></span>
        <label for="allTolerance" class="msc-triple-toggle-input-label"> 
          <input
            type="radio"
            id="allTolerance"
            name="tolerance"
            value="allTolerance"
            class="peer sr-only"
            checked
          /><span class="msc-triple-toggle-text">All</span>
        </label>
        <label for="plus" class="msc-triple-toggle-input-label">
          <input
            type="radio"
            id="plus"
            name="tolerance"
            value="plus"
            class="peer sr-only"
          />
          <span class="msc-triple-toggle-text">Super</span>
        </label>
        <label for="minus" class="msc-triple-toggle-input-label"
          ><input
            type="radio"
            id="minus"
            name="tolerance"
            value="minus"
            class="peer sr-only"
          /><span class="msc-triple-toggle-text">Minus</span>
        </label>
      </div>
    </div>
  </fieldset>
<!-- JS -->
  <script>
    document.addEventListener("DOMContentLoaded", function () {
      function updateSliderPosition(toggleContainer) {
        let slider = toggleContainer.querySelector(".msc-triple-toggle-dot");
        let checkedRadio = toggleContainer.querySelector(
          'input[type="radio"]:checked'
        );
        let radioIndex = Array.from(
          checkedRadio.parentNode.parentNode.children
        ).indexOf(checkedRadio.parentNode);
        let positions = ["left-[4px]", "left-1/3", "left-[130px]"];
        slider.className =
          "msc-triple-toggle-dot " + positions[radioIndex - 1];
      }
      document
        .querySelectorAll(".msc-triple-toggle-container")
        .forEach(function (toggleContainer) {
          toggleContainer
            .querySelectorAll(".msc-triple-toggle-input-label input")
            .forEach(function (radio) {
              radio.addEventListener("change", function () {
                updateSliderPosition(toggleContainer);
              });
            });
          updateSliderPosition(toggleContainer);
        });
    });
  </script>
          `}
        </Codeblock>
      </div>

      <h3 className="mb-2">Class</h3>
      <MscToggle variant="Class" />
      <div className="py-2">
        <Codeblock>
          {`
  <fieldset>
    <div class="msc-label-toggle-container">
      <p class="msc-label-triple-toggle">Class</p>
      <img src="..." class="msc-toggle-icon" />
      <div class="msc-triple-toggle-container">
        <span id="classDot" class="msc-triple-toggle-dot"></span>
        <label for="allClass" class="msc-triple-toggle-input-label"> 
          <input
            type="radio"
            id="allClass"
            name="class"
            value="allClass"
            class="peer sr-only"
            checked
          /><span class="msc-triple-toggle-text">All</span>
        </label>
        <label for="plus" class="msc-triple-toggle-input-label">
          <input
            type="radio"
            id="plus"
            name="class"
            value="plus"
            class="peer sr-only"
          />
          <span class="msc-triple-toggle-text">X</span>
        </label>
        <label for="minus" class="msc-triple-toggle-input-label"
          ><input
            type="radio"
            id="minus"
            name="class"
            value="minus"
            class="peer sr-only"
          /><span class="msc-triple-toggle-text">ZZ</span>
        </label>
      </div>
    </div>
  </fieldset>
<!-- JS -->
  <script>
    document.addEventListener("DOMContentLoaded", function () {
      function updateSliderPosition(toggleContainer) {
        let slider = toggleContainer.querySelector(".msc-triple-toggle-dot");
        let checkedRadio = toggleContainer.querySelector(
          'input[type="radio"]:checked'
        );
        let radioIndex = Array.from(
          checkedRadio.parentNode.parentNode.children
        ).indexOf(checkedRadio.parentNode);
        let positions = ["left-[4px]", "left-1/3", "left-[130px]"];
        slider.className =
          "msc-triple-toggle-dot " + positions[radioIndex - 1];
      }
      document
        .querySelectorAll(".msc-triple-toggle-container")
        .forEach(function (toggleContainer) {
          toggleContainer
            .querySelectorAll(".msc-triple-toggle-input-label input")
            .forEach(function (radio) {
              radio.addEventListener("change", function () {
                updateSliderPosition(toggleContainer);
              });
            });
          updateSliderPosition(toggleContainer);
        });
    });
  </script>
          `}
        </Codeblock>
      </div>
    </ComponentLayout>
  );
};

export default MscTogglePage;
