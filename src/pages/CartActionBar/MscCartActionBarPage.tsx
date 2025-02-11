import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faFloppyDisk,
  faPlus,
  faPrint,
  faReceipt,
  faShare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import Codeblock from "../../layout/Codeblock";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout";

const buttons = [
  { icon: faFloppyDisk, text: "Save Cart" },
  { icon: faPrint, text: "Print" },
  { icon: faPlus, text: "Add to List" },
  { icon: faDownload, text: "Download Cart" },
  { icon: faReceipt, text: "Request a Quote" },
  { icon: faShare, text: "Share" },
  { icon: faTrash, text: "Clear Cart" },
];

interface ButtonProps {
  icon: any;
  text: string;
}

const Button = ({ icon, text }: ButtonProps) => (
  <button className="msc-grey-button">
    <FontAwesomeIcon icon={icon} className={`mb-[1px]`} />
    <p>{text}</p>
  </button>
);

const MscCartActionBarPage = () => {
  const [optionsVisible, setOptionsVisible] = useState(false);

  const toggleOptions = () => {
    setOptionsVisible(!optionsVisible);
  };

  return (
    <ComponentLayout title="Cart Action Bar" description="" category="Action">
      <div className="msc-cart-action-bar">
        <div className="msc-buttons-container">
          {buttons.map((button, index) => (
            <React.Fragment key={index}>
              <Button icon={button.icon} text={button.text} />
              {index < buttons.length - 1 && (
                <div className="msc-v-divider-gray h-5"></div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Responsive Code */}
        <>
          <button
            id="cartOptions"
            className="msc-grey-button lg:hidden"
            onClick={toggleOptions}
          >
            <p>Cart Options</p>
            <i className="fa-solid fa-ellipsis-vertical mb-[1px]"></i>
          </button>

          <div
            id="optionsList"
            className={`msc-buttons-container-responsive ${
              optionsVisible ? "" : "hidden"
            } lg:hidden`}
          >
            {buttons.map((button, index) => (
              <Button key={index} icon={button.icon} text={button.text} />
            ))}
          </div>
        </>
      </div>

      <div className="mt-5">
        <Codeblock>
          {`
      <div class="msc-cart-action-bar">
    <div class="msc-buttons-container">
      <button class="msc-grey-button">
        <i class="fa-solid fa-floppy-disk mb-[1px]"></i>
        <p>Save Cart</p>
      </button>
      <div class="msc-v-divider-gray h-5"></div>
      <button class="msc-grey-button">
        <i class="fa-solid fa-print mb-[1px]"></i>
        <p>Print</p>
      </button>
      <div class="msc-v-divider-gray h-5"></div>
      <button class="msc-grey-button">
        <i class="fa-solid fa-plus mb-[1px]"></i>
        <p>Add to List</p>
      </button>
      <div class="msc-v-divider-gray h-5"></div>
      <button class="msc-grey-button">
        <i class="fa-solid fa-download mb-[1px]"></i>
        <p>Download Cart</p>
      </button>
      <div class="msc-v-divider-gray h-5"></div>
      <button class="msc-grey-button">
        <i class="fa-solid fa-receipt mb-[1px]"></i>
        <p>Request a Quote</p>
      </button>
      <div class="msc-v-divider-gray h-5"></div>
      <button class="msc-grey-button">
        <i class="fa-solid fa-share mb-[1px]"></i>
        <p>Share</p>
      </button>
      <div class="msc-v-divider-gray h-5"></div>
      <button class="msc-grey-button">
        <i class="fa-solid fa-trash mb-[1px]"></i>
        <p>Clear Cart</p>
      </button>
    </div>
    
    <!-- Responsive Code -->
    <button id="cartOptions" class="msc-grey-button lg:hidden">
      <p>Cart Options</p>
      <i class="fa-solid fa-ellipsis-vertical mb-[1px]"></i>
    </button>
  </div>
  <div id="optionsList" class="msc-buttons-container-responsive hidden">
    <button class="msc-grey-button">
      <i class="fa-solid fa-floppy-disk mb-[1px]"></i>
      <p>Save Cart</p>
    </button>
    <button class="msc-grey-button">
      <i class="fa-solid fa-print mb-[1px]"></i>
      <p>Print</p>
    </button>
    <button class="msc-grey-button">
      <i class="fa-solid fa-plus mb-[1px]"></i>
      <p>Add to List</p>
    </button>
    <button class="msc-grey-button">
      <i class="fa-solid fa-download mb-[1px]"></i>
      <p>Download Cart</p>
    </button>
    <button class="msc-grey-button">
      <i class="fa-solid fa-receipt mb-[1px]"></i>
      <p>Request a Quote</p>
    </button>
    <button class="msc-grey-button">
      <i class="fa-solid fa-share mb-[1px]"></i>
      <p>Share</p>
    </button>
    <button class="msc-grey-button">
      <i class="fa-solid fa-trash mb-[1px]"></i>
      <p>Clear Cart</p>
    </button>
  </div>

  <!-- JS -->
  <script>
    const cartOptions = document.getElementById('cartOptions');
    const optionsList = document.getElementById('optionsList');
            
    cartOptions.addEventListener("click", function () {
      optionsList.classList.toggle('hidden')
    })
  </script>
      `}
        </Codeblock>
      </div>
    </ComponentLayout>
  );
};

export default MscCartActionBarPage;
