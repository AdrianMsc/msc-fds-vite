import React, { useState } from "react";
import {
  faDownload,
  faFloppyDisk,
  faPlus,
  faPrint,
  faReceipt,
  faShare,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  icon: any;
  text: string;
}

const buttons = [
  { icon: faFloppyDisk, text: "Save Cart" },
  { icon: faPrint, text: "Print" },
  { icon: faPlus, text: "Add to List" },
  { icon: faDownload, text: "Download Cart" },
  { icon: faReceipt, text: "Request a Quote" },
  { icon: faShare, text: "Share" },
  { icon: faTrash, text: "Clear Cart" },
];

const Button = ({ icon, text }: Props) => (
  <button className="msc-grey-button">
    <FontAwesomeIcon icon={icon} className="icon-btn" />
    <p>{text}</p>
  </button>
);

const MscCartActionBar = () => {
  const [optionsVisible, setOptionsVisible] = useState(false);

  const toggleOptions = () => {
    setOptionsVisible(!optionsVisible);
  };

  return (
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
  );
};

export default MscCartActionBar;
