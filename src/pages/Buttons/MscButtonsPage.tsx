import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout";
import { faDownload, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import MscComponentSnippet from "../../components/MscComponentSnippet/MscComponentSnippet";
import { MscButton } from "../../components";
import {
  buttonIcon,
  buttonLoadingState,
  buttonTextIcon,
  defaultButtons,
  disabledButtons,
} from "./constants";

const MscButtonsPage = () => {
  return (
    <ComponentLayout>
      <MscComponentSnippet
        title="Default Buttons"
        code={defaultButtons}
        className="mb-4"
      >
        <div className="msc-component-container-row">
          <MscButton label="Blue solid" variant="solid" />
          <MscButton label="Blue outline" variant="outline" />
          <MscButton label="Text Only" variant="transparent" />
          <MscButton label="Small button" variant="solid" size="small" />
        </div>
      </MscComponentSnippet>

      <MscComponentSnippet
        title="Disabled Buttons"
        code={disabledButtons}
        className="mb-4"
      >
        <div className="msc-component-container-row">
          <MscButton label="Blue solid" variant="solid" disabled />
          <MscButton label="Blue outline" variant="outline" disabled />
          <MscButton label="Text Only" variant="transparent" disabled />
          <MscButton
            label="Small button"
            variant="solid"
            size="small"
            disabled
          />
        </div>
      </MscComponentSnippet>

      <MscComponentSnippet
        title="Button with icon"
        code={buttonTextIcon}
        className="mb-4"
      >
        <div className="msc-component-container-row">
          <MscButton label="Primary" variant="solid" icon={faDownload} />
          <MscButton label="Secondary" variant="outline" icon={faDownload} />
          <MscButton label="Tertiary" variant="transparent" icon={faDownload} />
        </div>
      </MscComponentSnippet>

      <MscComponentSnippet
        title="Button loading state"
        code={buttonLoadingState}
        className="mb-4"
      >
        <div className="msc-component-container-row">
          <MscButton label="Primary" variant="solid" loading={true} />
          <MscButton label="Secondary" variant="outline" loading={true} />
          <MscButton label="Tertiary" variant="transparent" loading={true} />
        </div>
      </MscComponentSnippet>

      <MscComponentSnippet
        title="Icon button"
        code={buttonIcon}
        className="mb-4"
      >
        <div className="flex items-center ">
          <table className="border-separate border-spacing-5 text-center">
            <tbody>
              <tr className="text-[14px]">
                <th>Button</th>
                <td>Default</td>
                <td>Hover</td>
                <td>Focused</td>
                <td>Disabled</td>
              </tr>
              <tr>
                <th>LG</th>
                <td>
                  <button className="msc-icon-button-lg">
                    <FontAwesomeIcon icon={faThumbsUp} />
                  </button>
                </td>
                <td>
                  <button className="msc-icon-button-lg bg-off_white rounded-full">
                    <FontAwesomeIcon icon={faThumbsUp} />
                  </button>
                </td>
                <td>
                  <button className="msc-icon-button-lg bg-monochromes-grey_xlight hover:bg-monochromes-grey_xlight">
                    <FontAwesomeIcon icon={faThumbsUp} />
                  </button>
                </td>
                <td>
                  <button className="msc-icon-button-lg" disabled>
                    <FontAwesomeIcon icon={faThumbsUp} />
                  </button>
                </td>
              </tr>
              <tr>
                <th>MD</th>
                <td>
                  <button className="msc-icon-button">
                    <FontAwesomeIcon icon={faThumbsUp} />
                  </button>
                </td>
                <td>
                  <button className="msc-icon-button bg-off_white rounded-full">
                    <FontAwesomeIcon icon={faThumbsUp} />
                  </button>
                </td>
                <td>
                  <button className="msc-icon-button bg-monochromes-grey_xlight hover:bg-monochromes-grey_xlight rounded-full">
                    <FontAwesomeIcon icon={faThumbsUp} />
                  </button>
                </td>
                <td>
                  <button className="msc-icon-button" disabled>
                    <FontAwesomeIcon icon={faThumbsUp} />
                  </button>
                </td>
              </tr>
              <tr>
                <th>SM</th>
                <td>
                  <button className="msc-icon-button-sm">
                    <FontAwesomeIcon icon={faThumbsUp} />
                  </button>
                </td>
                <td>
                  <button className="msc-icon-button-sm bg-off_white rounded-full">
                    <FontAwesomeIcon icon={faThumbsUp} />
                  </button>
                </td>
                <td>
                  <button className="msc-icon-button-sm bg-monochromes-grey_xlight hover:bg-monochromes-grey_xlight rounded-full">
                    <FontAwesomeIcon icon={faThumbsUp} />
                  </button>
                </td>
                <td>
                  <button className="msc-icon-button-sm" disabled>
                    <FontAwesomeIcon icon={faThumbsUp} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </MscComponentSnippet>
    </ComponentLayout>
  );
};

export default MscButtonsPage;
