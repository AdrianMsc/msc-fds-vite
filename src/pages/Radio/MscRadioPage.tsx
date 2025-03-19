import Codeblock from "../../layout/Codeblock";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout";

const MscRadioPage = () => {
  return (
    <ComponentLayout>
      <h3 className="pb-2">Default</h3>
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
      <div className="py-2">
        <Codeblock>
          {`
    <div class="msc-radio-container">
      <input id="radio-yes" type="radio" name="list-radio" class="msc-radio-label"/>
      <label for="radio-default" class="msc-radio-label">
        Yes
      </label>
    </div>
          `}
        </Codeblock>
      </div>

      <h3 className="pb-2">Radio Button Set</h3>
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
      <div className="py-2">
        <Codeblock>
          {`
    <ul class="msc-radio-horizontal-main-container">
      <li class="msc-radio-horizontal-container">
        <div class="msc-input-horizontal-container">
          <input
            id="horizontal-list-radio-license"
            type="radio"
            value=""
            name="list-radio"
            class="msc-input-horizontal"/>
          <label
            for="horizontal-list-radio-license"
            class="msc-input-horizontal-label">
              Yes
          </label>
        </div>
      </li>
      <li class="msc-radio-horizontal-container">
        <div class="msc-input-horizontal-container">
          <input
            id="horizontal-list-radio-license"
            type="radio"
            value=""
            name="list-radio"
            class="msc-input-horizontal"/>
          <label
            for="horizontal-list-radio-license"
            class="msc-input-horizontal-label">
            No
          </label>
        </div>
      </li>
    </ul>
          `}
        </Codeblock>
      </div>
    </ComponentLayout>
  );
};

export default MscRadioPage;
