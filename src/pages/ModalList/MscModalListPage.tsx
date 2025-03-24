import { useState } from "react";
import MscModalC from "../../components/MscMailListModal/MscModalC";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout";
import MscThanksModal from "../../components/MscMailListModal/MscThanksModal";
import MscModalB from "../../components/MscMailListModal/MscModalB";

const MscModalListPage = () => {
  const [triggerModalB, setTriggerModalB] = useState("!hidden");
  const [triggerModalC, setTriggerModalC] = useState("!hidden");
  const [triggerModal, setTriggerModal] = useState("!hidden");

  const toggleModalB = () => {
    setTriggerModalB((prev) => (prev === "!hidden" ? "" : "!hidden"));
  };
  const toggleModalC = () => {
    setTriggerModalC((prev) => (prev === "!hidden" ? "" : "!hidden"));
  };
  const toggleModal = () => {
    setTriggerModal((prev) => (prev === "!hidden" ? "" : "!hidden"));
  };

  return (
    <ComponentLayout>
      <button
        className="msc-btn msc-btn-blue-solid mr-4"
        onClick={toggleModalB}
      >
        Trigger Modal B
      </button>
      <button
        className="msc-btn msc-btn-blue-solid mr-4"
        onClick={toggleModalC}
      >
        Trigger Modal C
      </button>
      <button className="msc-btn msc-btn-blue-solid" onClick={toggleModal}>
        Trigger Thanks Modal
      </button>

      <MscModalB triggerModal={triggerModalB} toggleModal={toggleModalB} />
      <MscModalC triggerModal={triggerModalC} toggleModal={toggleModalC} />
      <MscThanksModal triggerModal={triggerModal} toggleModal={toggleModal} />
    </ComponentLayout>
  );
};

export default MscModalListPage;
