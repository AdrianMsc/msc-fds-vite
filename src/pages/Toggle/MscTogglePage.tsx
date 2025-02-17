import Codeblock from "../../layout/Codeblock";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout";

const MscTogglePage = () => {
  return (
    <ComponentLayout
      title="Toggle (WIP Migration 🔨)"
      category="Form"
      description="The Toggle component allows users to switch between two states, like on and off. It's customizable for size, color, and labels, and supports states like enabled, disabled, and loading."
    >
      <h3 className="mb-2">Default</h3>
      <label htmlFor="toggleOne" className="msc-toggle">
        <div className="relative">
          <input
            type="checkbox"
            id="toggleOne"
            defaultChecked={true}
            className="peer sr-only"
          />
          <div className="msc-toggle-container"></div>
          <div className="msc-toggle-dot"></div>
        </div>
      </label>
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
      <label htmlFor="toggleTwo" className="msc-toggle">
        <div className="relative">
          <input
            type="checkbox"
            id="toggleTwo"
            defaultChecked={true}
            className="peer sr-only"
          />
          <div className="msc-toggle-container-text !before:content-['Yes'] !after:content-['No']"></div>
          <div className="msc-toggle-dot-text"></div>
        </div>
      </label>
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
      <label htmlFor="toggleTwo" className="msc-toggle">
        <div className="relative">
          <input
            type="checkbox"
            id="toggleTwo"
            defaultChecked={true}
            className="peer sr-only"
          />
          <div className="msc-toggle-container-text !before:content-['Yes'] !after:content-['No']"></div>
          <div className="msc-toggle-dot-text"></div>
        </div>
      </label>
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

      <h3 className="mb-2">Address Type</h3>
      <label htmlFor="toggleTwo" className="msc-toggle">
        <div className="relative">
          <input
            type="checkbox"
            id="toggleTwo"
            defaultChecked={true}
            className="peer sr-only"
          />
          <div className="msc-toggle-container-text !before:content-['Yes'] !after:content-['No']"></div>
          <div className="msc-toggle-dot-text"></div>
        </div>
      </label>
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

      <h3 className="mb-2">Units</h3>
      <label htmlFor="toggleTwo" className="msc-toggle">
        <div className="relative">
          <input
            type="checkbox"
            id="toggleTwo"
            defaultChecked={true}
            className="peer sr-only"
          />
          <div className="msc-toggle-container-text !before:content-['Yes'] !after:content-['No']"></div>
          <div className="msc-toggle-dot-text"></div>
        </div>
      </label>
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

      <h3 className="mb-2">Tolerance</h3>
      <label htmlFor="toggleTwo" className="msc-toggle">
        <div className="relative">
          <input
            type="checkbox"
            id="toggleTwo"
            defaultChecked={true}
            className="peer sr-only"
          />
          <div className="msc-toggle-container-text !before:content-['Yes'] !after:content-['No']"></div>
          <div className="msc-toggle-dot-text"></div>
        </div>
      </label>
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

      <h3 className="mb-2">Class</h3>
      <label htmlFor="toggleTwo" className="msc-toggle">
        <div className="relative">
          <input
            type="checkbox"
            id="toggleTwo"
            defaultChecked={true}
            className="peer sr-only"
          />
          <div className="msc-toggle-container-text !before:content-['Yes'] !after:content-['No']"></div>
          <div className="msc-toggle-dot-text"></div>
        </div>
      </label>
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
    </ComponentLayout>
  );
};

export default MscTogglePage;
