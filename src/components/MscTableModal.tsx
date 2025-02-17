import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ModalListProps } from "./MscMailListModal/MscModalB";
import { faClose, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const MscTableModal = ({ triggerModal, toggleModal }: ModalListProps) => {
  useEffect(() => {
    function updateSliderPosition(toggleContainer: any) {
      const slider = toggleContainer.querySelector("#tripleToggleDot");
      const checkedRadio = toggleContainer.querySelector(
        'input[type="radio"]:checked'
      );
      const radios = Array.from(
        toggleContainer.querySelectorAll('input[type="radio"]')
      );
      const radioIndex = radios.indexOf(checkedRadio);
      const positions = [
        "left-[4px]",
        "left-[74px]",
        "left-2/4",
        "left-[212px]",
      ];

      if (radioIndex >= 0 && radioIndex < positions.length) {
        slider.className = `absolute w-1/4 h-3/4 bg-white shadow-md rounded-full transition-all duration-150 ease-in-out ${positions[radioIndex]}`;
      } else {
        console.error("Invalid radio index:", radioIndex);
      }
    }

    document
      .querySelectorAll(".msc-label-toggle-container")
      .forEach((toggleContainer) => {
        toggleContainer
          .querySelectorAll(".msc-triple-toggle-input-label input")
          .forEach((radio) => {
            radio.addEventListener("change", () =>
              updateSliderPosition(toggleContainer)
            );
          });
        updateSliderPosition(toggleContainer);
      });

    function setMaxHeight() {
      const tableDiv = document.getElementById("tableDiv");
      const modal = document.getElementById("modal");

      if (tableDiv && modal) {
        tableDiv.style.maxHeight = `${modal.offsetHeight - 200}px`;
        if (window.innerHeight >= 1200) {
          modal.classList.remove("md:h-[90%]");
          modal.classList.add("md:max-h-fit");
        } else if (window.innerHeight < 1200) {
          modal.classList.remove("md:max-h-fit");
          modal.classList.add("md:h-[90%]");
        }
      }
    }

    window.onload = setMaxHeight;
    window.onresize = setMaxHeight;

    document.addEventListener("DOMContentLoaded", () => {
      const modalElement = document.getElementById("modal");
      const modalOne = document.getElementById("modalOne");
      if (modalElement && !modalOne?.classList.contains("hidden")) {
        modalElement.addEventListener("shown.bs.modal", setMaxHeight);
      }
    });
  }, []);

  return (
    <div
      id="modalOne"
      className={`fixed flex h-full w-screen bg-[#21212166] top-0 left-0 place-content-center place-items-center p-5 z-50 ${triggerModal}`}
    >
      <div
        id="modal"
        className="h-full w-full md:min-w-fit md:max-w-[90%] md:max-h-[90%] bg-white rounded-lg shadow-xl overflow-hidden flex flex-col place-content-stretch 2xl:h-fit 2xl:max-w-fit"
      >
        <div className="flex p-4 w-full place-content-between items-center border-b">
          <h4 className="h-fit font-bold align-middle text-sm sm:text-base max-h-fit">
            <span>Other Available Sizes for </span>
            <span>Carbide 118-Degree Bright </span>
            <span className="text-monochromes-grey">By Chicago-Latrobe</span>
          </h4>
          <button onClick={toggleModal} className="p-2">
            <img src="../assets/times.svg" className="h-3 w-3" />
            <FontAwesomeIcon icon={faClose} />
          </button>
        </div>
        <div className="flex-row px-4 pt-4 text-sm h-[90%] lg:h-fit overflow-auto">
          <div className="flex flex-col gap-4 pb-4 h-full flex-1">
            <fieldset>
              <div className="msc-label-toggle-container flex flex-col sm:flex-row sm:items-center items-start gap-2">
                <div className="flex">
                  <p className="mb-0.5 mr-1 font-bold text-nowrap">Size Type</p>
                  <FontAwesomeIcon
                    icon={faQuestionCircle}
                    className="msc-toggle-icon text-monochromes-grey_light"
                  />
                </div>
                <div className="relative flex flex-row h-8 w-fit p-1 rounded-full items-center bg-monochromes-grey_xlight text-xs text-[#212121A3] bg-[#21212129]">
                  <span
                    id="tripleToggleDot"
                    className="absolute w-[70px] h-3/4 bg-white shadow-md rounded-full transition-all duration-150 ease-in-out"
                  ></span>
                  <label
                    htmlFor="fractional"
                    className="msc-triple-toggle-input-label flex h-6 items-center justify-center rounded-full cursor-pointer w-[70px]"
                  >
                    <input
                      type="radio"
                      id="fractional"
                      name="tableModal"
                      value="fractional"
                      className="peer sr-only"
                      defaultChecked
                    />
                    <span className="w-full h-full rounded-full text-center content-center font-bold text-xs peer-checked:text-black transition ease-in delay-150 z-10">
                      Fractional
                    </span>
                  </label>
                  <label
                    htmlFor="letter"
                    className="msc-triple-toggle-input-label flex h-6 items-center justify-center rounded-full cursor-pointer w-[70px]"
                  >
                    <input
                      type="radio"
                      id="letter"
                      name="tableModal"
                      value="letter"
                      className="peer sr-only"
                    />
                    <span className="w-full h-full rounded-full text-center content-center font-bold text-xs peer-checked:text-black transition ease-in delay-150 z-10">
                      Letter
                    </span>
                  </label>
                  <label
                    htmlFor="wire"
                    className="msc-triple-toggle-input-label flex h-6 items-center justify-center rounded-full cursor-pointer w-[70px]"
                  >
                    <input
                      type="radio"
                      id="wire"
                      name="tableModal"
                      value="wire"
                      className="peer sr-only"
                    />
                    <span className="w-full h-full rounded-full text-center content-center font-bold text-xs peer-checked:text-black transition ease-in delay-150 z-10">
                      Wire
                    </span>
                  </label>
                  <label
                    htmlFor="metric"
                    className="msc-triple-toggle-input-label flex h-6 items-center justify-center rounded-full cursor-pointer w-[70px]"
                  >
                    <input
                      type="radio"
                      id="metric"
                      name="tableModal"
                      value="metric"
                      className="peer sr-only"
                    />
                    <span className="w-full h-full rounded-full text-center content-center font-bold text-xs peer-checked:text-black transition ease-in delay-150 z-10">
                      Metric
                    </span>
                  </label>
                </div>
              </div>
            </fieldset>
            <div
              id="tableDiv"
              className="border border-monochromes-grey_xlight rounded overflow-auto max-h-[99%] w-full"
            >
              <table className="w-full h-full">
                <thead className="sticky top-0 bg-white z-10 after:content-[''] after:absolute after:inset-0 after:border-b-2 after:border-black after:pointer-events-none after:z-10">
                  <tr className="w-full">
                    <th className="text-start py-2 pl-3 text-sm">Size</th>
                    <th className="text-start py-2 pl-3 text-sm">
                      Dec. Equiv.
                    </th>
                    <th className="text-start py-2 pl-3 text-sm">
                      Drill Point Angle
                    </th>
                    <th className="text-start py-2 pl-3 text-sm">
                      Coating/Finish
                    </th>
                    <th className="text-start py-2 pl-3">MSC#</th>
                    <th className="text-start py-2 pl-3 text-sm">
                      Avalability
                    </th>
                    <th className="text-end py-2 pr-3 text-sm">Unit Price</th>
                    <th className="text-end py-2 pr-3 text-sm">Price</th>
                    <th className="text-center bg-primary-blue_xlight after:content-[''] after:absolute after:inset-0 after:border-l after:border-monochromes-grey_xlight after:pointer-events-none after:z-10 sticky right-0 text-sm z-10">
                      Quantity
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-dashed border-monochromes-grey_light">
                    <td className="text-nowrap py-2 px-3 text-sm">1/64</td>
                    <td className="text-nowrap py-2 px-3 text-sm">0.0325</td>
                    <td className="text-nowrap py-2 px-3 text-sm">18</td>
                    <td className="text-nowrap py-2 px-3 text-sm">
                      Bright/Uncoated
                    </td>
                    <td className="py-2 px-3 text-sm cursor-pointer text-primary-blue_dark font-bold hover:underline text-nowrap">
                      81171043
                    </td>
                    <td className="text-success-green_dark py-2 px-3 text-ellipsis text-nowrap text-sm flex gap-1 items-center h-full w-fit">
                      <i className="fa-solid fa-check size-4"></i>
                      In Stock
                    </td>
                    <td className="py-2 px-3 text-right text-sm text-nowrap">
                      $12.11<span>/ea</span>
                    </td>
                    <td className="py-2 px-3 text-right text-sm text-nowrap">
                      $145.32<span>/pack of 12</span>
                    </td>
                    <td className="sticky right-0 z-[5] py-2 px-3 bg-primary-blue_xlight justify-center h-full max-w-fit border-l border-monochromes-grey_xlight after:content-[''] after:absolute after:inset-0 after:border-l after:border-monochromes-grey_xlight">
                      <div className="flex flex-row gap-2 justify-center">
                        <button>
                          <i className="fa-solid fa-minus size-4 text-monochromes-grey p-1"></i>
                        </button>
                        <div className="relative flex flex-col max-w-[68px] w-[68px]">
                          <input
                            id="field"
                            type="number"
                            placeholder="0"
                            className="text-center max-w-[68px] border border-monochromes-grey_light hover:border-monochromes-main pl-4 pr-4 py-3.5 rounded text-sm focus:border-monochromes-grey_light focus:outline-dashed focus:outline-1 focus:outline-offset-4 focus:outline-black disabled:bg-off_white disabled:!border-[#e5e7eb] disabled:cursor-not-allowed hover:disabled:!border-[#e5e7eb] invalid:!border-error-red invalid:!text-error-red hover:invalid:!border-error-red focus:invalid:!border-error-red peer order-2 h-5"
                          />
                        </div>
                        <button>
                          <i className="fa-solid fa-plus size-4 text-monochromes-grey p-1"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-dashed border-monochromes-grey_light">
                    <td className="text-nowrap py-2 px-3 text-sm">1/16</td>
                    <td className="text-nowrap py-2 px-3 text-sm">0.0625</td>
                    <td className="text-nowrap py-2 px-3 text-sm">18</td>
                    <td className="text-nowrap py-2 px-3 text-sm">
                      Bright/Uncoated
                    </td>
                    <td className="py-2 px-3 text-sm cursor-pointer text-primary-blue_dark font-bold hover:underline text-nowrap">
                      81171043
                    </td>
                    <td className="text-success-green_dark py-2 px-3 text-ellipsis text-nowrap text-sm flex gap-1 items-center h-full w-fit">
                      <i className="fa-solid fa-check size-4"></i>
                      In Stock
                    </td>
                    <td className="py-2 px-3 text-right text-sm text-nowrap">
                      $5.32<span>/ea</span>
                    </td>
                    <td className="py-2 px-3 text-right text-sm text-nowrap">
                      $5.32<span>/ea</span>
                    </td>
                    <td className="py-2 px-3 bg-primary-blue_xlight border-l border-monochromes-grey_xlight gap-2 sticky right-0 justify-center after:content-[''] after:absolute after:inset-0 after:border-l after:border-monochromes-grey_xlight">
                      <div className="flex flex-row gap-2 justify-center">
                        <button>
                          <i className="fa-solid fa-minus size-4 text-monochromes-grey p-1"></i>
                        </button>
                        <div className="relative flex flex-col max-w-[68px] w-[68px]">
                          <input
                            id="field"
                            type="number"
                            placeholder="0"
                            className="text-center max-w-[68px] border border-monochromes-grey_light hover:border-monochromes-main pl-4 pr-4 py-3.5 rounded text-sm focus:border-monochromes-grey_light focus:outline-dashed focus:outline-1 focus:outline-offset-4 focus:outline-black h-5 disabled:bg-off_white disabled:!border-[#e5e7eb] disabled:cursor-not-allowed hover:disabled:!border-[#e5e7eb] invalid:!border-error-red invalid:!text-error-red hover:invalid:!border-error-red focus:invalid:!border-error-red peer order-2"
                          />
                        </div>
                        <button>
                          <i className="fa-solid fa-plus size-4 text-monochromes-grey p-1"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-dashed border-monochromes-grey_light">
                    <td className="text-nowrap py-2 px-3 text-sm">1/16</td>
                    <td className="text-nowrap py-2 px-3 text-sm">0.0625</td>
                    <td className="text-nowrap py-2 px-3 text-sm">18</td>
                    <td className="text-nowrap py-2 px-3 text-sm">
                      Bright/Uncoated
                    </td>
                    <td className="py-2 px-3 text-sm cursor-pointer text-primary-blue_dark font-bold hover:underline text-nowrap">
                      81171043
                    </td>
                    <td className="text-success-green_dark py-2 px-3 text-ellipsis text-nowrap text-sm flex gap-1 items-center h-full w-fit">
                      <i className="fa-solid fa-check size-4"></i>
                      In Stock
                    </td>
                    <td className="py-2 px-3 text-right text-sm text-nowrap">
                      $87.56<span>/ea</span>
                    </td>
                    <td className="py-2 px-3 text-right text-sm text-nowrap">
                      $87.56<span>/ea</span>
                    </td>
                    <td className="py-2 px-3 bg-primary-blue_xlight border-l border-monochromes-grey_xlight gap-2 sticky right-0 justify-center after:content-[''] after:absolute after:inset-0 after:border-l after:border-monochromes-grey_xlight">
                      <div className="flex flex-row gap-2 justify-center">
                        <button>
                          <i className="fa-solid fa-minus size-4 text-monochromes-grey p-1"></i>
                        </button>
                        <div className="relative flex flex-col max-w-[68px] w-[68px]">
                          <input
                            id="field"
                            type="number"
                            placeholder="0"
                            className="text-center max-w-[68px] border border-monochromes-grey_light hover:border-monochromes-main pl-4 pr-4 py-3.5 rounded text-sm focus:border-monochromes-grey_light focus:outline-dashed focus:outline-1 focus:outline-offset-4 focus:outline-black disabled:bg-off_white disabled:!border-[#e5e7eb] disabled:cursor-not-allowed hover:disabled:!border-[#e5e7eb] invalid:!border-error-red invalid:!text-error-red hover:invalid:!border-error-red focus:invalid:!border-error-red peer order-2 h-5"
                          />
                        </div>
                        <button>
                          <i className="fa-solid fa-plus size-4 text-monochromes-grey p-1"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-dashed border-monochromes-grey_light">
                    <td className="text-nowrap py-2 px-3 text-sm">1/16</td>
                    <td className="text-nowrap py-2 px-3 text-sm">0.0625</td>
                    <td className="text-nowrap py-2 px-3 text-sm">18</td>
                    <td className="text-nowrap py-2 px-3 text-sm">
                      Bright/Uncoated
                    </td>
                    <td className="py-2 px-3 text-sm cursor-pointer text-primary-blue_dark font-bold hover:underline text-nowrap">
                      81171043
                    </td>
                    <td className="text-success-green_dark py-2 px-3 text-ellipsis text-nowrap text-sm flex gap-1 items-center h-full w-fit">
                      <i className="fa-solid fa-check size-4"></i>
                      In Stock
                    </td>
                    <td className="py-2 px-3 text-right text-sm text-nowrap">
                      $153.54<span>/ea</span>
                    </td>
                    <td className="py-2 px-3 text-right text-sm text-nowrap">
                      $153.54<span>/pack of 12</span>
                    </td>
                    <td className="py-2 px-3 bg-primary-blue_xlight border-l border-monochromes-grey_xlight gap-2 sticky right-0 justify-center after:content-[''] after:absolute after:inset-0 after:border-l after:border-monochromes-grey_xlight">
                      <div className="flex flex-row gap-2 justify-center">
                        <button>
                          <i className="fa-solid fa-minus size-4 text-monochromes-grey p-1"></i>
                        </button>
                        <div className="relative flex flex-col max-w-[68px] w-[68px]">
                          <input
                            id="field"
                            type="number"
                            placeholder="0"
                            className="text-center max-w-[68px] border border-monochromes-grey_light hover:border-monochromes-main pl-4 pr-4 py-3.5 rounded text-sm focus:border-monochromes-grey_light focus:outline-dashed focus:outline-1 focus:outline-offset-4 focus:outline-black disabled:bg-off_white disabled:!border-[#e5e7eb] disabled:cursor-not-allowed hover:disabled:!border-[#e5e7eb] invalid:!border-error-red invalid:!text-error-red hover:invalid:!border-error-red focus:invalid:!border-error-red peer order-2 h-5"
                          />
                        </div>
                        <button>
                          <i className="fa-solid fa-plus size-4 text-monochromes-grey p-1"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-dashed border-monochromes-grey_light">
                    <td className="text-nowrap py-2 px-3 text-sm">1/16</td>
                    <td className="text-nowrap py-2 px-3 text-sm">0.0625</td>
                    <td className="text-nowrap py-2 px-3 text-sm">18</td>
                    <td className="text-nowrap py-2 px-3 text-sm">
                      Bright/Uncoated
                    </td>
                    <td className="py-2 px-3 text-sm cursor-pointer text-primary-blue_dark font-bold hover:underline text-nowrap">
                      81171043
                    </td>
                    <td className="py-2 px-3 text-sm text-monochromes-grey font-bold flex gap-1 items-center h-full w-fit">
                      <i className="fa-solid fa-shield text-nowrap"></i>
                      Ships fr. Supplier
                      <span className="font-normal">(5 biz. days)</span>
                    </td>
                    <td className="py-2 px-3 text-right text-sm text-nowrap">
                      $184.54<span>/ea</span>
                    </td>
                    <td className="py-2 px-3 text-right text-sm text-nowrap">
                      $184.54<span>/pack of 12</span>
                    </td>
                    <td className="py-2 px-3 bg-primary-blue_xlight border-l border-monochromes-grey_xlight gap-2 sticky right-0 justify-center after:content-[''] after:absolute after:inset-0 after:border-l after:border-monochromes-grey_xlight">
                      <div className="flex flex-row gap-2 justify-center">
                        <button>
                          <i className="fa-solid fa-minus size-4 text-monochromes-grey p-1"></i>
                        </button>
                        <div className="relative flex flex-col max-w-[68px] w-[68px]">
                          <input
                            id="field"
                            type="number"
                            placeholder="0"
                            className="text-center max-w-[68px] border border-monochromes-grey_light hover:border-monochromes-main pl-4 pr-4 py-3.5 rounded text-sm focus:border-monochromes-grey_light focus:outline-dashed focus:outline-1 focus:outline-offset-4 focus:outline-black disabled:bg-off_white disabled:!border-[#e5e7eb] disabled:cursor-not-allowed hover:disabled:!border-[#e5e7eb] invalid:!border-error-red invalid:!text-error-red hover:invalid:!border-error-red focus:invalid:!border-error-red peer order-2 h-5"
                          />
                        </div>
                        <button>
                          <i className="fa-solid fa-plus size-4 text-monochromes-grey p-1"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-dashed border-monochromes-grey_light">
                    <td className="text-nowrap py-2 px-3 text-sm">1/16</td>
                    <td className="text-nowrap py-2 px-3 text-sm">0.0625</td>
                    <td className="text-nowrap py-2 px-3 text-sm">18</td>
                    <td className="text-nowrap py-2 px-3 text-sm">
                      Bright/Uncoated
                    </td>
                    <td className="py-2 px-3 text-sm cursor-pointer text-primary-blue_dark font-bold hover:underline text-nowrap">
                      81171043
                    </td>
                    <td className="text-success-green_dark py-2 px-3 text-ellipsis text-nowrap text-sm flex gap-1 items-center h-full w-fit">
                      <i className="fa-solid fa-check size-4"></i>
                      In Stock
                    </td>
                    <td className="py-2 px-3 text-right text-sm text-nowrap">
                      $168.24<span>/ea</span>
                    </td>
                    <td className="py-2 px-3 text-right text-sm text-nowrap">
                      $168.24<span>/ea</span>
                    </td>
                    <td className="py-2 px-3 bg-primary-blue_xlight border-l border-monochromes-grey_xlight gap-2 sticky right-0 justify-center after:content-[''] after:absolute after:inset-0 after:border-l after:border-monochromes-grey_xlight">
                      <div className="flex flex-row gap-2 justify-center">
                        <button>
                          <i className="fa-solid fa-minus size-4 text-monochromes-grey p-1"></i>
                        </button>
                        <div className="relative flex flex-col max-w-[68px] w-[68px]">
                          <input
                            id="field"
                            type="number"
                            placeholder="0"
                            className="text-center max-w-[68px] border border-monochromes-grey_light hover:border-monochromes-main pl-4 pr-4 py-3.5 rounded text-sm focus:border-monochromes-grey_light focus:outline-dashed focus:outline-1 focus:outline-offset-4 focus:outline-black disabled:bg-off_white disabled:!border-[#e5e7eb] disabled:cursor-not-allowed hover:disabled:!border-[#e5e7eb] invalid:!border-error-red invalid:!text-error-red hover:invalid:!border-error-red focus:invalid:!border-error-red peer order-2 h-5"
                          />
                        </div>
                        <button>
                          <i className="fa-solid fa-plus size-4 text-monochromes-grey p-1"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-dashed border-monochromes-grey_light">
                    <td className="text-nowrap py-2 px-3 text-sm">1/16</td>
                    <td className="text-nowrap py-2 px-3 text-sm">0.0625</td>
                    <td className="text-nowrap py-2 px-3 text-sm">18</td>
                    <td className="text-nowrap py-2 px-3 text-sm">
                      Bright/Uncoated
                    </td>
                    <td className="py-2 px-3 text-sm cursor-pointer text-primary-blue_dark font-bold hover:underline text-nowrap">
                      81171043
                    </td>
                    <td className="text-success-green_dark py-2 px-3 text-ellipsis text-nowrap text-sm flex gap-1 items-center h-full w-fit">
                      <i className="fa-solid fa-check size-4"></i>
                      In Stock
                    </td>
                    <td className="py-2 px-3 text-right text-sm text-nowrap">
                      $237.89<span>/ea</span>
                    </td>
                    <td className="py-2 px-3 text-right text-sm text-nowrap">
                      $237.89<span>/pack of 12</span>
                    </td>
                    <td className="py-2 px-3 bg-primary-blue_xlight border-l border-monochromes-grey_xlight gap-2 sticky right-0 justify-center after:content-[''] after:absolute after:inset-0 after:border-l after:border-monochromes-grey_xlight">
                      <div className="flex flex-row gap-2 justify-center">
                        <button>
                          <i className="fa-solid fa-minus size-4 text-monochromes-grey p-1"></i>
                        </button>
                        <div className="relative flex flex-col max-w-[68px] w-[68px]">
                          <input
                            id="field"
                            type="number"
                            placeholder="0"
                            className="text-center max-w-[68px] border border-monochromes-grey_light hover:border-monochromes-main pl-4 pr-4 py-3.5 rounded text-sm focus:border-monochromes-grey_light focus:outline-dashed focus:outline-1 focus:outline-offset-4 focus:outline-black disabled:bg-off_white disabled:!border-[#e5e7eb] disabled:cursor-not-allowed hover:disabled:!border-[#e5e7eb] invalid:!border-error-red invalid:!text-error-red hover:invalid:!border-error-red focus:invalid:!border-error-red peer order-2 h-5"
                          />
                        </div>
                        <button>
                          <i className="fa-solid fa-plus size-4 text-monochromes-grey p-1"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-dashed border-monochromes-grey_light">
                    <td className="text-nowrap py-2 px-3 text-sm">9/64</td>
                    <td className="text-nowrap py-2 px-3 text-sm">0.1406</td>
                    <td className="text-nowrap py-2 px-3 text-sm">18</td>
                    <td className="text-nowrap py-2 px-3 text-sm">
                      Bright/Uncoated
                    </td>
                    <td className="py-2 px-3 text-sm cursor-pointer text-primary-blue_dark font-bold hover:underline text-nowrap">
                      81171092
                    </td>
                    <td className="text-success-green_dark py-2 px-3 text-ellipsis text-nowrap text-sm flex gap-1 items-center h-full w-fit">
                      <i className="fa-solid fa-check size-4"></i>
                      In Stock
                    </td>
                    <td className="py-2 px-3 text-right text-sm text-nowrap">
                      $254.56<span>/ea</span>
                    </td>
                    <td className="py-2 px-3 text-right text-sm text-nowrap">
                      $254.56<span>/ea</span>
                    </td>
                    <td className="py-2 px-3 bg-primary-blue_xlight border-l border-monochromes-grey_xlight gap-2 sticky right-0 justify-center after:content-[''] after:absolute after:inset-0 after:border-l after:border-monochromes-grey_xlight">
                      <div className="flex flex-row gap-2 justify-center">
                        <button>
                          <i className="fa-solid fa-minus size-4 text-monochromes-grey p-1"></i>
                        </button>
                        <div className="relative flex flex-col max-w-[68px] w-[68px]">
                          <input
                            id="field"
                            type="number"
                            placeholder="0"
                            className="text-center max-w-[68px] border border-monochromes-grey_light hover:border-monochromes-main pl-4 pr-4 py-3.5 rounded text-sm focus:border-monochromes-grey_light focus:outline-dashed focus:outline-1 focus:outline-offset-4 focus:outline-black disabled:bg-off_white disabled:!border-[#e5e7eb] disabled:cursor-not-allowed hover:disabled:!border-[#e5e7eb] invalid:!border-error-red invalid:!text-error-red hover:invalid:!border-error-red focus:invalid:!border-error-red peer order-2 h-5"
                          />
                        </div>
                        <button>
                          <i className="fa-solid fa-plus size-4 text-monochromes-grey p-1"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-dashed border-monochromes-grey_light">
                    <td className="text-nowrap py-2 px-3 text-sm">11/16</td>
                    <td className="text-nowrap py-2 px-3 text-sm">0.6875</td>
                    <td className="text-nowrap py-2 px-3 text-sm">18</td>
                    <td className="text-nowrap py-2 px-3 text-sm">
                      Bright/Uncoated
                    </td>
                    <td className="py-2 px-3 text-sm cursor-pointer text-primary-blue_dark font-bold hover:underline text-nowrap">
                      81171118
                    </td>
                    <td className="py-2 px-3 text-sm text-monochromes-grey font-bold text-ellipsis text-nowrap flex gap-1 items-center h-full w-fit">
                      <i className="fa-solid fa-shield"></i>
                      Ships fr. Supplier
                      <span className="font-normal">(5 biz. days)</span>
                    </td>
                    <td className="py-2 px-3 text-right text-sm text-nowrap">
                      $254.56<span>/ea</span>
                    </td>
                    <td className="py-2 px-3 text-right text-sm text-nowrap">
                      $254.56<span>/pack of 12</span>
                    </td>
                    <td className="py-2 px-3 bg-primary-blue_xlight border-l border-monochromes-grey_xlight gap-2 sticky right-0 justify-center after:content-[''] after:absolute after:inset-0 after:border-l after:border-monochromes-grey_xlight">
                      <div className="flex flex-row gap-2 justify-center">
                        <button>
                          <i className="fa-solid fa-minus size-4 text-monochromes-grey p-1"></i>
                        </button>
                        <div className="relative flex flex-col max-w-[68px] w-[68px]">
                          <input
                            id="field"
                            type="number"
                            placeholder="0"
                            className="text-center max-w-[68px] border border-monochromes-grey_light hover:border-monochromes-main pl-4 pr-4 py-3.5 rounded text-sm focus:border-monochromes-grey_light focus:outline-dashed focus:outline-1 focus:outline-offset-4 focus:outline-black disabled:bg-off_white disabled:!border-[#e5e7eb] disabled:cursor-not-allowed hover:disabled:!border-[#e5e7eb] invalid:!border-error-red invalid:!text-error-red hover:invalid:!border-error-red focus:invalid:!border-error-red peer order-2 h-5"
                          />
                        </div>
                        <button>
                          <i className="fa-solid fa-plus size-4 text-monochromes-grey p-1"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-dashed border-monochromes-grey_light">
                    <td className="text-nowrap py-2 px-3 text-sm">13/64</td>
                    <td className="text-nowrap py-2 px-3 text-sm">0.2031</td>
                    <td className="text-nowrap py-2 px-3 text-sm">18</td>
                    <td className="text-nowrap py-2 px-3 text-sm">
                      Bright/Uncoated
                    </td>
                    <td className="py-2 px-3 text-sm cursor-pointer text-primary-blue_dark font-bold hover:underline text-nowrap">
                      81171134
                    </td>
                    <td className="text-success-green_dark py-2 px-3 text-ellipsis text-nowrap text-sm flex gap-1 items-center h-full w-fit">
                      <i className="fa-solid fa-check size-4"></i>
                      In Stock
                    </td>
                    <td className="py-2 px-3 text-right text-sm text-nowrap">
                      $279.44<span>/ea</span>
                    </td>

                    <td className="py-2 px-3 text-right text-sm text-nowrap">
                      $279.44<span>/ea</span>
                    </td>
                    <td className="py-2 px-3 bg-primary-blue_xlight border-l border-monochromes-grey_xlight gap-2 sticky right-0 justify-center after:content-[''] after:absolute after:inset-0 after:border-l after:border-monochromes-grey_xlight">
                      <div className="flex flex-row gap-2 justify-center">
                        <button>
                          <i className="fa-solid fa-minus size-4 text-monochromes-grey p-1"></i>
                        </button>
                        <div className="relative flex flex-col max-w-[68px] w-[68px]">
                          <input
                            id="field"
                            type="number"
                            placeholder="0"
                            className="text-center max-w-[68px] border border-monochromes-grey_light hover:border-monochromes-main pl-4 pr-4 py-3.5 rounded text-sm focus:border-monochromes-grey_light focus:outline-dashed focus:outline-1 focus:outline-offset-4 focus:outline-black disabled:bg-off_white disabled:!border-[#e5e7eb] disabled:cursor-not-allowed hover:disabled:!border-[#e5e7eb] invalid:!border-error-red invalid:!text-error-red hover:invalid:!border-error-red focus:invalid:!border-error-red peer order-2 h-5"
                          />
                        </div>
                        <button>
                          <i className="fa-solid fa-plus size-4 text-monochromes-grey p-1"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-dashed border-monochromes-grey_light">
                    <td className="text-nowrap py-2 px-3 text-sm">9/64</td>
                    <td className="text-nowrap py-2 px-3 text-sm">0.1406</td>
                    <td className="text-nowrap py-2 px-3 text-sm">18</td>
                    <td className="text-nowrap py-2 px-3 text-sm">
                      Bright/Uncoated
                    </td>
                    <td className="py-2 px-3 text-sm cursor-pointer text-primary-blue_dark font-bold hover:underline text-nowrap">
                      81171092
                    </td>
                    <td className="text-success-green_dark py-2 px-3 text-ellipsis text-nowrap text-sm flex gap-1 items-center h-full w-fit">
                      <i className="fa-solid fa-check size-4"></i>
                      In Stock
                    </td>
                    <td className="py-2 px-3 text-right text-sm text-nowrap">
                      $254.56<span>/ea</span>
                    </td>
                    <td className="py-2 px-3 text-right text-sm text-nowrap">
                      $254.56<span>/ea</span>
                    </td>
                    <td className="py-2 px-3 bg-primary-blue_xlight border-l border-monochromes-grey_xlight gap-2 sticky right-0 justify-center after:content-[''] after:absolute after:inset-0 after:border-l after:border-monochromes-grey_xlight">
                      <div className="flex flex-row gap-2 justify-center">
                        <button>
                          <i className="fa-solid fa-minus size-4 text-monochromes-grey p-1"></i>
                        </button>
                        <div className="relative flex flex-col max-w-[68px] w-[68px]">
                          <input
                            id="field"
                            type="number"
                            placeholder="0"
                            className="text-center max-w-[68px] border border-monochromes-grey_light hover:border-monochromes-main pl-4 pr-4 py-3.5 rounded text-sm focus:border-monochromes-grey_light focus:outline-dashed focus:outline-1 focus:outline-offset-4 focus:outline-black disabled:bg-off_white disabled:!border-[#e5e7eb] disabled:cursor-not-allowed hover:disabled:!border-[#e5e7eb] invalid:!border-error-red invalid:!text-error-red hover:invalid:!border-error-red focus:invalid:!border-error-red peer order-2 h-5"
                          />
                        </div>
                        <button>
                          <i className="fa-solid fa-plus size-4 text-monochromes-grey p-1"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-dashed border-monochromes-grey_light">
                    <td className="text-nowrap py-2 px-3 text-sm">11/16</td>
                    <td className="text-nowrap py-2 px-3 text-sm">0.6875</td>
                    <td className="text-nowrap py-2 px-3 text-sm">18</td>
                    <td className="text-nowrap py-2 px-3 text-sm">
                      Bright/Uncoated
                    </td>
                    <td className="py-2 px-3 text-sm cursor-pointer text-primary-blue_dark font-bold hover:underline text-nowrap">
                      81171118
                    </td>
                    <td className="py-2 px-3 text-sm text-monochromes-grey font-bold text-ellipsis text-nowrap flex gap-1 items-center h-full w-fit">
                      <i className="fa-solid fa-shield"></i>
                      Ships fr. Supplier
                      <span className="font-normal">(5 biz. days)</span>
                    </td>
                    <td className="py-2 px-3 text-right text-sm text-nowrap">
                      $254.56<span>/ea</span>
                    </td>
                    <td className="py-2 px-3 text-right text-sm text-nowrap">
                      $254.56<span>/pack of 12</span>
                    </td>
                    <td className="py-2 px-3 bg-primary-blue_xlight border-l border-monochromes-grey_xlight gap-2 sticky right-0 justify-center after:content-[''] after:absolute after:inset-0 after:border-l after:border-monochromes-grey_xlight">
                      <div className="flex flex-row gap-2 justify-center">
                        <button>
                          <i className="fa-solid fa-minus size-4 text-monochromes-grey p-1"></i>
                        </button>
                        <div className="relative flex flex-col max-w-[68px] w-[68px]">
                          <input
                            id="field"
                            type="number"
                            placeholder="0"
                            className="text-center max-w-[68px] border border-monochromes-grey_light hover:border-monochromes-main pl-4 pr-4 py-3.5 rounded text-sm focus:border-monochromes-grey_light focus:outline-dashed focus:outline-1 focus:outline-offset-4 focus:outline-black disabled:bg-off_white disabled:!border-[#e5e7eb] disabled:cursor-not-allowed hover:disabled:!border-[#e5e7eb] invalid:!border-error-red invalid:!text-error-red hover:invalid:!border-error-red focus:invalid:!border-error-red peer order-2 h-5"
                          />
                        </div>
                        <button>
                          <i className="fa-solid fa-plus size-4 text-monochromes-grey p-1"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-dashed border-monochromes-grey_light">
                    <td className="text-nowrap py-2 px-3 text-sm">13/64</td>
                    <td className="text-nowrap py-2 px-3 text-sm">0.2031</td>
                    <td className="text-nowrap py-2 px-3 text-sm">18</td>
                    <td className="text-nowrap py-2 px-3 text-sm">
                      Bright/Uncoated
                    </td>
                    <td className="py-2 px-3 text-sm cursor-pointer text-primary-blue_dark font-bold hover:underline text-nowrap">
                      81171134
                    </td>
                    <td className="text-success-green_dark py-2 px-3 text-ellipsis text-nowrap text-sm flex gap-1 items-center h-full w-fit">
                      <i className="fa-solid fa-check size-4"></i>
                      In Stock
                    </td>
                    <td className="py-2 px-3 text-right text-sm text-nowrap">
                      $279.44<span>/ea</span>
                    </td>

                    <td className="py-2 px-3 text-right text-sm text-nowrap">
                      $279.44<span>/ea</span>
                    </td>
                    <td className="py-2 px-3 bg-primary-blue_xlight border-l border-monochromes-grey_xlight gap-2 sticky right-0 justify-center after:content-[''] after:absolute after:inset-0 after:border-l after:border-monochromes-grey_xlight">
                      <div className="flex flex-row gap-2 justify-center">
                        <button>
                          <i className="fa-solid fa-minus size-4 text-monochromes-grey p-1"></i>
                        </button>
                        <div className="relative flex flex-col max-w-[68px] w-[68px]">
                          <input
                            id="field"
                            type="number"
                            placeholder="0"
                            className="text-center max-w-[68px] border border-monochromes-grey_light hover:border-monochromes-main pl-4 pr-4 py-3.5 rounded text-sm focus:border-monochromes-grey_light focus:outline-dashed focus:outline-1 focus:outline-offset-4 focus:outline-black disabled:bg-off_white disabled:!border-[#e5e7eb] disabled:cursor-not-allowed hover:disabled:!border-[#e5e7eb] invalid:!border-error-red invalid:!text-error-red hover:invalid:!border-error-red focus:invalid:!border-error-red peer order-2 h-5"
                          />
                        </div>
                        <button>
                          <i className="fa-solid fa-plus size-4 text-monochromes-grey p-1"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-dashed border-monochromes-grey_light">
                    <td className="text-nowrap py-2 px-3 text-sm">11/16</td>
                    <td className="text-nowrap py-2 px-3 text-sm">0.6875</td>
                    <td className="text-nowrap py-2 px-3 text-sm">18</td>
                    <td className="text-nowrap py-2 px-3 text-sm">
                      Bright/Uncoated
                    </td>
                    <td className="py-2 px-3 text-sm cursor-pointer text-primary-blue_dark font-bold hover:underline text-nowrap">
                      81171118
                    </td>
                    <td className="py-2 px-3 text-sm text-monochromes-grey font-bold text-ellipsis text-nowrap flex gap-1 items-center h-full w-fit">
                      <i className="fa-solid fa-shield"></i>
                      Ships fr. Supplier
                      <span className="font-normal">(5 biz. days)</span>
                    </td>
                    <td className="py-2 px-3 text-right text-sm text-nowrap">
                      $254.56<span>/ea</span>
                    </td>
                    <td className="py-2 px-3 text-right text-sm text-nowrap">
                      $254.56<span>/pack of 12</span>
                    </td>
                    <td className="py-2 px-3 bg-primary-blue_xlight border-l border-monochromes-grey_xlight gap-2 sticky right-0 justify-center after:content-[''] after:absolute after:inset-0 after:border-l after:border-monochromes-grey_xlight">
                      <div className="flex flex-row gap-2 justify-center">
                        <button>
                          <i className="fa-solid fa-minus size-4 text-monochromes-grey p-1"></i>
                        </button>
                        <div className="relative flex flex-col max-w-[68px] w-[68px]">
                          <input
                            id="field"
                            type="number"
                            placeholder="0"
                            className="text-center max-w-[68px] border border-monochromes-grey_light hover:border-monochromes-main pl-4 pr-4 py-3.5 rounded text-sm focus:border-monochromes-grey_light focus:outline-dashed focus:outline-1 focus:outline-offset-4 focus:outline-black disabled:bg-off_white disabled:!border-[#e5e7eb] disabled:cursor-not-allowed hover:disabled:!border-[#e5e7eb] invalid:!border-error-red invalid:!text-error-red hover:invalid:!border-error-red focus:invalid:!border-error-red peer order-2 h-5"
                          />
                        </div>
                        <button>
                          <i className="fa-solid fa-plus size-4 text-monochromes-grey p-1"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-dashed border-monochromes-grey_light">
                    <td className="text-nowrap py-2 px-3 text-sm">13/64</td>
                    <td className="text-nowrap py-2 px-3 text-sm">0.2031</td>
                    <td className="text-nowrap py-2 px-3 text-sm">18</td>
                    <td className="text-nowrap py-2 px-3 text-sm">
                      Bright/Uncoated
                    </td>
                    <td className="py-2 px-3 text-sm cursor-pointer text-primary-blue_dark font-bold hover:underline text-nowrap">
                      81171134
                    </td>
                    <td className="text-success-green_dark py-2 px-3 text-ellipsis text-nowrap text-sm flex gap-1 items-center h-full w-fit">
                      <i className="fa-solid fa-check size-4"></i>
                      In Stock
                    </td>
                    <td className="py-2 px-3 text-right text-sm text-nowrap">
                      $279.44<span>/ea</span>
                    </td>

                    <td className="py-2 px-3 text-right text-sm text-nowrap">
                      $279.44<span>/ea</span>
                    </td>
                    <td className="py-2 px-3 bg-primary-blue_xlight border-l border-monochromes-grey_xlight gap-2 sticky right-0 justify-center after:content-[''] after:absolute after:inset-0 after:border-l after:border-monochromes-grey_xlight">
                      <div className="flex flex-row gap-2 justify-center">
                        <button>
                          <i className="fa-solid fa-minus size-4 text-monochromes-grey p-1"></i>
                        </button>
                        <div className="relative flex flex-col max-w-[68px] w-[68px]">
                          <input
                            id="field"
                            type="number"
                            placeholder="0"
                            className="text-center max-w-[68px] border border-monochromes-grey_light hover:border-monochromes-main pl-4 pr-4 py-3.5 rounded text-sm focus:border-monochromes-grey_light focus:outline-dashed focus:outline-1 focus:outline-offset-4 focus:outline-black disabled:bg-off_white disabled:!border-[#e5e7eb] disabled:cursor-not-allowed hover:disabled:!border-[#e5e7eb] invalid:!border-error-red invalid:!text-error-red hover:invalid:!border-error-red focus:invalid:!border-error-red peer order-2 h-5"
                          />
                        </div>
                        <button>
                          <i className="fa-solid fa-plus size-4 text-monochromes-grey p-1"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-dashed border-monochromes-grey_light">
                    <td className="text-nowrap py-2 px-3 text-sm">9/64</td>
                    <td className="text-nowrap py-2 px-3 text-sm">0.1406</td>
                    <td className="text-nowrap py-2 px-3 text-sm">18</td>
                    <td className="text-nowrap py-2 px-3 text-sm">
                      Bright/Uncoated
                    </td>
                    <td className="py-2 px-3 text-sm cursor-pointer text-primary-blue_dark font-bold hover:underline text-nowrap">
                      81171092
                    </td>
                    <td className="text-success-green_dark py-2 px-3 text-ellipsis text-nowrap text-sm flex gap-1 items-center h-full w-fit">
                      <i className="fa-solid fa-check size-4"></i>
                      In Stock
                    </td>
                    <td className="py-2 px-3 text-right text-sm text-nowrap">
                      $254.56<span>/ea</span>
                    </td>
                    <td className="py-2 px-3 text-right text-sm text-nowrap">
                      $254.56<span>/ea</span>
                    </td>
                    <td className="py-2 px-3 bg-primary-blue_xlight border-l border-monochromes-grey_xlight gap-2 sticky right-0 justify-center after:content-[''] after:absolute after:inset-0 after:border-l after:border-monochromes-grey_xlight">
                      <div className="flex flex-row gap-2 justify-center">
                        <button>
                          <i className="fa-solid fa-minus size-4 text-monochromes-grey p-1"></i>
                        </button>
                        <div className="relative flex flex-col max-w-[68px] w-[68px]">
                          <input
                            id="field"
                            type="number"
                            placeholder="0"
                            className="text-center max-w-[68px] border border-monochromes-grey_light hover:border-monochromes-main pl-4 pr-4 py-3.5 rounded text-sm focus:border-monochromes-grey_light focus:outline-dashed focus:outline-1 focus:outline-offset-4 focus:outline-black disabled:bg-off_white disabled:!border-[#e5e7eb] disabled:cursor-not-allowed hover:disabled:!border-[#e5e7eb] invalid:!border-error-red invalid:!text-error-red hover:invalid:!border-error-red focus:invalid:!border-error-red peer order-2 h-5"
                          />
                        </div>
                        <button>
                          <i className="fa-solid fa-plus size-4 text-monochromes-grey p-1"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-dashed border-monochromes-grey_light">
                    <td className="text-nowrap py-2 px-3 text-sm">11/16</td>
                    <td className="text-nowrap py-2 px-3 text-sm">0.6875</td>
                    <td className="text-nowrap py-2 px-3 text-sm">18</td>
                    <td className="text-nowrap py-2 px-3 text-sm">
                      Bright/Uncoated
                    </td>
                    <td className="py-2 px-3 text-sm cursor-pointer text-primary-blue_dark font-bold hover:underline text-nowrap">
                      81171118
                    </td>
                    <td className="py-2 px-3 text-sm text-monochromes-grey font-bold text-ellipsis text-nowrap flex gap-1 items-center h-full w-fit">
                      <i className="fa-solid fa-shield"></i>
                      Ships fr. Supplier
                      <span className="font-normal">(5 biz. days)</span>
                    </td>
                    <td className="py-2 px-3 text-right text-sm text-nowrap">
                      $254.56<span>/ea</span>
                    </td>
                    <td className="py-2 px-3 text-right text-sm text-nowrap">
                      $254.56<span>/pack of 12</span>
                    </td>
                    <td className="py-2 px-3 bg-primary-blue_xlight border-l border-monochromes-grey_xlight gap-2 sticky right-0 justify-center after:content-[''] after:absolute after:inset-0 after:border-l after:border-monochromes-grey_xlight">
                      <div className="flex flex-row gap-2 justify-center">
                        <button>
                          <i className="fa-solid fa-minus size-4 text-monochromes-grey p-1"></i>
                        </button>
                        <div className="relative flex flex-col max-w-[68px] w-[68px]">
                          <input
                            id="field"
                            type="number"
                            placeholder="0"
                            className="text-center max-w-[68px] border border-monochromes-grey_light hover:border-monochromes-main pl-4 pr-4 py-3.5 rounded text-sm focus:border-monochromes-grey_light focus:outline-dashed focus:outline-1 focus:outline-offset-4 focus:outline-black disabled:bg-off_white disabled:!border-[#e5e7eb] disabled:cursor-not-allowed hover:disabled:!border-[#e5e7eb] invalid:!border-error-red invalid:!text-error-red hover:invalid:!border-error-red focus:invalid:!border-error-red peer order-2 h-5"
                          />
                        </div>
                        <button>
                          <i className="fa-solid fa-plus size-4 text-monochromes-grey p-1"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-dashed border-monochromes-grey_light">
                    <td className="text-nowrap py-2 px-3 text-sm">13/64</td>
                    <td className="text-nowrap py-2 px-3 text-sm">0.2031</td>
                    <td className="text-nowrap py-2 px-3 text-sm">18</td>
                    <td className="text-nowrap py-2 px-3 text-sm">
                      Bright/Uncoated
                    </td>
                    <td className="py-2 px-3 text-sm cursor-pointer text-primary-blue_dark font-bold hover:underline text-nowrap">
                      81171134
                    </td>
                    <td className="text-success-green_dark py-2 px-3 text-ellipsis text-nowrap text-sm flex gap-1 items-center h-full w-fit">
                      <i className="fa-solid fa-check size-4"></i>
                      In Stock
                    </td>
                    <td className="py-2 px-3 text-right text-sm text-nowrap">
                      $279.44<span>/ea</span>
                    </td>

                    <td className="py-2 px-3 text-right text-sm text-nowrap">
                      $279.44<span>/ea</span>
                    </td>
                    <td className="py-2 px-3 bg-primary-blue_xlight border-l border-monochromes-grey_xlight gap-2 sticky right-0 justify-center after:content-[''] after:absolute after:inset-0 after:border-l after:border-monochromes-grey_xlight">
                      <div className="flex flex-row gap-2 justify-center">
                        <button>
                          <i className="fa-solid fa-minus size-4 text-monochromes-grey p-1"></i>
                        </button>
                        <div className="relative flex flex-col max-w-[68px] w-[68px]">
                          <input
                            id="field"
                            type="number"
                            placeholder="0"
                            className="text-center max-w-[68px] border border-monochromes-grey_light hover:border-monochromes-main pl-4 pr-4 py-3.5 rounded text-sm focus:border-monochromes-grey_light focus:outline-dashed focus:outline-1 focus:outline-offset-4 focus:outline-black disabled:bg-off_white disabled:!border-[#e5e7eb] disabled:cursor-not-allowed hover:disabled:!border-[#e5e7eb] invalid:!border-error-red invalid:!text-error-red hover:invalid:!border-error-red focus:invalid:!border-error-red peer order-2 h-5"
                          />
                        </div>
                        <button>
                          <i className="fa-solid fa-plus size-4 text-monochromes-grey p-1"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex justify-end py-3 px-4 gap-4 items-center h-auto border-t max-h-fit">
          <p className="font-bold text-sm sm:text-base">
            Total: <span className="font-bold text-sm sm:text-base">$0.00</span>
          </p>
          <button className="py-2 px-2 md:px-5 h-10 rounded-full font-bold text-base cursor-pointer min-w-24 md:min-w-32 text-white bg-primary-blue hover:bg-[#186DF5] active:bg-blue-700 disabled:text-white disabled:cursor-not-allowed disabled:bg-gray-300 focus-visible:outline-dashed focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#424242]">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MscTableModal;
