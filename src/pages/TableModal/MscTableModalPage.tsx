import { useState } from "react";
import MscTableModal from "../../components/MscTableModal";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout";

const TableModalPage = () => {
  const [triggerModal, setTriggerModal] = useState("!hidden");

  const toggleModal = () => {
    setTriggerModal((prev) => (prev === "!hidden" ? "" : "!hidden"));
  };

  return (
    <ComponentLayout name="Table Modal" description="" category="Overlay">
      <button
        onClick={toggleModal}
        className="py-2 px-2 md:px-5 h-10 rounded-full font-bold text-base cursor-pointer min-w-24 md:min-w-32 text-white bg-primary-blue hover:bg-[#186DF5] active:bg-blue-700 disabled:text-white disabled:cursor-not-allowed disabled:bg-gray-300 focus-visible:outline-dashed focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-[#424242]"
      >
        Trigger Modal
      </button>
      <MscTableModal triggerModal={triggerModal} toggleModal={toggleModal} />
    </ComponentLayout>
  );
};

export default TableModalPage;
