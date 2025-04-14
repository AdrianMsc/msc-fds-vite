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
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout";
import MscComponentSnippet from "../../components/MscComponentSnippet/MscComponentSnippet";
import { cartActionBarCode } from "./constants";

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
    <ComponentLayout>
      <MscComponentSnippet code={cartActionBarCode} className="mb-4">
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
      </MscComponentSnippet>
    </ComponentLayout>
  );
};

export default MscCartActionBarPage;
