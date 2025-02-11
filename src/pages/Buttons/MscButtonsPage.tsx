import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Codeblock from "../../layout/Codeblock";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout";
import {
  faDownload,
  faPrint,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

const MscButtonsPage = () => {
  return (
    <ComponentLayout title="Button" category="Action" description="">
      <div>
        <h2 className="font-bold text-2xl mb-2">Default Buttons</h2>
        <div className="msc-component-container-row">
          <button className="msc-btn msc-btn-blue-solid">Blue Solid</button>
          <button className="msc-btn msc-btn-blue-outline">Blue Outline</button>
          <button className="msc-btn msc-btn-transparent">Text Only</button>
          <button className="msc-btn msc-btn-blue-solid msc-btn-sm">
            Small Button
          </button>
        </div>
        <div className="max-w-[1500px] mt-5">
          <Codeblock>{`
      <!-- Primary -->        
      <button className="msc-btn msc-btn-blue-solid">Blue Solid</button>
      <!-- Secondary -->
      <button className="msc-btn msc-btn-blue-outline">Blue Outline</button>
      <!-- Tertiary -->
      <button className="msc-btn msc-btn-blue-transparent">Text Only</button>
      <!-- Small -->        
      <button className="msc-btn msc-btn-blue-solid msc-btn-sm">Small Button</button>
          `}</Codeblock>
        </div>

        <div className="max-w-screen-2xl mx-auto">
          <h2 className="font-bold text-2xl mb-2">Disabled</h2>
          <div className="msc-component-container-row">
            <button disabled className="msc-btn msc-btn-blue-solid">
              Primary
            </button>
            <button disabled className="msc-btn msc-btn-blue-outline">
              Secondary
            </button>
            <button disabled className="msc-btn msc-btn-transparent">
              Tertiary
            </button>
            <button
              disabled
              className="msc-btn disabled:msc-btn-blue-solid msc-btn-sm"
            >
              Small
            </button>
          </div>
          <div className="max-w-[1500px] mt-5">
            <Codeblock>
              {`
      <!-- Primary -->        
      <button disabled class="msc-btn msc-btn-blue-solid">Primary</button>
      <!-- Secondary -->
      <button disabled class="msc-btn msc-btn-blue-outline">Secondary</button>
      <!-- Tertiary -->
      <button disabled class="msc-btn msc-btn-transparent">Tertiary</button>
            `}
            </Codeblock>
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto">
          <h2 className="font-bold text-2xl mb-2">Button With Icon</h2>
          <div className="msc-component-container-row">
            <button className="msc-btn msc-btn-blue-solid msc-btn-icon">
              <FontAwesomeIcon icon={faDownload} className="icon-btn" />
              Primary
            </button>
            <button className="msc-btn msc-btn-blue-outline msc-btn-icon">
              <FontAwesomeIcon icon={faDownload} className="icon-btn" />
              Secondary
            </button>
            <button className="msc-btn msc-btn-transparent msc-btn-icon">
              <FontAwesomeIcon icon={faDownload} className="icon-btn" />
              Tertiary
            </button>
          </div>
          <div className="max-w-[1500px] mt-5">
            <Codeblock>
              {`
      <!-- Primary -->        
      <button class="msc-btn msc-btn-blue-solid msc-btn-icon">Primary
        <img src="..." class="icon-btn" />
      </button>
      <!-- Secondary -->
      <button class="msc-btn msc-btn-blue-outline msc-btn-icon">Secondary
        <img src="..." class="icon-btn" />
      </button>
      <!-- Tertiary -->
      <button class="msc-btn msc-btn-transparent msc-btn-icon">Tertiary
        <img src="..." class="icon-btn" />
      </button>
              `}
            </Codeblock>
          </div>
        </div>

        <div className="max-w-screen-2xl mx-auto">
          <h2 className="font-bold text-2xl mb-2">Button Loading State</h2>
          <div className="msc-component-container-row">
            <button className="msc-btn msc-btn-blue-solid">
              <div className="msc-btn-dots-container">
                <div className="msc-btn-dot1"></div>
                <div className="msc-btn-dot2"></div>
                <div className="msc-btn-dot3"></div>
              </div>
            </button>
            <button className="msc-btn msc-btn-blue-outline">
              <div className="msc-btn-dots-container">
                <div className="msc-btn-dot1"></div>
                <div className="msc-btn-dot2"></div>
                <div className="msc-btn-dot3"></div>
              </div>
            </button>
            <button className="msc-btn msc-btn-transparent">
              <div className="msc-btn-dots-container">
                <div className="msc-btn-dot1"></div>
                <div className="msc-btn-dot2"></div>
                <div className="msc-btn-dot3"></div>
              </div>
            </button>
            <button className="msc-btn msc-btn-blue-solid msc-btn-sm">
              <div className="msc-btn-dots-container">
                <div className="msc-btn-dot1"></div>
                <div className="msc-btn-dot2"></div>
                <div className="msc-btn-dot3"></div>
              </div>
            </button>
          </div>

          <div className="max-w-[1500px] mt-5">
            <Codeblock>{`
            <!-- Primary -->
      <button class="msc-btn msc-btn-blue-solid">
        <div class="msc-btn-dots-container">
          <div class="msc-btn-dot1"></div>
          <div class="msc-btn-dot2"></div>
          <div class="msc-btn-dot3"></div>
        </div>
      </button>
      <!-- Secondary -->
      <button class="msc-btn msc-btn-blue-outline">
        <div class="msc-btn-dots-container">
          <div class="msc-btn-dot1"></div>
          <div class="msc-btn-dot2"></div>
          <div class="msc-btn-dot3"></div>
        </div>
      </button>
      <!-- Tertiary -->
      <button class="msc-btn msc-btn-transparent">
        <div class="msc-btn-dots-container">
          <div class="msc-btn-dot1"></div>
          <div class="msc-btn-dot2"></div>
          <div class="msc-btn-dot3"></div>
        </div>
      </button>
      <!-- Small -->
      <button class="msc-btn msc-btn-blue-solid msc-btn-sm">
        <div class="msc-btn-dots-container">
          <div class="msc-btn-dot1"></div>
          <div class="msc-btn-dot2"></div>
          <div class="msc-btn-dot3"></div>
        </div>
      </button>
            `}</Codeblock>
          </div>
        </div>

        <h2 className="mb-2">Icon Button</h2>

        <div className="flex items-center bg-white p-5 w-fit rounded">
          <table className="border-separate border-spacing-5 text-center">
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
          </table>
        </div>

        <div className="max-w-[1500px] mt-5">
          <Codeblock>{`
    <!-- Small -->  
    <button class="msc-icon-button-sm">
      <i class="fa-solid fa-thumbs-up"></i>
    </button>

    <!-- Medium | defautl -->
    <button class="msc-icon-button">
      <i class="fa-solid fa-thumbs-up"></i>
    </button>

    <!-- Large -->
    <button class="msc-icon-button-lg">
      <i class="fa-solid fa-thumbs-up"></i>
    </button>

    <!-- Disabled -->
    <button class="msc-icon-button" disabled>
      <i class="fa-solid fa-thumbs-up"></i>
    </button>
          `}</Codeblock>
        </div>

        <h2 className="mb-2">Grey Button</h2>
        <div className="msc-component-container-row mb-5">
          <div className="flex flex-col items-center gap-3">
            <p>Default</p>
            <button className="msc-grey-button">
              <FontAwesomeIcon icon={faPrint} />
              <p>Print</p>
            </button>
          </div>
          <div className="flex flex-col items-center gap-3">
            <p>Hover</p>
            <button className="msc-grey-button text-monochromes-main">
              <FontAwesomeIcon icon={faPrint} />
              <p>Print</p>
            </button>
          </div>
          <div className="flex flex-col items-center gap-3">
            <p>Bold</p>
            <button className="msc-grey-button font-bold">
              <FontAwesomeIcon icon={faPrint} />
              <p>Print</p>
            </button>
          </div>
          <div className="flex flex-col items-center gap-3">
            <p>Disabled</p>
            <button disabled className="msc-grey-button">
              <FontAwesomeIcon icon={faPrint} />
              <p>Print</p>
            </button>
          </div>
        </div>

        <Codeblock>
          {`
  <button class="msc-grey-button">
    <i class="fa-solid fa-print mb-[1px]"></i>
    <p>Print</p>
  </button>

  <!-- Bold Variant -->
  <button class="msc-grey-button font-bold">
    <i class="fa-solid fa-print mb-[1px]"></i>
    <p>Print</p>
  </button>
          `}
        </Codeblock>
      </div>
    </ComponentLayout>
  );
};

export default MscButtonsPage;
