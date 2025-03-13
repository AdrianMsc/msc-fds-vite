import { useState } from "react";
import ComponentLayout from "../../layout/ComponentLayout/ComponentLayout";
import Codeblock from "../../layout/Codeblock";

const MscDialogPage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState("");

  const toggleDialog = () => {
    setIsDialogOpen((prev) => (prev === "hidden" ? "" : "hidden"));
  };

  return (
    <ComponentLayout name="Dialog" category="Overlay" description="">
      <button
        id="dialogBtn"
        className="msc-btn msc-btn-blue-solid mb-4"
        onClick={toggleDialog}
      >
        Trigger Dialog
      </button>

      {isDialogOpen && (
        <div className={`msc-modal-bg ${toggleDialog}`}>
          <article className="msc-dialog">
            <h4 className="msc-dialog-title">Are you sure?</h4>
            <p>
              You are setting your status as Out of Office. Your organization
              will see this status until you turn it off.
            </p>
            <div className="msc-dialog-footer">
              <button
                className="msc-btn msc-btn-transparent"
                onClick={toggleDialog}
              >
                Cancel
              </button>
              <button className="msc-btn msc-btn-blue-solid">Continue</button>
            </div>
          </article>
        </div>
      )}
      <div className="py-2">
        <Codeblock>{`
  <article class="msc-dialog">
      <h4 class="msc-dialog-title">Are you sure?</h4>
      <p>
        You are setting your status as Out of Office. Your organization
        will see this status until you turn it off.
      </p>
      <div class="msc-dialog-footer">
        <button class="msc-btn msc-btn-transparent">Cancel</button>
  
        <button class="msc-btn msc-btn-blue-solid">Continue</button>
      </div>
    </article>
  </div>
  
  <button
    id="dialogBtn"
    class="msc-btn msc-btn-blue-solid mb-4"
    onclick="toggleDialog()"
  >
    Trigger Dialog
  </button>
        `}</Codeblock>
      </div>
    </ComponentLayout>
  );
};

export default MscDialogPage;
