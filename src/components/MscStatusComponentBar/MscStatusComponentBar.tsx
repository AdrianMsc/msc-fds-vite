import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

import React, { useState } from "react";
import Modal from "../ModalForm";

interface Stats {
  guidelines: string;
  figma: string;
  storybook: string;
  cdn: string;
}

interface MscStatusComponentBarProps {
  id?: number;
  stats: Stats[];
}

const MscStatusComponentBar: React.FC<MscStatusComponentBarProps> = ({
  id,
  stats,
}) => {
  const [triggerModal, setTriggerModal] = useState("hidden");

  const { isAuthenticated } = useAuth0();

  const currentStats = stats[0];

  const toggleModal = () => {
    setTriggerModal((prev) => (prev === "hidden" ? "" : "hidden"));
  };

  return (
    <>
      <ul className="w-fit flex gap-3 mb-4">
        <li className="hidden">{id}</li>
        <li>
          <b>Guidelines:</b> {currentStats.guidelines}
        </li>
        <li>
          <b>Figma:</b> {currentStats.figma}
        </li>
        <li>
          <b>Storybook:</b> {currentStats.storybook}
        </li>
        <li>
          <b>CDN:</b> {currentStats.cdn}
        </li>
        {isAuthenticated ? (
          <li>
            <FontAwesomeIcon
              icon={faPencil}
              className="opacity-20 hover:opacity-100 transition-all cursor-pointer "
              onClick={() => {
                toggleModal();
              }}
            />
          </li>
        ) : null}
      </ul>

      <Modal
        triggerModal={triggerModal}
        toggleModal={toggleModal}
        title={"Edit Status"}
        body={<p>Status edition</p>}
        buttonOne="Accept"
        buttonTwo="Cancel"
      />
    </>
  );
};

export default MscStatusComponentBar;
