import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ModalListProps } from "./MscModalB";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Svg1 from "./Svg1";

const MscThanksModal = ({ triggerModal, toggleModal }: ModalListProps) => {
  return (
    <div
      id="modalThanks"
      className={`absolute flex h-screen w-screen bg-[#21212166] top-0 left-0 place-content-center place-items-center z-50 ${triggerModal}`}
    >
      <article className="bg-[#1C58EE] relative h-auto md:min-h-[311px] w-[90%] md:min-w-[720px] md:max-w-[720px] flex justify-center items-center flex-col text-white text-center px-5 py-6">
        <FontAwesomeIcon
          icon={faClose}
          onClick={toggleModal}
          className="absolute top-1 right-1"
        />
        <div className="bg-white rounded-full flex items-center justify-center p-3 mb-4 w-24 h-24">
          <Svg1 />
        </div>

        <h1 className="text-2xl md:text-3xl mb-4">
          Thank you for joining our email list.
        </h1>

        <p className="font-normal text-lg md:text-xl mb-4">
          Please check your inbox for your exclusive
          <span className="font-semibold">promo code</span>. <br />
          Happy shopping!
        </p>

        <button
          onClick={toggleModal}
          className="bg-white min-w-[88px] rounded-full text-[#1C58EE] py-1 px-4 hover:bg-[#F1F5FE] text-sm font-bold"
        >
          Close
        </button>
      </article>
    </div>
  );
};

export default MscThanksModal;
