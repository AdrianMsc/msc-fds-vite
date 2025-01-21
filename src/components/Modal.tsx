import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement } from "react";

interface Props {
  triggerModal: string;
  toggleModal: () => void;
  title: string;
  body: ReactElement;
  buttonOne: string;
  buttonTwo: string;
}

const Modal = ({
  triggerModal,
  toggleModal,
  title,
  body,
  buttonOne,
  buttonTwo,
}: Props) => {
  return (
    <div className={`msc-modal-bg ${triggerModal}`}>
      <div className="msc-modal">
        <div className="msc-modal-header">
          <h4 className="msc-modal-title">{title}</h4>
          <button id="modalClsBtn" onClick={toggleModal}>
            <FontAwesomeIcon icon={faClose} />
          </button>
        </div>
        <div className="msc-modal-body pb-4">{body}</div>
        <div className="msc-modal-footer">
          <button
            onClick={toggleModal}
            id="cancelBtn"
            className="msc-btn msc-btn-blue-solid w-full"
          >
            {buttonOne}
          </button>
          <button
            onClick={toggleModal}
            className="msc-btn msc-btn-blue-outline w-full"
          >
            {buttonTwo}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
