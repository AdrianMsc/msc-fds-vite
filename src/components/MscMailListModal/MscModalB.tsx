import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Svg2 from "./Svg2";
import { faClose } from "@fortawesome/free-solid-svg-icons";

export interface ModalListProps {
  triggerModal: string;
  toggleModal: () => void;
}

const MscModalB = ({ triggerModal, toggleModal }: ModalListProps) => {
  return (
    <div
      id="modalDiscount"
      className={`absolute flex h-screen w-screen bg-[#21212166] top-0 left-0 place-content-center place-items-center z-50 ${triggerModal}`}
    >
      <div className="bg-white flex flex-col md:flex-row w-11/12 md:w-[720px] rounded relative">
        <FontAwesomeIcon
          icon={faClose}
          className="absolute top-1 right-1"
          onClick={toggleModal}
        />
        <div className="bg-[#1c58ee] text-white w-full md:w-1/2 rounded-l flex items-center justify-center min-h-[311px] leading-none">
          <div className="text-[28px]">
            <p>
              Join our email list <br />
              and save upto
            </p>
            <h1 className="text-6xl">20% OFF</h1>
            <p>
              orders over <span className="underline">$149</span>
            </p>
            <small className="text-sm">Exclusions Apply</small>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center flex-col min-h-[311px]">
          <Svg2 />

          <div className="relative w-full max-w-[17.5rem] mb-4">
            <input
              id="email"
              type="text"
              placeholder="Email Address"
              className="bg-white w-full h-10 px-4 py-3.5 text-sm rounded border !border-monochromes-grey_light placeholder-transparent disabled:bg-off_white disabled:!border-[#e5e7eb] disabled:cursor-not-allowed disabled:text-monochromes-grey_light hover:disabled:!border-[#e5e7eb] hover:enabled:!border-monochromes-main focus:border-monochromes-grey_light focus:outline-dashed focus:outline-1 focus:outline-offset-4 focus:outline-black invalid:!border-error-red invalid:!text-error-red hover:invalid:!border-error-red focus:invalid:!border-error-red peer"
            />
            <label
              htmlFor="email"
              className="bg-white absolute left-3.5 -top-[0.6rem] pt-[1px] px-[0.2rem] text-xs transition-all cursor-text peer-placeholder-shown:text-sm peer-placeholder-shown:text-monochromes-grey_light peer-placeholder-shown:top-2 peer-focus:-top-[0.6rem] peer-focus:text-[#212121] peer-focus:text-xs peer-focus:cursor-default peer-invalid:text-error-red peer-disabled:bg-off_white"
            >
              Email Address
            </label>
          </div>

          <button className="flex items-center justify-center py-2 px-2 md:px-5 h-10 rounded-full font-bold text-base cursor-pointer min-w-24 md:min-w-32 text-sm text-white bg-primary-blue hover:bg-[#186DF5] active:bg-primary-blue_dark disabled:bg-monochromes-grey_light disabled:text-white disabled:cursor-not-allowed focus-visible:outline-dashed focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#424242] w-[200px]">
            Subscribe
          </button>

          <button
            onClick={toggleModal}
            className="closeBtn flex items-center justify-center py-2 px-2 md:px-5 h-10 rounded-full font-bold text-base cursor-pointer min-w-24 md:min-w-32 text-sm bg-transparent min-w-32 text-primary-blue hover:bg-primary-blue_xlight active:bg-[#0d3aa933] disabled:bg-transparent disabled:text-monochromes-grey_light disabled:cursor-not-allowed focus-visible:outline-dashed focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#424242]"
          >
            No thanks
          </button>
        </div>
      </div>
    </div>
  );
};

export default MscModalB;
